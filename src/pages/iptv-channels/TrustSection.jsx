import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  return (
    // Clean white background to contrast with surrounding gray/blue sections
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
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6 lg:mb-8 max-w-lg">
              Why Thousands Trust Us for Their Streaming Needs
            </h2>
            
            <p className="text-[#444444] text-base md:text-[17px] leading-relaxed font-medium">
              Calling all movie lovers! Our Telugu movie library offers everything from cult classics to the latest box-office hits. With thousands of films available in stunning 4K resolution, you'll never run out of choices for your next movie night. Whether you're in the mood for a heartwarming drama, an action-packed thriller, or a comedy to lift your spirits, we have something to suit every taste. Perfect for family movie nights or solo marathons, our vast collection ensures there's always something great to watch.
            </p>
          </motion.div>

          {/* --- RIGHT COLUMN: TV Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end"
          >
            {/* Replace the Unsplash placeholder with your actual TV graphic showing the movie poster */}
            <img 
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Telugu Movie on Smart TV" 
              className="w-full max-w-[550px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;