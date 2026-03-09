import ChannelsFAQ from "./ChannelFAQ";
import ChannelsHeroSection from "./ChannelsHeroSection";
import CricketChannelsSection from "./CricketChannelsSection";
import InstantStreamingSection from "./InstantStreamingSection";
import TrustSection from "./TrustSection";


export default function IptvChannelsPage() {
    return (
    <>
      <ChannelsHeroSection />
      <CricketChannelsSection/>
      <InstantStreamingSection/>
      <TrustSection/>
      <ChannelsFAQ/>
    </>
    )
}