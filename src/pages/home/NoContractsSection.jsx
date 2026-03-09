import React from 'react';
import { motion } from 'framer-motion';

const NoContractsSection = () => {
  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center"
          >
            {/* Replace this src with your actual image showing the friends laughing on the couch */}
            <img 
              src="https://img.global.news.samsung.com/global/wp-content/uploads/2015/07/Watermark_Inside_Title-Image_0708_v1.jpg" 
              alt="Friends watching TV" 
              className="w-full h-auto rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] object-cover"
            />
          </motion.div>

          {/* --- RIGHT COLUMN: TEXT --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col text-left"
          >
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6">
              No Contracts, No Limits, Just Top-Tier IPTV Service in Canada
            </h2>
            
            <div className="text-[#333333] text-base md:text-lg leading-relaxed space-y-6">
              <p>
                We believe streaming should be simple and free. IPTV Brampton delivers contract-free IPTV in Canada with no hidden fees or restrictions. Stream unlimited content, anytime, on any device.
              </p>
              <p>
                Experience a flexible, high-quality IPTV service built for your lifestyle.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NoContractsSection;