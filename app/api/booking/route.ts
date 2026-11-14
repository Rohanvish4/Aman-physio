import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const bookingEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[character] || character);
}

async function sendBookingNotification({
  name,
  phone,
  address,
  condition,
  message,
}: {
  name: string;
  phone: string;
  address?: string;
  condition: string;
  message?: string;
}) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const configuredFrom = process.env.SMTP_FROM || user;
  const fromAddress = configuredFrom?.toLowerCase() === user?.toLowerCase()
    ? configuredFrom
    : user;
  const fromName = process.env.SMTP_FROM_NAME || 'Urmila PhysioCare';

  if (!bookingEmail || !host || !user || !password || !fromAddress) {
    console.warn('Booking email notification is not configured.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass: password },
  });

  const submittedAt = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  }).format(new Date());
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeCondition = escapeHtml(condition);
  const safeAddress = escapeHtml(address || 'Not provided');
  const safeMessage = escapeHtml(message || 'None');

  await transporter.sendMail({
    from: { name: fromName, address: fromAddress },
    envelope: { from: user, to: bookingEmail },
    to: bookingEmail,
    replyTo: fromAddress,
    subject: 'Appointment request received - Urmila PhysioCare',
    text: [
      'Hello,',
      '',
      'A patient submitted an appointment request through the Urmila PhysioCare website.',
      '',
      'Patient details',
      '---------------',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Requested service: ${condition}`,
      `Home visit address: ${address || 'Not provided'}`,
      `Additional information: ${message || 'Not provided'}`,
      `Received: ${submittedAt}`,
      '',
      'Please contact the patient to confirm availability and appointment timing.',
      '',
      'This is an automated notification from the Urmila PhysioCare appointment form.',
    ].join('\n'),
    html: `
      <p>Hello,</p>
      <p>A patient submitted an appointment request through the Urmila PhysioCare website.</p>
      <h2 style="font-size: 18px; margin: 24px 0 10px;">Patient details</h2>
      <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse;">
        <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
        <tr><td><strong>Requested service</strong></td><td>${safeCondition}</td></tr>
        <tr><td><strong>Home visit address</strong></td><td>${safeAddress}</td></tr>
        <tr><td><strong>Additional information</strong></td><td>${safeMessage}</td></tr>
        <tr><td><strong>Received</strong></td><td>${submittedAt}</td></tr>
      </table>
      <p style="margin-top: 24px;">Please contact the patient to confirm availability and appointment timing.</p>
      <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
        This is an automated notification from the Urmila PhysioCare appointment form.
      </p>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, address, condition, message } = body;

    // Validate required fields
    if (!name || !phone || !condition) {
      return NextResponse.json(
        { error: 'Name, phone, and condition are required.' },
        { status: 400 }
      );
    }

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxmKKOqzGhRRdb9t4cg-wTDL7vxwMzSDOrrrhtfMPyWtHgMroSERZHCGLLRhNNGWFyDgw/exec';
    
    // Post to Google Apps Script Webhook
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify({
        name,
        phone,
        address,
        condition,
        message
      })
    });

    const resultText = await response.text();
    
    if (resultText === 'Success' || response.ok) {
        try {
          await sendBookingNotification({ name, phone, address, condition, message });
        } catch (error) {
          // Keep the booking successful if the optional notification provider is unavailable.
          console.error('Booking email notification error:', error);
        }
        return NextResponse.json({ success: true });
    } else {
        console.error('Google Sheets Script Error:', resultText);
        throw new Error('Google Sheets submission failed');
    }
  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request.' },
      { status: 500 }
    );
  }
}
