export type ExperienceItem = {
  slug: string;
  company: string;
  role: string;
  meta: string;
  period: string;
  location: string;
  bullets: string[];
  initials: string;
  logoPath?: string;
};

export const experiences: ExperienceItem[] = [
  {
    slug: 'trivian-institute-research-fellow',
    company: 'Trivian Institute',
    role: 'Research Fellow',
    meta: 'Trivian Institute · Internship',
    period: 'Sep 2026 - Present',
    location: 'Remote',
    bullets: [
      'Conducting independent research on falsification, reproducibility, and adversarial evaluation of relational AI systems, with an emphasis on claim-driven experimental design, baseline testing, failure analysis, and reproducible evidence.',
      'Evaluating public components of the TRIA research stack at both module and cross-module levels, including assumptions, interfaces, dependencies, and failure propagation.',
      'Developing reproducible test suites, evidence-based evaluations, and technical documentation while preserving negative, null, and inconclusive results.',
    ],
    initials: 'TI',
    logoPath: '/images/Trivian.png',
  },
  {
    slug: 'apexus-tech-machine-learning-engineer',
    company: 'APEXUS - TECH',
    role: 'Machine Learning Engineer',
    meta: 'APEXUS - TECH · Internship',
    period: 'Jul 2026 - Aug 2026',
    location: 'New Brunswick, NJ · Remote',
    bullets: [
      'Built a local quantitative-research RAG system over 20 research sources using hybrid dense/BM25 retrieval, reciprocal rank fusion, and citation-grounded generation; achieved 0.92 Precision@5, 1.00 Recall@5, and 0.94 NDCG@5 on a 10-query benchmark.',
      'Developed a structured research-to-backtest pipeline with provenance validation, schema-constrained strategy generation, and executable SMA/RSI/breakout/volatility strategies; achieved 100% citation/schema validity and 12/12 end-to-end task success.',
      'Developed EarningsFusion by integrating LLM-derived earnings-call tone, financial surprise, and pre-event market features under expanding-window validation; removed a severe overnight-gap leakage feature (r = 0.935 with 1-day target) and implemented feature-timing safeguards against look-ahead bias.',
    ],
    initials: 'AT',
    logoPath: '/images/apexus.png',
  },
  {
    slug: 'uw-machine-learning-research-assistant',
    company: 'University of Washington',
    role: 'Machine Learning Research Assistant',
    meta: 'University of Washington · Part-time',
    period: 'May 2025 - Nov 2025',
    location: 'Seattle, Washington, United States · Remote',
    bullets: [
      'Collaborated remotely on modernization of a spectrogram-based acoustic event detection pipeline for low-SNR bioacoustic analysis.',
      'Migrated legacy YOLOv2-based workflows to anchor-free YOLOX models to improve contour localization and reduce manual annotation overhead.',
      'Developed preprocessing, augmentation, and hard-negative mining pipelines for noisy acoustic data, contributing to improved robustness and scalability of the detection workflow.',
    ],
    initials: 'UW',
    logoPath: '/images/UW.jpeg',
  },
  {
    slug: 'hazel-investment-data-analyst',
    company: 'Hazel Investment Co',
    role: 'Data Analyst',
    meta: 'Hazel Investment Co · Internship',
    period: 'Jan 2024 - Feb 2024',
    location: 'Shenzhen, Guangdong, China · On-site',
    bullets: [
      'Supported quantitative analysis and analytics workflows on financial datasets using Python.',
      'Worked on exploratory data analysis (EDA), data preprocessing, visualization, and automated reporting for market intelligence tasks.',
      'Collaborated with analysts on data-oriented research and reporting projects involving structured financial data and investment-related analytics.',
    ],
    initials: 'HI',
  },
];
