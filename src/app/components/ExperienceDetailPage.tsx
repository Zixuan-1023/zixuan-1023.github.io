import { ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { experiences } from '../data/experiences';

type ExperienceDetailPageProps = {
  slug: string;
  fromHome?: boolean;
};

export function ExperienceDetailPage({ slug, fromHome = false }: ExperienceDetailPageProps) {
  const item = experiences.find((experience) => experience.slug === slug);

  const goBack = () => {
    if (fromHome && sessionStorage.getItem('homeScrollY')) {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
    }
    window.location.hash = '#/';
  };

  if (!item) {
    return (
      <section className="min-h-screen py-20 bg-[#101116]">
        <div className="container mx-auto px-4 max-w-3xl">
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
          <h2 className="mb-3">Experience Not Found</h2>
          <p className="text-muted-foreground">
            This experience link is unavailable. Please return to the homepage.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-[#101116]">
      <div className="container mx-auto px-4 max-w-5xl">
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

        <article className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-2xl">
          <div className="flex gap-5 items-start">
            <div className="w-16 h-16 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary font-semibold shrink-0 overflow-hidden">
              {item.logoPath ? (
                <ImageWithFallback
                  src={item.logoPath}
                  alt={`${item.company} logo`}
                  className="w-full h-full object-cover"
                />
              ) : (
                item.initials
              )}
            </div>

            <div className="flex-1 space-y-1">
              <h2 className="mb-1">{item.role}</h2>
              <p className="text-foreground/90">{item.meta}</p>
              <p className="text-primary text-sm">{item.period}</p>
              <p className="text-sm text-muted-foreground mb-4">{item.location}</p>

              <div className="pt-1 space-y-3">
                {item.bullets.map((bullet) => (
                  <p key={bullet} className="text-sm text-muted-foreground leading-relaxed">
                    • {bullet}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
