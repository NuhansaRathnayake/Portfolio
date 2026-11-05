// Single place for personal details. Edit the values below; every page reads from here.
// See CONTENT_TODO.md for the full checklist.
import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Drop files into /public and they are picked up automatically at build time:
//   Photo: me.jpg (or me.jpeg / me.png / me.webp)
//   CV:    Nuhansa-Rathnayake-CV.pdf
const inPublic = (file: string) => existsSync(join(process.cwd(), 'public', file));
const photoFile = ['me.jpg', 'me.jpeg', 'me.png', 'me.webp'].find(inPublic);
const cvFile = 'Nuhansa-Rathnayake-CV.pdf';

export const site = {
  name: 'Nuhansa Rathnayake',
  shortName: 'Nuhansa',
  initials: 'NR',
  title: 'Nuhansa Rathnayake | IT Project Management & GRC',
  description:
    'Graduate IT project coordinator with a growing focus on governance, risk and compliance. Case studies, project artifacts and GRC samples.',
  url: 'https://portfolio-mu-six-0m6cibw0k0.vercel.app', // EDIT once your domain is connected

  degree: 'BSc. Information Technology',
  university: 'Rajarata University of Sri Lanka',

  lookingFor: 'Internship or graduate role in IT project coordination, PMO, or risk and compliance',
  location: 'Sri Lanka',

  email: 'nuhansarathnayake08@gmail.com',
  github: 'https://github.com/NuhansaRathnayake',
  linkedin: 'https://www.linkedin.com/in/nuhansa-rathnayake',

  cvUrl: inPublic(cvFile) ? `/${cvFile}` : (null as string | null),
  photo: photoFile ? `/${photoFile}` : (null as string | null),

  // Rotating lines under the name on the landing page
  roles: ['Aspiring IT Project Manager', 'GRC Enthusiast', 'Risk and Compliance Learner', 'Agile and Scrum Student'],
};

// `key` links each item to its icon and to the section it highlights while you scroll.
export const nav = [
  { key: 'home', label: 'Home', href: '/#top' },
  { key: 'about', label: 'About', href: '/#about' },
  { key: 'education', label: 'Education', href: '/#education' },
  { key: 'projects', label: 'Projects', href: '/#projects' },
  { key: 'leadership', label: 'Leadership', href: '/#leadership' },
  { key: 'events', label: 'Events', href: '/#events' },
  { key: 'grc', label: 'GRC', href: '/grc/' },
  { key: 'contact', label: 'Contact', href: '/#contact' },
];
