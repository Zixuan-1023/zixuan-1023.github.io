import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details: string[];
  initials: string;
  logoPath?: string;
};

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const educationItems: EducationItem[] = [
    {
      school: 'New York University',
      degree: 'Master of Music, Music Technology',
      period: 'Sep 2024 – May 2026',
      details: [
        'GPA: 3.98/4.00 | Coursework: Deep Learning for Media, Machine Listening, Digital Signal Processing, Music Information Retrieval, C++ Audio Application Development',
      ],
      initials: 'NYU',
      logoPath: '/images/nyu.jpg',
    },
    {
      school: 'Jilin University',
      degree: 'Bachelor of Science, Computer Science',
      period: 'Sep 2019 – May 2024',
      details: [
        'Coursework: Object-Oriented Programming, Software Engineering, Algorithms & Data Structures, Operating Systems, Machine Learning, Linux Systems',
      ],
      initials: 'JLU',
      logoPath: '/images/jlu.jpeg',
    },
    {
      school: 'Berklee College of Music',
      degree: 'Five-Week Summer Performance Program, Woodwind Performance',
      period: 'Jul 2023 – Aug 2023',
      details: [
        'Completed Berklee’s Five-Week Summer Program (Woodwind): ensemble performance, musicianship, jazz improvisation, and creative collaboration.',
      ],
      initials: 'BCM',
      logoPath: '/images/berklee.png',
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-[#101116] relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-10 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
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
              <GraduationCap size={30} className="text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Education
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationItems.map((item, index) => (
              <motion.article
                key={item.school}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="relative h-40 bg-primary/10 border-b border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    {item.logoPath ? (
                      <ImageWithFallback
                        src={item.logoPath}
                        alt={`${item.school} logo`}
                        className="max-h-24 w-auto object-contain"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary font-semibold">
                        {item.initials}
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/85 text-primary-foreground text-xs">
                    Education
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="group-hover:text-primary transition-colors">{item.school}</h3>
                  <p className="text-foreground/90">{item.degree}</p>
                  <p className="text-sm text-primary">{item.period}</p>

                  <div className="pt-1 space-y-2">
                    {item.details.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
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
