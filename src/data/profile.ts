// Personal content that is not a case study. Edit freely; pages hide any section whose list is empty.
// Entries marked `sample: true` are templates: they show a "Sample" tag on the site.
// Replace them with your real details, then delete the `sample: true` line.

export const skillGroups = [
  { group: 'Project management', items: ['Agile and Scrum', 'Waterfall', 'Risk management', 'Stakeholder management', 'Scheduling and WBS'] },
  { group: 'Tools', items: ['Jira', 'Trello', 'Microsoft Project', 'Excel', 'Notion', 'Confluence', 'Miro'] },
  { group: 'GRC and security basics', items: ['ISO/IEC 27001', 'NIST CSF 2.0', 'Risk assessment methods', 'Basic audit concepts'] },
];

// Soft skills are backed by something you can point to in the case studies.
export const softSkills = [
  { skill: 'Communication', evidence: 'Wrote the communication plan and stakeholder register for the rollout in Case study 1.', href: '/projects/student-records-rollout/' },
  { skill: 'Negotiation', evidence: 'Set milestone-based payment terms with the vendor to manage delivery risk.', href: '/projects/student-records-rollout/' },
  { skill: 'Time management', evidence: 'Built a 20-week schedule with a two-week buffer before go-live.', href: '/projects/student-records-rollout/' },
  { skill: 'Leadership', evidence: 'Prioritised a gap-closing roadmap so a 12-person studio could act on it without a security team.', href: '/projects/studio-security-gap-analysis/' },
];

export const approach = [
  { title: 'Name the risks early', body: 'A risk register goes in the first week and gets reviewed at every status meeting. A risk written down can be owned; one left unspoken usually gets found by someone else.' },
  { title: 'Make scope changes visible', body: 'Every change request records what it costs in time, money and risk before anyone agrees to it. Nothing is added quietly.' },
  { title: 'Report status in plain words', body: 'Status reports say what is on track, what is not, why, and what decision is needed. A red or amber rating always comes with a reason.' },
  { title: 'Close with lessons learned', body: 'Every project ends with a short review of what worked and what to change, written down so the next team can use it.' },
];

export const education: { degree: string; school: string; period: string; tag: string; note?: string }[] = [
  {
    degree: 'BSc. Information Technology',
    school: 'Rajarata University of Sri Lanka',
    period: '2022 - Present',
    tag: 'University',
    note: 'Focus on project management, information security and systems analysis.',
  },
  { degree: 'G.C.E. Advanced Level', school: 'Pushpadana Girls\u2019 College, Kandy', period: '2021', tag: 'Advanced Level' },
  { degree: 'G.C.E. Ordinary Level', school: 'Viharamahadevi Girls\u2019 College, Kandy', period: '2018', tag: 'Ordinary Level' },
];

export const coursework = ['Project management', 'Information security', 'Systems analysis and design', 'Database systems', 'Software engineering'];

// Certifications from the CV. Paste each credential link into `url`; the button stays inactive until a link is set.
export const certifications: { name: string; issuer: string; url?: string; logo?: string; date?: string }[] = [
  { name: 'Cybersecurity Foundations: GRC', issuer: 'LinkedIn Learning', logo: 'issuer-linkedin', date: 'Sep 2026', url: '/certificates/cybersecurity-foundations-grc.pdf' },
  { name: 'Foundations of Project Management', issuer: 'Google | Coursera', logo: 'issuer-google', date: 'Dec 2025', url: '/certificates/foundations-of-project-management-google.pdf' },
  { name: 'Leveraging AI for Governance, Risk & Compliance', issuer: 'LinkedIn Learning', logo: 'issuer-linkedin', date: 'Sep 2026', url: '/certificates/leveraging-ai-grc.pdf' },
  { name: 'Project Management Foundations', issuer: 'LinkedIn Learning', logo: 'issuer-linkedin', date: 'Nov 2026', url: '/certificates/project-management-foundations.pdf' },
  { name: 'Build a Product Management Plan Framework in Trello', issuer: 'Coursera Project Network', date: 'Oct 2026', url: '/certificates/trello-product-management-plan.pdf' },
  { name: 'GRC - Complete Practitioner Course', issuer: 'Red Team Leaders', url: '' },
];

// Positions held in societies and clubs (from the CV).
export const positions: { role: string; org: string; period: string; current?: boolean }[] = [
  { role: 'Program Team Lead', org: 'IEEE Student Branch, Rajarata University of Sri Lanka', period: 'Feb 2026 - Present', current: true },
  { role: 'Executive Committee Member', org: 'Association of Rajarata ICT (ARICT)', period: '2024 - Present', current: true },
  { role: 'Program Team Member', org: 'IEEE WIE, Rajarata University of Sri Lanka', period: '2025 - Present', current: true },
  { role: 'Secretary', org: 'Microsoft Student Learning Club, Rajarata University of Sri Lanka', period: 'Jun 2025 - Oct 2025' },
];

// Events where I held a leadership role. Add more entries here.
export const eventLeaderships: { role: string; event: string; org: string; date: string; points: string[] }[] = [
  {
    role: 'Marketing Team Lead and Event Moderator',
    event: 'Build with AI | RUSL Buildathon',
    org: 'ARICT with GDG Sri Lanka, GDG Cloud Sri Lanka and Women Techmakers',
    date: '1 August 2026',
    points: [
      'Led the marketing effort for the event on behalf of ARICT.',
      'Moderated the programme, guiding the flow of the day for students and academic staff.',
    ],
  },
];

// Events. Put photos in /public/events/ and list them in `photos` (for example '/events/hackathon-1.jpg').
// Entries marked `sample: true` are placeholders: replace them with your real events.
export interface EventItem {
  title: string; type: string; detail: string;
  date: string; venue: string; organizer: string; role: string;
  photos?: string[]; sample?: boolean;
}
export const events: EventItem[] = [
  {
    title: 'RUSLXtreme 2.0 | IEEEXtreme 19.0',
    type: '24-hour coding competition',
    detail: 'I served as one of three moderators for RUSLXtreme 2.0, the local chapter of IEEEXtreme 19.0, welcoming the audience and guiding the flow of the event on stage. I also worked behind the scenes as part of the organizing committee. It taught me a lot about confidence, teamwork and presence.',
    date: '25 and 26 October 2025',
    venue: 'Faculty of Applied Sciences premises, Rajarata University of Sri Lanka',
    organizer: 'IEEE Student Branch, Rajarata University of Sri Lanka',
    role: 'Event Moderator and Organizing Committee Member',
    photos: [
      '/events/ieeextreme-stage.jpg',
      '/events/ieeextreme-team.jpg',
      '/events/ieeextreme-moderators.jpg',
      '/events/ieeextreme-committee.jpg',
    ],
  },
  {
    title: 'Build with AI 2026 Sri Lanka',
    type: 'AI for Developers conference',
    detail: 'I attended Build with AI 2026 Sri Lanka, a full day on AI for developers. Speakers from LSEG, WSO2, Veracity Group, Articom and PickMe shared practical insights and real applications of how AI is reshaping software development. It was also a great chance to connect with developers across the local tech community.',
    date: '25 July 2026',
    venue: 'Hatch Works, Colombo',
    organizer: 'GDG Sri Lanka, GDG Cloud Sri Lanka and Women Techmakers Sri Lanka',
    role: 'Participant',
    photos: [
      '/events/buildwithai-poster.jpg',
      '/events/buildwithai-team.jpg',
      '/events/buildwithai-audience.jpg',
    ],
  },
  {
    title: 'Build with AI | RUSL Buildathon',
    type: 'AI buildathon for students',
    detail: 'I took on two roles at the RUSL Buildathon: Marketing Team Lead for ARICT and Event Moderator. I led the promotion of the event and guided the flow of the day for students and academic staff. Speakers covered Google Cloud and Gemini Enterprise agent platforms, AI agents with the Agent Development Kit (ADK), and Agent-to-Agent (A2A) communication. It was a great lesson in teamwork and in bringing academic learning closer to industry-level AI.',
    date: '1 August 2026',
    venue: 'Rajarata University of Sri Lanka',
    organizer: 'ARICT with GDG Sri Lanka, GDG Cloud Sri Lanka and Women Techmakers',
    role: 'Event Moderator and Marketing Team Lead',
    photos: [
      '/events/buildathon-mic.jpg',
      '/events/buildathon-solo.jpg',
      '/events/buildathon-team.jpg',
      '/events/buildathon-group.jpg',
      '/events/buildathon-podium.jpg',
    ],
  },
];
