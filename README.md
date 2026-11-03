# Nuhansa Rathnayake: portfolio

Personal portfolio for an IT project management role with a governance, risk and compliance (GRC) focus.
It follows the structure in the Portfolio Content Guide: About, Projects, GRC, Skills, Certifications, Contact.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) (static output) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Content | Markdown and MDX files |
| UI | Lucide icons, Geist font, dark mode |
| Motion | CSS only, one load animation, reduced motion respected |
| Hosting | Vercel (or Netlify), deployed from GitHub |
| Contact form | Web3Forms, with an email fallback |
| Analytics | Plausible (optional) |

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Where to edit things

| To change | Edit |
| --- | --- |
| Name, degree, email, LinkedIn, CV link, photo | `src/config/site.ts` |
| Skills, certifications, coursework, experience, awards | `src/data/profile.ts` |
| Case studies | `src/content/projects/*.mdx` (one file per project) |
| Policies, compliance summaries, articles | `src/content/grc/*.md` |
| Risk registers, RACI, WBS, control mapping | `src/data/artifacts.ts` |
| Colours and type scale | `src/styles/global.css` |

To add a case study, copy an existing `.mdx` file in `src/content/projects/`, change the front matter and write each section under the same headings.
Anything you add under `public/` (a CV PDF, a photo, screenshots of artifacts) is served from the site root.

Before publishing, work through [CONTENT_TODO.md](./CONTENT_TODO.md).

## Deploy

1. Push this repo to GitHub.
2. In Vercel, choose **Add New > Project**, import the repo and keep the detected Astro settings.
3. Add the environment variables from `.env.example` (at least `PUBLIC_WEB3FORMS_KEY` for the contact form).
4. Set `site` in `astro.config.mjs` and `url` in `src/config/site.ts` to your final domain, then point your `.me` domain at the project in Vercel.

Every push to `main` redeploys automatically.

## Privacy

Never commit real company data, credentials or private documents. All sample artifacts here use fictional organisations.
