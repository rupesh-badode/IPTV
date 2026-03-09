import AppFAQ from "./AppFAQ";
import AppFeaturesSection from "./AppFeaturesSection";
import AppPricingSection from "./AppPricingSection";
import AppStandOutSection from "./AppStandOutSection";
import AppWhyChooseUs from "./AppWhyChooseUs";
import MobileAppBanner from "./MobileAppBanner";
import SeamlessStreamingSection from "./SeamlessStreamingSection";
import SetupStepsSection from "./SetupStepSection";
import StreamLikeProSection from "./StreamLikeProSection";


export default function IptvApp(){
    return(
        <>
        <MobileAppBanner/>
        <StreamLikeProSection/>
        <AppPricingSection/>
        <SeamlessStreamingSection/>
        <AppFeaturesSection/>
        <SetupStepsSection/>
        <AppStandOutSection/>
        <AppWhyChooseUs/>
        <AppFAQ/>
        </>
    )
}