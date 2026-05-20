# Inland Tide Holdings — Website

Welcome to the repository for the Inland Tide Holdings website. This document provides architectural context, integration details, page structure, and environment variable requirements for developers or AI agents working on this project in the future.

## Instructions for AI Agents & Developers

Please follow these rules on every contribution:

1. **Update the Changelog before every push.** Before committing and pushing any changes, open `CHANGELOG.md` and add a short summary of what was changed, added, or fixed under a new dated entry. This keeps a human-readable history of the project that any future agent or developer can rely on.
2. **All images must be committed directly to this repository.** Do not upload images to any external CDN, including Manus's built-in CDN, Cloudinary, or similar services. All image files must be placed in the `/public` directory and committed to GitHub. This ensures images remain under version control, are served directly by Vercel, and are never lost if a third-party CDN account changes or expires.

## Architecture & Infrastructure

This project is built using modern, serverless web technologies designed for high performance and zero-maintenance scaling.

* **Framework:** Next.js 16 using the App Router.
* **Language:** TypeScript.
* **Styling:** Tailwind CSS v4 plus raw CSS variables in `app/globals.css`.
* **Fonts:** Cormorant Garamond for headlines and default serif fallbacks for body text.
* **Hosting:** Vercel.
* **Deployment:** Continuous deployment is configured. Any push to the `main` branch on GitHub automatically triggers a build and deployment on Vercel.

## Site Structure

Currently, the site is a single "Coming Soon" landing page designed to capture contact information while the full holding company site is being planned.

| Page | Route | Purpose |
| :--- | :--- | :--- |
| Home | `/` | Minimalist landing page with branding and a contact form. |

## Integrations & Data Flow

The contact form uses a secure Next.js serverless API route at `app/api/contact/route.ts`. The form gathers customer details and sends them to both Google Sheets and an email notification list.

The execution order on every form submission is:

1. **Validate** — Server validates that name, email, and message are present and that the email address is well formed.
2. **Attempt Google Sheets save** — The backend tries to POST the lead to Google Sheets. This step is non-blocking: if it fails for any reason, execution continues and the failure is noted internally.
3. **Always send notification email** — The Resend email fires regardless of whether Google Sheets succeeded. If Sheets failed, the email subject is prefixed with `⚠️ [SHEETS FAILED]` and a red alert banner is injected at the top of the email body, prompting the team to check the integration immediately.

This design guarantees that no inbound lead is silently lost due to a Sheets outage.

### Google Sheets Integration

Form data is sent to a Google Apps Script Webhook as a JSON POST request.

* **Payload keys:** `name`, `email`, `phone`, `message`.
* **Requirement:** The Apps Script must be deployed with "Execute as: Me" and "Who has access: Anyone" — otherwise Vercel's server-to-server request will receive a 403.

### Email Notifications Using Resend

The Resend Node.js SDK sends a transactional notification email to the team after every valid submission.

* **From Address:** `contact@mouldingstl.com` (Shared account across Inland Tide properties).
* **To Addresses:** `tim@inlandtide.com`, `ryan@inlandtide.com`.
* **Reply-To:** The visitor's submitted email address, so the team can reply directly from their inbox.

## Environment Variables

The following environment variables must be configured in Vercel, or locally in a `.env.local` file, for the backend to function correctly:

| Variable Name | Description |
| :--- | :--- |
| `RESEND_API` | API key for the Resend account. Used to authenticate the Resend Node.js SDK. |
| `GOOGLE_SHEETS_WEBAPP_URL` | Full URL of the deployed Google Apps Script Webhook. |

## Getting Started Locally

If you are an AI or developer picking up this project:

1. Clone the repository:
   ```bash
   git clone https://github.com/inlandtide/holdingcowebsite.git
   cd holdingcowebsite
   ```
2. Install dependencies (the project uses `pnpm`):
   ```bash
   pnpm install
   ```
3. Set up environment variables: Create a `.env.local` file in the root directory and add the required variables listed above (see `.env.local.example`).
4. Run the development server:
   ```bash
   pnpm dev
   ```
5. View the site: Open `http://localhost:3000` in your browser.
