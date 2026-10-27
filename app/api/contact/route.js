import { NextResponse } from "next/server";

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    let { name, email, subject, message } = body;

    // Type checking
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid payload types. Name, email, and message must be strings." },
        { status: 400 }
      );
    }

    name = name.trim();
    email = email.trim().toLowerCase();
    subject = typeof subject === "string" ? subject.trim().replace(/[\r\n]/g, " ") : "";
    message = message.trim();

    // Required fields check
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Maximum length validation (DoS / memory exhaustion protection)
    if (name.length > 100 || email.length > 150 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Payload exceeds acceptable length limits." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
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
          subject: subject ? `Contact: ${subject}` : `New Portfolio Message from ${name}`,
          reply_to: email,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #17191F; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; background: #FFFDF9;">
              <h2 style="color: #E03131; margin-top: 0; font-size: 20px;">New Portfolio Inquiry</h2>
              <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 16px 0;" />
              <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${escapeHtml(name)}</p>
              <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${escapeHtml(subject || "General Inquiry")}</p>
              <p style="margin: 16px 0 8px 0;"><strong>Message:</strong></p>
              <div style="white-space: pre-wrap; background: #F8FAFC; padding: 16px; border-radius: 8px; border: 1px solid #E2E8F0; font-size: 14px; line-height: 1.6;">${escapeHtml(message)}</div>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true, message: "Email sent via Resend" });
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        throw new Error("Failed to send email via Resend");
      }
    }

    // 2. Web3Forms Integration (Free setup)
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
          subject: subject ? `Contact: ${subject}` : `Portfolio message from ${name}`,
          message: message,
          from_name: "Mahaveer K Portfolio",
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true, message: "Email sent via Web3Forms" });
      } else {
        const errorData = await res.json().catch(() => ({}));
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

    // Add a small artificial delay to verify form sending states locally
    await new Promise((resolve) => setTimeout(resolve, 600));

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
