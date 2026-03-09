import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const IPTVFeatures = () => {
  // Checklist data
  const checkItems = [
    "Crystal-Clear HD Streaming",
    "User-Friendly Interface",
    "Seamless Device Compatibility",
    "Advanced EPG Guide",
    "24/7 Customer Support",
    "Global Channel Lineup",
    "No Contracts, No Limits"
  ];

  // Stat boxes data
  const statBoxes = [
    { title: "15000+", subtitle: "Regional Channels" },
    { title: "4K Ultra", subtitle: "HD Streaming" },
    { title: "500000+", subtitle: "Video On Demand" }
  ];

  return (
    <section className="bg-white w-full py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Text, Stats, and Checklist --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Headings */}
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-4">
              IPTV Brampton Features: Why We're the Best IPTV Provider
            </h2>
            
            <p className="text-[#444444] text-base md:text-lg mb-8 font-medium max-w-lg">
              We combine cutting-edge technology with user-focused features to redefine your streaming experience.
            </p>

            {/* Dark Blue Stat Boxes */}
            <div className="flex flex-wrap gap-4 mb-10">
              {statBoxes.map((box, idx) => (
                <div 
                  key={idx} 
                  // Uses specific border radii (rounded top-left and bottom-right) to mimic the sleek styling in the image
                  className="bg-[#0b3c66] text-white py-4 px-6 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow-[0_8px_15px_rgba(0,0,0,0.15)] flex-1 min-w-[140px] text-center flex flex-col items-center justify-center border border-[#0f4c80] transform transition-transform hover:-translate-y-1"
                >
                  <span className="font-bold text-xl md:text-2xl mb-1">{box.title}</span>
                  <span className="text-[10px] md:text-xs tracking-wide font-semibold opacity-90">{box.subtitle}</span>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-4">
              {checkItems.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1), duration: 0.4 }}
                  className="flex items-center gap-3 text-[#333333] font-medium text-base md:text-lg"
                >
                  {/* Solid yellow circle with white check inside using Lucide */}
                  <CheckCircle2 size={24} className="text-white fill-[#ffab00] flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- RIGHT COLUMN: Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end"
          >
            {/* Replace the Unsplash URL with your specific image asset */}
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Friends enjoying IPTV" 
              className="w-full max-w-[550px] h-auto rounded-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IPTVFeatures;