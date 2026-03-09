import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, PlayCircle, MonitorPlay, Tv } from 'lucide-react';

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // We are creating an array of slides so the carousel actually functions.
  // The first slide is the promo banner you requested.
  const slides = [
    { id: 1, type: 'promo' },
    { id: 2, type: 'dummy' },
    { id: 3, type: 'dummy' },
  ];

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  // Auto-play functionality (Optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // Changes every 8 seconds
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-[#0a0f1a] overflow-hidden flex items-center justify-center font-sans">
      
      {/* Blurred Background Image mimicking the cinematic bokeh */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 blur-md"
        style={{ backgroundImage: "url('https://1000logos.net/wp-content/uploads/2025/10/TV-Channels-and-Their-Logos.jpg')" }}
      />

      {/* Main Carousel Wrapper */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-12 flex items-center justify-center">
        
        {/* Left Arrow */}
        <button onClick={prevSlide} className="absolute left-2 md:left-6 z-30 bg-[#fdb913] p-2 md:p-3 rounded-full text-black hover:bg-white transition-colors shadow-lg">
          <ChevronLeft size={24} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            {slides[current].type === 'promo' ? (
              /* --- THE PROMO BANNER --- */
              <div className="relative w-full bg-gradient-to-br from-[#1a2332] to-[#0a1122] border border-gray-700/50 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl overflow-hidden">
                
                {/* Decorative string lights / glow effect */}
                <div className="absolute top-0 left-1/4 w-1/2 h-20 bg-[#fdb913] opacity-20 blur-[60px] rounded-full pointer-events-none" />

                {/* --- LEFT SIDE: GREETING --- */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-r from-[#e5a910] to-[#fdb913] text-black px-6 py-1 rounded-t-lg font-semibold text-sm mb-2 relative"
                  >
                    Welcome
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight"
                  >
                    Happy <br/>
                    <span className="font-serif italic text-white">New Year</span>
                  </motion.h2>

                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, type: "spring", bounce: 0.5 }}
                    className="text-7xl md:text-9xl font-black text-[#fdb913] drop-shadow-[0_0_15px_rgba(253,185,19,0.5)] tracking-tighter -mt-2 md:-mt-4"
                    style={{ textShadow: "4px 4px 0px #a17002, 8px 8px 15px rgba(0,0,0,0.8)" }}
                  >
                    2026
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-gray-300 mt-4 max-w-xs text-sm md:text-base italic"
                  >
                    Wishing you and your family a bright and beautiful New Year!
                  </motion.p>
                </div>

                {/* --- RIGHT SIDE: OFFER --- */}
                <div className="flex-[1.5] flex flex-col items-center md:items-start text-center md:text-left z-10 w-full">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-[#fdb913] font-medium text-sm md:text-base mb-2"
                  >
                    Kickstart 2026 with an unbeatable offer!
                  </motion.p>

                  {/* Price Pill */}
                  <motion.div 
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <span className="text-gray-400 font-medium">For</span>
                    <div className="border border-[#217bb4] rounded-full px-5 py-2 flex items-baseline gap-2 bg-[#0a1122]/50">
                      <span className="text-[#fdb913] font-bold text-2xl md:text-3xl">$400</span>
                      <span className="text-[#fdb913] text-sm">CAD Only</span>
                    </div>
                    <span className="text-red-500/80 line-through text-sm md:text-base decoration-2 font-semibold">
                      $420 CAD
                    </span>
                  </motion.div>

                  {/* Main Header */}
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight flex flex-wrap items-center justify-center md:justify-start gap-3"
                  >
                    <span className="bg-[#fdb913] text-black text-xs md:text-sm px-2 py-1 rounded-sm uppercase tracking-wider font-bold -translate-y-1">Enjoy</span> 
                    lifetime IPTV streaming
                  </motion.h1>

                  {/* Features Grid */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full mb-8"
                  >
                    {/* Badge 1 */}
                    <div className="border border-indigo-500/30 bg-indigo-950/40 rounded-xl p-3 flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1 text-white font-bold text-lg md:text-xl">
                        <Tv size={18} className="text-indigo-400" /> 15000+
                      </div>
                      <span className="text-xs text-indigo-300">4K TV Channels</span>
                    </div>
                    {/* Badge 2 */}
                    <div className="border border-blue-500/30 bg-blue-950/40 rounded-xl p-3 flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1 text-white font-bold text-lg md:text-xl">
                        <PlayCircle size={18} className="text-blue-400" /> 500000+
                      </div>
                      <span className="text-xs text-blue-300">VOD <span className="text-[10px] opacity-70">(VIDEO ON DEMAND)</span></span>
                    </div>
                    {/* Badge 3 */}
                    <div className="border border-yellow-500/30 bg-yellow-950/40 rounded-xl p-3 flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1 text-[#fdb913] font-bold text-lg md:text-xl">
                        <MonitorPlay size={18} className="text-[#fdb913]" /> 4K
                      </div>
                      <span className="text-xs text-yellow-300">ULTRA HD STREAMING</span>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="bg-gradient-to-r from-[#f54200] to-[#e65c00] text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(245,66,0,0.4)] hover:shadow-[0_0_30px_rgba(245,66,0,0.6)] transition-shadow"
                  >
                    Join TODAY
                    <div className="bg-white/20 p-1 rounded-full">
                      <ArrowRight size={18} />
                    </div>
                  </motion.button>
                </div>

              </div>
            ) : (
              /* Dummy Slides for visual continuity */
              <div className="w-full h-[400px] md:h-[500px] bg-gray-800/80 backdrop-blur-md rounded-3xl flex items-center justify-center border border-gray-700">
                <h2 className="text-3xl text-white font-bold">More Content Here (Slide {current + 1})</h2>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="absolute right-2 md:right-6 z-30 bg-[#fdb913] p-2 md:p-3 rounded-full text-black hover:bg-white transition-colors shadow-lg">
          <ChevronRight size={24} />
        </button>

      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 flex items-center gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              current === idx ? 'w-8 h-3 bg-white' : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;