import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, FolderKanban, Link2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Performances() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Generative AI Developer | Master’s Thesis: Controllable Symbolic Music Generation',
      period: 'May 2026',
      track: 'Thesis',
      description: 'Built a decoupled controllable symbolic generation framework with proposal + rule-based post-processing, plus AR-VAE transformation editing. Developed a JUCE DAW plugin + backend inference loop, improving New-mode controllability from 48% to 76% and validating usability in a 7-participant DAW study.',
      image: '/images/SymbolicGeneration.png',
      github: 'https://github.com/Zixuan-1023/Symbolic_Generation.git',
      linkLabel: 'GitHub',
    },
    {
      title: 'Robust Acoustic Scene Classification Research (DCASE / ConvMixer-RSC)',
      period: 'Spring 2026',
      track: 'Research',
      description: 'Reproduced and extended ConvMixer+RSC for DCASE 2024 Task 1 under strict edge constraints and low-label regimes, with deterministic benchmarking and fair ablation protocols. Added ECA (k=7) and achieved improved 5% macro accuracy (39.29% → 39.69%) while reducing compute (29.4 → 26.5 MMACs).',
      image: '/images/dcase.png',
      github: 'https://github.com/Zixuan-1023/dcase-rsc-project.git',
      linkLabel: 'GitHub',
    },
    {
      title: 'Audio Visualizer JUCE Plugin',
      period: 'December 2025',
      track: 'Music Technology',
      description: 'A real-time JUCE audiovisual plugin that maps continuous audio features to a physically inspired particle system in DAWs. Includes optional latent “Emotion” controls to shape higher-level visual behavior beyond simple reactive rendering.',
      image: '/images/AudioVisualizer.png',
      github: 'https://github.com/Zixuan-1023/AudioVisualizer',
      linkLabel: 'GitHub',
    },
    {
      title: 'Monophonic MIDI Synthesizer (Max/MSP)',
      period: 'December 2025',
      track: 'Music Technology',
      description: 'An interactive monophonic Max/MSP instrument with waveform selection, ADSR, LFO modulation, nonlinear overdrive, filtering, and time-based effects. Supports virtual keyboard and external MIDI performance with modular, bypassable processing stages.',
      image: '/images/Max%20Synth.png',
      github: 'https://github.com/Zixuan-1023/Monophonic-MIDI-Synthesizer',
      linkLabel: 'GitHub',
    },
    {
      title: 'Pitch Tracking in Non-Ideal Conditions',
      period: 'Fall 2025',
      track: 'Research',
      description: 'Created a reproducible MedleyDB-Pitch benchmark with distortion, noise, and detuning perturbations, and standardized heterogeneous outputs for fair comparison. Evaluated pYIN, CREPE, and Basic Pitch with OA/RPA/RCA/VR metrics, finding Basic Pitch most robust under non-ideal conditions.',
      image: '/images/PitchTracking.png',
      github: 'https://github.com/HQQHQ/Benchmark-PitchTracking-in-Non-ideal-Conditions.git',
      linkLabel: 'GitHub',
    },
    {
      title: 'Noise-Robust Musical Instrument Classification',
      period: 'Spring 2025',
      track: 'Research',
      description: 'Developed a low-SNR instrument classifier using LAION-CLAP embeddings and noise-aware curriculum learning on MUSAN-mixed Medley-solos-DB. Compared TCN vs Transformer variants and added harmonic fallback + noise negatives for stronger robustness and rejection behavior.',
      image: '/images/NoisyInstruments.png',
      github: 'https://github.com/Zixuan-1023/Noisy_Instruments_Classification.git',
      linkLabel: 'GitHub',
    },
    {
      title: 'Interactive Music Generation via Image-Based Audio Parameter Mapping',
      period: 'Fall 2024',
      track: 'Music Technology',
      description: 'Explores real-time audiovisual interaction by converting image features (color, brightness, saturation, spatial position) into dynamic audio parameters in Max/MSP. The system continuously maps visual focus to sound behavior in an expressive interactive loop.',
      image: '/images/InteractiveGeneration.png',
      github: 'https://drive.google.com/file/d/1TyujxVXRZVkRDKZgBPpPKhxTOhaMo3Mw/view',
      linkLabel: 'Watch Video',
    },
    {
      title: 'Domain-Adversarial Transfer Learning',
      period: 'Spring 2024',
      track: 'Thesis',
      description: 'Implemented an intermediate-domain transfer strategy on top of DANN using Mixup/CutMixup to reduce source-target mismatch. Evaluations on Office-31, ImageCLEF, and OfficeHome showed significant gains, including +18.16 pp on ImageCLEF.',
      image: '/images/domaintransfer.png',
      github: 'https://github.com/Zixuan-1023/Domain-Adversarial-Transfer-Learning-.git',
      linkLabel: 'GitHub',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#121318] relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
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
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FolderKanban size={28} className="text-primary" />
            </motion.div>
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Projects
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative bg-card rounded-lg overflow-hidden border border-border shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {project.image ? (
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.title} - Project`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/40 border-b border-dashed border-primary/40 flex items-center justify-center px-4 text-center">
                      <span className="text-sm text-muted-foreground">Project image placeholder</span>
                    </div>
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Date Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                  >
                    <Calendar size={14} className="text-primary-foreground" />
                    <span className="text-xs text-primary-foreground">{project.track}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                    <Calendar size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{project.period}</span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-4 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Link2 size={16} className="flex-shrink-0" />
                    <span className="text-sm">{project.linkLabel ?? 'Open Link'}</span>
                  </a>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
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
