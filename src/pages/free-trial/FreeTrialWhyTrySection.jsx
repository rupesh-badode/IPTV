import React from 'react';
import { motion } from 'framer-motion';

const FreeTrialWhyTrySection = () => {
  const benefits = [
    {
      title: "Content Variety:",
      description: "See if our channels match your interests."
    },
    {
      title: "User-Friendly Interface:",
      description: "Experience how easy it is to navigate."
    },
    {
      title: "Features:",
      description: "Explore the tools and options that come with the service."
    },
    {
      title: "Value for Money:",
      description: "Test whether it’s worth the investment."
    },
    {
      title: "Customer Support:",
      description: "Evaluate how responsive and helpful our support team is."
    }
  ];

  return (
    // Clean white background to seamlessly connect with surrounding sections
    <section className="bg-white w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Typography & List --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6">
              Why Should You Try An IPTV Free Trial?
            </h2>
            
            <p className="text-[#444444] text-base md:text-[17px] leading-relaxed font-medium mb-4">
              With so many providers claiming to offer the best IPTV streaming, a free trial makes it easy to test, compare, and choose the one that suits you best.
            </p>
            
            <p className="text-[#444444] text-base md:text-[17px] leading-relaxed font-medium mb-6">
              Here's what you can check out with our free instant IPTV trial:
            </p>

            {/* Bulleted List */}
            <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-[#444444]">
              {benefits.map((item, index) => (
                <li key={index} className="text-[#444444] text-[15px] md:text-base leading-relaxed">
                  <span className="font-bold text-[#222222]">{item.title}</span> {item.description}
                </li>
              ))}
            </ul>

            {/* Emphasized Conclusion */}
            <p className="text-[#19527a] font-bold text-lg md:text-xl">
              Give it a go and see for yourself!
            </p>

          </motion.div>

          {/* --- RIGHT COLUMN: Image & Yellow Background --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end"
          >
            {/* The Custom Yellow Shape Container */}
            <div className="relative w-full max-w-[500px] bg-[#ffab00] rounded-tl-[80px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] pt-10 px-6 flex justify-center items-end shadow-lg mt-8 lg:mt-0">
              
              {/* Replace this URL with your transparent cutout image of the couple */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Happy couple giving thumbs up" 
                className="relative z-10 w-[95%] h-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FreeTrialWhyTrySection;