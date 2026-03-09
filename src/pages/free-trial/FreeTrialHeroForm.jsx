import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const FreeTrialHeroForm = () => {
  return (
    // Outer container with hidden overflow for the background
    <section className="relative w-full py-20 lg:py-28 bg-[#052644] overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & GRADIENT OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        {/* Replace this URL with your specific background image featuring the media wall and remote */}
        <img 
          src="https://images.unsplash.com/photo-1555615606-53860bbec9b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="TV and Movie Screens Grid" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        {/* Dark blue gradient fading from solid on the left to semi-transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#052644] via-[#052644]/95 to-[#052644]/50"></div>
      </div>

      <div className="max-w-[1250px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: Typography --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[54px] leading-[1.15] mb-6 drop-shadow-md">
              Start Your <span className="text-[#ffab00]">2026-27 IPTV<br />Free Trial:</span> Instant Access,<br />No Commitment!
            </h1>
            
            <p className="text-gray-200 text-lg md:text-[19px] leading-relaxed font-medium max-w-lg">
              Want to experience the best in IPTV? Try our 72-hour free trial and explore everything IPTV Brampton has to offer risk-free.
            </p>
          </motion.div>

          {/* --- RIGHT COLUMN: Form Container --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0"
          >
            
            {/* Form Header Text */}
            <h3 className="text-[#ffab00] font-bold text-xl md:text-2xl mb-4 text-center lg:text-right drop-shadow-sm">
              Start Now-Fill Out the Form On Your Right!
            </h3>

            {/* The Glassmorphism Form Card */}
            <div className="border border-white/60 rounded-[24px] p-6 md:p-8 bg-white/5 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.3)] mb-6">
              
              <form className="flex flex-col gap-4">
                {/* Inputs */}
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border border-white/50 rounded-full px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#ffab00] focus:bg-white/10 transition-colors"
                />
                
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-transparent border border-white/50 rounded-full px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#ffab00] focus:bg-white/10 transition-colors"
                />
                
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border border-white/50 rounded-full px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#ffab00] focus:bg-white/10 transition-colors"
                />

                {/* Captcha Row */}
                <div className="flex items-center gap-3 mt-2 mb-2">
                  <div className="bg-white rounded-full px-6 py-3 text-black font-black text-lg tracking-[0.4em] shadow-inner select-none flex-shrink-0">
                    4 5 9
                  </div>
                  
                  <input 
                    type="text" 
                    placeholder="Code" 
                    className="w-full bg-transparent border border-white/50 rounded-full px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#ffab00] focus:bg-white/10 transition-colors min-w-[100px]"
                  />
                  
                  <button type="button" className="text-white hover:text-[#ffab00] transition-colors p-2 flex-shrink-0">
                    <RefreshCw size={24} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="bg-[#ffab00] hover:bg-[#e69a00] text-[#052644] font-bold text-lg px-8 py-3 rounded-lg shadow-[0_6px_15px_rgba(255,171,0,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 w-[140px]"
                >
                  Submit
                </button>
              </form>

            </div>

            {/* Bottom Call to Action Elements */}
            <div className="flex flex-col items-center text-center">
              <p className="text-white font-bold text-lg md:text-[22px] mb-4 drop-shadow-md">
                Fill the form to get instant access!
              </p>
              
              <div className="bg-white rounded-full px-6 py-2.5 shadow-lg inline-flex items-center justify-center transform hover:scale-105 transition-transform cursor-pointer">
                <span className="text-[#ffab00] font-black mr-1.5 text-sm md:text-base">Don't Wait -</span>
                <span className="text-[#052644] font-bold text-sm md:text-base">Grab it before it's Gone!</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FreeTrialHeroForm;