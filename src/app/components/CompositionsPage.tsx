import { ChevronLeft, Music2 } from 'lucide-react';
import { motion } from 'motion/react';
import { compositionItems } from '../data/compositions';
import { ImageWithFallback } from './figma/ImageWithFallback';

type CompositionsPageProps = {
  fromHome?: boolean;
};

export function CompositionsPage({ fromHome = false }: CompositionsPageProps) {
  const goBack = () => {
    if (fromHome && sessionStorage.getItem('homeScrollY')) {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
    }
    window.location.hash = '#/';
  };

  return (
    <section className="min-h-screen py-20 bg-[#0f0f12] relative overflow-hidden">
      <motion.div
        className="absolute top-12 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <a
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            goBack();
          }}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Back to Home
        </a>

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Music2 size={28} className="text-primary" />
          </div>
          <h2 className="mb-4">Compositions</h2>
          <p className="text-muted-foreground mt-3 max-w-4xl mx-auto">
            Creative practice alongside research: electronic and experimental productions,
            piano-centered writing, interactive audio pieces, and audiovisual sketch work developed
            across coursework and independent projects.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6" />
        </div>

        <div className="space-y-6">
          {compositionItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
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
