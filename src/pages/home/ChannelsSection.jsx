import React from 'react';
import { motion } from 'framer-motion';

const ChannelsSection = () => {
  // Array to map through the channel boxes. 
  // You can easily swap the 'iconPlaceholder' with your actual <img> tags later.
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
  const linkStyle = "text-[#19527a] font-semibold hover:underline cursor-pointer";

  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#114063] font-bold text-3xl md:text-4xl lg:text-[42px] mb-4"
          >
            Wide Range of Channels with the Best IPTV Provider
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#444444] text-base md:text-lg max-w-3xl mx-auto font-medium"
          >
            We bring the world to your screen. With IPTV Brampton, one of the leading 
            IPTV providers in Canada, you get access to thousands of channels from 
            across the globe.
          </motion.p>
        </div>

        {/* --- CHANNEL CARDS GRID --- */}
        {/* Uses a 7-column grid on large screens, 4 on medium, 2 on small */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-5 mb-14">
          {channelCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-[#114063] rounded-xl flex flex-col items-center pt-6 pb-3 px-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 border border-[#0f3554]"
            >
              {/* Image/Icon Placeholder area */}
              {/* TODO: Replace this div with your actual <img src="..." /> for each channel logo */}
              <div className="flex-grow flex items-center justify-center mb-4 w-full h-12">
                 <span className="text-white/20 text-xs italic">Logo</span>
              </div>

              {/* White Banner Strip */}
              <div className="bg-white w-[90%] text-center py-1 mb-2">
                <span className="text-[#114063] font-bold text-[9px] sm:text-[10px] uppercase tracking-wider block">
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

        {/* --- SEO / DESCRIPTIVE PARAGRAPH --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#333333] text-[15px] md:text-base leading-relaxed max-w-5xl mx-auto mb-10"
        >
          <p className="mb-4">
            From <span className={linkStyle}>Indian channels</span>, <span className={linkStyle}>Punjabi channels</span>, and <span className={linkStyle}>Hindi channels</span> to <span className={linkStyle}>English channels</span>, <span className={linkStyle}>Urdu channels</span>, and <span className={linkStyle}>Bengali channels</span>, our diverse lineup has it all. Enjoy <span className={linkStyle}>Gujarati channels</span>, <span className={linkStyle}>Nepali channels</span>, <span className={linkStyle}>Marathi channels</span>, <span className={linkStyle}>Assamese channels</span>, and <span className={linkStyle}>Oriya channels</span>, along with <span className={linkStyle}>Tamil channels</span>, <span className={linkStyle}>Telugu channels</span>, <span className={linkStyle}>Malayalam channels</span>, and <span className={linkStyle}>Kannada channels</span>.
          </p>
          <p>
            We even bring you <span className={linkStyle}>Afghanistan</span> and <span className={linkStyle}>Sri Lankan channels</span> for a global experience. From live sports and news to movies and kids' entertainment, our diverse channel lineup ensures TV for everyone. No matter your taste, we've got the content you
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
          <button className="bg-[#ffab00] hover:bg-[#e69a00] text-[#0a2338] font-black text-xl md:text-2xl py-4 px-10 md:px-14 rounded-md shadow-[0_6px_15px_rgba(255,171,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,171,0,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Get Channels List
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ChannelsSection;