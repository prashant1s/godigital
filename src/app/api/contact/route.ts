// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Send the email
    const data = await resend.emails.send({
      // IMPORTANT: Resend requires a verified domain to send FROM. 
      // While testing, you can use their testing email: 'onboarding@resend.dev'RESEND_API_KEY="re_QZzWPn4d_4T2XZ4Lwd8jsBKzpjpdh4efc"
      from: 'Acme <onboarding@resend.dev>', 
      // Deliver the email TO yourself
      to: ['prashantextra2003@gmail.com'], // <--- CHANGE THIS TO YOUR ACTUAL EMAIL
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
