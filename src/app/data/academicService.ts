export type AcademicServiceItem = {
  organization: string;
  role: string;
  period: string;
  details: string[];
};

export const academicServiceItems: AcademicServiceItem[] = [
  {
    organization: 'Scientific Reports (Nature Portfolio)',
    role: 'Peer Reviewer',
    period: '2026-Present',
    details: [
      'Completed four review rounds across two manuscripts in 2026.',
      'Completed and ongoing editorial cycles include AI-enabled personalized music education and temporal graph modeling topics.',
    ],
  },
  {
    organization: 'Discover Artificial Intelligence (Springer Nature)',
    role: 'Peer Reviewer',
    period: '2026',
    details: [
      'Completed one formal peer-review report in multi-agent AI and reciprocal social interaction research.',
    ],
  },
  {
    organization: 'Future Business Journal (Springer Nature)',
    role: 'Peer Reviewer',
    period: '2026',
    details: [
      'Completed one formal peer-review report in October 2026 for an intelligent expert-system manuscript.',
    ],
  },
];

export const certificationItem = {
  name: 'Social & Behavioral Research',
  issuer: 'CITI Program',
  issueDate: 'Apr 2025',
  expirationDate: 'Apr 2028',
  credentialId: '68871472',
  credentialUrl:
    'https://www.citiprogram.org/verify/?kdf358d8b-962d-477e-814d-69aaab7393ef-68871472',
};
