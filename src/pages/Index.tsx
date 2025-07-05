
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Enhanced3DEffects } from "@/components/Enhanced3DEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white transform-3d" style={{ transformStyle: 'preserve-3d' }}>
      <Enhanced3DEffects />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
