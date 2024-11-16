import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Tools from '@/components/Tools';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Team />
      <Pricing />
      <Tools />
      <ContactUs />
      <Gallery />
    </>
  );
}
