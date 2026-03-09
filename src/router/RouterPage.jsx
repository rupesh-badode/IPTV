import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../pages/home/LandingPage";
import BuyNowPage from "../pages/buyNow/BuyNowPage";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/layout/Breadcrumb";
import IptvChannelsPage from "../pages/iptv-channels/Iptv-Channels-Page";
import IptvApp from "../pages/iptv-app/Iptv-App";
import FreeTrial from "../pages/free-trial/FreeTrial";
import IptvBox from "../pages/iptv-box/Iptv-Box";
import BlogLayout from "../pages/blogs/BlogLayout";

export default function RouterPage() {
    // 1. Get the current route location
    const location = useLocation();

    // 2. Check if we are on the Home page
    const isHomePage = location.pathname === "/";

    // 3. Helper function to turn "/buy-now" into "Buy Now" automatically
    const getPageName = (pathname) => {
        // Remove the slash
        const path = pathname.substring(1); 
        // Replace dashes with spaces and capitalize each word
        return path
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <Navbar />
            
            {/* 4. Only render the Breadcrumb if it is NOT the home page */}
            {!isHomePage && (
                <Breadcrumb currentPage={getPageName(location.pathname)} />
            )}
            
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/buy-now" element={<BuyNowPage />} />
                <Route path="/iptv-channels" element={<IptvChannelsPage />} />
                <Route path="/iptv-app" element={<IptvApp />} />
                <Route path="/free-trial" element={<FreeTrial/>}/>
                <Route path="/iptv-boxes" element={<IptvBox />} />
                <Route path="/blogs" element={<BlogLayout />} />
            </Routes>
            
            <Footer />
        </>
    );
}