import { NextResponse } from 'next/server';
import SibApiV3Sdk from 'sib-api-v3-sdk';
import nodemailer from 'nodemailer';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

if (!process.env.BREVO_API_KEY) {
  throw new Error('BREVO_API_KEY is not defined');
}

// Initialize Brevo API client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;
const apiInstance = new SibApiV3Sdk.ContactsApi();

// Configure SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone = '', investmentInterest } = body;

    // Add contact to Brevo list
    const createContact = {
      email,
      attributes: {
        FIRSTNAME: fullName.split(' ')[0],
        LASTNAME: fullName.split(' ').slice(1).join(' '),
        PHONE: phone,
        INTEREST: investmentInterest,
      },
      listIds: [11],
    } as SibApiV3Sdk.CreateContact;

    await apiInstance.createContact(createContact);

    // Get Thailand time
    const thailandTime = toZonedTime(new Date(), 'Asia/Bangkok');
    const formattedDate = format(thailandTime, 'MMMM dd, yyyy HH:mm:ss (O)');

    if (!process.env.BREVO_FROM_EMAIL || !process.env.ADMIN_EMAIL) {
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
      from: process.env.BREVO_FROM_EMAIL,
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