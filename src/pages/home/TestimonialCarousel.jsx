import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  // Testimonial Data
  const testimonials = [
    {
      id: 1,
      text: "Finally, an IPTV provider that actually works. No more buffering, no more headaches. Thank you, Brampton!",
      rating: 5,
    },
    {
      id: 2,
      text: "IPTV has changed the way I watch TV. The TV channel selection is incredible, and the streaming quality is flawless!",
      rating: 5,
    },
    {
      id: 3,
      text: "Seamless transition from cable to IPTV. The customer support helped me set up my Linux box in minutes. Highly recommended!",
      rating: 5,
    },
    {
      id: 4,
      text: "Best decision I made this year. The 4K movies section is massive and always updated with the latest releases.",
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Custom SVG for the large blocky Left Quote
  const QuoteLeft = () => (
    <svg width="60" height="50" viewBox="0 0 54 43" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-6 left-6 opacity-90">
      <path d="M22 0H0V22H11L5.5 43H20L26.5 22V0H22Z" fill="#19527a"/>
      <path d="M50 0H28V22H39L33.5 43H48L54.5 22V0H50Z" fill="#19527a"/>
    </svg>
  );

  // Custom SVG for the large blocky Right Quote
  const QuoteRight = () => (
    <svg width="60" height="50" viewBox="0 0 54 43" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-6 right-6 opacity-90">
      <path d="M32 43H54V21H43L48.5 0H34L27.5 21V43H32Z" fill="#19527a"/>
      <path d="M4 43H26V21H15L20.5 0H6L-0.5 21V43H4Z" fill="#19527a"/>
    </svg>
  );

  return (
    // Very light gray background to make the white cards pop
    <section className="bg-[#f4f6f8] w-full py-16 md:py-24 overflow-hidden flex flex-col items-center">
      
      {/* Main Header */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] mb-16 text-center px-4"
      >
        Customers Love: Why We're Canada's Favorite IPTV
      </motion.h2>

      {/* --- CAROUSEL CONTAINER --- */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[350px] mb-12">
        
        {/* We use an AnimatePresence to smoothly transition the cards in and out */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 justify-center items-center w-full"
          >
            
            {/* Render two cards at a time on desktop, one on mobile. 
              We calculate the next index to show it side-by-side. 
            */}
            {[0, 1].map((offset) => {
              const cardIndex = (currentIndex + offset) % testimonials.length;
              const review = testimonials[cardIndex];

              return (
                <div 
                  key={cardIndex} 
                  className={`bg-white rounded-[35px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-12 relative w-full max-w-[500px] min-h-[300px] flex flex-col items-center justify-center ${offset === 1 ? 'hidden md:flex' : 'flex'}`}
                >
                  <QuoteLeft />
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={28} className="fill-[#ffab00] text-[#ffab00]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-black text-lg md:text-xl font-medium text-center leading-relaxed px-4 z-10">
                    {review.text}
                  </p>

                  <QuoteRight />
                </div>
              );
            })}
            
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- BOTTOM TEXT & CALL TO ACTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center px-4 text-center"
      >
        <p className="text-[#333333] text-xl md:text-2xl font-medium mb-8 max-w-3xl">
          The proof is in the praise. Why listen to us when our customers can tell you better?
        </p>

        {/* Action Button */}
        <button className="bg-[#ffab00] hover:bg-[#e69a00] text-[#052644] font-bold text-2xl px-12 py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 mb-8">
          Share a Review
        </button>

        {/* Custom Pagination / Slider Controls */}
        <div className="bg-[#e5e7eb] rounded-full px-4 py-2 flex items-center gap-6 text-gray-500 font-medium">
          <button onClick={prevSlide} className="hover:text-black transition-colors">
            <ChevronLeft size={20} />
          </button>
          
          {/* Mocking the "11 / 54" counter from the image */}
          <span className="text-sm tracking-widest">
            {currentIndex + 11} / 54
          </span>
          
          <button onClick={nextSlide} className="hover:text-black transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default TestimonialCarousel;