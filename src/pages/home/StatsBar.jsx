import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Film } from 'lucide-react';

const StatsBar = () => {
  const stats = [
    {
      id: 1,
      // Using Lucide's MonitorPlay to replicate the TV with the play button
      icon: <MonitorPlay size={56} className="text-[#fdb913]" strokeWidth={2} />,
      title: "15000+",
      subtitle: "Total Channels"
    },
    {
      id: 2,
      // Recreating the exact "4K" bordered box from your image using CSS
      icon: (
        <div className="border-[4px] border-[#fdb913] rounded-md px-3 py-2 flex items-center justify-center h-[56px]">
          <span className="text-[#fdb913] font-black text-2xl leading-none tracking-tighter">4K</span>
        </div>
      ),
      title: "Ultra HD",
      subtitle: "Streaming"
    },
    {
      id: 3,
      // Using Lucide's Film icon for the movies
      icon: <Film size={56} className="text-[#fdb913]" strokeWidth={2} />,
      title: "500000+",
      subtitle: "Movies"
    }
  ];

  return (
    // The exact dark blue background color from your image
    <div className="bg-[#033052] w-full py-10 md:py-12 shadow-lg relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Flex container: Column on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
          
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              // Framer motion: fades and slides up when it enters the viewport
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start"
            >
              {/* Icon Container with a subtle golden drop-shadow */}
              <div className="flex-shrink-0 drop-shadow-[0_2px_12px_rgba(253,185,19,0.25)]">
                {stat.icon}
              </div>

              {/* Text Container */}
              <div className="flex flex-col">
                <span className="text-white font-bold text-4xl leading-tight">
                  {stat.title}
                </span>
                <span className="text-gray-100 text-lg font-medium tracking-wide">
                  {stat.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default StatsBar;