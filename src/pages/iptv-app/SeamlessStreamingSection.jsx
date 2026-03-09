import React from 'react';
import { motion } from 'framer-motion';

const SeamlessStreamingSection = () => {
  return (
    // Outer container with a light background to make the dark blue card pop
    <section className="bg-[#f4f6f8] w-full py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- THE DARK BLUE CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#052644] w-full rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col lg:flex-row items-center p-8 md:p-12 lg:p-16 gap-12 lg:gap-8"
        >
          
          {/* --- LEFT COLUMN: Typography --- */}
          <div className="w-full lg:w-3/5 flex flex-col z-10">
            <h2 className="text-[#ffab00] font-bold text-3xl md:text-4xl lg:text-[40px] leading-tight mb-6">
              Seamless IPTV Streaming Anywhere - Your TV, Wherever You Are!
            </h2>
            
            <div className="text-white/95 text-[15px] md:text-base lg:text-[17px] leading-relaxed font-medium space-y-6">
              <p>
                With just a tap, stream your favorite channels on any device, 
                whether you're at home or on the move. Our IPTV app offers 
                high-quality entertainment wherever you are, whenever you 
                want. Enjoy seamless IPTV stream experiences on phones, 
                tablets, laptops, or smart TVs.
              </p>
              <p>
                Plus, choose the best IPTV app for you—whether it's the IPTV 
                app with 5 years subscription or the IPTV app with 2 years 
                subscription. For even more options, explore Linux IPTV boxes, 
                Android IPTV boxes, and the best IPTV service in Canada. 
                Take your TV experience with you, anytime, anywhere, and 
                never miss a moment of the action.
              </p>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Image & Geometric Art --- */}
          <div className="w-full lg:w-2/5 flex justify-center relative min-h-[350px] md:min-h-[400px]">
            
            {/* The Geometric Shapes (Built purely with CSS) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              
              {/* Top-Left Outline Bracket */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-[3px] border-l-[3px] border-[#ffab00] rounded-tl-3xl z-0"></div>
              
              {/* Bottom-Right Outline Bracket */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-[3px] border-r-[3px] border-[#ffab00] rounded-br-3xl z-0"></div>

              {/* Solid Yellow Background Square */}
              <div className="absolute inset-4 bg-[#ffab00] z-0 shadow-lg"></div>

            </div>

            {/* The Subject Image */}
            {/* Replace this URL with your transparent cutout .png of the woman looking at her phone */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Woman smiling at smartphone" 
              className="relative z-10 w-[85%] max-w-[320px] h-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] mt-auto"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default SeamlessStreamingSection;