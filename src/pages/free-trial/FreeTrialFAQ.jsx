import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-[#222222] font-bold text-[16px] md:text-[18px] pr-8 group-hover:text-[#19527a] transition-colors leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown size={28} strokeWidth={3} className="text-[#333333]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 text-base leading-relaxed pr-8">
              {answer || "This is a placeholder answer. You can update this with the specific details of your IPTV Free Trial policy."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FreeTrialFAQ = () => {
  // Questions mapped exactly from your image
  const leftColumnFAQs = [
    { question: "What does your Free IPTV Trial offers ?" },
    { question: "How can I access your Free Trial IPTV Canada ?" },
    { question: "Can I cancel the Free Trial anytime ?" }
  ];

  const rightColumnFAQs = [
    { question: "What can I test during your IPTV Free Trial ?" },
    { question: "What happens after the Free Trial ends ?" }
  ];

  return (
    // Soft gray background to match the design file perfectly
    <section className="bg-[#f4f6f8] w-full py-20 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] mb-4"
          >
            Frequently Asked Questions (FAQs)
          </motion.h2>
        </div>

        {/* --- FAQ GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-2">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {leftColumnFAQs.map((faq, index) => (
              <FAQItem key={`left-${index}`} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            {rightColumnFAQs.map((faq, index) => (
              <FAQItem key={`right-${index}`} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FreeTrialFAQ;