// Single place for personal details. Edit the values below; every page reads from here.
// Items marked EDIT are placeholders. See CONTENT_TODO.md for the full checklist.

export const site = {
  name: 'Nuhansa Rathnayake',
  shortName: 'Nuhansa',
  initials: 'NR',
  title: 'Nuhansa Rathnayake | IT Project Management & GRC',
  description:
    'Graduate IT project coordinator with a growing focus on governance, risk and compliance. Case studies, project artifacts and GRC samples.',
  url: 'https://nuhansa.me', // EDIT once your domain is connected

  // EDIT: degree and graduation details
  degree: 'BSc (Hons) in Information Technology',
  university: 'Your university',
  graduation: 'Expected 2027',

  lookingFor: 'Internship or graduate role in IT project coordination, PMO, or risk and compliance',
  location: 'Sri Lanka',

  email: 'you@example.com', // EDIT
  github: 'https://github.com/NuhansaRathnayake',
  linkedin: 'https://www.linkedin.com/in/your-handle', // EDIT
  cvUrl: null as string | null, // EDIT: e.g. '/Nuhansa-Rathnayake-CV.pdf' after adding the file to /public
  photo: null as string | null, // EDIT: e.g. '/me.jpg' after adding the file to /public
};

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'GRC', href: '/grc/' },
  { label: 'Skills', href: '/skills/' },
  { label: 'Certifications', href: '/skills/#certifications' },
  { label: 'Contact', href: '/contact/' },
];
