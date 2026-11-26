# ORBIO ASSIST

Website for ORBIO ASSIST, a virtual assistant and business support brand operated by ORBIO LTD (Company No. 17473713, ICO ZC298303).

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole website (HTML, CSS and JavaScript in one file) |
| `favicon.svg`, `site.webmanifest` | Browser icon and basic site details |
| `privacy-policy.html`, `data-protection.html`, `complaints.html`, `cookie-policy.html`, `terms.html` | Legal pages linked from the footer (drafts: please have them reviewed) |
| `404.html` | Page shown for unknown addresses |
| `robots.txt`, `sitemap.xml` | Search engine files (see step 3 below) |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |
| `vercel.json` | Optional settings if you host on Vercel |
| `.well-known/security.txt` | Security contact |
| `assets/` | Images used on the site (`live-monitoring.jpg`) |

## Settings (inside `index.html`)

Search for `Settings` near the top of the script. You can change:

- `WEB3FORMS_KEY`: Web3Forms access key for the proposal form
- `CONTACT_EMAIL` and `SUPPORT_EMAIL`: shown on the site
- `PHONE_DISPLAY`, `PHONE_TEL`, `LANDLINE_DISPLAY`, `LANDLINE_TEL`, `WHATSAPP_NUMBER`
- `ORBIO_SITE`: link for the "View Orbio Site" button
- `REVIEWS`: client reviews

## Deploying on GitHub Pages

1. Create a repository and upload every file from this folder (keep the folder structure).
2. Go to Settings, Pages, choose the `main` branch and the root folder, then Save.
3. When your live address is ready, replace `YOUR-DOMAIN` in `sitemap.xml` and `robots.txt`.
4. For a custom domain, add a `CNAME` file containing only the domain name, for example `assist.example.co.uk`.

## Deploying on Vercel

Import the repository and deploy. No build settings are needed.

## Before going live

- Send a test proposal from the live site and check it arrives in the inbox (check spam too).
- If you use allowed domains in Web3Forms, add the live domain there.

(c) ORBIO LTD. All rights reserved.
