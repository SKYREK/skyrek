import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, email, phone, attachments } = body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use your own email service
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'diwansachidu2000@gmail.com',
    subject: 'New Application Received',
    text: `
      New Application Received:
      First Name: ${firstName}
      Last Name: ${lastName}
      Email Address: ${email}
      Mobile Number: ${phone}
      Attachment Links: ${attachments.join(', ')}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
  }
}