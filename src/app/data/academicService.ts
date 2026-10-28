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
      'Completed peer-review rounds for manuscripts in AI-enabled music and learning-related topics.',
      'Continues editorial peer-review service in ongoing cycles.',
    ],
  },
  {
    organization: 'Discover Artificial Intelligence (Springer Nature)',
    role: 'Peer Reviewer',
    period: '2026',
    details: [
      'Completed a formal peer-review report for a manuscript in multi-agent AI and social interaction modeling.',
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
