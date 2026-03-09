import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  // Data arrays for the links
  const companyLinks = [
    { name: 'About', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Disclaimer', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const quickLinks = [
    { name: 'Buy Now', href: '#' },
    { name: 'IPTV Channels', href: '#' },
    { name: 'Reviews', href: '#' },
    { name: 'Blogs', href: '#' }
  ];

  return (
    <footer className="relative bg-[#052644] text-white pt-16 pb-6 overflow-hidden">
      
      {/* Background Network Pattern Overlay */}
      {/* Simulates the constellation/network dots shown in the design */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          
          {/* --- COLUMN 1: Brand & Contact --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            {/* CSS-Recreated Logo */}
            <div className="flex flex-col leading-tight cursor-pointer w-max mb-8">
              <div className="text-white font-black text-2xl flex items-center">
                IP<span className="inline-block w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#ffab00] mx-1"></span>TV
              </div>
              <div className="text-[#ffab00] font-black text-3xl tracking-tighter -mt-1">
                Brampton
              </div>
            </div>

            <h3 className="text-[#ffab00] font-bold text-xl mb-5">Contact Us</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Phone className="text-[#ffab00] fill-[#ffab00]" size={22} />
                <span className="font-semibold text-[17px] tracking-wide">833-390-2248</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-[#ffab00] fill-[#ffab00]" size={22} />
                <a 
                  href="mailto:sales@iptvbrampton.net" 
                  className="font-semibold text-[17px] underline underline-offset-4 hover:text-[#ffab00] transition-colors"
                >
                  sales@iptvbrampton.net
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- COLUMN 2: Company Profile --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-start md:items-center"
          >
            <div className="w-full max-w-xs md:pl-8">
              <h3 className="text-[#ffab00] font-bold text-xl mb-5">Company Profile</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-[#ffab00] transition-colors"></div>
                    <a href={link.href} className="text-white font-medium hover:text-[#ffab00] transition-colors text-[15px]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* --- COLUMN 3: Quick Links --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start md:items-center"
          >
            <div className="w-full max-w-xs md:pl-8">
              <h3 className="text-[#ffab00] font-bold text-xl mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-[#ffab00] transition-colors"></div>
                    <a href={link.href} className="text-white font-medium hover:text-[#ffab00] transition-colors text-[15px]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* --- BOTTOM BAR: Copyright --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-6 text-center"
        >
          <p className="text-white/90 font-medium text-sm md:text-[15px]">
            Copyright: &copy; 2026 Brampton IPTV. All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;