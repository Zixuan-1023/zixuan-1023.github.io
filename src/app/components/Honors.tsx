import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { honors } from '../data/honors';

export function Honors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const featuredHonor = honors[0];
  if (!featuredHonor) return null;

  const goToAllHonors = () => {
    sessionStorage.setItem('homeScrollY', String(window.scrollY));
    window.location.hash = '#/honors?from=home';
  };

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
            <motion.article
              key={featuredHonor.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative flex items-center justify-center px-2 md:px-3 py-4 md:py-5 bg-gradient-to-br from-white/[0.05] to-transparent">
                  <ImageWithFallback
                    src={featuredHonor.imagePath ?? ''}
                    alt={`${featuredHonor.title} thumbnail`}
                    className="w-[88%] h-auto max-h-[320px] object-contain rounded-md"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 via-background/5 to-transparent" />
                  <div className="absolute top-6 left-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <Award size={20} className="text-primary-foreground" />
                  </div>
                </div>

                <div className="p-6 md:p-8 md:flex md:flex-col md:justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs text-primary">
                      {featuredHonor.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
                      {featuredHonor.category}
                    </span>
                  </div>

                  <h3 className="mb-3">{featuredHonor.title}</h3>
                  <p className="text-sm text-primary mb-2">{featuredHonor.associatedWith}</p>
                </div>
              </div>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <motion.a
              href="#/honors?from=home"
              onClick={(event) => {
                event.preventDefault();
                goToAllHonors();
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full border border-border bg-card text-foreground/90 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              View All Honors &amp; Awards
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
