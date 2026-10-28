import { BookCheck, ChevronLeft, ExternalLink } from 'lucide-react';
import { academicServiceItems, certificationItem } from '../data/academicService';

type AcademicServicePageProps = {
  fromHome?: boolean;
};

export function AcademicServicePage({ fromHome = false }: AcademicServicePageProps) {
  const goBack = () => {
    if (fromHome && sessionStorage.getItem('homeScrollY')) {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
    }
    window.location.hash = '#/';
  };

  const goToCertifications = () => {
    window.location.hash = `#/certifications?from=service${fromHome ? '&home=1' : ''}`;
  };

  return (
    <section className="min-h-screen py-20 bg-[#101116] relative overflow-hidden">
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

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <BookCheck size={28} className="text-primary" />
          </div>
          <h2 className="mb-4">Academic Service</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto" />
        </div>

        <div className="space-y-6">
          {academicServiceItems.map((item) => (
            <article key={item.organization} className="bg-card border border-border rounded-xl p-6 md:p-7 shadow-xl">
              <h3 className="mb-2">{item.organization}</h3>
              <p className="text-sm text-primary mb-3">{item.role} · {item.period}</p>
              <div className="space-y-2">
                {item.details.map((detail) => (
                  <p key={detail} className="text-sm text-muted-foreground leading-relaxed">• {detail}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`#/certifications?from=service${fromHome ? '&home=1' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              goToCertifications();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-card text-foreground/90 hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            View Certification
            <ExternalLink size={14} />
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Certification: {certificationItem.name} · {certificationItem.issuer}
        </p>
      </div>
    </section>
  );
}
