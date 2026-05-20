import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import TechShowcase from '@/components/TechShowcase';
import GitHubActivity from '@/components/GitHubActivity';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <TechShowcase />
        <GitHubActivity />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
