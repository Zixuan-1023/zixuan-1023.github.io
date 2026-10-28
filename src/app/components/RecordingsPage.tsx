import { Calendar, ChevronLeft, Music2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { audioItems } from '../data/recordings';

type RecordingsPageProps = {
  fromHome?: boolean;
};

export function RecordingsPage({ fromHome = false }: RecordingsPageProps) {
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

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Music2 size={28} className="text-primary" />
          </div>
          <h2 className="mb-4">Recordings</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Multi-microphone ensemble recordings captured at NYU Dolan and Paulson Studios using
            Tonmeister techniques. Selected production demos are also included. Full session
            materials can be shared on request.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {audioItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
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
      </div>
    </section>
  );
}
