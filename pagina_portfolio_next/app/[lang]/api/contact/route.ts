import { NextRequest, NextResponse } from "next/server";

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "Adrielsan",
  key: `${process.env.NEXT_PUBLIC_API_KEY}`,
});

const sendEmail = (
  to: string,
  from: string,
  subject: string,
  text: string,
  html: string
) => {
  let data = {
    to: [to],
    from,
    subject,
    text,
    html,
  };
  return mg.messages.create("adrielsan.social", data);
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await sendEmail(
      body.email,
      "Adriel Santana <no-reply@adrielsan.social>",
      body.subject,
      body.text,
      body.html
    );
    return NextResponse.json({ validate: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ validate: false });
  }
}
