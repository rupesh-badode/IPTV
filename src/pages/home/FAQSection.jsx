import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// --- REUSABLE FAQ ITEM COMPONENT ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between py-5 text-left focus:outline-none group"
      >
        <span className="text-[#222222] font-bold text-[16px] md:text-[17px] pr-8 group-hover:text-[#19527a] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 flex-shrink-0"
        >
          {/* Using a thick stroke width to match the heavy chevron in your design */}
          <ChevronDown size={24} strokeWidth={3} className="text-[#333333]" />
        </motion.div>
      </button>

      {/* Smooth Expansion Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 text-base leading-relaxed pr-8">
              {answer || "This is a placeholder answer. You can easily populate this section with your actual FAQ response text in the data array."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN FAQ SECTION ---
const FAQSection = () => {
  // Left Column Data (From image)
  const leftColumnFAQs = [
    { question: "What devices are compatible with Brampton IPTV ?" },
    { question: "Do you offer a free trial ?" },
    { question: "What is IPTV ?" },
    { question: "Does IPTV require a Smart TV, or will it work with a regular TV too ?" },
    { question: "Once I buy an IPTV set-top box from IPTV Brampton, how long does it take to activate the service ?" },
    { question: "I used to live in Toronto when I bought IPTV Brampton. Now I'm moving to Montreal. Will my IPTV Brampton work in Montreal too ?" },
    { question: "Does IPTV Brampton provide service through an app ? I don't want to buy an IPTV box and want to use it on my Smart TV." }
  ];

  // Right Column Data (From image)
  const rightColumnFAQs = [
    { question: "Is there a contract ?" },
    { question: "Does IPTV Brampton work with hotel Wi-Fi ?" },
    { question: "Can I change my plan with IPTV Brampton ?" },
    { question: "Can I pay in Canadian dollars, or will I be charged in USD ?" },
    { question: "How can I get support from IPTV Brampton ?" },
    { question: "Can I change my service from the app to an IPTV set-top box ?" }
  ];

  return (
    <section className="bg-[#fcfcfc] w-full py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] mb-4"
          >
            Frequently Asked Questions (FAQs)
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#444444] text-base md:text-[17px] max-w-3xl mx-auto font-medium"
          >
            We're here to clear things up. Explore our FAQ section to find solutions to the most frequently asked inquiries regarding our IPTV service:
          </motion.p>
        </div>

        {/* --- FAQ COLUMNS --- */}
        {/* Uses a 2-column grid on large screens, 1-column on mobile */}
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

export default FAQSection;