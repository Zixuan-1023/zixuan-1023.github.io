export type Project = {
  slug: string;
  title: string;
  period: string;
  track: 'Research' | 'ML Engineering' | 'Music Technology';
  image: string;
  externalUrl: string;
  externalLabel: string;
  summary: string;
  overview: string;
  methodology: string;
  results: string;
  implementation: string;
};

export const projects: Project[] = [
  {
    slug: 'noise-robust-instrument-classification',
    title: 'Noise-Robust Musical Instrument Classification',
    period: 'Spring 2025',
    track: 'Research',
    image: '/images/NoisyInstruments.png',
    externalUrl: 'https://github.com/Zixuan-1023/Noisy_Instruments_Classification.git',
    externalLabel: 'GitHub',
    summary:
      'Low-SNR musical instrument recognition with CLAP-based representations and noise-aware training.',
    overview:
      'This project studies robust musical instrument recognition under low-SNR and real-world noise conditions.',
    methodology:
      'Built a classifier on MUSAN-mixed Medley-solos-DB using LAION-CLAP embeddings, curriculum noise scheduling, and TCN/Transformer sequence modeling.',
    results:
      'Added harmonic fallback and noise negatives to stabilize predictions under distortion and background interference.',
    implementation:
      'Implemented reproducible training/evaluation workflows with PyTorch and experiment tracking for architecture and noise-level ablations.',
  },
  {
    slug: 'low-label-acoustic-representation-learning',
    title: 'Low-Label Acoustic Representation Learning under DCASE Constraints',
    period: 'Spring 2026',
    track: 'Research',
    image: '/images/dcase.png',
    externalUrl: 'https://github.com/Zixuan-1023/dcase-rsc-project.git',
    externalLabel: 'GitHub',
    summary:
      'Representation learning and deterministic benchmarking under low-label and edge-compute constraints.',
    overview:
      'This project explores how acoustic models learn under strict DCASE constraints and limited labels.',
    methodology:
      'Reproduced ConvMixer+RSC and extended with controlled ablations across ConvMixer, EfficientLEAF, and ECA modules.',
    results:
      'Improved macro accuracy in 5% label settings while reducing compute cost through architecture and frontend design choices.',
    implementation:
      'Built deterministic pipelines for repeatable experiments, low-label data splits, and edge-aware evaluation.',
  },
  {
    slug: 'pitch-tracking-under-non-ideal-conditions',
    title: 'Pitch Tracking under Non-Ideal Conditions',
    period: 'Fall 2025',
    track: 'Research',
    image: '/images/PitchTracking.png',
    externalUrl: 'https://github.com/HQQHQ/Benchmark-PitchTracking-in-Non-ideal-Conditions.git',
    externalLabel: 'GitHub',
    summary:
      'Robustness benchmarking for pitch tracking models under noise, detuning, and distortion.',
    overview:
      'This project builds a consistent benchmark for pitch tracking in non-ideal acoustic conditions.',
    methodology:
      'Constructed MedleyDB-Pitch perturbation sets and standardized heterogeneous outputs from pYIN, CREPE, and Basic Pitch.',
    results:
      'Compared OA/RPA/RCA/VR across perturbation types to characterize model-specific failure modes and robustness tradeoffs.',
    implementation:
      'Created a reproducible evaluation suite that normalizes model outputs and metrics in one pipeline.',
  },
  {
    slug: 'controllable-symbolic-music-generation',
    title: 'Master’s Thesis | Controllable Symbolic Music Generation',
    period: 'Spring 2026',
    track: 'Research',
    image: '/images/SymbolicGeneration.png',
    externalUrl: 'https://github.com/Zixuan-1023/Symbolic_Generation.git',
    externalLabel: 'GitHub',
    summary:
      'Symbolic generation and transformation system for controllable human-AI music creation.',
    overview:
      'This thesis investigates symbolic representations and control mechanisms for practical music generation workflows.',
    methodology:
      'Developed a hybrid MuseCoco + constraint-based + AR-VAE pipeline and integrated structured generation controls.',
    results:
      'Improved New-mode constraint success from 48% to 76% and validated interaction quality in user evaluation.',
    implementation:
      'Deployed the system as a JUCE DAW plugin with a backend inference service for real-world creative use.',
  },
  {
    slug: 'domain-adversarial-transfer-learning',
    title: 'Domain-Adversarial Transfer Learning',
    period: 'Spring 2024',
    track: 'ML Engineering',
    image: '/images/domaintransfer.png',
    externalUrl: 'https://github.com/Zixuan-1023/Domain-Adversarial-Transfer-Learning-.git',
    externalLabel: 'GitHub',
    summary:
      'Intermediate-domain adaptation with augmentation-aware adversarial transfer learning.',
    overview:
      'This project targets source-target domain mismatch with stronger intermediate adaptation strategies.',
    methodology:
      'Extended DANN with Mixup/CutMixup and evaluated transfer behavior on Office-31, ImageCLEF, and OfficeHome.',
    results:
      'Observed substantial accuracy gains, including +18.16 pp improvement on ImageCLEF under domain shift settings.',
    implementation:
      'Built benchmark scripts, training loops, and cross-dataset evaluation tooling for reproducible transfer experiments.',
  },
  {
    slug: 'audio-visualizer-juce-plugin',
    title: 'Audio Visualizer JUCE Plugin',
    period: 'Fall 2025',
    track: 'Music Technology',
    image: '/images/AudioVisualizer.png',
    externalUrl: 'https://github.com/Zixuan-1023/AudioVisualizer',
    externalLabel: 'GitHub',
    summary:
      'Real-time audio-reactive visualization plugin for DAW-based music workflows.',
    overview:
      'This project links musical signals to expressive visual behavior in a production-ready plugin context.',
    methodology:
      'Mapped continuous audio features to a physically inspired particle system and designed latent emotion controls.',
    results:
      'Enabled smooth real-time audiovisual response and higher-level performance-oriented visual modulation.',
    implementation:
      'Implemented in JUCE/C++ with DAW integration and low-latency rendering for interactive use.',
  },
  {
    slug: 'monophonic-midi-synthesizer-maxmsp',
    title: 'Monophonic MIDI Synthesizer (Max/MSP)',
    period: 'Fall 2025',
    track: 'Music Technology',
    image: '/images/Max%20Synth.png',
    externalUrl: 'https://github.com/Zixuan-1023/Monophonic-MIDI-Synthesizer',
    externalLabel: 'GitHub',
    summary:
      'Interactive monophonic instrument design for performance and sound synthesis studies.',
    overview:
      'This project focuses on foundational synthesis architecture in an interactive Max/MSP instrument.',
    methodology:
      'Combined waveform selection, ADSR, LFO, overdrive, filtering, and time-based effects in a modular signal chain.',
    results:
      'Produced stable real-time performance behavior suitable for educational demonstrations and creative prototyping.',
    implementation:
      'Implemented entirely in Max/MSP with controllable synthesis modules and performer-facing controls.',
  },
  {
    slug: 'image-based-interactive-music-system',
    title: 'Image-Based Interactive Music System',
    period: 'Fall 2024',
    track: 'Music Technology',
    image: '/images/InteractiveGeneration.png',
    externalUrl: 'https://drive.google.com/file/d/1TyujxVXRZVkRDKZgBPpPKhxTOhaMo3Mw/view',
    externalLabel: 'Watch Video',
    summary:
      'Realtime image-to-audio mapping for interactive multimedia expression.',
    overview:
      'This project explores cross-modal interaction by turning visual features into dynamic musical control signals.',
    methodology:
      'Extracted image descriptors such as color, brightness, saturation, and position to drive mapped audio parameters.',
    results:
      'Demonstrated responsive audiovisual behavior in interactive scenarios with intuitive visual-to-sound coupling.',
    implementation:
      'Built in Max/MSP as a real-time system suitable for creative coding and live demonstrations.',
  },
];

export const featuredProjectSlugs = [
  'controllable-symbolic-music-generation',
  'noise-robust-instrument-classification',
  'low-label-acoustic-representation-learning',
];

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));
