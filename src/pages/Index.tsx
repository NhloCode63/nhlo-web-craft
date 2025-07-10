
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
