import React from 'react';
import { motion } from 'framer-motion';

const SetupStepsSection = () => {
  const steps = [
    {
      id: "01",
      description: "Download the app from the Play Store or App Store to your preferred device."
    },
    {
      id: "02",
      description: "Add your playlist URL or upload your M3U/XSPF file effortlessly."
    },
    {
      id: "03",
      description: "Set up a UDP proxy for seamless multicast stream performance."
    },
    {
      id: "04",
      description: "Choose your preferred view and start streaming your favorite channels instantly."
    }
  ];

  // Reusable SVG for the wavy dashed arrow connecting the steps
  const DashedArrow = () => (
    <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] z-0">
      <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none" className="overflow-visible">
        {/* The dashed curved line */}
        <path 
          d="M0,20 Q50,-10 95,20" 
          fill="none" 
          stroke="#19527a" 
          strokeWidth="2" 
          strokeDasharray="6,6" 
        />
        {/* The arrowhead */}
        <polygon points="93,14 100,20 93,26" fill="#19527a" />
      </svg>
    </div>
  );

  return (
    // Outer section with white background
    <section className="bg-white w-full py-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* The large light-gray card container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#f4f6f8] rounded-[35px] py-16 px-8 md:px-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
        >
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[40px]">
              Setup the App and Start Streaming
            </h2>
          </div>

          {/* Steps Container */}
          {/* Uses flex-col on mobile for stacking, and grid-cols-4 on large screens for the horizontal layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-4 relative">
            
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                
                {/* The Step Circle Indicator */}
                <div className="relative w-24 h-24 rounded-full border-[5px] border-[#ffab00] p-1.5 flex items-center justify-center bg-[#f4f6f8] mb-6 shadow-sm">
                  {/* Inner Dark Blue Circle */}
                  <div className="w-full h-full bg-[#0b3c66] rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-white text-2xl font-bold tracking-wide">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* The Descriptive Text */}
                <p className="text-[#444444] text-[15px] md:text-base font-medium leading-relaxed max-w-[220px]">
                  {step.description}
                </p>

                {/* Render the dashed arrow ONLY if it's not the last step */}
                {index !== steps.length - 1 && <DashedArrow />}

              </motion.div>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SetupStepsSection;