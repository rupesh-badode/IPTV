import FreeTrialBanner from "./FreeTrialBanner";
import FreeTrialFAQ from "./FreeTrialFAQ";
import FreeTrialHeroForm from "./FreeTrialHeroForm";
import FreeTrialHowToSection from "./FreeTrialHowToSection";
import FreeTrialWhyTrySection from "./FreeTrialWhyTrySection";
import RiskFreeTrialSection from "./RiskFreeTrialSection";



export default function FreeTrial(){
  return(
    <>
    <FreeTrialBanner/>
    <RiskFreeTrialSection/>
    <FreeTrialHowToSection/>
    <FreeTrialWhyTrySection/>
    <FreeTrialHeroForm/>
    <FreeTrialFAQ/>
    </>
  )
}