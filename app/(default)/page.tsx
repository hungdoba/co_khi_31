import Hero from '@/components/hero-home';
import BusinessCategories from '@/components/business-categories';
import FeaturesPlanet from '@/components/features-planet';
import LargeTestimonial from '@/components/large-testimonial';
import Cta from '@/components/cta';
import AboutIntro from '@/partials/AboutIntro';
import AboutStory from '@/partials/AboutStory';
import Stats from '@/partials/Stats';
import Team from '@/partials/Team';
import BlogList from '@/partials/BlogList';
import Career from '@/partials/Career';
import Process from '@/partials/Process';
import CtaAlternative from '@/partials/CtaAlternative';
import DocumentationContent from '@/partials/DocumentationContent';
import Faqs from '@/partials/Faqs';
import FeaturesBlocks from '@/partials/FeaturesBlocks';
import FeaturesHome from '@/partials/FeaturesHome';
import FeaturesTable from '@/partials/FeaturesTable';
import FeaturesWorld from '@/partials/FeaturesWorld';
import News from '@/partials/News';
import Newsletter from '@/partials/Newsletter';
import PostSingle from '@/partials/PostSingle';
import PricingTables from '@/partials/PricingTables';
import TeamImages from '@/partials/TeamImages';
import TestimonialsCarousel from '@/partials/TestimonialsCarousel';
import TutorialsList from '@/partials/TutorialsList';

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <AboutIntro />
      <AboutStory />
      <BlogList />
      <Career />
      <Cta />
      <CtaAlternative />
      <DocumentationContent />
      <Faqs />
      <FeaturesBlocks />
      <FeaturesHome />
      <FeaturesTable />
      <FeaturesWorld />
      <News />
      <Newsletter />
      <PostSingle />
      <PricingTables />
      <Process />
      <Stats />
      <Team />
      <TeamImages />
      <TestimonialsCarousel />
      <TutorialsList />
    </>
  );
}
