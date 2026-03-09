import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, PlayCircle, Share2, CircleDollarSign, ShieldCheck } from 'lucide-react';

const AppStandOutSection = () => {
  // Feature Data Array
  const features = [
    {
      id: 1,
      icon: <Smartphone size={40} strokeWidth={1.5} />,
      title: "User-Friendly Design",
      description: "Enjoy a sleek, intuitive interface that anyone can navigate easily."
    },
    {
      id: 2,
      icon: <PlayCircle size={40} strokeWidth={1.5} />,
      title: "Reliable Playback",
      description: "Our app ensures buffer-free streaming with advanced proxy support."
    },
    {
      id: 3,
      icon: <Share2 size={40} strokeWidth={1.5} />,
      title: "Unmatched Versatility",
      description: "Supports multiple formats and playback options for seamless viewing."
    },
    {
      id: 4,
      icon: <CircleDollarSign size={40} strokeWidth={1.5} />,
      title: "Affordable Plans",
      description: "Access premium IPTV features without breaking the bank."
    },
    {
      id: 5,
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "Enhanced Security",
      description: "Built-in parental controls and secure data handling provide peace of mind."
    }
  ];

  return (
    // Light gray background to make the white cards stand out
    <section className="bg-[#f4f6f8] w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-4"
          >
            See What Makes Our IPTV App Stand Out
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#444444] text-base md:text-[17px] font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We redefine convenience and customization, ensuring the perfect balance between performance, flexibility, and exceptional value.
          </motion.p>
        </div>

        {/* --- FEATURE CARDS (Centered Flex Layout) --- */}
        {/* Using flex-wrap and justify-center allows the 5 cards to naturally sit as 3 on top, 2 on bottom on large screens */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              // Calculate width to fit exactly 3 per row on desktop, 2 on tablet, 1 on mobile
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[350px] flex flex-col items-center text-center bg-white p-8 md:p-10 shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300 rounded-tl-[40px] rounded-br-[40px] rounded-tr-[15px] rounded-bl-[15px]"
            >
              
              {/* Golden Icon */}
              <div className="text-[#ffab00] mb-5">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#19527a] font-bold text-[19px] md:text-xl mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#444444] text-[14px] md:text-[15px] leading-relaxed font-medium">
                {feature.description}
              </p>
              
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default AppStandOutSection;