import React from 'react';
import { motion } from 'framer-motion';

const SetTopBoxBanner = () => {
  return (
    // Outer section with the dark blue background and hidden overflow for the pattern
    <section className="relative bg-[#052644] w-full pt-12 pb-16 md:py-0 overflow-hidden min-h-[350px] flex items-center">
      
      {/* --- BACKGROUND NETWORK PATTERN --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* --- LEFT COLUMN: Box & Remote 1 --- */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full md:w-1/3 flex justify-center md:justify-start h-full mb-12 md:mb-0"
        >
          {/* The Yellow "U" Shape */}
          {/* On desktop it sticks to the top of the section, on mobile it centers behind the image */}
          <div className="absolute top-[-48px] md:top-[-200px] left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 w-[240px] h-[260px] md:h-[420px] bg-[#ffab00] rounded-b-[120px] z-0 shadow-lg"></div>
          
          {/* Product Image */}
          {/* Replace this with your transparent .png of the first set top box and remote */}
          <img 
            src="https://images.unsplash.com/photo-1540829016269-e05670f88adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="IPTV Set Top Box 1" 
            className="relative z-10 w-[85%] max-w-[280px] object-contain mt-8 md:mt-12 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            style={{ clipPath: 'inset(0 0 10% 0)' }} // Placeholder clip
          />
        </motion.div>

        {/* --- CENTER COLUMN: Typography & CTA --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full md:w-1/3 flex flex-col items-center text-center z-20 py-8"
        >
          <h2 className="text-[#ffab00] font-black text-5xl md:text-6xl lg:text-[70px] leading-none mb-1 drop-shadow-md">
            IPTV
          </h2>
          <h3 className="text-white font-bold text-3xl md:text-4xl lg:text-[46px] leading-none mb-8 drop-shadow-md">
            Set Top Box
          </h3>
          
          <button className="bg-[#ffab00] hover:bg-[#e69a00] text-[#052644] font-bold text-lg px-10 py-3 rounded-lg shadow-[0_6px_15px_rgba(255,171,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,171,0,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Buy Now
          </button>
        </motion.div>

        {/* --- RIGHT COLUMN: Box & Remote 2 --- */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="relative w-full md:w-1/3 flex justify-center md:justify-end h-full mt-12 md:mt-0"
        >
          {/* The Yellow "U" Shape */}
          <div className="absolute top-[-48px] md:top-[-200px] right-1/2 md:right-8 translate-x-1/2 md:translate-x-0 w-[240px] h-[260px] md:h-[420px] bg-[#ffab00] rounded-b-[120px] z-0 shadow-lg"></div>
          
          {/* Product Image */}
          {/* Replace this with your transparent .png of the second set top box and remote */}
          <img 
            src="https://images.unsplash.com/photo-1540829016269-e05670f88adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="IPTV Set Top Box 2" 
            className="relative z-10 w-[85%] max-w-[280px] object-contain mt-8 md:mt-12 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transform rotate-6 hover:rotate-0 transition-transform duration-500"
            style={{ clipPath: 'inset(0 0 10% 0)' }} // Placeholder clip
          />
        </motion.div>

      </div>
    </section>
  );
};

export default SetTopBoxBanner;