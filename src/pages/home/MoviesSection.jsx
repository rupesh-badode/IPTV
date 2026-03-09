import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- REUSABLE MOVIE ROW COMPONENT ---
const MovieRow = ({ title, subtitle, movies }) => {
  const rowRef = useRef(null);

  // Function to handle the left/right scroll buttons
  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      // Scrolls by roughly the width of the visible container
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth + 100 : scrollLeft + clientWidth - 100;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-16 last:mb-0 relative">
      {/* Headings */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 px-4"
      >
        <h2 className="text-[#ffab00] font-bold text-3xl md:text-4xl lg:text-[40px] drop-shadow-md mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-4xl mx-auto font-medium leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1400px] mx-auto group">
        
        {/* Left Scroll Button */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black p-2 md:p-3 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 hidden sm:block"
        >
          <ArrowLeft size={24} strokeWidth={3} />
        </button>

        {/* Scrollable Track */}
        <div 
          ref={rowRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides native scrollbar
        >
          {movies.map((movie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="relative flex-shrink-0 snap-start w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] aspect-[2/3] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              {/* Replace these placeholder images with your actual movie poster URLs */}
              <img 
                src={movie.img} 
                alt={`Movie ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500"
              />
              {/* Subtle bottom gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black p-2 md:p-3 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 hidden sm:block"
        >
          <ArrowRight size={24} strokeWidth={3} />
        </button>

      </div>
    </div>
  );
};

// --- MAIN SECTION COMPONENT ---
const MoviesSection = () => {
  // Mock Data: Using Unsplash placeholders with cinematic styling.
  // Replace these with the actual paths to your movie poster assets.
  const topRowMovies = [
    { img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1574267432553-4b462808152f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b586?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  const bottomRowMovies = [
    { img: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#06182c]">
      
      {/* Background Poster Overlay Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      />
      {/* Deep gradient to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#06182c] via-transparent to-[#06182c]"></div>

      <div className="relative z-10 w-full">
        {/* Top Carousel Row */}
        <MovieRow 
          title="Find New Movies & Never Run Out of Option" 
          movies={topRowMovies} 
        />

        {/* Spacer between rows */}
        <div className="h-8 md:h-12"></div>

        {/* Bottom Carousel Row */}
        <MovieRow 
          title="Upcoming Movies You Need to Watch This Year" 
          subtitle="Discover a treasure trove of movies in crystal-clear 4K. Perfect for every film enthusiast, our collection is curated to bring you the best of cinema anytime you want."
          movies={bottomRowMovies} 
        />
      </div>

    </section>
  );
};

export default MoviesSection;