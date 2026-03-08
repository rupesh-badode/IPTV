import React from 'react';
import { motion } from 'framer-motion';

const PromoTextSection = () => {
  return (
    // Light gray background to match your image
    <section className="bg-[#f4f4f5] w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* --- DARK INFO CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#222222] rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] mb-16"
        >
          <h2 className="text-[#fdb913] font-bold text-2xl md:text-3xl text-center mb-6">
            Watch what you love, when you want, only with IPTV Brampton Canada
          </h2>
          
          <p className="text-white/90 text-[15px] md:text-base leading-relaxed md:leading-loose text-justify md:text-left">
            If you are ready to view without borders, then IPTV Brampton is your one-stop hub for movies, TV series, and live TV channels in Canada. Each time you want to dive into anything, with IPTV Brampton Canada offering a wide collection of the latest blockbusters and binge-worthy series in crystal-clear HD and 4K, there’s something for every taste. From catching up on your favorite soap to finding out the latest film or simply experiencing live events with buddies, the versatility of the device matters less than what you watch. From Indian regional gems to global hits, this ensures that entertainment will always be rich, vibrant, and endlessly accessible. With smooth navigation, no binding contracts, and with the promise of bringing joy by clicking on the button, IPTV Brampton turns your living room into a world of stories that wait to unfold. With IPTV Brampton, step into the world of nonstop entertainment with your trusted viewing companion in Canada. Enjoy the latest movies, TV series, and live TV channels all in one place — no cable, no limits. From thrilling Bollywood blockbusters to hot, Netflix-style drama or live events from around the world, IPTV Brampton Canada delivers in stunning HD and 4K clarity. From Indian classics to Hollywood hits, its entertainment is personal and effortless. With an easy-to-use interface and instant access to your favorite shows, you will never miss a moment that matters. IPTV Brampton brings home the perfect mix of global and desi content-so every night feels like movie night.
          </p>
        </motion.div>

        {/* --- BOTTOM CALL TO ACTION TEXT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-[#333333] font-bold text-xl md:text-2xl lg:text-3xl mb-4">
            Customize Your Viewing Experience with an IPTV Subscription Plan in Canada
          </h3>
          
          <p className="text-[#555555] text-base md:text-lg">
            Choose an <a href="#pricing" className="text-[#217bb4] hover:text-[#4ba6e2] hover:underline font-medium transition-colors">IPTV subscription plan</a> that fits your lifestyle. Stream shows, movies, and live TV without limits-affordable, flexible, and tailored for you.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PromoTextSection;