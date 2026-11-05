// Skills taken from the CV, plus MySQL, C, Android, Postman and PyCharm.
// Technical skills use the standard Devicon logos stored in /public/skills; where no standard logo
// exists (SQL, Microsoft Office) a Lucide icon stands in.
export interface Skill { label: string; img?: string; icon?: string }

export const technicalSkills: Skill[] = [
  { label: 'HTML', img: 'html5' },
  { label: 'CSS', img: 'css3' },
  { label: 'JavaScript', img: 'javascript' },
  { label: 'Python', img: 'python' },
  { label: 'Java', img: 'java' },
  { label: 'C', img: 'c' },
  { label: 'C++', img: 'cplusplus' },
  { label: 'PHP', img: 'php' },
  { label: 'SQL', icon: 'Database' },
  { label: 'MySQL', img: 'mysql' },
  { label: 'Bootstrap', img: 'bootstrap' },
  { label: '.NET', img: 'dotnet' },
  { label: 'Qt', img: 'qt' },
  { label: 'Android', img: 'android' },
  { label: 'Android Studio', img: 'androidstudio' },
  { label: 'Git', img: 'git' },
  { label: 'GitHub', img: 'github' },
  { label: 'Postman', img: 'postman' },
  { label: 'PyCharm', img: 'pycharm' },
  { label: 'Trello', img: 'trello' },
  { label: 'Notion', img: 'notion' },
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
