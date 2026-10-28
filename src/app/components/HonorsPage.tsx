import { Award, ChevronLeft, Trophy } from 'lucide-react';
import { honors } from '../data/honors';
import { ImageWithFallback } from './figma/ImageWithFallback';

type HonorsPageProps = {
  fromHome?: boolean;
};

export function HonorsPage({ fromHome = false }: HonorsPageProps) {
  const goBack = () => {
    if (fromHome && sessionStorage.getItem('homeScrollY')) {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
    }
    window.location.hash = '#/';
  };

  return (
    <section className="py-20 bg-[#121318] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
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

          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <Trophy size={30} className="text-primary" />
            </div>
            <h2>Honors &amp; Awards</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6" />
          </div>

          <div className="space-y-7">
            {honors.map((honor, index) => (
              <article
                key={honor.title}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
              >
                <div className={`grid md:grid-cols-[0.9fr_1.1fr] ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative flex items-center justify-center px-2 md:px-3 py-4 md:py-5 bg-gradient-to-br from-white/[0.05] to-transparent ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <ImageWithFallback
                      src={honor.imagePath ?? ''}
                      alt={`${honor.title} thumbnail`}
                      className="w-[88%] h-auto max-h-[320px] object-contain rounded-md"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 via-background/5 to-transparent" />
                    <div className="absolute top-6 left-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                      <Award size={20} className="text-primary-foreground" />
                    </div>
                  </div>

                  <div className={`p-6 md:p-8 md:flex md:flex-col md:justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs text-primary">
                        {honor.year}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
                        {honor.category}
                      </span>
                    </div>

                    <h3 className="mb-3">{honor.title}</h3>
                    <p className="text-sm text-primary mb-2">{honor.issuer}</p>
                    <p className="text-sm text-foreground/80 mb-4">{honor.associatedWith}</p>

                    <div className="space-y-2">
                      {honor.description.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
