import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const ContactSection = () => {
  return (
    // Light gray background to make the dark blue card and yellow circle pop
    <section className="bg-[#f4f6f8] w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* --- LEFT COLUMN: Typography & Circular Image --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Main Heading */}
          <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-snug mb-12 max-w-lg">
            Talk to Us About Your IPTV Needs – We’re Ready to Answer Your Questions!
          </h2>

          {/* Yellow Circle Image Container */}
          <div className="relative w-full max-w-[380px] md:max-w-[450px] aspect-square bg-[#ffab00] rounded-full overflow-hidden flex justify-center items-end shadow-lg">
            {/* Replace this Unsplash URL with your transparent cutout image of the woman */}
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Customer Support" 
              className="w-[85%] h-auto object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: The Form Card --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="w-full flex justify-center lg:justify-end"
        >
          {/* The Dark Blue Floating Card */}
          <div className="bg-[#052644] w-full max-w-[650px] rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative">
            
            {/* Form Headers */}
            <div className="text-center mb-8">
              <h3 className="text-white text-lg md:text-xl font-medium mb-1">
                Let’s Discuss Your IPTV Needs
              </h3>
              <h2 className="text-[#ffab00] font-bold text-3xl md:text-4xl">
                Submit a Call Back Request
              </h2>
            </div>

            {/* Form Wrapper with Thin Border */}
            <form className="border-[1.5px] border-white/20 rounded-[25px] p-6 md:p-8 flex flex-col gap-5 relative">
              
              {/* Name Input */}
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-[1.5px] border-white/40 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-base md:text-lg"
              />

              {/* Phone Input */}
              <input 
                type="tel" 
                placeholder="Your Phone" 
                className="w-full bg-transparent border-[1.5px] border-white/40 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-base md:text-lg"
              />

              {/* Email Input */}
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-transparent border-[1.5px] border-white/40 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-base md:text-lg"
              />

              {/* Captcha Row */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-2">
                <input 
                  type="text" 
                  placeholder="Enter Code" 
                  className="w-full sm:flex-1 bg-transparent border-[1.5px] border-white/40 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ffab00] transition-colors text-base md:text-lg"
                />
                
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  {/* White Captcha Pill */}
                  <div className="bg-white rounded-full px-6 py-3.5 flex items-center justify-center font-black text-black tracking-[0.8em] text-lg sm:text-xl shadow-inner min-w-[130px]">
                    7 3 6
                  </div>
                  {/* Refresh Icon */}
                  <button type="button" className="text-white hover:text-[#ffab00] transition-colors p-2 flex-shrink-0">
                    <RefreshCw size={28} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-start">
                <button 
                  type="submit" 
                  className="bg-[#ffab00] text-[#052644] font-bold text-xl px-10 py-3 rounded-lg hover:bg-[#e69a00] transition-all duration-300 shadow-md transform hover:-translate-y-1"
                >
                  Submit
                </button>
              </div>

            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;