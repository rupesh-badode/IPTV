import React from 'react';
import { motion } from 'framer-motion';
import mobile from "../../assets/images/iPhone-14.png"; // Replace with your actual image path

const AppFeaturesSection = () => {
  // Feature Data Array
  const features = [
    {
      id: 1,
      title: "Playlist Integration",
      description: "Add M3U or XSPF playlists for instant access to live TV channels."
    },
    {
      id: 2,
      title: "Custom Views",
      description: "Choose between Grid, List, or Tile layouts to personalize your experience."
    },
    {
      id: 3,
      title: "Multicast Support",
      description: "Set up a UDP proxy for uninterrupted multicast stream playback."
    },
    {
      id: 4,
      title: "Parental Controls",
      description: "Block inappropriate content to ensure a safe viewing environment for your family."
    }
  ];

  return (
    // Clean off-white background to match the design
    <section className="bg-[#f8fafc] w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight">
            Top IPTV App Features You’ll Love
          </h2>
        </motion.div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Phone Mockup --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center md:justify-end"
          >
            {/* Replace this placeholder with your actual transparent .png of the phone with the app UI */}
            <img 
              src={mobile}
              alt="IPTV App Interface on Smartphone" 
              className="w-full max-w-[300px] lg:max-w-[340px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              style={{ clipPath: 'inset(0 0 10% 0 round 35px)' }} // Placeholder clip for the unsplash image
            />
          </motion.div>

          {/* --- RIGHT COLUMN: Feature Cards --- */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                // Stagger the animation so they slide in sequentially
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className="bg-[#052644] w-full rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-transparent hover:border-[#ffab00] group"
              >
                <h3 className="text-[#ffab00] font-bold text-xl md:text-[22px] mb-2 group-hover:translate-x-1 transition-transform">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-[15px] md:text-base font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppFeaturesSection;