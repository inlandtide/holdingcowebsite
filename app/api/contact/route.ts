import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple email regex for server-side validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API);

  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // ── 1. Validate required fields ──────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // ── 2. Attempt Google Sheets save (non-blocking) ──────────────────────────
    let sheetsFailed = false;
    let sheetsError = "";

    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;
    if (sheetsUrl) {
      try {
        const sheetsRes = await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone: phone || "", message }),
        });

        if (!sheetsRes.ok) {
          sheetsFailed = true;
          sheetsError = `HTTP ${sheetsRes.status}`;
        }
      } catch (err) {
        sheetsFailed = true;
        sheetsError = err instanceof Error ? err.message : "Unknown error";
      }
    } else {
      // No URL configured — treat as a soft failure so email still fires
      sheetsFailed = true;
      sheetsError = "GOOGLE_SHEETS_WEBAPP_URL is not configured.";
    }

    // ── 3. Always send notification email via Resend ──────────────────────────
    const subjectPrefix = sheetsFailed ? "⚠️ [SHEETS FAILED] " : "";
    const alertBanner = sheetsFailed
      ? `<div style="background:#7f1d1d;color:#fecaca;padding:12px 16px;border-radius:4px;margin-bottom:20px;font-family:sans-serif;">
           <strong>⚠️ Google Sheets sync failed.</strong><br/>
           Error: ${sheetsError}<br/>
           Please log this lead manually and check the integration immediately.
         </div>`
      : "";

    await resend.emails.send({
      from: "contact@mouldingstl.com",
      to: ["tim@inlandtide.com", "ryan@inlandtide.com"],
      replyTo: email,
      subject: `${subjectPrefix}New Contact Form Submission — Inland Tide Holdings`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8" /></head>
          <body style="font-family:Georgia,serif;background:#0B1A2B;color:#F5F1EA;padding:32px;max-width:600px;margin:0 auto;">
            ${alertBanner}
            <h2 style="color:#B4904E;font-weight:300;letter-spacing:0.05em;margin-bottom:4px;">
              New Message — Inland Tide Holdings
            </h2>
            <hr style="border:none;border-top:1px solid #132236;margin:16px 0;" />
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr>
                <td style="padding:8px 0;color:#8A9BAD;width:100px;vertical-align:top;">Name</td>
                <td style="padding:8px 0;color:#F5F1EA;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#8A9BAD;vertical-align:top;">Email</td>
                <td style="padding:8px 0;color:#F5F1EA;"><a href="mailto:${email}" style="color:#B4904E;">${email}</a></td>
              </tr>
              ${
                phone
                  ? `<tr>
                <td style="padding:8px 0;color:#8A9BAD;vertical-align:top;">Phone</td>
                <td style="padding:8px 0;color:#F5F1EA;">${phone}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding:8px 0;color:#8A9BAD;vertical-align:top;">Message</td>
                <td style="padding:8px 0;color:#F5F1EA;white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #132236;margin:24px 0;" />
            <p style="font-size:11px;color:#8A9BAD;text-align:center;">
              Inland Tide Holdings — Automated Contact Notification
            </p>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact/route] Unhandled error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
