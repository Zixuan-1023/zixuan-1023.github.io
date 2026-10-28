import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { featuredPublications } from '../data/publications';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Collaborations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const goToAllPublications = () => {
    sessionStorage.setItem('homeScrollY', String(window.scrollY));
    window.location.hash = '#/publications?from=home';
  };

  return (
    <section id="collaborations" ref={ref} className="py-20 bg-[#121318] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 border border-primary/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ rotate: 360 }}
              style={{ transition: 'transform 0.6s ease' }}
            >
              <BookOpen size={36} className="text-primary" />
            </motion.div>

            <motion.h2
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Selected Publications
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Papers and publication-oriented research outputs
            </motion.p>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>

          <div className="space-y-6">
            {featuredPublications.map((collab, index) => (
              <motion.article
                key={collab.organization}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.5 + index * 0.12 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="w-full md:w-4/12 border-b md:border-b-0 md:border-r border-border">
                  <div className="h-48 md:h-56 lg:h-60 bg-muted/60 relative overflow-hidden">
                    <ImageWithFallback
                      src={collab.image}
                      alt={`${collab.organization} cover`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-8/12 p-5 md:p-6">
                  <h3 className="mb-3">{collab.organization}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {collab.role.replace(' (Early Access)', '')} · {collab.period}
                  </p>
                  {collab.publicationUrl && (
                    <a
                      href={collab.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      View Publication
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex justify-center"
          >
            <motion.a
              href="#/publications?from=home"
              onClick={(event) => {
                event.preventDefault();
                goToAllPublications();
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full border border-border bg-card text-foreground/90 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              View All Publications
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
