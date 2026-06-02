# Prosun Mukherjee — Portfolio

A modern, responsive personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation with active section highlighting
- Sticky navbar with blur effect and mobile menu
- Animated hero with code-card visual
- About, Skills (grouped by category), Projects, Education, Contact sections
- Working contact form (opens user's mail client with prefilled message)
- Resume download button (drop your PDF at `public/resume.pdf`)
- Social links (GitHub, LinkedIn, Portfolio, Email)
- Back-to-top button + scroll progress bar
- Dark theme with gradient accents
- SEO-friendly metadata + OpenGraph

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/
│   ├── globals.css        # Tailwind base + custom utilities
│   ├── layout.tsx         # Root layout with fonts + metadata
│   └── page.tsx           # Home page composing all sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── BackToTop.tsx
│   └── ScrollProgress.tsx
├── lib/
│   └── data.ts            # Centralized content (name, skills, projects...)
├── public/
│   └── resume.pdf         # Replace with your own resume PDF
└── package.json
```

## Customization

All content lives in **`lib/data.ts`** — update your name, email, social links,
skills, projects, and education there.

**Current social links configured:**
- GitHub: https://github.com/Prosunsajal4
- LinkedIn: https://www.linkedin.com/in/prosun-mukherjee-sajal/
- Portfolio: https://prosunsajal4.github.io/
- Facebook: https://www.facebook.com/sajalprosun
- Instagram: https://www.instagram.com/prosun_mukherjee_sajal

To change the resume link, replace `public/resume.pdf` with your own file
(keep the same filename).

## Deployment

### Deploy to Vercel (recommended)

The fastest way — Vercel is built by the Next.js team.

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Your site will be live at `https://<project>.vercel.app`.

You can also use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push the repo to GitHub (same as above).
2. Go to [app.netlify.com](https://app.netlify.com) and click **Add new site → Import an existing project**.
3. Connect to GitHub and pick the repo.
4. Netlify should auto-detect the settings. If not, set:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **Deploy site**.

Alternatively, use the Netlify CLI:
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod
```

## License

MIT — feel free to use this as a template for your own portfolio.
