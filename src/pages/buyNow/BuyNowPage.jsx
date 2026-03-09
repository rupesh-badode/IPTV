import PricingSection from "../home/PricingSection";
import BuyNowFAQ from "./BuyNowFAQ";
import EntertainmentPartnerSection from "./EntertainmentPartnerSection";
import RedefineSection from "./RedefineSection";
import SetTopBoxSection from "./SetTopBoxSection";


export default function BuyNowPage() {
    return (
        <>
            <PricingSection/>
            <SetTopBoxSection/>
            <RedefineSection/>
            <EntertainmentPartnerSection/>
            <BuyNowFAQ/>
        </>
    );
}