import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

// Configure SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone = '', investmentInterest } = body;

    // Get Thailand time
    const thailandTime = toZonedTime(new Date(), 'Asia/Bangkok');
    const formattedDate = format(thailandTime, 'MMMM dd, yyyy HH:mm:ss (O)');

    if (!process.env.SMTP_USER || !process.env.ADMIN_EMAIL) {
      throw new Error('Email configuration is missing');
    }

    // Send email notification
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p>Received on: ${formattedDate}</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 20px 0; border: 1px solid #ddd;">
        <tr style="background-color: #f8f9fa;">
          <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Field</th>
          <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Value</th>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;">Full Name</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;">Email</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;">Phone</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd;">Interest Area</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${investmentInterest}</td>
        </tr>
      </table>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission - SPH',
      html: emailHtml,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}