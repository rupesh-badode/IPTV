import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Clock, Film } from 'lucide-react';

const FreeTrialBanner = () => {
  return (
    // Dark blue background with overflow-hidden for the network pattern
    <section className="relative bg-[#052644] w-full py-16 md:py-24 overflow-hidden">
      
      {/* --- BACKGROUND NETWORK PATTERN --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: Typography & CTA --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col text-center lg:text-left"
          >
            <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-[54px] leading-tight mb-4 drop-shadow-md">
              Start your IPTV <br />
              <span className="text-[#ffab00]">Free Trial Now!</span>
            </h2>
            
            <p className="text-gray-200 text-base md:text-lg font-medium max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
              Activate your IPTV free trial upto 72 hours and explore all features.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#ffab00] hover:bg-[#e69a00] text-[#052644] font-bold text-[17px] md:text-lg px-8 py-3.5 rounded-lg shadow-[0_6px_15px_rgba(255,171,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,171,0,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                Start Free Trial
              </button>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Image & Stats Bar --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col w-full"
          >
            {/* Subject Image */}
            <div className="w-full flex justify-center mb-6">
              {/* Replace this URL with your transparent .png of the two women giving thumbs up */}
              <img 
                src="https://img.freepik.com/premium-photo/satisfied-bald-middle-aged-customer-thumbs-up_926199-2842811.jpg?semt=ais_rp_progressive&w=740&q=80" 
                alt="Happy customers giving thumbs up" 
                className="w-full max-w-[450px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
                style={{ clipPath: 'inset(0 0 10% 0 round 20px)' }} // Placeholder clip for Unsplash image
              />
            </div>

            {/* Stats Bar */}
            <div className="w-full border-t-[3px] border-[#ffab00] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-2">
              
              {/* Stat 1: Channels */}
              <div className="flex items-center gap-3">
                <Tv className="text-[#ffab00]" size={36} strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl md:text-2xl leading-none tracking-wide">15000+</span>
                  <span className="text-gray-300 text-xs md:text-sm font-medium mt-1">Total Channels</span>
                </div>
              </div>

              {/* Stat 2: Hours */}
              <div className="flex items-center gap-3">
                <Clock className="text-[#ffab00]" size={36} strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl md:text-2xl leading-none tracking-wide">72 Hours</span>
                  <span className="text-gray-300 text-xs md:text-sm font-medium mt-1">Free Trial</span>
                </div>
              </div>

              {/* Stat 3: Movies */}
              <div className="flex items-center gap-3">
                <Film className="text-[#ffab00]" size={36} strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl md:text-2xl leading-none tracking-wide">500000+</span>
                  <span className="text-gray-300 text-xs md:text-sm font-medium mt-1">Movies</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FreeTrialBanner;