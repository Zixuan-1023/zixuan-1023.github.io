import { motion, useInView } from 'motion/react';
import { Calendar, Music2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type AudioItem = {
  title: string;
  period: string;
  note: string;
  audioPath: string;
  imagePath?: string;
};

type CompositionItem = {
  title: string;
  period: string;
  description: string;
  audioPath?: string;
  imagePath?: string;
  imagePosition?: string;
  link?: string;
  linkLabel?: string;
};

const audioItems: AudioItem[] = [
  {
    title: 'String Trio',
    period: 'June 4, 2025',
    note: 'Stereo recording at Dolan recording studio',
    audioPath: '/audio/StringTrio.mp3',
    imagePath: '/images/stringTrio.png',
  },
  {
    title: 'Piano Solo',
    period: 'June 5, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/PianoSolo.mp3',
    imagePath: '/images/pianoSolo.png',
  },
  {
    title: 'Piano Trio',
    period: 'June 6, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/PianoTrio.mp3',
    imagePath: '/images/pianoTrio.png',
  },
  {
    title: 'Guitar Violin Tango',
    period: 'June 10, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/GuitarViolinTango.mp3',
    imagePath: '/images/guitarViolinTango.png',
  },
  {
    title: 'Percussion Trio',
    period: 'June 11, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/PercussionTrio.mp3',
    imagePath: '/images/percussionTrio.png',
  },
  {
    title: 'Jazz Organ',
    period: 'June 12, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/JazzOrgan.mp3',
    imagePath: '/images/jazzOrgan.png',
  },
  {
    title: 'Marimba Quintet',
    period: 'June 17, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/MarimbaQuintet.mp3',
    imagePath: '/images/MarimbaQuintet.png',
  },
  {
    title: 'Wind Quintet',
    period: 'June 18, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/WindQuentet.mp3',
    imagePath: '/images/windquintet.png',
  },
  {
    title: 'Jazz Sextet',
    period: 'June 23, 2025',
    note: '3D recording at 370 Jay Street',
    audioPath: '/audio/JazzSextet.mp3',
    imagePath: '/images/JazzSextet.png',
  },
  {
    title: 'Eastern Folk',
    period: 'June 24, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/EasternFolk.mp3',
    imagePath: '/images/EasternFolk.png',
  },
  {
    title: 'Quartango',
    period: 'June 25, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/Quartango%20.mp3',
    imagePath: '/images/Quartango.png',
  },
  {
    title: 'Brass Quartet',
    period: 'June 26, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/BrassQuartet.mp3',
    imagePath: '/images/BrassQuartet.png',
  },
];

const compositionItems: CompositionItem[] = [
  {
    title: 'Misty Forest',
    period: 'December 2024',
    description: 'Live sound processing in Max/MSP with clarinet material and MIDI keyboard control.',
    imagePath: '/images/mistyforest.JPG',
    link: 'https://drive.google.com/file/d/1WbNbeAdn0Ur-jCnHQwMYf94Q1NTPanlA/view?usp=sharing',
    linkLabel: 'Watch Video',
  },
  {
    title: 'Lonely Travel',
    period: 'September 2022',
    description: 'Original experimental piece depicting a solitary journey.',
    imagePath: '/images/lonelytravel.png',
    imagePosition: 'center 32%',
    link: 'https://soundcloud.com/x3kus4lyferg/lonely-travelzixuan-guo/s-p1dvk2QNHXc?si=eb69c73e05524f0981aeb11e728773dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    linkLabel: 'SoundCloud',
  },
  {
    title: 'Dancing in the Rain',
    period: 'April 2023',
    description: 'Instrumental piano composition inspired by a rainy city walk.',
    imagePath: '/images/dancingintherain.jpg',
    link: 'https://music.163.com/#/song?id=2037854978',
    linkLabel: 'NetEase Music',
  },
  {
    title: 'Breaking Free',
    period: 'January 2024',
    description: 'Early EDM production experiment combining live guitar, vocals, and electronic arrangement.',
    imagePath: '/images/breakingfree.jpeg',
    audioPath: '/audio/Breaking%20Free%E6%B7%B7%E9%9F%B324.1.12.mp3',
  },
  {
    title: 'Playing Bass in a Mountain',
    period: 'February 2024',
    description: 'Mixed media playing with bass guitar and MIDI keyboard.',
    imagePath: '/images/PlayingBass.png',
    link: 'https://drive.google.com/file/d/1VccAunN-d9St-IpUV4t4oykC-xq7hWeY/view',
    linkLabel: 'Watch Video',
  },
  {
    title: 'The Evil Within 2 Trailer Soundtrack',
    period: 'October 2023',
    description: 'Original soundtrack composition.',
    imagePath: '/images/theevilwithin2.jpeg',
    link: 'https://drive.google.com/file/d/1vblBLnAz_0w1KRGSQpfg43YEfnx_ey83/view',
    linkLabel: 'Watch Video',
  },
  {
    title: 'Walking Through the Dark',
    period: 'November 2024',
    description: 'Code music composed and played in SuperCollider.',
    imagePath: '/images/walkingthroughthedark.png',
    link: 'https://drive.google.com/file/d/1M4xdQEVmX5z_XDGprVyPCwwtLLL8Ll4v/view',
    linkLabel: 'Watch Video',
  },
];

export function Audio() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [showAllRecordings, setShowAllRecordings] = useState(false);

  const visibleRecordingItems = showAllRecordings ? audioItems : audioItems.slice(0, 3);

  return (
    <section id="audio" ref={sectionRef} className="py-20 bg-[#0f0f12] relative overflow-hidden">
      <motion.div
        className="absolute top-12 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Music2 size={28} className="text-primary" />
          </motion.div>
          <h2 className="mb-4">Recordings</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Multi-microphone ensemble recordings captured at NYU Dolan and Paulson Studios using Tonmeister techniques.
            Selected production demos are also included. Full session materials can be shared on request.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visibleRecordingItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="bg-card border border-border rounded-2xl p-4 md:p-5 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 md:h-44 overflow-hidden rounded-xl border border-border bg-muted/60 mb-4">
                {item.imagePath ? (
                  <ImageWithFallback
                    src={item.imagePath}
                    alt={`${item.title} session diagram`}
                    className="w-full h-full object-contain p-1.5"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Music2 size={28} />
                  </div>
                )}
              </div>

              <h3 className="text-xl mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar size={14} />
                <span>{item.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{item.note}</p>

              <audio controls preload="none" className="w-full" aria-label={`${item.title} audio preview`}>
                <source src={item.audioPath} type="audio/mpeg" />
                Your browser does not support audio playback.
              </audio>
            </motion.article>
          ))}
        </div>

        {audioItems.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <motion.button
              type="button"
              onClick={() => setShowAllRecordings((prev) => !prev)}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full border border-border bg-card text-foreground/90 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              {showAllRecordings ? 'Show Less' : 'View All'}
            </motion.button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 mb-10 text-center"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Music2 size={28} className="text-primary" />
          </motion.div>
          <h2 className="mb-4">Compositions</h2>
          <p className="text-muted-foreground mt-3 max-w-4xl mx-auto">
            Creative practice alongside research: electronic and experimental productions, piano-centered writing,
            interactive audio pieces, and audiovisual sketch work developed across coursework and independent projects.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="space-y-6">
          {compositionItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.55, delay: 0.25 + index * 0.06 }}
              className={`bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col`}
            >
              <div className="w-full md:w-4/12 border-b md:border-b-0 md:border-r border-border">
                <div className="h-48 md:h-56 lg:h-60 bg-muted/60 relative overflow-hidden group">
                  {item.imagePath ? (
                    <ImageWithFallback
                      src={item.imagePath}
                      alt={`${item.title} artwork`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground gap-2">
                      <Music2 size={22} />
                      <span className="text-sm">Image placeholder</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-background/20 to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="w-full md:w-8/12 p-5 md:p-6">
                <h4 className="text-xl mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                {item.audioPath ? (
                  <audio controls preload="none" className="w-full" aria-label={`${item.title} audio preview`}>
                    <source src={item.audioPath} type="audio/mpeg" />
                    Your browser does not support audio playback.
                  </audio>
                ) : item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Music2 size={16} />
                    {item.linkLabel ?? 'Open Link'}
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
