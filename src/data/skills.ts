// Skills taken from the CV, plus MySQL, C, Android, Postman and PyCharm.
// `icon` is a Lucide icon name; the carousel maps it to a component.
export interface Skill { label: string; icon: string }

export const technicalSkills: Skill[] = [
  { label: 'HTML', icon: 'Globe' },
  { label: 'CSS', icon: 'Palette' },
  { label: 'JavaScript', icon: 'Braces' },
  { label: 'Python', icon: 'FileCode' },
  { label: 'Java', icon: 'Coffee' },
  { label: 'C', icon: 'Hash' },
  { label: 'C++', icon: 'Cpu' },
  { label: 'PHP', icon: 'Server' },
  { label: 'SQL', icon: 'Database' },
  { label: 'MySQL', icon: 'Database' },
  { label: 'Bootstrap', icon: 'Layers' },
  { label: '.NET', icon: 'Boxes' },
  { label: 'Qt', icon: 'Puzzle' },
  { label: 'Android', icon: 'Smartphone' },
  { label: 'Android Studio', icon: 'Smartphone' },
  { label: 'Git', icon: 'GitBranch' },
  { label: 'GitHub', icon: 'GitFork' },
  { label: 'Postman', icon: 'Send' },
  { label: 'PyCharm', icon: 'Terminal' },
  { label: 'Trello', icon: 'FolderKanban' },
  { label: 'Notion', icon: 'NotebookPen' },
  { label: 'Microsoft Office', icon: 'Briefcase' },
];

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
