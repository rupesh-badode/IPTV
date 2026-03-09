import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Globe, CheckCircle2 } from 'lucide-react';

const AppPricingSection = () => {
  // Reusable card component for the pricing plans
  const PricingCard = ({ title, price, originalPrice }) => (
    <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-2xl relative w-full max-w-[340px] mx-auto">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-[#19527a] font-bold text-xl mb-1">{title}</h3>
        <p className="text-gray-500 text-sm font-medium">No Hardware Needed</p>
      </div>

      {/* Price Block */}
      <div className="bg-[#0b3c66] w-full rounded-2xl py-4 flex flex-col items-center justify-center mb-6 shadow-inner text-white">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-black tracking-tighter">${price}</span>
          <span className="text-sm font-bold">CAD</span>
        </div>
        <div className="text-gray-400 text-sm font-medium mt-1 relative">
          <span className="line-through decoration-[#ffab00] decoration-2">${originalPrice} CAD</span>
        </div>
      </div>

      {/* Feature List */}
      <ul className="w-full space-y-3 mb-8">
        {['4K UHD | 2.4/5 GHz Box', 'Premium IPTV with 4K Support', '4K Streaming'].map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-[#ffab00] fill-[#ffab00]/20 flex-shrink-0" />
            <span className="text-[#444444] text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Mock App Icon */}
      <div className="w-24 h-24 bg-gradient-to-br from-[#ff0055] to-[#7a00ff] rounded-2xl flex items-center justify-center shadow-lg mb-4">
        {/* Play Button Triangle */}
        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-2"></div>
        <span className="absolute text-white font-bold text-sm mt-12 tracking-widest">IPTV</span>
      </div>
      <p className="text-xs text-gray-400 font-medium mb-8">Model: N/A</p>

      {/* Buttons */}
      <div className="w-full flex items-center justify-between gap-3 mt-auto">
        <button className="bg-[#ffab00] hover:bg-[#e69a00] text-[#052644] font-bold py-2.5 px-6 rounded-lg transition-colors w-1/2 text-center shadow-md">
          Buy Now
        </button>
        <button className="text-[#19527a] hover:text-[#ffab00] font-bold py-2.5 px-2 transition-colors w-1/2 text-center text-sm">
          Learn More
        </button>
      </div>

    </div>
  );

  return (
    <section className="relative bg-[#052644] w-full py-20 px-6 md:px-12 overflow-hidden">
      
      {/* Background Network Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT COLUMN: Text & Stats --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-[46px] leading-tight mb-8">
              Find Your Ideal IPTV Subscription Plans for Seamless Streaming
            </h2>
            
            <div className="mb-8">
              <span className="bg-[#ffab00] text-[#052644] font-bold text-sm md:text-base px-6 py-2.5 rounded-full shadow-md inline-block mb-6 italic">
                Stream Smarter, Save Bigger
              </span>
              <p className="text-white text-xl md:text-2xl font-medium leading-snug max-w-md">
                Get a Discount on <span className="text-[#ffab00] font-bold">IPTV App</span>, with IPTV Subscription.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col">
                <Smile className="text-[#ffab00] mb-3" size={32} />
                <span className="text-white font-black text-3xl mb-1">98900+</span>
                <span className="text-gray-300 text-sm font-medium">Happy Customers</span>
              </div>
              <div className="flex flex-col">
                <Globe className="text-[#ffab00] mb-3" size={32} />
                <span className="text-white font-black text-3xl mb-1">500+</span>
                <span className="text-gray-300 text-sm font-medium">Regional Channels</span>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Pricing Cards --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="text-center mb-8 relative">
              <h3 className="text-white font-bold text-2xl relative z-10 pb-2">IPTV App</h3>
              {/* White Underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-white"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 w-full justify-center">
              <PricingCard title="2 Years Subscription" price="220" originalPrice="300" />
              <PricingCard title="5 Years Subscription" price="300" originalPrice="400" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AppPricingSection;