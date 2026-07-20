import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cpu, AudioWaveform, Workflow } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const awards = [
    {
      title: 'Interactive Music Generation via Image-Based Mapping',
      year: 'System',
      category: 'Max/MSP',
      description: 'Cross-modal control system mapping image features to synthesis parameters for real-time interaction.',
      image: '/images/InteractiveGeneration.png',
      icon: Cpu,
      color: 'from-yellow-500/20 to-yellow-700/20',
    },
    {
      title: 'Monophonic MIDI Synthesizer',
      year: 'System',
      category: 'Max/MSP',
      description: 'A modular DSP instrument with ADSR, LFO, nonlinear saturation, and time-based effects for controlled timbre studies.',
      image: '/images/Max%20Synth.png',
      icon: Workflow,
      color: 'from-blue-500/20 to-blue-700/20',
    },
    {
      title: 'Audio Visualizer JUCE Plugin',
      year: 'System',
      category: 'JUCE',
      description: 'Real-time feature-driven visual engine in DAW with optional latent emotion conditioning for macro behavior.',
      image: '/images/AudioVisualizer.png',
      icon: AudioWaveform,
      color: 'from-slate-400/20 to-slate-600/20',
    },
  ];

  return (
    <section id="awards" ref={ref} className="py-20 bg-card/30 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
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
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Music Technology Systems
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Engineering-oriented creative systems for interactive music and audio workflows
            </motion.p>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          {/* Awards List */}
          <div className="space-y-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                className="group"
              >
                <div className={`grid md:grid-cols-2 gap-8 bg-card rounded-lg overflow-hidden border border-border shadow-2xl ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}>
                  {/* Image Side */}
                  <div className={`relative h-80 overflow-hidden ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src={award.image}
                        alt={`${award.title} - Award`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-40`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                    </div>

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute top-6 left-6 w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-primary-foreground/20"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <award.icon size={28} className="text-primary-foreground" />
                    </motion.div>

                  </div>

                  {/* Content Side */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <motion.div
                      className="inline-flex items-center gap-2 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    >
                      <div className="px-3 py-1 bg-primary/20 rounded-full border border-primary/40">
                        <span className="text-sm text-primary">{award.year}</span>
                      </div>
                      <div className="px-3 py-1 bg-card rounded-full border border-border">
                        <span className="text-sm text-muted-foreground">{award.category}</span>
                      </div>
                    </motion.div>

                    <motion.h3
                      className="mb-4 group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    >
                      {award.title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                    >
                      {award.description}
                    </motion.p>

                    {/* Decorative Element */}
                    <motion.div
                      className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
