import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { experiences } from '../data/experiences';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const goToExperienceDetail = (slug: string) => {
    sessionStorage.setItem('homeScrollY', String(window.scrollY));
    window.location.hash = `#/experience/${slug}?from=home`;
  };

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
            {experiences.map((item, index) => (
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

                    <a
                      href={`#/experience/${item.slug}?from=home`}
                      onClick={(event) => {
                        event.preventDefault();
                        goToExperienceDetail(item.slug);
                      }}
                      className="inline-flex items-center gap-2 pt-3 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      View Details
                      <ExternalLink size={14} />
                    </a>
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
