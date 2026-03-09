import React from 'react';
import { motion } from 'framer-motion';

const MobileAppBanner = () => {
  return (
    // Outer section with a dark blue background and overflow hidden to contain the pattern
    <section className="relative bg-[#052644] w-full py-16 md:py-24 overflow-hidden">
      
      {/* Background Network Pattern Overlay */}
      {/* This perfectly matches the background of your footer and other dark sections */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: Typography --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col text-center lg:text-left"
          >
            <h1 className="text-[#ffab00] font-bold text-5xl md:text-6xl lg:text-[70px] leading-none mb-4 md:mb-6 drop-shadow-md">
              Mobile App
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-medium max-w-md mx-auto lg:mx-0 leading-snug">
              From Live TV to On-Demand—All in One IPTV App!
            </p>
          </motion.div>

          {/* --- RIGHT COLUMN: App Mockups --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end relative"
          >
            {/* Adding a subtle, slow floating animation to the phones to make the banner feel premium and alive */}
            <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {/* Replace this placeholder URL with your actual transparent .png asset of the three phones */}
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="IPTV Brampton Mobile App" 
                className="w-full max-w-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                style={{ clipPath: 'inset(0 0 10% 0 round 20px)' }} // Just a placeholder clip for the generic unsplash image
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;