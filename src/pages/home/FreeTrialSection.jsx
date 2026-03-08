import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const FreeTrialSection = () => {
  return (
    // Background container with a dark blue overlay and a background image pattern
    <section className="relative w-full min-h-screen py-16 px-6 md:px-12 flex items-center justify-center overflow-hidden bg-[#0a1f35]">
      
      {/* Background Image Overlay (Simulating the movie poster grid) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      />
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#06182c] via-[#0a223d]/90 to-[#06182c]"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* --- LEFT COLUMN: HEADINGS & IMAGE --- */}
        <div className="flex flex-col items-start pt-10">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-2xl md:text-3xl font-bold italic mb-[-5px]">
              Get a
            </h3>
            <h1 className="text-[#fdb913] text-6xl md:text-8xl font-black italic tracking-tight leading-none drop-shadow-md">
              24 HOUR
            </h1>
            {/* White text inside yellow pill shape */}
            <div className="bg-[#fdb913] inline-block px-8 py-2 rounded-full shadow-lg mt-2">
              <h1 className="text-white text-5xl md:text-7xl font-black italic tracking-tight leading-none drop-shadow-sm">
                Free Trial
              </h1>
            </div>
          </motion.div>

          {/* Feature Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            {/* Badge 1 */}
            <div className="bg-[#0b0b0b] border border-gray-700 rounded-md p-2 flex flex-col items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg leading-none">15000+</span>
              <div className="flex items-center gap-1 mt-1">
                <span className="bg-red-600 text-white text-[8px] font-bold px-1 rounded-sm">LIVE</span>
                <span className="bg-[#fdb913] text-black text-[8px] font-bold px-1 rounded-sm">4K</span>
                <span className="text-[7px] text-white leading-tight uppercase text-left">Streaming<br/>Channels</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="bg-[#0b0b0b] border border-gray-700 rounded-md p-2 flex flex-col items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg leading-none">500000+</span>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[#fdb913] font-black text-xs">VOD</span>
                <span className="text-[7px] text-white leading-tight uppercase text-left border-l border-gray-500 pl-1">Video On<br/>Demand</span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="bg-[#0b0b0b] border border-gray-700 rounded-md p-2 flex flex-col items-center justify-center shadow-lg py-3">
              <span className="text-white font-bold text-sm uppercase">Worldwide</span>
              <span className="text-white font-bold text-sm uppercase">Content</span>
            </div>
          </motion.div>

          {/* Excited Girls Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative mt-12 w-full max-w-[400px]"
          >
            {/* Yellow Blob/Shape behind the image */}
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#fdb913] rounded-[40px] transform rotate-[-10deg] -z-10"></div>
            
            {/* Replace this placeholder src with your actual cut-out image of the cheering women */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Excited Customers" 
              className="w-full object-contain relative z-10 drop-shadow-2xl rounded-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} // adjust as needed for transparent PNGs
            />
          </motion.div>

        </div>

        {/* --- RIGHT COLUMN: FORM --- */}
        <div className="flex flex-col items-center lg:items-end w-full">
          
          <div className="w-full max-w-md flex flex-col items-center lg:items-end text-center lg:text-right mb-6">
            <h4 className="text-white font-medium text-sm md:text-base tracking-wide">
              Explore top-quality entertainment with
            </h4>
            <h2 className="text-white font-black text-5xl md:text-6xl italic drop-shadow-lg tracking-tight">
              ZERO RISK
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-md flex flex-col items-center"
          >
            <h3 className="text-[#fdb913] font-bold text-2xl md:text-3xl mb-4 text-center">
              Start Your 24-Hour Free Trial
            </h3>

            {/* Glassmorphism Form Container */}
            <form className="w-full border border-white/40 rounded-3xl p-6 md:p-8 bg-[#ffffff]/5 backdrop-blur-sm shadow-2xl relative">
              
              {/* Name Input */}
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border border-white/50 rounded-full px-5 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#fdb913] transition-colors mb-4"
                required
              />

              {/* Phone Number Input */}
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-transparent border border-white/50 rounded-full px-5 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#fdb913] transition-colors mb-4"
                required
              />

              {/* Email Input */}
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border border-white/50 rounded-full px-5 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#fdb913] transition-colors mb-6"
                required
              />

              {/* Captcha Row */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white rounded-full px-6 py-2 flex items-center justify-center font-bold text-black tracking-[0.4em] shadow-inner text-lg w-32">
                  4 5 9
                </div>
                <input 
                  type="text" 
                  placeholder="Code" 
                  className="w-24 bg-transparent border border-white/50 rounded-full px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#fdb913] text-center"
                  required
                />
                <button type="button" className="text-white hover:text-[#fdb913] transition-colors p-2">
                  <RefreshCw size={24} />
                </button>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="bg-[#fdb913] text-[#0a1f35] font-black text-lg px-8 py-2.5 rounded-lg hover:bg-[#e6a60e] transition-colors shadow-lg transform hover:-translate-y-1"
              >
                Submit
              </button>
            </form>

            {/* Bottom Call to Actions */}
            <div className="mt-6 flex flex-col items-center">
              <p className="text-white font-bold text-lg mb-3">
                Fill the form to get instant access!
              </p>
              
              <div className="bg-white rounded-full px-6 py-2 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <span className="text-[#ff7a00] font-black text-sm md:text-base">Don't Wait - </span>
                <span className="text-gray-600 font-bold text-sm md:text-base">Grab it before it's Gone!</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;