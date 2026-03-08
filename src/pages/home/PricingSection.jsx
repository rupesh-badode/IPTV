import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Globe, CheckCircle2 } from 'lucide-react';
import { title } from 'framer-motion/client';

const PricingSection = () => {
    const [activeTab, setActiveTab] = useState('Linux');
    const tabs = ['Linux', 'Android', 'App'];

    // Data structure for the pricing plans
    const pricingPlans = [
        {
            id: 1,
            tab: 'Linux',
            isPopular: true,
            title: '2 Years Subscription',
            subtitle: 'Hardware Included',
            price: '$240',
            oldPrice: '$300 CAD',
            features: [
                '4K UHD | 2.4/5 GHz Box',
                'Premium IPTV with 4K Support',
                '4K Streaming'
            ],
            model: 'Model: Net + BT 4K Linux Box',
            image: 'https://images.unsplash.com/photo-1544485303-a1fb92c1092e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' // Placeholder for the TV Box
        },
        {
            id: 2,
            tab: 'Linux',
            isPopular: false,
            title: '5 Years Subscription',
            subtitle: 'Hardware Included',
            price: '$360',
            oldPrice: '$400 CAD',
            features: [
                '4K UHD | Set Up Box',
                'Premium IPTV with 4K Support',
                '4K Streaming'
            ],
            model: 'Model: Net + BT 4K Linux Box',
            image: 'https://images.unsplash.com/photo-1544485303-a1fb92c1092e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 3,
            tab: 'Android',
            isPopular: false,
            title: '2 Years Subscription',
            subtitle: 'Hardware Included',
            price: '$240',
            oldPrice: '$300 CAD',
            features: [
                '4K UHD | 2.4/5 GHz Box',
                'Premium IPTV with 4K Support',
                '4K Streaming'
            ],
            model: 'Model: Net + BT 4K Android Box',
            image: 'https://images.unsplash.com/photo-1544485303-a1fb92c1092e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 4,
            tab: 'Android',
            isPopular: false,
            title: '5 Years Subscription',
            subtitle: 'Hardware Included',
            price: '$360',
            oldPrice: '$400 CAD',
            features: [
                '4K UHD | Set Up Box',
                'Premium IPTV with 4K Support',
                '4K Streaming'
            ],
            model: 'Model: Net + BT 4K Android Box',
            image: 'https://images.unsplash.com/photo-1544485303-a1fb92c1092e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 5,
            tab: 'App',
            isPopular: false,
            title: '1 Year Subscription',
            subtitle: 'No Hardware',
            price: '$120',
            oldPrice: '$150 CAD',
            features: [
                'Premium IPTV with 4K Support',
                '4K Streaming',
                'Access on Multiple Devices'
            ],
            model: 'IPTV App Access',
            image: 'https://images.unsplash.com/photo-1544485303-a1fb92c1092e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' // Placeholder for the App
        },
        {
            id: 6,
            tab: 'App',
            isPopular: false,
            title: '2 Years Subscription',
            subtitle: 'No Hardware',
            price: '$200',
            oldPrice: '$250 CAD',
            features: [
                'Premium IPTV with 4K Support',
                '4K Streaming',
                'Access on Multiple Devices'
            ],
            model: 'IPTV App Access',
            image: 'https://images.unsplash.com/photo-1544485303-a1fb92c1092e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
        // You can easily add objects here for the 'Android' or 'App' tabs
    ];

    // Filter plans based on the clicked tab
    const activePlans = pricingPlans.filter(plan => plan.tab === activeTab);

    return (
        // Dark blue background matching the image
        <section className="bg-[#052644] w-full py-16 md:py-24 relative overflow-hidden" id="pricing">

            {/* Optional: Subtle background overlay for the network pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* --- LEFT COLUMN: TEXT & STATS --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col items-start"
                    >
                        <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-8">
                            IPTV Subscription Plans Designed for Your Lifestyle
                        </h2>

                        {/* Orange angled badge */}
                        <div className="bg-[#fdb913] text-[#052644] font-bold italic px-6 py-2 rounded-lg rounded-tl-3xl rounded-br-3xl mb-8 text-lg">
                            Stream Smarter, Save Bigger
                        </div>

                        <p className="text-white text-2xl md:text-3xl font-bold leading-snug mb-12">
                            Get a Discount on <span className="text-[#fdb913]">Android Boxes & Linux Boxes</span> with IPTV Subscription
                        </p>

                        {/* Stats row */}
                        <div className="flex items-center gap-16">
                            <div className="flex flex-col gap-2">
                                <Smile className="text-[#fdb913]" size={36} strokeWidth={2.5} />
                                <span className="text-white font-bold text-3xl">98900+</span>
                                <span className="text-gray-300 text-sm">Happy Customers</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Globe className="text-[#fdb913]" size={36} strokeWidth={2.5} />
                                <span className="text-white font-bold text-3xl">500+</span>
                                <span className="text-gray-300 text-sm">Regional Channels</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- RIGHT COLUMN: TABS & CARDS --- */}
                    <div className="lg:col-span-7 flex flex-col">

                        {/* Tabs */}
                        <div className="flex items-center justify-center lg:justify-end gap-10 mb-10 text-white font-bold text-2xl">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-2 transition-all duration-300 ${activeTab === tab
                                            ? 'border-b-4 border-white opacity-100'
                                            : 'border-b-4 border-transparent opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Pricing Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {activePlans.length > 0 ? (
                                activePlans.map((plan, index) => (
                                    <motion.div
                                        key={plan.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="bg-white rounded-[2rem] p-6 relative flex flex-col items-center shadow-2xl pt-10"
                                    >
                                        {/* Most Popular Badge */}
                                        {plan.isPopular && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fdb913] text-[#052644] font-bold px-6 py-1.5 rounded-full text-sm w-max shadow-md">
                                                Most Popular
                                            </div>
                                        )}

                                        <h3 className="text-[#052644] font-bold text-xl mb-1 text-center">{plan.title}</h3>
                                        <p className="text-[#052644] font-medium text-sm mb-4 text-center">{plan.subtitle}</p>

                                        {/* Dark Blue Price Block */}
                                        <div className="bg-[#0b3c66] w-full rounded-2xl flex flex-col items-center justify-center py-5 mb-6 text-white shadow-inner">
                                            <div className="flex items-baseline gap-1">
                                                <span className="font-black text-5xl">{plan.price}</span>
                                                <span className="font-medium text-lg">CAD</span>
                                            </div>
                                            <span className="text-gray-300 line-through decoration-[#fdb913] decoration-2 font-medium mt-1">
                                                {plan.oldPrice}
                                            </span>
                                        </div>

                                        {/* Features List */}
                                        <ul className="w-full flex flex-col gap-3 mb-6">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-[#052644] text-sm font-semibold">
                                                    <CheckCircle2 className="text-[#fdb913] flex-shrink-0 mt-0.5" size={18} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Hardware Image & Model */}
                                        <div className="flex flex-col items-center justify-center mt-auto w-full border-t border-gray-100 pt-4">
                                            {/* Replace src with your transparent box image */}
                                            <img src={plan.image} alt="TV Box" className="h-16 object-contain mb-3 drop-shadow-md mix-blend-multiply" />
                                            <p className="text-[#052644] font-medium text-xs mb-5 text-center">
                                                {plan.model}
                                            </p>

                                            {/* Buttons */}
                                            <div className="flex items-center gap-4 w-full">
                                                <button className="flex-1 bg-[#fdb913] text-[#052644] font-bold py-2.5 rounded-lg hover:bg-[#e5a60e] transition-colors shadow-md">
                                                    Buy Now
                                                </button>
                                                <button className="flex-1 bg-transparent text-[#052644] font-bold py-2.5 rounded-lg hover:text-[#217bb4] transition-colors">
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-2 text-center text-white py-10 opacity-70">
                                    Plans for {activeTab} are coming soon.
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;