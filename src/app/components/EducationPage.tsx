import { ChevronLeft, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { educationItems } from '../data/education';

type EducationPageProps = {
  fromHome?: boolean;
};

export function EducationPage({ fromHome = false }: EducationPageProps) {
  const goBack = () => {
    if (fromHome && sessionStorage.getItem('homeScrollY')) {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
    }
    window.location.hash = '#/';
  };

  return (
    <section className="py-20 bg-[#101116] relative overflow-hidden">
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
              <GraduationCap size={30} className="text-primary" />
            </div>
            <h2>Education</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationItems.map((item) => (
              <article
                key={item.school}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="relative h-40 bg-primary/10 border-b border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    {item.logoPath ? (
                      <ImageWithFallback
                        src={item.logoPath}
                        alt={`${item.school} logo`}
                        className="max-h-24 w-auto object-contain"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary font-semibold">
                        {item.initials}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3>{item.school}</h3>
                  <p className="text-foreground/90">{item.degree}</p>
                  <p className="text-sm text-primary">{item.period}</p>
                  {item.summary ? <p className="text-sm text-muted-foreground">{item.summary}</p> : null}
                  <div className="pt-1 space-y-2">
                    {item.details?.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
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
