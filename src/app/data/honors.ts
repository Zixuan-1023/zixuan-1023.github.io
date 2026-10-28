export type Honor = {
  title: string;
  year: string;
  category: string;
  issuer: string;
  associatedWith: string;
  description: string[];
  imagePath?: string;
};

export const honors: Honor[] = [
  {
    title: 'Graduate Music Technology Academic Achievement Recognition',
    year: '2026',
    category: 'Academic Achievement',
    issuer: 'Issued by NYU Steinhardt School of Culture, Education, and Human Development · May 2026',
    associatedWith: 'Associated with New York University',
    description: ['Recognized for outstanding academic achievement in the NYU Graduate Music Technology program.'],
    imagePath: '/images/award.jpeg',
  },
  {
    title: 'Third-Class Scholarship',
    year: '2020',
    category: 'Scholarship',
    issuer: 'Issued by College of Computer Science and Technology, Jilin University · Sep 2020',
    associatedWith: 'Associated with Jilin University',
    description: [
      'Awarded for academic performance and overall achievement during undergraduate studies in Computer Science and Technology at Jilin University.',
    ],
    imagePath: '/images/scholarships.jpg',
  },
];
