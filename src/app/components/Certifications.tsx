import { motion, useInView } from 'motion/react';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

type CertificationItem = {
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate: string;
  credentialId: string;
  credentialUrl: string;
};

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const items: CertificationItem[] = [
    {
      name: 'Social & Behavioral Research',
      issuer: 'CITI Program',
      issueDate: 'Apr 2025',
      expirationDate: 'Apr 2028',
      credentialId: '68871472',
      credentialUrl:
        'https://www.citiprogram.org/verify/?kdf358d8b-962d-477e-814d-69aaab7393ef-68871472',
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 bg-[#0A0B0F] relative overflow-hidden">
      <motion.div
        className="absolute bottom-10 left-10 w-[360px] h-[360px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ShieldCheck size={28} className="text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4"
            >
              Licenses & Certifications
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <div className="space-y-7">
            {items.map((item, index) => (
              <motion.article
                key={`${item.name}-${item.credentialId}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-2xl"
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs text-primary">
                    Active
                  </span>
                  <span className="px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
                    Certification
                  </span>
                </div>

                <h3 className="mb-3">{item.name}</h3>
                <p className="text-sm text-primary mb-2">{item.issuer}</p>
                <p className="text-sm text-foreground/80 mb-4">
                  {item.issueDate} - {item.expirationDate}
                </p>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Credential ID: {item.credentialId}
                  </p>
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Verify Credential
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
