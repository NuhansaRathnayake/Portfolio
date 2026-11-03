# Content checklist before publishing

The site is complete and builds, but some content is placeholder or drafted on your behalf.
Replace or confirm each item below.

## Placeholders to replace (`src/config/site.ts`)

- [ ] `university`: currently "Your university"
- [ ] `degree` and `graduation`: confirm they match your programme
- [ ] `email`: currently `you@example.com`
- [ ] `linkedin`: currently a placeholder URL
- [ ] `cvUrl`: add your CV PDF to `public/` and set the path (the CV button stays hidden until you do)
- [ ] `photo`: add a professional photo to `public/` and set the path (a monogram shows until then)
- [ ] `url` and `site` in `astro.config.mjs`: set to your real domain

## Content written as drafts

- [ ] **Case studies** (`src/content/projects/`): all three are labelled "Self-initiated" and use fictional organisations. Keep them if they are your own work, but read the "Challenges" and "Lessons" sections and make sure they match your real experience. Add your real university or team projects as new files, and set `order` so the strongest comes first.
- [ ] **Certifications** (`src/data/profile.ts`): all four are marked "Planned". Change the status to "In progress" or "Completed" where true, and remove any you are not pursuing.
- [ ] **Tools and skills** (`src/data/profile.ts`): keep only what you can discuss in an interview.
- [ ] **Coursework**: replace with your actual modules.
- [ ] **Experience, leadership, awards**: empty lists hide those sections. Fill in internships, society roles and competitions.
- [ ] **Soft skills evidence**: update each line so it points to your real examples.

## Contact form

- [ ] Create a free access key at web3forms.com and set `PUBLIC_WEB3FORMS_KEY` in Vercel. Without it, the form opens the visitor's email app instead.

## Quality checks

- [ ] Add alt text to any images you add.
- [ ] Run Lighthouse in Chrome on the deployed site.
- [ ] Check that no document you add contains real company names, personal details or credentials.
