import React from 'react';
import { motion } from 'framer-motion';

const FreeTrialHowToSection = () => {
  // Step Data Array
  const steps = [
    {
      id: "01",
      description: (
        <>
          Fill out our simple request form for a free trial <span className="text-[#19527a] font-bold">IPTV Canada.</span>
        </>
      )
    },
    {
      id: "02",
      description: "Get your trial login instantly by mail."
    },
    {
      id: "03",
      description: "Download our IPTV app or use your streaming device to tune in."
    },
    {
      id: "04",
      description: "Unlock 72-hour access to IPTV Brampton-at zero cost."
    }
  ];

  return (
    // Outer section with a soft light gray background
    <section className="bg-[#f4f6f8] w-full py-20 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1250px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-4"
          >
            How Can You Get Your IPTV Free Trial?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#444444] text-lg md:text-xl font-medium"
          >
            Starting Is a Breeze—Let's Get You Set Up!
          </motion.p>
        </div>

        {/* --- STEPS GRID --- */}
        {/* Uses gap-8 (32px). This gap is mathematically accounted for in the arrow width below! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              
              {/* --- CONNECTING ARROW (Desktop Only) --- */}
              {/* This SVG is absolute positioned to start exactly at the right edge of the current circle and end at the left edge of the next circle. */}
              {index !== steps.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-[80px] left-[calc(50%+56px)] w-[calc(100%-80px)] z-0 pointer-events-none"
                >
                  <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none" className="overflow-visible">
                    {/* The curve alternates (down/up/down) based on the index just like your design! */}
                    <path 
                      d={index % 2 === 0 ? "M0,20 Q50,45 93,20" : "M0,20 Q50,-5 93,20"} 
                      fill="none" 
                      stroke="#19527a" 
                      strokeWidth="2" 
                      strokeDasharray="5,5" 
                    />
                    <polygon points="91,14 98,20 91,26" fill="#19527a" />
                  </svg>
                </div>
              )}

              {/* --- STEP CARD --- */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-[30px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.06)] w-full h-full relative z-10 border border-gray-50"
              >
                {/* Number Circle ("Bullseye" Style) */}
                <div className="w-24 h-24 rounded-full border-[6px] border-[#ffab00] p-1.5 flex items-center justify-center bg-white mb-6 shadow-sm flex-shrink-0">
                  <div className="w-full h-full bg-[#0b3c66] rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-white text-3xl font-bold tracking-wider">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-[#444444] text-[15.5px] font-medium leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>

            </div>
          ))}

        </div>

        {/* --- CALL TO ACTION BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <button className="bg-[#ffab00] hover:bg-[#e69a00] text-[#052644] font-bold text-xl md:text-[22px] px-10 md:px-14 py-4 rounded-xl shadow-[0_6px_15px_rgba(255,171,0,0.3)] hover:shadow-[0_10px_25px_rgba(255,171,0,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Get Your Free IPTV Trial Instant
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FreeTrialHowToSection;