# Henry's Portfolio — Eleventy + Netlify CMS starter

This repository contains a starter static portfolio using Eleventy (11ty) and Netlify CMS.

Quick start (local)
1. Install dependencies:
   ```
   npm install
   ```
2. Run local dev server:
   ```
   npm start
   ```
   This runs Eleventy in serve mode and the site will be available at http://localhost:8080 by default.

Content structure
- Content markdown lives under `src/projects/`, `src/pages/`, and `src/docs/`.
- Images uploaded via Netlify CMS are stored in `src/photos/` and are copied to `public/photos/` on build.
- Templates and layout are in `src/_includes/`.
- Static assets (CSS) are in `src/assets/`.

Deploy to Netlify
1. Push this repo to GitHub (or a Git provider).
2. In Netlify, click "New site from Git" → connect the repository.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
4. Deploy the site.

Enable Netlify CMS (admin panel)
1. In the Netlify dashboard for your site: go to "Site settings" → "Identity" → Enable Identity (toggle ON).
2. Still in Identity, under "Services" enable "Git Gateway". You may need to click "Enable Git Gateway" or configure a Git provider token (Netlify will guide you). This allows CMS users to commit to the repo via the Git Gateway.
3. Invite yourself (or any team member) under Identity → "Invite users" (enter your email). Accept the invite and set a password.
4. Visit `https://<your-netlify-site>/admin` — you should be able to log in and use the CMS to create/edit content and upload images.

Notes & next steps
- If you prefer not to use Eleventy, we can adapt the CMS config for Hugo, Jekyll, or another generator.
- If you want me to push these files directly to your GitHub repo and connect to Netlify for you, say "Yes, push to repo" and confirm the branch (default: `main`) — I will prepare the commit content for you.

What I did and what I recommend next
- I prepared a minimal Eleventy website with Netlify CMS configuration so you can edit content and upload photos through a friendly admin UI.
- Next steps for you:
  1. In Netlify, connect the repo and set the build command and publish directory as above.
  2. Enable Identity and Git Gateway in Netlify and invite yourself.
  3. Visit /admin to start adding content.

Please confirm deployment details or any field changes you'd like.
