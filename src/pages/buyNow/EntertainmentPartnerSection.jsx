import React from 'react';
import { motion } from 'framer-motion';

const EntertainmentPartnerSection = () => {
  return (
    // Clean white background to contrast with the dark image
    <section className="bg-white w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
              We’re Not Just a Service-We’re Your Entertainment Partner
            </h2>
            
            <p className="text-[#444444] text-base md:text-[17px] leading-relaxed font-medium">
              Choosing an IPTV provider is about trust, quality, and reliability. At IPTV Brampton, we deliver all three. With over 15,500 channels and 52,500 movies, we offer the best IPTV subscription for unbeatable variety. Enjoy shows and movies in stunning HD and 4K, with crystal-clear quality. Our affordable IPTV package fits any budget, making premium entertainment accessible to everyone. Plus, our 24/7 customer support ensures a smooth, hassle-free experience. Choose IPTV Brampton-your partner in unforgettable entertainment.
            </p>
          </motion.div>

          {/* --- RIGHT COLUMN: Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full h-full flex justify-center lg:justify-end"
          >
            {/* Replace the Unsplash URL with your exact image asset */}
            <img 
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Friends watching TV in the dark" 
              className="w-full max-w-[550px] aspect-[4/3] object-cover rounded-[35px] shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EntertainmentPartnerSection;