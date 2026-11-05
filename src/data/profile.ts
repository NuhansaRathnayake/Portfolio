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

export const education: { degree: string; school: string; period: string; note: string }[] = [
  {
    degree: 'BSc. Information Technology',
    school: 'Rajarata University of Sri Lanka',
    period: 'Currently studying',
    note: 'Focus on project management, information security and systems analysis.',
  },
];

export const coursework = ['Project management', 'Information security', 'Systems analysis and design', 'Database systems', 'Software engineering'];

export type CertStatus = 'Completed' | 'In progress' | 'Planned';
export const certifications: { name: string; issuer: string; status: CertStatus }[] = [
  { name: 'Google Project Management Certificate', issuer: 'Google / Coursera', status: 'Planned' },
  { name: 'Certified Associate in Project Management (CAPM)', issuer: 'PMI', status: 'Planned' },
  { name: 'ISO/IEC 27001 Foundation', issuer: 'Accredited training provider', status: 'Planned' },
  { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', status: 'Planned' },
];

// Frame each entry around responsibility, teamwork and results.
export const leadership: { role: string; org: string; period: string; points: string[]; sample?: boolean }[] = [
  {
    role: 'Society or club role, for example Project Lead',
    org: 'Your society or club',
    period: '2025 to present',
    points: [
      'Led a team of N members to deliver an event or project on schedule.',
      'Planned the schedule, budget and task allocation, then report the result with a number.',
    ],
    sample: true,
  },
  {
    role: 'Group project lead',
    org: 'Rajarata University of Sri Lanka',
    period: '2026',
    points: [
      'Coordinated a team through sprints, tracking tasks on a Kanban board.',
      'Handled a requirement change by re-prioritising the backlog and still delivering on time.',
    ],
    sample: true,
  },
];

export const events: { title: string; type: string; date: string; role: string; detail: string; sample?: boolean }[] = [
  {
    title: 'Hackathon or competition name',
    type: 'Competition',
    date: 'Mar 2026',
    role: 'Participant',
    detail: 'What the challenge was, your part in the team and the result.',
    sample: true,
  },
  {
    title: 'Workshop or seminar name',
    type: 'Workshop',
    date: 'Jan 2026',
    role: 'Attendee',
    detail: 'Topic covered and one thing you took away, such as risk management or cybersecurity awareness.',
    sample: true,
  },
  {
    title: 'Event you organised',
    type: 'Organised',
    date: 'Nov 2025',
    role: 'Organiser',
    detail: 'Your responsibility in planning it and how many people attended.',
    sample: true,
  },
];
