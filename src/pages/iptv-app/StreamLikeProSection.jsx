import React from 'react';
import { motion } from 'framer-motion';

const StreamLikeProSection = () => {
  return (
    // Clean white background to seamlessly blend with the page flow
    <section className="bg-white w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Typography --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6 lg:mb-8">
              Stream Like a Pro with the Ultimate IPTV Service App!
            </h2>
            
            <p className="text-[#444444] text-base md:text-[17px] leading-relaxed font-medium">
              Experience live TV like never before. Our IPTV app brings you seamless streaming, unmatched channel variety, and powerful customization. Effortlessly add playlists, enjoy smooth playback, and tailor your viewing with multiple layouts. With our IPTV app subscription, you unlock even more features for endless entertainment—whether it's family time or a solo binge-watch session, we've got your back!
            </p>
          </motion.div>

          {/* --- RIGHT COLUMN: Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end"
          >
            {/* Replace the Unsplash placeholder with your actual image of friends on their phones */}
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Friends using IPTV app on their phones" 
              className="w-full max-w-[550px] aspect-[4/3] object-cover rounded-[35px] shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StreamLikeProSection;