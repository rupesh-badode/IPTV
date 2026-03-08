import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    // Clean white background section with ample vertical padding
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CSS Grid: 1 column on mobile, 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-[#217bb4] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6">
              IPTV Brampton – The Best International TV Channels in Canada
            </h2>
            
            <h3 className="text-[#333333] font-bold text-2xl md:text-3xl leading-snug mb-6">
              From Bollywood to Hollywood, IPTV Brampton brings the world to your screen
            </h3>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              Unleash the magic of watching desi content worldwide through IPTV Brampton for premium entertainment in Canada. Free to indulge in a choice of over 15,000 live channels, 4K Ultra HD quality, and an array of movies on demand, this is not just TV but a window to your favorite cultures, stories, and moments. Be it in Brampton or anywhere in Canada, IPTV Brampton Canada brings you closer to home, friends, and your favorite shows. Are you ready to watch without limits?
            </p>
          </motion.div>

          {/* --- RIGHT COLUMN: IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-full flex justify-center items-center"
          >
            {/* Note: Swap out this placeholder 'src' with your actual TV image asset */}
            <img 
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="IPTV Brampton Channels on TV" 
              className="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;