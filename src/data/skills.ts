// Skills taken from the CV, plus MySQL, C, Android, Postman and PyCharm.
// Technical skills use the official brand glyphs from the `simple-icons` package;
// where no official glyph exists (SQL, Microsoft Office) a Lucide icon stands in.
import {
  siHtml5, siCss, siJavascript, siPython, siOpenjdk, siC, siCplusplus, siPhp, siMysql, siBootstrap, siDotnet,
  siQt, siAndroid, siAndroidstudio, siGit, siGithub, siPostman, siPycharm, siTrello, siNotion,
} from 'simple-icons';

export interface Skill { label: string; brand?: { path: string; hex: string }; icon?: string }

export const technicalSkills: Skill[] = [
  { label: 'HTML', brand: siHtml5 },
  { label: 'CSS', brand: siCss },
  { label: 'JavaScript', brand: siJavascript },
  { label: 'Python', brand: siPython },
  { label: 'Java', brand: siOpenjdk },
  { label: 'C', brand: siC },
  { label: 'C++', brand: siCplusplus },
  { label: 'PHP', brand: siPhp },
  { label: 'SQL', icon: 'Database' },
  { label: 'MySQL', brand: siMysql },
  { label: 'Bootstrap', brand: siBootstrap },
  { label: '.NET', brand: siDotnet },
  { label: 'Qt', brand: siQt },
  { label: 'Android', brand: siAndroid },
  { label: 'Android Studio', brand: siAndroidstudio },
  { label: 'Git', brand: siGit },
  { label: 'GitHub', brand: siGithub },
  { label: 'Postman', brand: siPostman },
  { label: 'PyCharm', brand: siPycharm },
  { label: 'Trello', brand: siTrello },
  { label: 'Notion', brand: siNotion },
  { label: 'Microsoft Office', icon: 'Briefcase' },
];

// Lucide icon names for the non-technical skills
export const nonTechnicalSkills: Skill[] = [
  { label: 'Project coordination', icon: 'Workflow' },
  { label: 'Agile fundamentals', icon: 'Repeat' },
  { label: 'Scrum', icon: 'RefreshCw' },
  { label: 'Project management basics', icon: 'ListChecks' },
  { label: 'Communication', icon: 'MessageSquare' },
  { label: 'Organizational skills', icon: 'Compass' },
  { label: 'Leadership', icon: 'Target' },
  { label: 'Teamwork and collaboration', icon: 'Users' },
  { label: 'Problem-solving', icon: 'Lightbulb' },
  { label: 'Adaptability', icon: 'Zap' },
  { label: 'Quick learner', icon: 'Rocket' },
  { label: 'Time management', icon: 'Clock' },
];
