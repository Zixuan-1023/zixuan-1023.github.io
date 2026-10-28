import { BookOpen, ChevronLeft, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { publications } from '../data/publications';
import { ImageWithFallback } from './figma/ImageWithFallback';

type PublicationsPageProps = {
  fromHome?: boolean;
};

export function PublicationsPage({ fromHome = false }: PublicationsPageProps) {
  const goBack = () => {
    if (fromHome && sessionStorage.getItem('homeScrollY')) {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
    }
    window.location.hash = '#/';
  };

  return (
    <section className="py-20 bg-[#121318] relative overflow-hidden">
      <motion.div
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
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

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <BookOpen size={36} className="text-primary" />
            </div>
            <h2 className="mb-4">Publications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Papers and publication-oriented research outputs
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto" />
          </div>

          <div className="space-y-8">
            {publications.map((collab, index) => (
              <div key={`${collab.organization}-wrap`} className="space-y-4">
                {(index === 0 || collab.section !== publications[index - 1].section) && (
                  <h3 className="text-xl text-primary/90">{collab.section}</h3>
                )}

                <div className="group">
                  <div className="bg-card rounded-lg overflow-hidden border border-border shadow-2xl hover:border-primary/40 transition-all duration-500">
                    <div className="grid lg:grid-cols-5 gap-0">
                      <div className="lg:col-span-2 relative h-64 md:h-72 lg:h-72 overflow-hidden">
                        <ImageWithFallback
                          src={collab.image}
                          alt={`${collab.organization} - Collaboration`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent lg:from-transparent lg:via-transparent lg:to-background/90" />

                        <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                          <FileText size={18} className="text-primary-foreground" />
                          <span className="text-sm text-primary-foreground">{collab.role}</span>
                        </div>
                      </div>

                      <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="group-hover:text-primary transition-colors duration-300">
                            {collab.publicationUrl ? (
                              <a
                                href={collab.publicationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                              >
                                {collab.organization}
                              </a>
                            ) : (
                              collab.organization
                            )}
                          </h3>
                          <div className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                            <span className="text-sm text-primary">{collab.period}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">{collab.description}</p>

                        {collab.publicationUrl && (
                          <a
                            href={collab.publicationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mb-4 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink size={15} />
                            Open Publication
                          </a>
                        )}

                        <div>
                          <h4 className="text-sm mb-3 text-foreground/80">Keywords</h4>
                          <div className="flex flex-wrap gap-2">
                            {collab.highlights.map((highlight) => (
                              <div
                                key={highlight}
                                className="px-3 py-1.5 bg-muted rounded-lg border border-border text-sm text-foreground/80 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300"
                              >
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
