import { motion } from 'motion/react';
import { Music, Mail, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Honors', id: 'honors' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Recordings', id: 'audio' },
    { label: 'Publications', id: 'collaborations' },
    { label: 'Service', id: 'service' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'zg2759@nyu.edu',
      href: 'mailto:zg2759@nyu.edu',
    },
    {
      icon: MapPin,
      label: 'Columbus OH',
      href: null,
    },
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle background glow */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg border border-primary/20"
              >
                <Music size={24} className="text-primary" />
              </motion.div>
              <div>
                <h3 className="text-lg">Zixuan Guo</h3>
                <p className="text-sm text-muted-foreground">Audio AI / MIR Research</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Audio AI and music technology researcher focused on controllable generation,
              robust listening, and human-centered creative tools.
            </p>
            {/* Decorative line */}
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"
                    />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon size={18} className="text-primary" />
                      </div>
                      <span className="pt-2 text-sm">{info.label}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0 border border-primary/20">
                        <info.icon size={18} className="text-primary" />
                      </div>
                      <span className="pt-2 text-sm">{info.label}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Zixuan Guo. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Top</span>
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
              <ArrowUp size={16} className="text-primary" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
