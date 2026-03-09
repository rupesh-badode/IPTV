import React from 'react';
import { motion } from 'framer-motion';

const SetTopBoxSection = () => {
  // Reusable styling for the blue embedded links in the paragraphs
  const linkStyle = "text-[#19527a] font-semibold hover:underline cursor-pointer transition-colors";

  return (
    // Light grayish-white background to match the image
    <section className="bg-[#f4f6f8] w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-20">
        
        {/* --- ROW 1: Image Left, Text Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full flex justify-center lg:justify-start"
          >
            <img 
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Family watching Netflix on TV" 
              className="w-full max-w-[550px] aspect-[4/3] object-cover rounded-[35px] shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6">
              Your Streaming Your Way, Choose Your IPTV Set Top Box
            </h2>
            
            <p className="text-[#444444] text-base md:text-[17px] leading-relaxed font-medium">
              Want to take your streaming experience to the next level? Pair your IPTV Brampton subscription with one of our high-performance set-top boxes. As a leading <span className={linkStyle}>IPTV service provider in Canada</span>, we offer a range of devices, including the <span className={linkStyle}>Net + BT or Sword Pro + BT IPTV box with subscription</span>.
            </p>
          </motion.div>

        </div>

        {/* --- ROW 2: Text Left, Image Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Text (On mobile, we use order-last so the image stacks above it) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col order-last lg:order-first"
          >
            <p className="text-[#444444] text-base md:text-[17px] leading-relaxed font-medium">
              Prefer a more versatile option? Linux IPTV boxes and Android IPTV boxes, these devices are designed to deliver seamless, buffer-free streaming and here's the best part—we're offering them at discounted prices! Whether you're tech-savvy or just looking for a hassle-free setup, our boxes are easy to use and come ready to pair with your <span className={linkStyle}>IPTV app</span>. For long-term value, explore our <span className={linkStyle}>IPTV app with 5 years subscription</span> or <span className={linkStyle}>IPTV app with 2 years subscription</span> options, ensuring uninterrupted entertainment for years to come. Don't wait-upgrade your entertainment setup today and start streaming like a pro.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full h-full flex justify-center lg:justify-end order-first lg:order-last"
          >
            <img 
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Friends laughing on couch" 
              className="w-full max-w-[550px] aspect-[4/3] object-cover rounded-[35px] shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SetTopBoxSection;