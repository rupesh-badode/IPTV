

import React from 'react';
import { motion } from 'framer-motion';

const ElevateStreamingSection = () => {
  return (
    // Clean white background to match the design
    <section className="bg-white w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1250px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Typography --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[42px] leading-[1.15] mb-6">
              Elevate Your Streaming Experience In Canada With Top IPTV Set Top Boxes From IPTV Brampton
            </h2>
            
            <div className="text-[#444444] text-[15px] md:text-base lg:text-[17px] leading-relaxed font-medium space-y-5">
              <p>
                Are you looking for a reliable IPTV set top box Canada to kickstart 
                or elevate your IPTV streaming experience? If so, your search ends 
                here.
              </p>
              
              <p>
                At IPTV Brampton, we are committed to providing our customers 
                with tailored IPTV services. That's why, in addition to our budget-
                friendly IPTV app subscriptions that offer flexible and simple 
                streaming, we also offer a range of IPTV set top boxes for those 
                who prefer premium, TV-dedicated, and feature-rich streaming 
                where both boxes comes with Bluetooth Remotes.
              </p>
              
              <p>
                Our set top box options include Android-based models, perfect for 
                customizable streaming with access to multiple apps, and Linux 
                models, ideal for stable, secure, and high-performance IPTV with 
                minimal maintenance.
              </p>

              <p>
                That said, no matter which box you choose, you can count on 
                enhanced stability, performance, and seamless integration as you 
                tune in, turning your daily downtime into primetime.
              </p>

              <p>
                From video and audio quality to processing power, connectivity 
                options, storage capacity, user interface, overall reliability, and 
                other key features, each IPTV set top box is a blend of advanced 
                software and hardware capabilities designed to future-proof your 
                entertainment experience.
              </p>

              <p>
                So why wait? Buy the best IPTV set top box from Brampton IPTV 
                today and join the growing family of satisfied customers who trust 
                us for their entertainment needs.
              </p>

              <p>
                It's plug-and-play simplicity at its finest!
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Image Collage --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end"
          >
            {/* Collage Container (Maintains an aspect ratio to keep images perfectly overlapped) */}
            <div className="relative w-full max-w-[500px] lg:max-w-[550px] aspect-square mt-8 lg:mt-0">
              
              {/* Back Image (Top Right) */}
              <img 
                src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Friends watching sports on TV" 
                className="absolute top-0 right-0 w-[75%] h-[70%] object-cover rounded-[35px] border-[10px] border-white shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-0"
              />
              
              {/* Front Image (Bottom Left) */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Friends laughing and watching TV" 
                className="absolute bottom-0 left-0 w-[75%] h-[70%] object-cover rounded-[35px] border-[10px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] z-10"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ElevateStreamingSection;