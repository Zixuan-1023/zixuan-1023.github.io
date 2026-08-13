import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BookOpen, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Collaborations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const collaborations = [
    {
      organization: 'Self-Evolving AI Agents with Dual Memory for Automated Software Testing and Bug Localization',
      role: 'IEEE Access (Early Access)',
      period: '2026',
      description:
        'Mo, T., Zhang, C., Zou, J., Guo, Z., and Rhee, M. Proposes LS-CM, a dual-memory agent architecture for software testing and bug localization with improved fault localization accuracy and lower editing churn. DOI: 10.1109/ACCESS.2026.3713401.',
      image: '/images/dualmemory.png',
      highlights: ['IEEE', 'Open Access', 'Software Testing', 'Bug Localization'],
    },
    {
      organization: 'Adaptive Sensor Fusion for Robust Perception in Dense Fog: A Gated Vision and LiDAR Integration Framework',
      role: 'Sensors (Journal article)',
      period: '2026-06-11',
      description:
        'Zhang, F., Guo, Z., Ding, J., Yang, J., and Liu, W. Introduces a gated vision-LiDAR integration framework for robust perception under dense fog conditions. DOI: 10.3390/s26123728.',
      image: '/images/Adaptive_Sensor.png',
      highlights: ['Sensors', 'Journal Article', 'Vision-LiDAR Fusion', 'Robust Perception'],
    },
    {
      organization: 'Noise-Robust Instrument Classification under Real-World SNR Conditions',
      role: 'SSRN Electronic Journal',
      period: '2025',
      description: 'Guo, Z., Zhong, J., and Chen, S. A study on robust MIR classification under challenging real-world noise conditions.',
      image: '/images/NoisyInstruments.png',
      highlights: ['SSRN', 'PDF available', 'Robust MIR'],
    },
  ];

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
              Publications
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

          {/* Collaborations Grid */}
          <div className="space-y-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.organization}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden border border-border shadow-2xl hover:border-primary/40 transition-all duration-500">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Image Section */}
                    <div className="lg:col-span-2 relative h-64 md:h-72 lg:h-72 overflow-hidden">
                      <ImageWithFallback
                        src={collab.image}
                        alt={`${collab.organization} - Collaboration`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent lg:from-transparent lg:via-transparent lg:to-background/90" />
                      
                      {/* Role badge on image */}
                      <motion.div
                        className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      >
                        <FileText size={18} className="text-primary-foreground" />
                        <span className="text-sm text-primary-foreground">{collab.role}</span>
                      </motion.div>

                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                      <motion.div
                        className="flex items-center justify-between mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                      >
                        <h3 className="group-hover:text-primary transition-colors duration-300">
                          {collab.organization}
                        </h3>
                        <div className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                          <span className="text-sm text-primary">{collab.period}</span>
                        </div>
                      </motion.div>

                      <motion.p
                        className="text-muted-foreground leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                      >
                        {collab.description}
                      </motion.p>

                      {/* Highlights */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
                      >
                        <h4 className="text-sm mb-3 text-foreground/80">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {collab.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={highlight}
                              className="px-3 py-1.5 bg-muted rounded-lg border border-border text-sm text-foreground/80 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.4, delay: 1.2 + index * 0.2 + hIndex * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {highlight}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
