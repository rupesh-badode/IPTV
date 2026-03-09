import React from 'react';
import { motion } from 'framer-motion';

const ChannelsHeroSection = () => {
  return (
    <div className="w-full flex flex-col">
      
      {/* =========================================
          PART 1: THE DARK BLUE BANNER
      ========================================= */}
      <section className="relative bg-[#052644] w-full pt-2 pb-2 overflow-hidden">
        
        {/* Background Network Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left: Banner Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h1 className="text-[#ffab00] font-bold text-4xl md:text-5xl lg:text-[54px] mb-4 drop-shadow-md">
                Our IPTV Channels
              </h1>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-medium max-w-md leading-snug">
                Our Channels Your Gateway to the Best of Indian and Global TV!
              </p>
            </motion.div>

            {/* Right: TV Screens Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              {/* Replace with your transparent PNG of the 3 TV screens */}
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="IPTV Channel Interface on TVs" 
                className="w-full max-w-[500px] object-contain drop-shadow-2xl"
                style={{ clipPath: 'inset(0 0 20% 0)' }} // Just a placeholder clip for the unsplash image
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          PART 2: EFFORTLESS ENTERTAINMENT CONTENT
      ========================================= */}
      <section className="bg-white w-full py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Collage Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full h-full flex justify-center"
          >
            {/* Inner Grid: 2 columns wide, 2 rows high */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[550px]">
              
              {/* Top Image (Spans both columns) */}
              <div className="col-span-2 aspect-[16/9] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Couple watching TV" 
                  className="w-full h-full object-cover rounded-[25px] shadow-lg"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="col-span-1 aspect-square w-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Friends laughing" 
                  className="w-full h-full object-cover rounded-[25px] shadow-lg"
                />
                {/* Yellow Tint Overlay (Matching the design) */}
                <div className="absolute inset-0 bg-[#ffab00]/20 rounded-[25px] pointer-events-none"></div>
              </div>

              {/* Bottom Right Image */}
              <div className="col-span-1 aspect-square w-full">
                <img 
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Family watching TV" 
                  className="w-full h-full object-cover rounded-[25px] shadow-lg"
                />
              </div>

            </div>
          </motion.div>

          {/* Right: Typography */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6">
              Effortless Entertainment with Indian IPTV
            </h2>
            
            <p className="text-[#444444] text-base md:text-[17px] leading-relaxed font-medium">
              We understand that life can get busy, and finding time to relax shouldn't feel like a chore. That's why we've designed <span className="text-[#19527a] font-bold">IPTV Brampton</span> to be your ultimate entertainment companion. With a user-friendly UI and seamless navigation, you can dive into your favorite shows, movies, and live TV without any hassle. Whether you're using an Indian IPTV box or streaming on your preferred device, we bring the best of Indian channels in Canada to your fingertips, making every moment count. Explore our comprehensive Indian IPTV channels list and discover why we're known as the best IPTV for Indian channels.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ChannelsHeroSection;