import AboutSection from "./AboutSection";
import ChannelsSection from "./ChannelsSection";
import FreeTrialSection from "./FreeTrialSection";
import HeroCarousel from "./HeroCarousel";
import PricingSection from "./PricingSection";
import PromoTextSection from "./PromoTextSection";
import StatsBar from "./StatsBar";
// import FeaturesSection from "./FeaturesSection";

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
    </>
  );
}