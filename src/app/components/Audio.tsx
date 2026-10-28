import { motion, useInView } from 'motion/react';
import { Calendar, Music2 } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { audioItems } from '../data/recordings';
import { featuredCompositionItems } from '../data/compositions';

export function Audio() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const visibleRecordingItems = audioItems.slice(0, 3);

  const goToAllRecordings = () => {
    sessionStorage.setItem('homeScrollY', String(window.scrollY));
    window.location.hash = '#/recordings?from=home';
  };

  const goToAllCompositions = () => {
    sessionStorage.setItem('homeScrollY', String(window.scrollY));
    window.location.hash = '#/compositions?from=home';
  };

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
            <motion.a
              href="#/recordings?from=home"
              onClick={(event) => {
                event.preventDefault();
                goToAllRecordings();
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full border border-border bg-card text-foreground/90 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              View All
            </motion.a>
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
          {featuredCompositionItems.map((item, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href="#/compositions?from=home"
            onClick={(event) => {
              event.preventDefault();
              goToAllCompositions();
            }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2.5 rounded-full border border-border bg-card text-foreground/90 hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            View All
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
