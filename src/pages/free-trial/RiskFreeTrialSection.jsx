import React from 'react';
import { motion } from 'framer-motion';

const RiskFreeTrialSection = () => {
  return (
    // Outer section wrapper with padding
    <section className="w-full py-12 px-4 md:px-8 lg:px-12 bg-white flex justify-center">
      <div className="max-w-[1200px] w-full">
        
        {/* --- MAIN CARD CONTAINER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-[#052644]"
        >
          {/* --- BACKGROUND IMAGE WITH MEDIA WALL --- */}
          <div className="absolute inset-0 z-0">
            {/* Replace this URL with your exact wall-of-screens image asset */}
            <img 
              src="https://images.unsplash.com/photo-1555615606-53860bbec9b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Grid of TV and movie screens" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
          </div>

          {/* --- GRADIENT OVERLAY --- */}
          {/* Fades from a solid dark blue on the left to slightly transparent on the right */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#052644] via-[#052644]/90 to-[#052644]/40"></div>

          {/* --- TEXT CONTENT --- */}
          <div className="relative z-20 w-full p-8 md:p-12 flex flex-col">
            
            <h2 className="text-[#ffab00] font-bold text-2xl md:text-3xl lg:text-[32px] leading-tight mb-6 max-w-4xl">
              72-Hour IPTV Free Trial: Stream, Test And Commit Risk-Free!
            </h2>
            
            <div className="text-white/95 text-[15px] md:text-[17px] leading-relaxed font-medium space-y-5 max-w-5xl">
              <p>
                At IPTV Brampton, we understand customers' shared desire to experience a platform risk-free first before investing in it.
              </p>
              
              <p>
                That's why we offer an instant free trial that gives you complete access to our extensive IPTV services for an entire day. Whether you want to sneak a peek at the content lineup, test streaming quality, assess value worthiness, or something else, our free trial IPTV Canada lets you experience everything without any commitment.
              </p>
              
              <p>
                So what are you waiting for? Try our free instant IPTV trial today and find out how IPTV Brampton is leading the narrative of home entertainment, providing an all-in-one hub for every viewer.
              </p>
            </div>

            {/* --- CALL TO ACTION BUTTON --- */}
            <div className="mt-8">
              <button className="bg-[#ffab00] hover:bg-[#e69a00] text-[#052644] font-bold text-lg px-8 py-3 rounded-lg shadow-[0_6px_15px_rgba(255,171,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,171,0,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
                Get Free Trial
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RiskFreeTrialSection;