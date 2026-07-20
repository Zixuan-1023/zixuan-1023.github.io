import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 bg-[#0f0f12] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <User size={28} className="text-primary" />
            </motion.div>
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              About
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -80, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative max-w-sm mx-auto lg:max-w-md"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-lg group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-primary/20 shadow-2xl max-h-[520px]">
                  <ImageWithFallback
                    src="/images/IMG_1856.png"
                    alt="Zixuan Guo - Professional Portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Decorative corner accents */}
                <motion.div
                  className="absolute -top-2 -left-2 w-20 h-20 border-l-2 border-t-2 border-primary/40 rounded-tl-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 border-r-2 border-b-2 border-primary/40 rounded-br-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 80, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                className="border-l-4 border-primary pl-6"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="mb-4 text-primary">Audio AI & Music Technology</h3>
                <p className="text-lg leading-relaxed text-foreground/90">
                  I am an Applied ML Engineer and Audio AI researcher-developer focused on
                  intelligent systems for music, audio, and interactive media. My background
                  combines an M.M. in Music Technology from NYU with a B.S. in Computer Science,
                  bridging research depth with engineering execution.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-muted-foreground leading-relaxed"
              >
                Across research and production-oriented engineering, I work on controllable music
                generation, robust machine listening, audio representation learning, and
                human-centered AI tools for creative workflows.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-muted-foreground leading-relaxed"
              >
                I currently contribute as a machine learning engineer in applied AI settings and
                have supported academic research projects in low-SNR audio analysis. Alongside
                this work, I stay active as a vocalist, electric bassist, and producer, keeping
                system design grounded in real composition and studio practice.
              </motion.p>

              {/* Decorative divider */}
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
