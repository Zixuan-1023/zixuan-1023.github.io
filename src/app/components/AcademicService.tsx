import { motion, useInView } from 'motion/react';
import { BookCheck } from 'lucide-react';
import { useRef } from 'react';

type ServiceItem = {
  title: string;
  year: string;
  category: string;
  issuer: string;
  associatedWith: string;
  description: string[];
};

export function AcademicService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const items: ServiceItem[] = [
    {
      title: 'Invited Reviewer',
      year: '2026',
      category: 'Academic Service',
      issuer: 'Scientific Reports (Nature Portfolio) · Jul 2026',
      associatedWith: 'Manuscript review service',
      description: [
        'Reviewed the manuscript "Deep Learning-Based Adaptive Recommendation Algorithm for Personalized Music Teaching."',
        'Editorial decision informed by review input: Accept.',
      ],
    },
  ];

  return (
    <section id="service" ref={ref} className="py-20 bg-[#101116] relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-10 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
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
              <BookCheck size={28} className="text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4"
            >
              Academic Service
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <div className="space-y-7">
            {items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-2xl"
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs text-primary">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
                    {item.category}
                  </span>
                </div>

                <h3 className="mb-3">{item.title}</h3>
                <p className="text-sm text-primary mb-2">{item.issuer}</p>
                <p className="text-sm text-foreground/80 mb-4">{item.associatedWith}</p>

                <div className="space-y-2">
                  {item.description.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
