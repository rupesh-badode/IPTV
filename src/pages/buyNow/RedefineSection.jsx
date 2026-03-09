import React from 'react';
import { motion } from 'framer-motion';

const RedefineSection = () => {
  // Data for the 4 feature cards
  const features = [
    {
      id: 1,
      title: "Stream Without\nLimits",
      description: "No data caps, no throttling-just unlimited streaming at the highest quality, whenever you want."
    },
    {
      id: 2,
      title: "Your Security,\nOur Priority",
      description: "We protect your privacy with advanced encryption and secure streaming, so you can watch with peace of mind."
    },
    {
      id: 3,
      title: "A Library that\nNever Gets Old",
      description: "From timeless classics to the latest releases, our ever-growing library ensures there’s always something new to explore."
    },
    {
      id: 4,
      title: "A Platform that\nInspires",
      description: "Discover documentaries, educational content, and inspiring stories that entertain and enlighten."
    }
  ];

  return (
    // Light gray background to make the white cards pop with their shadows
    <section className="bg-[#f4f6f8] w-full py-20 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] mb-5"
          >
            Redefine How You Watch TV
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#333333] text-lg md:text-xl font-medium max-w-4xl mx-auto"
          >
            We’re your gateway to endless entertainment-redefining TV with quality, variety, and affordability.
          </motion.p>
        </div>

        {/* --- FEATURE CARDS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => {
            // Determine if it's an even card (index 1 or 3) to create the staggered alternating layout on desktop
            const isStaggered = index % 2 !== 0;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                // Push even cards down on large screens to recreate the zigzag/wave layout
                className={`relative mt-8 ${isStaggered ? 'lg:mt-16 lg:-mb-16' : ''}`}
              >
                {/* The Card Wrapper 
                  Uses specific border radii to create the leaf-like shape (heavy curves on TL and BR)
                */}
                <div className="bg-white rounded-tl-[40px] rounded-br-[40px] rounded-tr-[15px] rounded-bl-[15px] p-8 pt-14 flex flex-col items-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.06)] h-full border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
                  
                  {/* Floating Number Badge */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#ffab00] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-black text-2xl tracking-tighter">
                      {feature.id}
                    </span>
                  </div>

                  {/* Card Title */}
                  {/* white-space: pre-line allows the \n in the data to break the text exactly where you want it */}
                  <h3 className="text-[#19527a] font-bold text-xl md:text-[22px] leading-tight mb-5 whitespace-pre-line min-h-[55px]">
                    {feature.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[#444444] text-[15px] md:text-base leading-relaxed font-medium">
                    {feature.description}
                  </p>
                  
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RedefineSection;