import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Honors } from './components/Honors';
import { Experience } from './components/Experience';
import { Performances } from './components/Performances';
import { Audio } from './components/Audio';
import { Collaborations } from './components/Collaborations';
import { AcademicService } from './components/AcademicService';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { FloatingParticles } from './components/FloatingParticles';
import { Toaster } from './components/ui/sonner';
import { useEffect, useMemo, useState } from 'react';
import { ProjectDetailPage, ProjectsDirectoryPage } from './components/ProjectsPages';
import { RecordingsPage } from './components/RecordingsPage';
import { CompositionsPage } from './components/CompositionsPage';
import { PublicationsPage } from './components/PublicationsPage';
import { ExperienceDetailPage } from './components/ExperienceDetailPage';
import { AcademicServicePage } from './components/AcademicServicePage';
import { CertificationsPage } from './components/CertificationsPage';
import { HonorsPage } from './components/HonorsPage';
import { EducationPage } from './components/EducationPage';
import { GalleryPage } from './components/GalleryPage';

function parseHashRoute() {
  const rawHash = window.location.hash.replace(/^#/, '');
  const normalized = !rawHash || rawHash === '/' ? '/' : rawHash;
  const withLeadingSlash = normalized.startsWith('/') ? normalized : `/${normalized}`;
  const [pathname, queryString] = withLeadingSlash.split('?');
  return {
    pathname: pathname || '/',
    query: new URLSearchParams(queryString ?? ''),
  };
}

export default function App() {
  const [routeState, setRouteState] = useState(parseHashRoute);

  useEffect(() => {
    const onHashChange = () => setRouteState(parseHashRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const route = useMemo(() => {
    if (routeState.pathname === '/projects') {
      return {
        kind: 'projects-list' as const,
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname === '/recordings') {
      return {
        kind: 'recordings-list' as const,
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname === '/compositions') {
      return {
        kind: 'compositions-list' as const,
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname === '/publications') {
      return {
        kind: 'publications-list' as const,
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname === '/service') {
      return {
        kind: 'service-list' as const,
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname === '/certifications') {
      return {
        kind: 'certifications' as const,
        fromService: routeState.query.get('from') === 'service',
        fromHome: routeState.query.get('home') === '1' || routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname === '/honors') {
      return {
        kind: 'honors-list' as const,
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname === '/education') {
      return {
        kind: 'education-list' as const,
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname === '/gallery') {
      return {
        kind: 'gallery-list' as const,
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname.startsWith('/experience/')) {
      return {
        kind: 'experience-detail' as const,
        slug: routeState.pathname.replace('/experience/', ''),
        fromHome: routeState.query.get('from') === 'home',
      };
    }
    if (routeState.pathname.startsWith('/projects/')) {
      return {
        kind: 'project-detail' as const,
        slug: routeState.pathname.replace('/projects/', ''),
        from: routeState.query.get('from') ?? undefined,
        fromHome: routeState.query.get('fromHome') === '1',
      };
    }
    return { kind: 'home' as const };
  }, [routeState]);

  useEffect(() => {
    if (route.kind !== 'home') return;
    if (sessionStorage.getItem('shouldRestoreHomeOnReturn') !== '1') return;

    const saved = Number(sessionStorage.getItem('homeScrollY') ?? '0');
    requestAnimationFrame(() => {
      window.scrollTo({ top: Number.isFinite(saved) ? saved : 0, behavior: 'auto' });
      sessionStorage.removeItem('shouldRestoreHomeOnReturn');
    });
  }, [route]);

  useEffect(() => {
    if (
      route.kind !== 'projects-list' &&
      route.kind !== 'recordings-list' &&
      route.kind !== 'compositions-list' &&
      route.kind !== 'publications-list' &&
      route.kind !== 'service-list' &&
      route.kind !== 'honors-list' &&
      route.kind !== 'education-list' &&
      route.kind !== 'gallery-list' &&
      route.kind !== 'experience-detail'
    ) {
      return;
    }
    if (sessionStorage.getItem('shouldRestoreAllOnReturn') !== '1') return;

    const saved = Number(sessionStorage.getItem('allProjectsScrollY') ?? '0');
    requestAnimationFrame(() => {
      window.scrollTo({ top: Number.isFinite(saved) ? saved : 0, behavior: 'auto' });
      sessionStorage.removeItem('shouldRestoreAllOnReturn');
    });
  }, [route]);

  return (
    <PageTransition>
      <div className="size-full relative">
        <FloatingParticles />
        {route.kind === 'home' ? (
          <>
            <Header />
            <main className="relative z-10">
              <Hero />
              <About />
              <Performances />
              <Audio />
              <Collaborations />
              <AcademicService />
              <Honors />
              <Education />
              <Experience />
              <Gallery />
              <Contact />
            </main>
            <Footer />
          </>
        ) : (
          <main className="relative z-10">
            {route.kind === 'projects-list' ? (
              <ProjectsDirectoryPage fromHome={route.fromHome} />
            ) : route.kind === 'recordings-list' ? (
              <RecordingsPage fromHome={route.fromHome} />
            ) : route.kind === 'compositions-list' ? (
              <CompositionsPage fromHome={route.fromHome} />
            ) : route.kind === 'publications-list' ? (
              <PublicationsPage fromHome={route.fromHome} />
            ) : route.kind === 'service-list' ? (
              <AcademicServicePage fromHome={route.fromHome} />
            ) : route.kind === 'certifications' ? (
              <CertificationsPage fromService={route.fromService} fromHome={route.fromHome} />
            ) : route.kind === 'honors-list' ? (
              <HonorsPage fromHome={route.fromHome} />
            ) : route.kind === 'education-list' ? (
              <EducationPage fromHome={route.fromHome} />
            ) : route.kind === 'gallery-list' ? (
              <GalleryPage fromHome={route.fromHome} />
            ) : route.kind === 'experience-detail' ? (
              <ExperienceDetailPage slug={route.slug} fromHome={route.fromHome} />
            ) : (
              <ProjectDetailPage slug={route.slug} from={route.from} fromHome={route.fromHome} />
            )}
          </main>
        )}
        <Toaster />
      </div>
    </PageTransition>
  );
}
