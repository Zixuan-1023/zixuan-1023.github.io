import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ExperienceItem = {
  company: string;
  role: string;
  meta: string;
  period: string;
  location: string;
  bullets: string[];
  skills?: string;
  initials: string;
  logoPath?: string;
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const items: ExperienceItem[] = [
    {
      company: 'Trivian Institute',
      role: 'Research Fellow',
      meta: 'Trivian Institute · Internship',
      period: 'Sep 2026 - Present · 2 mos',
      location: 'Remote',
      bullets: [
        'Conducting independent research on falsification, reproducibility, and adversarial evaluation of relational AI systems, with an emphasis on claim-driven experimental design, baseline testing, failure analysis, and reproducible evidence.',
        'Evaluating public components of the TRIA research stack at both module and cross-module levels, including assumptions, interfaces, dependencies, and failure propagation.',
        'Developing reproducible test suites, evidence-based evaluations, and technical documentation while preserving negative, null, and inconclusive results.',
      ],
      skills: 'Python (Programming Language)',
      initials: 'TI',
      logoPath: '/images/Trivian.png',
    },
    {
      company: 'APEXUS - TECH',
      role: 'Machine Learning Engineer',
      meta: 'APEXUS - TECH · Internship',
      period: 'Jul 2026 - Aug 2026 · 2 mos',
      location: 'New Brunswick, NJ · Remote',
      bullets: [
        'Built a local quantitative-research RAG system over 20 research sources using hybrid dense/BM25 retrieval, reciprocal rank fusion, and citation-grounded generation; achieved 0.92 Precision@5, 1.00 Recall@5, and 0.94 NDCG@5 on a 10-query benchmark.',
        'Developed a structured research-to-backtest pipeline with provenance validation, schema-constrained strategy generation, and executable SMA/RSI/breakout/volatility strategies; achieved 100% citation/schema validity and 12/12 end-to-end task success.',
        'Developed EarningsFusion by integrating LLM-derived earnings-call tone, financial surprise, and pre-event market features under expanding-window validation; removed a severe overnight-gap leakage feature (r = 0.935 with 1-day target) and implemented feature-timing safeguards against look-ahead bias.',
      ],
      skills: 'Python (Programming Language), PyTorch and +3 skills',
      initials: 'AT',
      logoPath: '/images/apexus.png',
    },
    {
      company: 'University of Washington',
      role: 'Machine Learning Research Assistant',
      meta: 'University of Washington · Part-time',
      period: 'May 2025 - Nov 2025 · 7 mos',
      location: 'Seattle, Washington, United States · Remote',
      bullets: [
        'Collaborated remotely on modernization of a spectrogram-based acoustic event detection pipeline for low-SNR bioacoustic analysis.',
        'Migrated legacy YOLOv2-based workflows to anchor-free YOLOX models to improve contour localization and reduce manual annotation overhead.',
        'Developed preprocessing, augmentation, and hard-negative mining pipelines for noisy acoustic data, contributing to improved robustness and scalability of the detection workflow.',
      ],
      skills: 'Python (Programming Language), Computer Vision and +3 skills',
      initials: 'UW',
      logoPath: '/images/UW.jpeg',
    },
    {
      company: 'Hazel Investment Co',
      role: 'Data Analyst',
      meta: 'Hazel Investment Co · Internship',
      period: 'Jan 2024 - Feb 2024 · 2 mos',
      location: 'Shenzhen, Guangdong, China · On-site',
      bullets: [
        'Supported quantitative analysis and analytics workflows on financial datasets using Python.',
        'Worked on exploratory data analysis (EDA), data preprocessing, visualization, and automated reporting for market intelligence tasks.',
        'Collaborated with analysts on data-oriented research and reporting projects involving structured financial data and investment-related analytics.',
      ],
      skills: 'Python (Programming Language), Data Analysis and +2 skills',
      initials: 'HI',
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-[#101116] relative overflow-hidden">
      <motion.div
        className="absolute top-24 left-10 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Briefcase size={30} className="text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Experience
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <div className="space-y-7">
            {items.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-2xl"
              >
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary font-semibold shrink-0 overflow-hidden">
                    {item.logoPath ? (
                      <ImageWithFallback
                        src={item.logoPath}
                        alt={`${item.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      item.initials
                    )}
                  </div>

                  <div className="flex-1 space-y-1">
                    <h3>{item.role}</h3>
                    <p className="text-foreground/90">{item.meta}</p>
                    <p className="text-primary text-sm">{item.period}</p>
                    <p className="text-sm text-muted-foreground">{item.location}</p>

                    <div className="pt-3 space-y-2">
                      {item.bullets.map((bullet) => (
                        <p key={bullet} className="text-sm text-muted-foreground leading-relaxed">
                          • {bullet}
                        </p>
                      ))}
                    </div>
                    {item.skills && (
                      <p className="pt-3 text-sm text-foreground/70">{item.skills}</p>
                    )}

                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
