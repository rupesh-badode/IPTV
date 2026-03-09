import React from 'react';
import { motion } from 'framer-motion';

const DiscoverSetTopBoxesBanner = () => {
  return (
    // Outer container with a dark blue base color and padding
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-[#052644] flex items-center justify-center">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        {/* Replace this placeholder with your actual image of friends cheering in the living room */}
        <img 
          src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Group of friends cheering in living room" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        {/* A heavy dark blue overlay to ensure perfect text readability */}
        <div className="absolute inset-0 bg-[#052644]/70"></div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#ffab00] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight md:leading-[1.25] mb-6 drop-shadow-lg"
        >
          Discover Our All-In-One IPTV Set Top Boxes with Bluetooth Remote To Smarten Your Home Entertainment
        </motion.h2>
        
        {/* Subheading / Paragraph Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-white text-[15px] md:text-lg lg:text-[19px] leading-relaxed font-medium max-w-4xl drop-shadow-md"
        >
          Explore our range of IPTV set top boxes, thoughtfully designed to help you bring home a 
          dedicated TV setup offering a streaming experience that is faster, more reliable, and free 
          of restrictions that come with apps.
        </motion.p>

      </div>
      
    </section>
  );
};

export default DiscoverSetTopBoxesBanner;