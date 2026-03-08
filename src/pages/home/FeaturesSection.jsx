import React from 'react';
import { motion } from 'framer-motion';
import { 
  Tv, 
  Layers, 
  DollarSign, 
  Headset, 
  Smartphone, 
  ShieldCheck 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Tv size={32} />,
      title: "Ultra 4K Quality",
      description: "Experience stunning clarity with our 4K Ultra HD streaming. No more buffering, just pure entertainment."
    },
    {
      id: 2,
      icon: <Layers size={32} />,
      title: "15,000+ Channels",
      description: "Get access to a massive library of live TV channels, including sports, news, and movies from around the world."
    },
    {
      id: 3,
      icon: <DollarSign size={32} />,
      title: "Affordable Pricing",
      description: "Enjoy premium entertainment at the best price in Canada. Choose a plan that fits your budget."
    },
    {
      id: 4,
      icon: <Headset size={32} />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or technical issues."
    },
    {
      id: 5,
      icon: <Smartphone size={32} />,
      title: "Multi-Device Support",
      description: "Watch on your TV, smartphone, tablet, or laptop. Our IPTV service is compatible with all major devices."
    },
    {
      id: 6,
      icon: <ShieldCheck size={32} />,
      title: "No Hidden Costs",
      description: "What you see is what you get. No contracts, no activation fees, and no hidden charges ever."
    }
  ];

  return (
    // Light grayish-blue background to match the screenshot
    <section className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#217bb4] font-bold text-3xl md:text-5xl mb-4"
          >
            Best IPTV Provider in Canada
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We provide the most reliable and high-quality IPTV service in Brampton and across Canada.
          </motion.p>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ translateY: -10 }} // Subtle hover lift
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#fdb913] rounded-full flex items-center justify-center text-[#217bb4] mb-6 shadow-md">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-[#333] font-bold text-xl mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;