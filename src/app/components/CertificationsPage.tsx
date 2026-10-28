import { ChevronLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationItem } from '../data/academicService';

type CertificationsPageProps = {
  fromService?: boolean;
  fromHome?: boolean;
};

export function CertificationsPage({ fromService = false, fromHome = false }: CertificationsPageProps) {
  const goBack = () => {
    if (fromService) {
      window.location.hash = fromHome ? '#/service?from=home' : '#/service';
      return;
    }

    if (fromHome && sessionStorage.getItem('homeScrollY')) {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
    }
    window.location.hash = '#/';
  };

  return (
    <section className="min-h-screen py-20 bg-[#101116] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <a
          href={fromService ? (fromHome ? '#/service?from=home' : '#/service') : '#/'}
          onClick={(event) => {
            event.preventDefault();
            goBack();
          }}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          {fromService ? 'Back to Academic Service' : 'Back to Home'}
        </a>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <ShieldCheck size={28} className="text-primary" />
          </div>
          <h2 className="mb-4">Licenses &amp; Certifications</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto" />
        </div>

        <article className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-xl">
          <h3 className="mb-2">{certificationItem.name}</h3>
          <p className="text-sm text-primary mb-2">{certificationItem.issuer}</p>
          <p className="text-sm text-muted-foreground mb-2">
            {certificationItem.issueDate} - {certificationItem.expirationDate}
          </p>
          <p className="text-sm text-muted-foreground mb-4">Credential ID: {certificationItem.credentialId}</p>

          <a
            href={certificationItem.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Verify Credential
            <ExternalLink size={14} />
          </a>
        </article>
      </div>
    </section>
  );
}
