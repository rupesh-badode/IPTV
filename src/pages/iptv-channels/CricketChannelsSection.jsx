import React from 'react';
import { motion } from 'framer-motion';

const CricketChannelsSection = () => {
  // Array mapping the channel boxes.
  const channelCards = [
    { id: 1, englishName: 'HINDI CHANNEL', nativeName: 'हिन्दी चैनल्स' },
    { id: 2, englishName: 'PUNJABI CHANNEL', nativeName: 'ਪੰਜਾਬੀ ਚੈਨਲ' },
    { id: 3, englishName: 'GUJARATI CHANNEL', nativeName: 'ગુજરાતી ચેનલ' },
    { id: 4, englishName: 'BANGLA CHANNEL', nativeName: 'বাঙালি চ্যানেল' },
    { id: 5, englishName: 'URDU CHANNEL', nativeName: 'اردو چینل' },
    { id: 6, englishName: 'ENGLISH CHANNEL', nativeName: 'English Channel' },
    { id: 7, englishName: 'KANNADA CHANNEL', nativeName: 'ಕನ್ನಡ ಚಾನೆಲ್' },
    { id: 8, englishName: 'MALAYALAM CHANNEL', nativeName: 'മലയാളം ചാനൽ' },
    { id: 9, englishName: 'MARATHI CHANNEL', nativeName: 'मराठी चॅनेल' },
    { id: 10, englishName: 'NEPALI CHANNEL', nativeName: 'नेपाली च्यानल' },
    { id: 11, englishName: 'TAMIL CHANNEL', nativeName: 'தமிழ் சேனல்கள்' },
    { id: 12, englishName: 'TELUGU CHANNEL', nativeName: 'తెలుగు ఛానెల్' },
    { id: 13, englishName: 'AFGHANISTAN CHA.', nativeName: 'افغانستان' },
    { id: 14, englishName: 'BANGLADESH CHA.', nativeName: 'বাংলাদেশ' },
  ];

  // Reusable blue link style for the paragraph
  const linkStyle = "text-[#19527a] font-semibold hover:underline cursor-pointer transition-colors";

  return (
    <section className="bg-[#f8fafc] w-full py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#19527a] font-bold text-3xl md:text-4xl lg:text-[40px] leading-tight mb-5"
          >
            Cricket, News, Movies, and More: All the Channels You Love in One Place
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#444444] text-base md:text-lg max-w-5xl mx-auto font-medium leading-relaxed"
          >
            At IPTV Brampton, we bring you the ultimate entertainment experience with a channel lineup that caters to every taste and preference. Whether you're a die-hard cricket fan, a news enthusiast, or a movie buff, we've got you covered. From Hindi channels delivering the latest Bollywood hits to Punjabi channels showcasing vibrant music and dramas, our platform is a treasure trove of diverse content.
          </motion.p>
        </div>

        {/* --- CHANNEL CARDS GRID --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-5 mb-14">
          {channelCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-[#0b3c66] rounded-xl flex flex-col items-center pt-6 pb-3 px-2 shadow-[0_6px_15px_rgba(0,0,0,0.1)] transition-all duration-300 border border-[#0f4c80]"
            >
              {/* Image/Icon Placeholder area */}
              <div className="flex-grow flex items-center justify-center mb-4 w-full h-12">
                 <span className="text-white/20 text-xs italic">Logo</span>
              </div>

              {/* White Banner Strip */}
              <div className="bg-white w-[90%] text-center py-1 mb-2 shadow-sm">
                <span className="text-[#0b3c66] font-bold text-[9px] sm:text-[10px] uppercase tracking-wider block">
                  {card.englishName}
                </span>
              </div>

              {/* Native Script Text */}
              <div className="text-white text-xs sm:text-sm font-medium mt-auto text-center">
                {card.nativeName}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- DESCRIPTIVE PARAGRAPHS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#444444] text-[15px] md:text-base leading-relaxed max-w-5xl mx-auto mb-12 space-y-6 font-medium"
        >
          <p>
            Explore <span className={linkStyle}>Tamil channels</span> for gripping Kollywood films, <span className={linkStyle}>Telugu channels</span> for high-energy Tollywood blockbusters, or <span className={linkStyle}>Malayalam channels</span> for soulful storytelling. Prefer regional flavors? Dive into <span className={linkStyle}>Bengali channels</span>, <span className={linkStyle}>Gujarati channels</span>, <span className={linkStyle}>Marathi channels</span>, <span className={linkStyle}>Kannada channels</span>, <span className={linkStyle}>Assamese channels</span>, <span className={linkStyle}>Oriya channels</span>, or <span className={linkStyle}>Nepali channels</span> - each offering a unique cultural perspective.
          </p>
          <p>
            For international viewers, we also feature <span className={linkStyle}>Afghanistan channels</span> and <span className={linkStyle}>Sri Lankan channels</span>, ensuring a truly global experience. And if you're looking for <span className={linkStyle}>English channels</span>, we've got everything from Hollywood movies to premium international news.
          </p>
          <p>
            No matter what you're in the mood for - cricket matches, breaking news, or binge-worthy movies - our wide range of Indian channels ensures there's always something to watch. With IPTV Brampton, your favorite entertainment is just a click away.
          </p>
        </motion.div>

        {/* --- CALL TO ACTION BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="flex justify-center"
        >
          <button className="bg-[#ffab00] hover:bg-[#e69a00] text-[#052644] font-bold text-xl md:text-2xl py-4 px-10 md:px-14 rounded-lg shadow-[0_6px_15px_rgba(255,171,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,171,0,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Get Channels List
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CricketChannelsSection;