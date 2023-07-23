import { NextRequest, NextResponse } from "next/server";

import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, subject, text, html } = body

    resend.emails.send({
      from: 'Adriel Santana <no-reply@adrielsan.pro>',
      to: email,
      subject: subject,
      html: html,
      text: text
    });

    return NextResponse.json({ validate: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ validate: false });
  }
}
