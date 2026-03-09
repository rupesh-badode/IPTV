import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  // Data array exactly matching the screenshot
  const tableData = [
    { feature: "Monthly Fees", iptv: false, c1: true, c2: true, c3: false, c4: false },
    { feature: "Free TV For 5 Years", iptv: true, c1: false, c2: false, c3: false, c4: false },
    { feature: "HD Live Channels", iptv: true, c1: true, c2: true, c3: true, c4: true },
    { feature: "4k Live channels", iptv: true, c1: false, c2: false, c3: false, c4: false },
    { feature: "24*7 Customer Support", iptv: true, c1: false, c2: false, c3: false, c4: false },
    { feature: "24*7 Technical Support", iptv: true, c1: false, c2: true, c3: false, c4: false },
    { feature: "Top Selling IPTV of US/ Canada in 2023", iptv: true, c1: false, c2: false, c3: false, c4: false },
    { feature: "Top Selling IPTV of US/ Canada in 2024", iptv: true, c1: false, c2: false, c3: false, c4: false },
  ];

  // Helper function to render the correct icon
  const renderIcon = (hasFeature, isMonthlyFeeRow = false) => {
    if (hasFeature) {
      // Competitors have a green check for monthly fees (which is bad), but it's still a green check in the image
      return <Check className="mx-auto text-[#22c55e]" size={28} strokeWidth={2.5} />;
    } else {
      return <X className="mx-auto text-[#ef4444]" size={28} strokeWidth={2.5} />;
    }
  };

  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        
        {/* --- HEADINGS --- */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-5"
          >
            The Best IPTV in Canada: No Competition Comes Close
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#333333] text-base md:text-lg max-w-4xl mx-auto font-medium leading-relaxed"
          >
            IPTV Brampton isn't just better-it's in a class of its own. While competitors cut corners, we prioritize your experience with crystal-clear streaming, global channels, and round-the-clock support. With us, you're not just watching TV but experiencing the best.
          </motion.p>
        </div>

        {/* --- COMPARISON TABLE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          // The overflow-hidden and rounded-2xl creates the outer curved border perfectly
          className="w-full overflow-x-auto rounded-[20px] border-[1.5px] border-gray-300 shadow-lg"
        >
          <table className="w-full min-w-[800px] border-collapse bg-white">
            
            {/* TABLE HEADER */}
            <thead>
              <tr className="text-lg">
                <th className="py-5 px-6 text-center text-[#19527a] font-bold border-b-[1.5px] border-r-[1.5px] border-gray-300 w-1/4">
                  Features
                </th>
                <th className="py-5 px-6 text-center bg-[#0b3c66] border-b-[1.5px] border-r-[1.5px] border-gray-300 w-[15%]">
                  {/* Replicating the logo style in text */}
                  <div className="flex flex-col items-center leading-tight">
                    <span className="text-white font-bold text-lg tracking-wider">IPTV</span>
                    <span className="text-[#ffab00] font-bold text-xl -mt-1">Brampton</span>
                  </div>
                </th>
                <th className="py-5 px-4 text-center bg-[#ffab00] text-[#19527a] font-bold border-b-[1.5px] border-r-[1.5px] border-gray-300">
                  Competitor-1
                </th>
                <th className="py-5 px-4 text-center bg-[#ffab00] text-[#19527a] font-bold border-b-[1.5px] border-r-[1.5px] border-gray-300">
                  Competitor-2
                </th>
                <th className="py-5 px-4 text-center bg-[#ffab00] text-[#19527a] font-bold border-b-[1.5px] border-r-[1.5px] border-gray-300">
                  Competitor-3
                </th>
                <th className="py-5 px-4 text-center bg-[#ffab00] text-[#19527a] font-bold border-b-[1.5px] border-gray-300">
                  Competitor-4
                </th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="transition-colors hover:bg-gray-50">
                  {/* Feature Name */}
                  <td className="py-4 px-6 text-left text-[#333333] font-bold text-base md:text-[17px] border-b-[1.5px] border-r-[1.5px] border-gray-300">
                    {row.feature}
                  </td>
                  
                  {/* IPTV Brampton Column */}
                  <td className="py-4 px-6 text-center border-b-[1.5px] border-r-[1.5px] border-gray-300 bg-[#f8fafc]">
                    {renderIcon(row.iptv)}
                  </td>
                  
                  {/* Competitor Columns */}
                  <td className="py-4 px-4 text-center border-b-[1.5px] border-r-[1.5px] border-gray-300">
                    {renderIcon(row.c1)}
                  </td>
                  <td className="py-4 px-4 text-center border-b-[1.5px] border-r-[1.5px] border-gray-300">
                    {renderIcon(row.c2)}
                  </td>
                  <td className="py-4 px-4 text-center border-b-[1.5px] border-r-[1.5px] border-gray-300">
                    {renderIcon(row.c3)}
                  </td>
                  <td className="py-4 px-4 text-center border-b-[1.5px] border-gray-300">
                    {renderIcon(row.c4)}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </motion.div>

      </div>
    </section>
  );
};

export default ComparisonSection;