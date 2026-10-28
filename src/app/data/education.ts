export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  summary?: string;
  details?: string[];
  initials: string;
  logoPath?: string;
};

export const educationItems: EducationItem[] = [
  {
    school: 'New York University',
    degree: 'M.M. in Music Technology',
    period: '2024-2026',
    summary: 'GPA: 3.98/4.00',
    details: [
      'Coursework: Deep Learning for Media, Machine Listening, Digital Signal Processing, Music Information Retrieval, C++ Audio Application Development',
    ],
    initials: 'NYU',
    logoPath: '/images/nyu.jpg',
  },
  {
    school: 'Jilin University',
    degree: 'B.S. in Computer Science',
    period: '2019-2024',
    details: [
      'Coursework: Object-Oriented Programming, Software Engineering, Algorithms & Data Structures, Operating Systems, Machine Learning, Linux Systems',
    ],
    initials: 'JLU',
    logoPath: '/images/jlu.jpeg',
  },
  {
    school: 'Berklee College of Music',
    degree: 'Five-Week Summer Performance Program',
    period: '2023',
    summary: 'Woodwind Performance',
    details: [
      'Completed Berklee’s Five-Week Summer Program (Woodwind): ensemble performance, musicianship, jazz improvisation, and creative collaboration.',
    ],
    initials: 'BCM',
    logoPath: '/images/berklee.png',
  },
];
