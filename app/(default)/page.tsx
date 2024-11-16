import Hero from '@/components/HeroHome';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Pricing from '@/components/Pricing';
import ContactUs from '@/components/ContactUs';
import Gallery from '@/components/Gallery';
import Tools from '@/components/Tools';
import Team from '@/components/Team';

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
