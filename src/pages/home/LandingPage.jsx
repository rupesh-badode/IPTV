import AboutSection from "./AboutSection";
import ChannelsSection from "./ChannelsSection";
import ComparisonSection from "./ComparisonSection";
import ContactSection from "./ContactSection";
import CtaSection from "./CtaSection";
import FAQSection from "./FAQSection";
import FreeTrialSection from "./FreeTrialSection";
import HeroCarousel from "./HeroCarousel";
import IPTVFeatures from "./IPTVFeatures";
import LegalIPTVSection from "./LegalIPTVSection";
import MoviesSection from "./MoviesSection";
import NoContractsSection from "./NoContractsSection";
import PricingSection from "./PricingSection";
import PromoTextSection from "./PromoTextSection";
import ReferralSection from "./RefferalSection";
import StatsBar from "./StatsBar";
import TestimonialCarousel from "./TestimonialCarousel";




export default function LandingPage() {
  return (
    <>
     <HeroCarousel/>
     <StatsBar/>
     <AboutSection/>
     <PromoTextSection/>
     {/* <FeaturesSection/> */}
     <PricingSection/>
     <ChannelsSection/>
     <FreeTrialSection/>
     <NoContractsSection/>
     <CtaSection/>
     <IPTVFeatures/>
     <ComparisonSection/>
     <ReferralSection/>
     <LegalIPTVSection/>
     <TestimonialCarousel/>
     <MoviesSection/>
     <FAQSection/>
     <ContactSection/>
    </>
  );
}