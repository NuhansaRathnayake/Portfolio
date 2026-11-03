# Content checklist before sharing the portfolio

The site builds and every section is in place. Some content is a template for you to fill in.

## Files to add (put them in the `public/` folder)

- [ ] **Photo:** `public/me.jpg` (also accepted: `me.jpeg`, `me.png`, `me.webp`). Portrait, about 4:5, at least 640 x 800 px. Until you add it, a "NR" monogram shows.
- [ ] **CV:** `public/Nuhansa-Rathnayake-CV.pdf`. Until you add it, the "Download CV" button shows greyed out.

Both are detected automatically at build time. No code change is needed.

## Sample entries to replace (`src/data/profile.ts`)

Entries marked `sample: true` show a "Sample" tag on the site. Replace the text with your real details, then delete the `sample: true` line.

- [ ] **Leadership** (`leadership`): society or club roles, group project lead
- [ ] **Events** (`events`): hackathons, workshops, events you organised
- [ ] **Certifications** (`certifications`): change "Planned" to "In progress" or "Completed" where true, and remove any you are not pursuing
- [ ] **Skills and tools** (`skillGroups`): keep only what you can discuss in an interview
- [ ] **Coursework** (`coursework`): replace with your actual modules

## Case studies (`src/content/projects/`)

- [ ] All three are labelled "Self-initiated" and use fictional organisations. Keep them if they are your own work, and read the "Challenges" and "Lessons" sections to make sure they match your experience.
- [ ] Add your real university or team projects as new files and set `order` so the strongest comes first.

## Contact form

- [ ] Create a free access key at web3forms.com and set `PUBLIC_WEB3FORMS_KEY` in Vercel (Project Settings > Environment Variables), then redeploy. Without it, the form opens the visitor's email app instead.

## Quality checks

- [ ] Add alt text to any images you add.
- [ ] Run Lighthouse in Chrome on the deployed site.
- [ ] Check that no document you add contains real company names, personal details or credentials.
