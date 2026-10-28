export type PublicationItem = {
  section: 'First-Author Research' | 'Collaborative Research';
  organization: string;
  role: string;
  period: string;
  description: string;
  image: string;
  highlights: string[];
  publicationUrl?: string;
};

export const publications: PublicationItem[] = [
  {
    section: 'First-Author Research',
    organization:
      'Closed-Loop Audio Neuroregulation for ADHD: Graph-Based Attention Decoding and Rhythm Entrainment',
    role: 'IEEE Access (Early Access)',
    period: '2026',
    description:
      'Guo, Z., Fang, Q., Yang, J.-S., and Rhee, M. Presents a closed-loop audio neuroregulation framework for ADHD using graph-based attention decoding and rhythm entrainment. DOI: 10.1109/ACCESS.2026.3731552.',
    image: '/images/Closed-Loop.png',
    highlights: ['IEEE', 'Open Access', 'ADHD', 'Rhythm Entrainment'],
    publicationUrl: 'https://ieeexplore.ieee.org/document/11683456',
  },
  {
    section: 'First-Author Research',
    organization: 'Noise-Robust Instrument Classification under Real-World SNR Conditions',
    role: 'SSRN Electronic Journal',
    period: '2025',
    description:
      'Guo, Z., Zhong, J., and Chen, S. A study on robust MIR classification under challenging real-world noise conditions.',
    image: '/images/NoisyInstruments.png',
    highlights: ['SSRN', 'PDF available', 'Robust MIR'],
    publicationUrl: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6510838',
  },
  {
    section: 'Collaborative Research',
    organization:
      'Self-Evolving AI Agents with Dual Memory for Automated Software Testing and Bug Localization',
    role: 'IEEE Access (Early Access)',
    period: '2026',
    description:
      'Mo, T., Zhang, C., Zou, J., Guo, Z., and Rhee, M. Proposes LS-CM, a dual-memory agent architecture for software testing and bug localization with improved fault localization accuracy and lower editing churn. DOI: 10.1109/ACCESS.2026.3713401.',
    image: '/images/dualmemory.png',
    highlights: ['IEEE', 'Open Access', 'Software Testing', 'Bug Localization'],
    publicationUrl: 'https://ieeexplore.ieee.org/document/11609447',
  },
  {
    section: 'Collaborative Research',
    organization:
      'Adaptive Sensor Fusion for Robust Perception in Dense Fog: A Gated Vision and LiDAR Integration Framework',
    role: 'Sensors (Journal article)',
    period: '2026',
    description:
      'Zhang, F., Guo, Z., Ding, J., Yang, J., and Liu, W. Introduces a gated vision-LiDAR integration framework for robust perception under dense fog conditions. DOI: 10.3390/s26123728.',
    image: '/images/Adaptive_Sensor.png',
    highlights: ['Sensors', 'Journal Article', 'Vision-LiDAR Fusion', 'Robust Perception'],
    publicationUrl: 'https://www.mdpi.com/1424-8220/26/12/3728',
  },
];

export const featuredPublications = publications.filter(
  (publication) => publication.section === 'First-Author Research',
);
