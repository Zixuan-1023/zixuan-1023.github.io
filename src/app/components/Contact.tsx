import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zg2759@nyu.edu',
      href: 'mailto:zg2759@nyu.edu',
    },
    {
      icon: MapPin,
      label: 'Based in',
      value: 'Columbus OH',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Zixuan-1023',
      username: '@Zixuan-1023',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zixuan-guo-a27bb9347/',
      username: 'zixuan-guo-a27bb9347',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(139, 38, 53, 0.15) 0%, transparent 50%)',
        }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact
          </motion.h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h3
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Get in Touch
              </motion.h3>
              <motion.p
                className="mb-8 text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                For research collaboration, engineering projects, or music technology work,
                feel free to reach out. I am happy to discuss Audio AI, MIR, and interactive
                music systems, or simply connect and play music together.
              </motion.p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      className="flex items-center justify-center w-14 h-14 bg-primary/20 rounded-full flex-shrink-0 shadow-lg relative overflow-hidden"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
                      <info.icon size={22} className="text-primary relative z-10" />
                    </motion.div>
                    <div>
                      <p className="text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="hover:text-primary transition-colors text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h4 className="mb-4 text-foreground/80">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg border border-border hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:bg-primary/10">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg relative overflow-hidden group-hover:bg-primary/30 transition-colors duration-300">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
                          <social.icon size={20} className="text-primary relative z-10" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-foreground/80 group-hover:text-primary transition-colors duration-300">
                            {social.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {social.username}
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                className="mt-12 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 bg-card p-8 rounded-lg shadow-2xl border border-border relative overflow-hidden"
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(139, 38, 53, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-input-background border-border focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="bg-input-background border-border focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={5}
                    className="bg-input-background border-border focus:border-primary transition-colors resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    className="w-full relative overflow-hidden group bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: isSubmitting ? ['-100%', '100%'] : 0,
                      }}
                      transition={{
                        duration: 1,
                        repeat: isSubmitting ? Infinity : 0,
                        ease: "linear",
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send size={18} />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
