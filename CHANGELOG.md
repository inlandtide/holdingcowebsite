# Changelog

All notable changes to this project will be documented in this file.

## [2026-05-21]
### Added
- Added the uploaded inverted favicon-style Inland Tide mark as the menu bar logo asset.
- Added “Acquisitions | Advisory | Venture” directly beneath the homepage hero logo.
- Built the full Inland Tide Holdings website with homepage, about page, and portfolio page.
- Added approved Inland Tide logo assets from the uploaded brand package under `/public/brand`.
- Added shared site chrome, contact form, brand-aligned styling, and partner/portfolio content.
- Added the uploaded Inland Tide hero artwork to `/public/brand` for the homepage hero.

### Changed
- Added a homepage-only rounded-edge design variation for the hero logo area, Acquisitions / Advisory / Venture band, acquisition cards, opportunity panel, and contact panel.
- Reduced the homepage hero vertical padding above the arch and below “Built in St. Louis” by approximately 25%.
- Updated the menu bar to use the uploaded favicon-style Inland Tide mark instead of the full wordmark.
- Removed the gold border framing around the homepage hero logo while keeping the logo-focused hero and Acquisitions, Advisory, Venture band.
- Removed the hero text block and made the framed Inland Tide logo card the full hero focus while keeping the Acquisitions, Advisory, Venture band below it.
- Restored the original two-column homepage hero approach with a left-side content block and right-side framed logo card.
- Removed the failed tight hero logo asset and returned the hero card to the approved inverted logo artwork.
- Increased the desktop homepage hero logo scale so the full-color Inland Tide mark appears much larger above the Acquisitions, Advisory, Venture band.
- Inverted the homepage menu and hero to a white background, switched to the full-color logo, and kept the Acquisitions, Advisory, Venture band format.
- Restored the homepage hero logo to the original full-website-build intrinsic dimensions while keeping the larger hero presentation and the Acquisitions, Advisory, Venture transition band.
- Enlarged the Inland Tide logo in the homepage hero.
- Moved “Acquisitions | Advisory | Venture” into a Moulding STL-inspired dark transition band with gold diamond markers and divided columns.
- Reverted the last two hero transition experiments, restoring the standard hero-to-light-section break with the tagline directly beneath the hero logo.
- Reverted the previous hero transition cleanup, restoring “Acquisitions | Advisory | Venture” directly beneath the hero logo.
- Switched the homepage hero back to the Inland Navy blue background, used the dark-background logo version, and kept the “Acquisitions | Advisory | Venture” tagline.
- Tested a reverse-color homepage hero treatment using the full-color logo on a light hero background while keeping the menu blue.
- Replaced the homepage above-the-fold hero with a minimal main full-logo-only hero beneath the menu.
- Updated the homepage hero to feature the uploaded Inland Tide artwork as the primary hero visual.
- Refocused homepage, about, portfolio, metadata, footer, and README language around manufacturing, construction, and seafood acquisition opportunities.
- Updated metadata and README site structure to reflect the completed multi-page website.
- Removed the previous "hello world" connector test from the rendered site.

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
