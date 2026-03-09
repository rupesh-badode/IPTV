import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    // Outer container with a dark background 
    <section className="relative w-full min-h-[450px] bg-[#02101e] flex flex-col lg:flex-row overflow-hidden">
      
      {/* --- RIGHT SIDE: BACKGROUND IMAGE --- */}
      {/* This image is placed absolutely so the left blue section can overlap it with the curve */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0">
        {/* Replace the src with your actual image of the woman watching TV */}
        <img 
          src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Woman enjoying IPTV" 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure the right side isn't too bright */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#02101e]/80 lg:hidden"></div>
      </div>

      {/* --- LEFT SIDE: TEXT & BUTTONS --- */}
      {/* The magic happens here: 
        lg:w-[55%] makes it take up slightly more than half.
        lg:rounded-br-[150px] creates the large curve at the bottom right.
        lg:border-r-[8px] and lg:border-b-[8px] create the yellow swoosh line.
      */}
      <div className="relative z-10 w-full lg:w-[55%] bg-[#052644] 
                      lg:rounded-br-[150px] lg:border-r-[8px] lg:border-b-[8px] border-[#ffab00] 
                      flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-20 shadow-2xl">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col max-w-xl"
        >
          {/* Subheading */}
          <h3 className="text-white text-xl md:text-2xl font-medium mb-3">
            Ready to Get Started ?
          </h3>

          {/* Main Headings */}
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-[54px] leading-tight mb-2">
            Talk to an IPTV
          </h2>
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-[54px] leading-tight mb-10">
            Expert NOW
          </h2>

          {/* Buttons Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Buy Now Button */}
            <button className="bg-[#ffab00] text-[#052644] font-bold text-lg px-8 py-3 rounded-lg hover:bg-[#e69a00] transition-colors shadow-lg transform hover:-translate-y-1">
              Buy Now
            </button>
            
            {/* Request a Callback Button */}
            <button className="bg-white text-[#052644] font-bold text-lg px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:-translate-y-1">
              Request a Callback
            </button>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default CtaSection;