import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool, Layout, Truck, CheckCircle, CheckSquare } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import outsourcingBg from '../assets/precision-parts.png';

const Services = () => {
    return (
        <div className="pt-20">
            {/* Page Header */}
            <section className="bg-zinc-900 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-4"
                    >
                        Our <span className="text-gold">Services</span>
                    </motion.h1>
                    <div className="h-1 w-20 bg-gold"></div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<PenTool size={40} />}
                            title="Designing and Product Development"
                            tagline="Innovating tomorrow, today"
                            description="Comprehensive design solutions transforming concepts into production-ready reality."
                        />
                        <ServiceCard
                            icon={<Settings size={40} />}
                            title="CNC Machining"
                            tagline="Unmatched precision, engineered to perfection"
                            description="State-of-the-art CNC capabilities ensuring exact tolerances and superior finish."
                        />
                        <ServiceCard
                            icon={<Layout size={40} />} // Changed from Scissors
                            title="Grinding"
                            tagline="Finely honed expertise for flawless finishes"
                            description="Surface and cylindrical grinding services for critical dimensions and surface quality."
                        />
                    </div>
                </div>
            </section>

            {/* Out Sourcing Work */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">
                                Out Sourcing <br /> <span className="text-gold">Work Capabilities</span>
                            </h2>

                            <ul className="space-y-6">
                                {['Wirecut', 'Dro', 'Punch Press', 'Conventional Milling', 'Mig Welding and Fabrication'].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 bg-black p-4 rounded border-l-4 border-transparent hover:border-gold transition-colors"
                                    >
                                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                                        <span className="text-xl text-white font-medium">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Visual Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-zinc-900 rounded-lg h-[400px] relative overflow-hidden group border border-zinc-800"
                        >
                            <img src={outsourcingBg} alt="Outsourcing Support" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <Settings size={100} className="text-gold/20 group-hover:text-gold/40 transition-colors duration-500" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why <span className="text-gold">Choose Us?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeatureCard
                            title="Quality"
                            description="We pride ourselves on delivering products and services of the highest standard, adhering to stringent quality control measures at every stage."
                        />
                        <FeatureCard
                            title="Customer Centricity"
                            description="Our customers are at the heart of everything we do. We go above and beyond to understand their needs and provide tailored solutions."
                        />
                        <FeatureCard
                            title="Innovation"
                            description="We embrace new challenges and opportunities, leveraging our expertise and cutting-edge technologies to stay ahead in a dynamic market landscape."
                        />
                        <FeatureCard
                            title="Reliability"
                            description="Trust and dependability are the cornerstones of our business. We strive to build enduring relationships based on integrity and transparency."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ icon, title, tagline, description }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-zinc-900 p-8 rounded-lg group border border-zinc-800 hover:border-gold/50 transition-all duration-300"
    >
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gold text-sm font-bold uppercase tracking-wider mb-4">{tagline}</p>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const FeatureCard = ({ title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex gap-6 bg-zinc-900 p-8 rounded hover:bg-zinc-800 transition-colors"
    >
        <div className="shrink-0">
            <div className="w-12 h-12 bg-gold rounded flex items-center justify-center">
                <CheckSquare className="text-black" size={24} />
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

export default Services;
