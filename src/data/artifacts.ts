// Sample artifacts. All organisations and people here are fictional.
// Replace or extend these with sanitised artifacts from your real projects.

export type Rating = 'High' | 'Medium' | 'Low';

export interface Risk {
  id: string;
  risk: string;
  likelihood: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
  treatment: 'Mitigate' | 'Transfer' | 'Accept' | 'Avoid';
  response: string;
  owner: string;
}

// Rating = likelihood x impact. 15+ High, 8-14 Medium, below 8 Low.
export const score = (r: Pick<Risk, 'likelihood' | 'impact'>) => r.likelihood * r.impact;
export const rating = (s: number): Rating => (s >= 15 ? 'High' : s >= 8 ? 'Medium' : 'Low');

// Risk register for a fictional student-records system rollout (Case study 1)
export const rolloutRisks: Risk[] = [
  { id: 'R-01', risk: 'Data migration from the old system corrupts or drops student records', likelihood: 3, impact: 5, treatment: 'Mitigate', response: 'Two trial migrations with record-count and checksum reconciliation before cutover', owner: 'Technical lead' },
  { id: 'R-02', risk: 'Academic staff do not adopt the new system before term starts', likelihood: 4, impact: 4, treatment: 'Mitigate', response: 'Role-based training sessions and a named champion in each department', owner: 'Change lead' },
  { id: 'R-03', risk: 'Scope grows as departments request custom reports', likelihood: 4, impact: 3, treatment: 'Mitigate', response: 'Change control board; new requests go to a prioritised backlog for phase 2', owner: 'Project manager' },
  { id: 'R-04', risk: 'Student personal data exposed through over-broad access roles', likelihood: 2, impact: 5, treatment: 'Mitigate', response: 'Least-privilege role matrix reviewed by the data owner before go-live', owner: 'Security officer' },
  { id: 'R-05', risk: 'Vendor misses the integration delivery date', likelihood: 3, impact: 4, treatment: 'Transfer', response: 'Milestone-based payment terms and a 2-week schedule buffer', owner: 'Project sponsor' },
  { id: 'R-06', risk: 'Key team member unavailable during exam period', likelihood: 2, impact: 3, treatment: 'Accept', response: 'Cross-train a backup; monitor the resource plan weekly', owner: 'Project manager' },
];

// Risk register for a fictional 12-person design studio (Case study 2)
export const studioRisks: Risk[] = [
  { id: 'S-01', risk: 'Client files stored in personal cloud accounts', likelihood: 4, impact: 4, treatment: 'Mitigate', response: 'Move to a managed workspace with sharing rules and an acceptable use policy', owner: 'Studio director' },
  { id: 'S-02', risk: 'Phishing leads to a compromised email account', likelihood: 4, impact: 5, treatment: 'Mitigate', response: 'Multi-factor authentication on all accounts and short awareness training', owner: 'Office manager' },
  { id: 'S-03', risk: 'No tested backup of project files', likelihood: 3, impact: 5, treatment: 'Mitigate', response: 'Automated daily backup with a quarterly restore test', owner: 'IT contractor' },
  { id: 'S-04', risk: 'Departing staff keep access to client folders', likelihood: 3, impact: 3, treatment: 'Mitigate', response: 'Joiner, mover, leaver checklist with a same-day access review', owner: 'Office manager' },
];

// RACI for the rollout (Case study 1). R = responsible, A = accountable, C = consulted, I = informed
export const raciRoles = ['Sponsor', 'Project manager', 'Technical lead', 'Change lead', 'Data owner'];
export const raciRows: { activity: string; raci: string[] }[] = [
  { activity: 'Approve project charter', raci: ['A', 'R', 'C', 'I', 'I'] },
  { activity: 'Manage scope and change requests', raci: ['I', 'A/R', 'C', 'C', 'I'] },
  { activity: 'Data migration and reconciliation', raci: ['I', 'A', 'R', 'I', 'C'] },
  { activity: 'Access role design', raci: ['I', 'C', 'R', 'I', 'A'] },
  { activity: 'Staff training and communications', raci: ['I', 'A', 'C', 'R', 'I'] },
  { activity: 'Go-live decision', raci: ['A', 'R', 'C', 'C', 'C'] },
];

// Work breakdown structure for the rollout (Case study 1)
export interface WbsNode { code: string; name: string; children?: WbsNode[] }
export const wbs: WbsNode[] = [
  { code: '1', name: 'Initiation', children: [
    { code: '1.1', name: 'Project charter and business case' },
    { code: '1.2', name: 'Stakeholder register' },
  ] },
  { code: '2', name: 'Planning', children: [
    { code: '2.1', name: 'Scope statement and WBS' },
    { code: '2.2', name: 'Schedule, budget and resource plan' },
    { code: '2.3', name: 'Risk register and communication plan' },
  ] },
  { code: '3', name: 'Delivery', children: [
    { code: '3.1', name: 'System configuration' },
    { code: '3.2', name: 'Data migration (two trial runs, one live)' },
    { code: '3.3', name: 'Access roles and security review' },
    { code: '3.4', name: 'Testing and user acceptance' },
    { code: '3.5', name: 'Training and communications' },
  ] },
  { code: '4', name: 'Closure', children: [
    { code: '4.1', name: 'Go-live and hypercare' },
    { code: '4.2', name: 'Lessons learned review' },
  ] },
];

// Control mapping for the studio gap analysis (Case study 2). Illustrative only.
export interface Mapping { iso: string; isoName: string; csf: string; csfName: string; status: 'In place' | 'Partial' | 'Gap'; action: string }
export const mappings: Mapping[] = [
  { iso: 'A.5.1', isoName: 'Policies for information security', csf: 'GV.PO-01', csfName: 'Policy is established and communicated', status: 'Gap', action: 'Write and approve an information security policy' },
  { iso: 'A.5.15', isoName: 'Access control', csf: 'PR.AA-05', csfName: 'Access permissions are managed', status: 'Partial', action: 'Define roles; remove shared logins' },
  { iso: 'A.6.3', isoName: 'Awareness and training', csf: 'PR.AT-01', csfName: 'Personnel are made aware of cybersecurity risks', status: 'Gap', action: 'Run a 30-minute awareness session each year' },
  { iso: 'A.8.13', isoName: 'Information backup', csf: 'PR.DS-11', csfName: 'Backups are created, protected and tested', status: 'Partial', action: 'Automate backups and test a restore' },
  { iso: 'A.8.8', isoName: 'Management of technical vulnerabilities', csf: 'ID.RA-01', csfName: 'Vulnerabilities are identified and recorded', status: 'Gap', action: 'Turn on automatic updates; keep an asset list' },
  { iso: 'A.5.24', isoName: 'Incident management planning', csf: 'RS.MA-01', csfName: 'Incident response plan is carried out', status: 'Gap', action: 'Draft a one-page incident response plan' },
  { iso: 'A.8.15', isoName: 'Logging', csf: 'DE.CM-03', csfName: 'Account and technology activity is monitored', status: 'In place', action: 'Keep existing email and cloud sign-in logs' },
];
