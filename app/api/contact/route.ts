import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "smithjamesoliver1109@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, from, message, company } = await request.json();

    // Honeypot: bots fill hidden fields, real visitors leave it blank.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !from || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in every field." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: from,
      subject: `Portfolio inquiry from ${name}`,
      text: `${message}\n\n— ${name} (${from})`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send the message. Try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Try again shortly." },
      { status: 500 }
    );
  }
}
