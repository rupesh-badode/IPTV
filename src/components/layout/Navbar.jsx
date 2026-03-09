import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Buy Now', href: '/buy-now' },
    { name: 'IPTV Channels', href: '/iptv-channels', hasDropdown: true },
    { name: 'IPTV App', href: '/iptv-app' },
    { name: 'Free Trial', href: '/free-trial' },
    { name: 'IPTV Boxes', href: '/iptv-boxes' },
    { name: 'Location', href: '/location', hasDropdown: true },
    { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <nav className=" px-6 py-4 flex items-center justify-between relative z-50 shadow-2xl">
      
      {/* --- LOGO --- */}
      <div className="flex flex-col leading-tight cursor-pointer">
        <div className="text-[#217bb4] font-black text-xl flex items-center italic">
          IP<span className="inline-block w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-left-[10px] border-l-[#fdb913] mx-1"></span>TV
        </div>
        <div className="text-[#fdb913] font-black text-2xl tracking-tighter -mt-1">
          Brampton
        </div>
      </div>

      {/* --- DESKTOP MENU --- */}
      <ul className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              to={link.href}
              className={`flex items-center gap-1 text-[15px] font-bold transition-colors duration-300 ${
                link.active ? 'text-[#4ba6e2]' : 'text-[#217bb4] hover:text-[#4ba6e2]'
              }`}
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              )}
            </Link>
            {/* Creative Hover Underline */}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#ffb100] transition-all duration-300 group-hover:w-full" />
          </li>
        ))}
      </ul>

      {/* --- CTA BUTTON --- */}
      <div className="flex items-center gap-4">
        <motion.a
          whileHover={{ scale: 1.05, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          href="tel:8333902248"
          className="bg-[#ffb100] text-white px-5 py-2.5 rounded-md font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-[#ffb100]/40 transition-shadow"
        >
          <Phone size={20} className="text-[#217bb4] fill-[#217bb4]" />
          <span className="hidden sm:inline">833-390-2248</span>
        </motion.a>

        {/* MOBILE HAMBURGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#217bb4] focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-800 lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#217bb4] font-bold text-lg block hover:text-[#ffb100]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;