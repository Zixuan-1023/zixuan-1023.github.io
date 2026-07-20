import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Honor = {
  title: string;
  year: string;
  category: string;
  issuer: string;
  associatedWith: string;
  description: string[];
  imagePath?: string;
};

export function Honors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const honors: Honor[] = [
    {
      title: 'Graduate Music Technology Academic Achievement Recognition',
      year: '2026',
      category: 'Academic Achievement',
      issuer:
        'Issued by NYU Steinhardt School of Culture, Education, and Human Development · May 2026',
      associatedWith: 'Associated with New York University',
      description: [
        'Recognized for outstanding academic achievement in the NYU Graduate Music Technology program.',
        'Awarded for excellence in Audio AI, Music Information Retrieval (MIR), machine learning for audio, and interactive music technology research and development.',
      ],
      imagePath: '/images/award.jpeg',
    },
    {
      title: 'Third-Class Scholarship',
      year: '2020',
      category: 'Scholarship',
      issuer:
        'Issued by College of Computer Science and Technology, Jilin University · Sep 2020',
      associatedWith: 'Associated with Jilin University',
      description: [
        'Awarded for academic performance and overall achievement during undergraduate studies in Computer Science and Technology at Jilin University.',
      ],
      imagePath: '/images/scholarship.png',
    },
  ];

  return (
    <section id="honors" ref={ref} className="py-20 bg-[#121318] relative overflow-hidden">
      <motion.div
        className="absolute -top-20 left-10 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2] }}
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
              <Trophy size={30} className="text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Honors &amp; Awards
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <div className="space-y-7">
            {honors.map((honor, index) => (
              <motion.article
                key={honor.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
              >
                {honor.imagePath ? (
                  <div className={`grid md:grid-cols-[0.9fr_1.1fr] ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`relative h-56 md:h-64 lg:h-72 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <ImageWithFallback
                        src={honor.imagePath}
                        alt={`${honor.title} thumbnail`}
                        className="w-full h-full object-contain p-2 bg-muted/40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-background/20 to-transparent" />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                        <Award size={20} className="text-primary-foreground" />
                      </div>
                    </div>

                    <div className={`p-6 md:p-8 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs text-primary">
                          {honor.year}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
                          {honor.category}
                        </span>
                      </div>

                      <h3 className="mb-3">{honor.title}</h3>
                      <p className="text-sm text-primary mb-2">{honor.issuer}</p>
                      <p className="text-sm text-foreground/80 mb-4">{honor.associatedWith}</p>

                      <div className="space-y-2">
                        {honor.description.map((line) => (
                          <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}

                {!honor.imagePath ? (
                  <div className="p-6 md:p-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs text-primary">
                        {honor.year}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
                        {honor.category}
                      </span>
                    </div>

                    <h3 className="mb-3">{honor.title}</h3>
                    <p className="text-sm text-primary mb-2">{honor.issuer}</p>
                    <p className="text-sm text-foreground/80 mb-4">{honor.associatedWith}</p>

                    <div className="space-y-2">
                      {honor.description.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
