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
  const from = process.env.SMTP_FROM || user;

  if (!bookingEmail || !host || !user || !password || !from) {
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
  const phoneDigits = phone.replace(/\D/g, '');

  await transporter.sendMail({
    from,
    to: bookingEmail,
    replyTo: from,
    subject: 'New appointment request',
    text: [
      'New appointment request',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Condition: ${condition}`,
      `Address: ${address || 'Not provided'}`,
      `Additional details: ${message || 'None'}`,
      `Submitted: ${submittedAt}`,
      '',
      `Call patient: tel:+91${phoneDigits}`,
      `WhatsApp patient: https://wa.me/91${phoneDigits}`,
    ].join('\n'),
    html: `
      <h2>New appointment request</h2>
      <p><strong>Submitted:</strong> ${submittedAt}</p>
      <table cellpadding="8" cellspacing="0" border="0">
        <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
        <tr><td><strong>Condition</strong></td><td>${safeCondition}</td></tr>
        <tr><td><strong>Address</strong></td><td>${safeAddress}</td></tr>
        <tr><td><strong>Additional details</strong></td><td>${safeMessage}</td></tr>
      </table>
      <p>
        <a href="tel:+91${phoneDigits}">Call patient</a>
        &nbsp;|&nbsp;
        <a href="https://wa.me/91${phoneDigits}">Message on WhatsApp</a>
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
