import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, FolderKanban, Link2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { featuredProjects } from '../data/projects';

export function Performances() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const saveHomeScroll = () => {
    sessionStorage.setItem('homeScrollY', String(window.scrollY));
  };

  const goToProjectDetailFromHome = (slug: string) => {
    saveHomeScroll();
    window.location.hash = `#/projects/${slug}?from=home`;
  };

  const goToAllProjectsFromHome = () => {
    saveHomeScroll();
    window.location.hash = '#/projects?from=home';
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#121318] relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FolderKanban size={28} className="text-primary" />
            </motion.div>
            <motion.h2
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Projects
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="mt-5 text-sm text-muted-foreground max-w-2xl mx-auto">
              Featured projects for quick browsing. Open each project for methods, results, and implementation details.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative bg-card rounded-lg overflow-hidden border border-border shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {project.image ? (
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.title} - Project`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/40 border-b border-dashed border-primary/40 flex items-center justify-center px-4 text-center">
                      <span className="text-sm text-muted-foreground">Project image placeholder</span>
                    </div>
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Date Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                  >
                    <Calendar size={14} className="text-primary-foreground" />
                    <span className="text-xs text-primary-foreground">{project.track}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <a
                    href={`#/projects/${project.slug}?from=home`}
                    onClick={(event) => {
                      event.preventDefault();
                      goToProjectDetailFromHome(project.slug);
                    }}
                    className="block mb-3"
                  >
                    <h3 className="group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </a>
                  
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                    <Calendar size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{project.period}</span>
                  </div>

                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Link2 size={16} className="flex-shrink-0" />
                    <span className="text-sm">{project.externalLabel}</span>
                  </a>

                  {/* Bottom Accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>

              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 text-center"
          >
            <a
              href="#/projects?from=home"
              onClick={(event) => {
                event.preventDefault();
                goToAllProjectsFromHome();
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
