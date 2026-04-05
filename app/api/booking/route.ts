import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Create transporter — uses Gmail SMTP
    // For production, set SMTP_USER and SMTP_PASS environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'rohannic111@gmail.com',
        pass: process.env.SMTP_PASS || '',
      },
    });

    const mailOptions = {
      from: `"Urmila Physio Website" <${process.env.SMTP_USER || 'rohannic111@gmail.com'}>`,
      to: 'rohannic111@gmail.com',
      subject: `New Booking Request — ${name}`,
      text: [
        `New appointment request from the website:`,
        ``,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Address: ${address || 'Not provided'}`,
        `Condition: ${condition}`,
        `Additional Details: ${message || 'None'}`,
        ``,
        `---`,
        `Sent from Urmila Physiotherapy website`,
      ].join('\n'),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1F2937; margin-bottom: 4px;">New Booking Request</h2>
          <p style="color: #6B7280; margin-top: 0;">From the Urmila Physiotherapy website</p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6B7280; width: 120px;">Name</td><td style="padding: 8px 0; color: #1F2937; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Phone</td><td style="padding: 8px 0; color: #1F2937; font-weight: 600;"><a href="tel:${phone}" style="color: #7C3AED;">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Address</td><td style="padding: 8px 0; color: #1F2937;">${address || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B7280;">Condition</td><td style="padding: 8px 0; color: #1F2937; font-weight: 600;">${condition}</td></tr>
            ${message ? `<tr><td style="padding: 8px 0; color: #6B7280; vertical-align: top;">Details</td><td style="padding: 8px 0; color: #1F2937;">${message}</td></tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
          <p style="color: #9CA3AF; font-size: 12px; margin: 0;">This email was sent from the booking form at urmilaphysio.com</p>
        </div>
      `,
    };

    // If SMTP credentials are configured, send email
    if (process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request.' },
      { status: 500 }
    );
  }
}
