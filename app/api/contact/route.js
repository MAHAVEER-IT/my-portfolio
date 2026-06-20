import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 1. Resend Integration (Recommended for Custom Domains)
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_TO) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL_TO,
          subject: subject || `New Contact Form Submission from ${name}`,
          reply_to: email,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #2563eb; margin-top: 0;">New Portfolio Contact</h2>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject || "N/A"}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">${message}</p>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true, message: "Email sent via Resend" });
      } else {
        const errorData = await res.json();
        console.error("Resend API error:", errorData);
        throw new Error("Failed to send email via Resend");
      }
    }

    // 2. Web3Forms Integration (Free, No-code setup)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          subject: subject || `Portfolio message from ${name}`,
          message: message,
          from_name: "Mahaveer K Portfolio",
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true, message: "Email sent via Web3Forms" });
      } else {
        const errorData = await res.json();
        console.error("Web3Forms API error:", errorData);
        throw new Error("Failed to send email via Web3Forms");
      }
    }

    // 3. Fallback: Log for Local Development
    console.log("=========================================");
    console.log("✉️ CONTACT FORM SUBMISSION (DEV FALLBACK)");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || "N/A"}`);
    console.log(`Message: ${message}`);
    console.log("=========================================");
    console.log("To enable production email delivery, set RESEND_API_KEY or WEB3FORMS_ACCESS_KEY in .env.local");

    // Add a small artificial delay to verify form sending states locally
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      message: "Message received (Development Fallback Mode)",
    });

  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to send message." },
      { status: 500 }
    );
  }
}
