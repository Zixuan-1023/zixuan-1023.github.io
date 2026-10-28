import { Calendar, ChevronLeft, ExternalLink, FolderKanban } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';

type ProjectsDirectoryPageProps = {
  fromHome?: boolean;
};

export function ProjectsDirectoryPage({ fromHome = false }: ProjectsDirectoryPageProps) {
  const goBackHome = () => {
    if (sessionStorage.getItem('homeScrollY')) {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
    }
    window.location.hash = '#/';
  };

  const goToProjectDetailFromAll = (slug: string) => {
    sessionStorage.setItem('allProjectsScrollY', String(window.scrollY));
    sessionStorage.setItem('shouldRestoreAllOnReturn', '1');
    window.location.hash = `#/projects/${slug}?from=all${fromHome ? '&fromHome=1' : ''}`;
  };

  return (
    <section className="min-h-screen py-20 bg-[#121318]">
      <div className="container mx-auto px-4 max-w-6xl">
        <a
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            goBackHome();
          }}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Back to Home
        </a>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <FolderKanban size={28} className="text-primary" />
          </div>
          <h2 className="mb-3">All Projects</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Explore project overviews first, then open details for methodology, results, and implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-xl"
            >
              <a
                href={`#/projects/${project.slug}?from=all${fromHome ? '&fromHome=1' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  goToProjectDetailFromAll(project.slug);
                }}
                className="block"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} - Project`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
              </a>

              <div className="p-5">
                <a
                  href={`#/projects/${project.slug}?from=all${fromHome ? '&fromHome=1' : ''}`}
                  onClick={(event) => {
                    event.preventDefault();
                    goToProjectDetailFromAll(project.slug);
                  }}
                  className="block mb-3"
                >
                  <h3 className="hover:text-primary transition-colors">{project.title}</h3>
                </a>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={14} className="text-primary" />
                  <span className="text-sm">{project.period}</span>
                </div>
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {project.externalLabel}
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectDetailPageProps = {
  slug: string;
  from?: string;
  fromHome?: boolean;
};

export function ProjectDetailPage({ slug, from, fromHome = false }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === slug);

  const goBack = () => {
    if (from === 'home') {
      sessionStorage.setItem('shouldRestoreHomeOnReturn', '1');
      window.location.hash = '#/';
      return;
    }

    window.location.hash = `#/projects${fromHome ? '?from=home' : ''}`;
  };

  if (!project) {
    return (
      <section className="min-h-screen py-20 bg-[#121318]">
        <div className="container mx-auto px-4 max-w-3xl">
          <a
            href="#/projects"
            onClick={(event) => {
              event.preventDefault();
              goBack();
            }}
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ChevronLeft size={16} />
            {from === 'home' ? 'Back to Home' : 'Back to All Projects'}
          </a>
          <h2 className="mb-3">Project Not Found</h2>
          <p className="text-muted-foreground">
            This project link is unavailable. Please return to the project list.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-[#121318]">
      <div className="container mx-auto px-4 max-w-5xl">
        <a
          href={from === 'home' ? '#/' : '#/projects'}
          onClick={(event) => {
            event.preventDefault();
            goBack();
          }}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          {from === 'home' ? 'Back to Home' : 'Back to All Projects'}
        </a>

        <article className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
          <div className="relative h-[300px] md:h-[380px] overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={`${project.title} - Project`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </div>

          <div className="p-7 md:p-10">
            <p className="text-sm text-primary mb-2">{project.track}</p>
            <h2 className="mb-3">{project.title}</h2>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Calendar size={15} className="text-primary" />
              <span className="text-sm">{project.period}</span>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-foreground mb-2">Project Overview</h3>
                <p>{project.overview}</p>
              </div>
              <div>
                <h3 className="text-foreground mb-2">Methodology</h3>
                <p>{project.methodology}</p>
              </div>
              <div>
                <h3 className="text-foreground mb-2">Results</h3>
                <p>{project.results}</p>
              </div>
              <div>
                <h3 className="text-foreground mb-2">Implementation</h3>
                <p>{project.implementation}</p>
              </div>
              <div>
                <h3 className="text-foreground mb-2">Resources</h3>
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  {project.externalLabel}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
