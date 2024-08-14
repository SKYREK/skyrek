import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, source, message } = body;

    // Set up the transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // You can use any email service
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'diwansachidu2000@gmail.com',
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSource: ${source}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error }, { status: 500 });
  }
}