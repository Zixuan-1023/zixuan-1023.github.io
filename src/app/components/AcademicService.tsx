import { motion, useInView } from 'motion/react';
import { BookCheck } from 'lucide-react';
import { useRef } from 'react';
import { academicServiceItems } from '../data/academicService';

export function AcademicService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const goToAcademicService = () => {
    sessionStorage.setItem('homeScrollY', String(window.scrollY));
    window.location.hash = '#/service?from=home';
  };

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

          <div className="space-y-4 max-w-4xl mx-auto">
            {academicServiceItems.map((item, index) => (
              <motion.article
                key={item.organization}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                className="bg-card border border-border rounded-xl p-5 md:p-6 shadow-xl"
              >
                <p className="text-foreground">{item.organization} - {item.role} · {item.period}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex justify-center"
          >
            <motion.a
              href="#/service?from=home"
              onClick={(event) => {
                event.preventDefault();
                goToAcademicService();
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full border border-border bg-card text-foreground/90 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              View Academic Service
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
