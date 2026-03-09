import React from 'react';
import { motion } from 'framer-motion';

const InstantStreamingSection = () => {
  // Reusable style for the golden, underlined links inside the paragraphs
  const linkStyle = "text-[#ffab00] underline underline-offset-4 hover:text-white transition-colors cursor-pointer";

  return (
    // Outer section with a light gray background for contrast
    <section className="bg-[#f4f6f8] w-full py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[35px] overflow-hidden shadow-2xl bg-[#052644]"
        >
          {/* --- BACKGROUND IMAGE --- */}
          {/* Using object-cover and positioning it towards the right so the woman is visible */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Woman watching TV in the dark" 
              className="w-full h-full object-cover object-right lg:object-center opacity-60"
            />
          </div>

          {/* --- GRADIENT OVERLAY --- */}
          {/* This ensures the text on the left is highly legible by fading out the image */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#052644] via-[#052644]/90 to-transparent"></div>

          {/* --- TEXT CONTENT --- */}
          <div className="relative z-20 w-full lg:w-[70%] p-8 md:p-14 lg:p-16 flex flex-col">
            
            <h2 className="text-[#ffab00] font-bold text-2xl md:text-3xl lg:text-[34px] leading-tight mb-6">
              No More Waiting: Instant Streaming in Stunning HD
            </h2>
            
            <div className="text-white text-sm md:text-base lg:text-[17px] leading-relaxed font-medium space-y-6">
              <p>
                We believe that great entertainment deserves great quality. Our advanced 
                streaming technology ensures crystal-clear visuals and smooth playback, so you 
                never miss a moment of your favorite content. Whether you're using our <span className={linkStyle}>IPTV app</span>, a <span className={linkStyle}>Net + BT or Sword Pro + BT box with subscription</span>, we deliver an experience 
                that's as immersive as it is reliable.
              </p>
              
              <p>
                For those who prefer versatility or Linux IPTV boxes offer seamless streaming on 
                any screen. And if you're looking for long-term value, our <span className={linkStyle}>IPTV app with 5 years subscription</span> or <span className={linkStyle}>IPTV app with 2 years subscription</span> ensures uninterrupted 
                entertainment for years to come.
              </p>
              
              <p>
                Whether you're watching a high-octane sports match on a <span className={linkStyle}>Sword Pro + BT with subscription</span> or enjoying a gripping drama series on Android IPTV boxes, we've got 
                you covered. With IPTV Brampton, buffering and glitches are a thing of the past, 
                and every IPTV stream is a premium experience.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InstantStreamingSection;