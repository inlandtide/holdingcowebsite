# Changelog

All notable changes to this project will be documented in this file.

## [2026-05-20]
### Added
- Initial project scaffolding using Next.js 16 (App Router), Tailwind CSS v4, and TypeScript.
- Created a "Coming Soon" landing page for Inland Tide Holdings.
- Added a functional contact form with client-side state management.
- Implemented `app/api/contact/route.ts` to handle form submissions.
- Added Resend integration for sending transactional notification emails to `tim@inlandtide.com` and `ryan@inlandtide.com`.
- Added Google Sheets integration for saving lead data (non-blocking fallback design).
- Added `README.md` with architectural context, integrations, and instructions for future AI agents/developers.
- Added `.env.local.example` for local development setup.
