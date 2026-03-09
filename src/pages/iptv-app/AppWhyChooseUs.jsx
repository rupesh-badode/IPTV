import React from 'react';
import { motion } from 'framer-motion';

const AppWhyChooseUs = () => {
  return (
    // Clean white background
    <section className="bg-white w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Image in Yellow Circle --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            {/* The Yellow Circle Container */}
            <div className="relative w-full max-w-[380px] md:max-w-[450px] aspect-square bg-[#ffab00] rounded-full overflow-hidden flex justify-center items-end shadow-lg">
              {/* Replace this URL with your transparent cutout image of the woman */}
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Woman shrugging and smiling" 
                className="w-[90%] h-auto object-contain object-bottom"
              />
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Typography --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6">
              Why Choose Us? <br />
              We Offer What Others Can't!
            </h2>
            
            <p className="text-[#222222] text-base md:text-[17px] leading-relaxed font-medium">
              We deliver an IPTV experience designed around you. With cutting-edge technology, versatile features, and competitive pricing, we make streaming seamless, personalized, and enjoyable for every user. Whether you're using a <span className="underline underline-offset-4 cursor-pointer hover:text-[#19527a] transition-colors">Net + Pro box with subscription</span>, <span className="underline underline-offset-4 cursor-pointer hover:text-[#19527a] transition-colors">Sword Pro + BT IPTV box with subscription</span>, we ensure the best possible viewing experience on your preferred device.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AppWhyChooseUs;