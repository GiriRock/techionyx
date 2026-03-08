import About from './sections/About';
import Contact from './sections/Contact';
import Expertise from './sections/Expertise';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navigation from './sections/Navigation';
import Process from './sections/Process';
import Results from './sections/Results';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Expertise />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
