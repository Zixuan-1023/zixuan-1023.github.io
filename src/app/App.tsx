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

export default function App() {
  return (
    <PageTransition>
      <div className="size-full relative">
        <FloatingParticles />
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
        <Toaster />
      </div>
    </PageTransition>
  );
}
