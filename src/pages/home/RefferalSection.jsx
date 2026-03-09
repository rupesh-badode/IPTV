import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const ReferralSection = () => {
  return (
    // Section with a deep blue background overlay and the background image
    <section className="relative w-full min-h-[700px] py-16 px-6 lg:px-12 flex items-center justify-center overflow-hidden bg-[#051525]">
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      />
      {/* Dark gradient to ensure text and form readability */}
      <div className="absolute inset-0 z-0 bg-[#051a30]/80"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* --- LEFT COLUMN: Massive "6 Months" Text --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h3 className="text-white font-medium text-2xl lg:text-3xl leading-snug mb-2">
            If your friend buy with <br className="hidden lg:block" /> your Refer ID Earn,
          </h3>
          
          {/* The Massive "6" */}
          <div className="text-[#ffab00] font-black text-[180px] lg:text-[250px] leading-none tracking-tighter drop-shadow-xl -my-4 lg:-my-8">
            6
          </div>
          
          <h2 className="text-[#ffab00] font-black text-4xl lg:text-5xl tracking-wide mb-1 drop-shadow-md">
            Months FREE
          </h2>
          <h3 className="text-white font-bold text-3xl lg:text-4xl tracking-wide">
            IPTV Subscription
          </h3>
        </motion.div>

        {/* --- RIGHT COLUMN: The Form --- */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-end w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-[650px] flex flex-col items-center lg:items-end"
          >
            {/* Header above form */}
            <h3 className="text-[#ffab00] font-bold text-2xl lg:text-[28px] mb-4 text-center lg:text-right drop-shadow-md">
              Fill out the form to enter!
            </h3>

            {/* The Glassmorphism Form Container */}
            <form className="w-full border-[1.5px] border-white/60 rounded-[30px] p-6 lg:p-10 bg-white/5 backdrop-blur-md shadow-2xl relative flex flex-col gap-5">
              
              {/* Row 1: Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border-[1.5px] border-white/50 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-lg"
                />
                <input 
                  type="text" 
                  placeholder="Refer Name" 
                  className="w-full bg-transparent border-[1.5px] border-white/50 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-lg"
                />
              </div>

              {/* Row 2: Phones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full bg-transparent border-[1.5px] border-white/50 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-lg"
                />
                <input 
                  type="tel" 
                  placeholder="Your Refer Phone" 
                  className="w-full bg-transparent border-[1.5px] border-white/50 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-lg"
                />
              </div>

              {/* Row 3: Code & Captcha */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                <input 
                  type="text" 
                  placeholder="Enter Code" 
                  className="w-full bg-transparent border-[1.5px] border-white/50 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-lg"
                />
                <div className="flex items-center gap-4 justify-start sm:justify-end">
                  {/* White Captcha Pill */}
                  <div className="bg-white rounded-full px-8 py-3.5 flex items-center justify-center font-black text-black tracking-[0.8em] text-xl shadow-inner min-w-[140px]">
                    7 3 6
                  </div>
                  {/* Refresh Icon */}
                  <button type="button" className="text-white hover:text-[#ffab00] transition-colors p-1">
                    <RefreshCw size={28} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start mt-2">
                <button 
                  type="button" 
                  className="bg-[#ffab00] text-[#051525] font-black text-xl px-10 py-3 rounded-lg hover:bg-[#e69a00] transition-colors shadow-lg transform hover:-translate-y-1"
                >
                  Submit Refer
                </button>
              </div>
            </form>

            {/* Bottom Call to Action Text */}
            <div className="mt-8 flex flex-col items-center lg:items-end w-full pr-4">
              <p className="text-white font-bold text-[22px] mb-4 drop-shadow-md">
                Time's Running Out
              </p>
              
              <div className="bg-white rounded-full px-8 py-2.5 shadow-[0_0_20px_rgba(255,255,255,0.2)] inline-block">
                <span className="text-[#ffab00] font-black text-lg">Fill Out the Form </span>
                <span className="text-[#051a30] font-bold text-lg">Before It's Too Late</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ReferralSection;