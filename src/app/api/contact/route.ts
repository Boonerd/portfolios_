// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['your-email@gmail.com'],
      subject: `New message from ${name}`,
      text: `${message}\n\nFrom: ${email}`,
    });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Failed' }, { status: 500 });
  }
}