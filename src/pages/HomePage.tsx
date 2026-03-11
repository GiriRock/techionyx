import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Expertise from '@/sections/Expertise';
import Hero from '@/sections/Hero';
import Process from '@/sections/Process';
import ProductsPreview from '@/sections/ProductsPreview';
import Results from '@/sections/Results';
import Services from '@/sections/Services';
import SolutionsPreview from '@/sections/SolutionsPreview';
import WhyChooseUs from '@/sections/WhyChooseUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ProductsPreview />
      <Services />
      <SolutionsPreview />
      <WhyChooseUs />
      <Process />
      <Expertise />
      <Results />
      <Contact />
    </>
  );
};

export default HomePage;
