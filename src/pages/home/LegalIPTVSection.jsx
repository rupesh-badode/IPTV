import React from 'react';
import { motion } from 'framer-motion';

const LegalIPTVSection = () => {
  // Reusable styling for the blue embedded links in the paragraphs
  const linkStyle = "text-[#19527a] font-medium hover:underline cursor-pointer";

  return (
    <section className="bg-white w-full py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Photo Collage --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-start"
          >
            {/* Collage Wrapper: Handles the outer rounded corners and shadow */}
            <div className="w-full max-w-[550px] aspect-square rounded-[35px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] bg-white p-1">
              {/* Internal Grid for the 3 images */}
              <div className="grid grid-cols-2 gap-2 h-full w-full rounded-[30px] overflow-hidden">
                
                {/* Top Left Image (Couple) */}
                <div className="w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Couple watching TV" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Top Right Image (Family) */}
                <div className="w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1543913045-8a25c04df483?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Family watching TV" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Image (Action Movie) */}
                <div className="col-span-2 w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Action movie on TV" 
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
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
            {/* Main Blue Heading */}
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-8">
              The Best Legal IPTV in Canada-IPTV Brampton Delivers
            </h2>
            
            {/* Secondary Dark Heading */}
            <h3 className="text-[#333333] font-bold text-2xl md:text-3xl leading-snug mb-6">
              Why Choose IPTV Brampton as Your IPTV Service Provider?
            </h3>
            
            {/* Paragraphs with embedded styling for blue text */}
            <div className="text-[#444444] text-base md:text-[17px] leading-relaxed space-y-6 font-medium">
              <p>
                We stand out as the best IPTV service in Canada. Whether you use a <span className={linkStyle}>Net + BT Box or Sword Pro + BT Box with subscription</span> or our <span className={linkStyle}>IPTV app</span> with a 5 & 2 years subscription, we deliver premium content at unbeatable prices.
              </p>
              
              <p>
                Enjoy smooth IPTV streams on Linux or Android boxes, backed by 24/7 <span className={linkStyle}>customer support</span>. With global channels and no buffering, we offer the best legal IPTV in Canada, ensuring a seamless, unmatched viewing experience.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LegalIPTVSection;