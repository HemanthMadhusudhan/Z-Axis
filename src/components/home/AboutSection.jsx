import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import aboutBg from '../../assets/cnc-action.png';

const AboutSection = () => {
    return (
        <section className="py-24 bg-black relative">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h4 className="text-gold font-bold uppercase tracking-widest mb-4">Who We Are</h4>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                            Precision Driven. <br /> Quality <span className="text-gold">Guaranteed.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Since our inception, Z-Axis has been dedicated to excellence in manufacturing.
                            We are pioneers in the design and development of fixturing, trusted by industry leaders
                            like Tafe and Aditya.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {['Dedicated to Excellence', 'Unparalleled Customer Satisfaction', 'Relentless Pursuit of Innovation'].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-gold shrink-0" size={20} />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/about" className="btn btn-outline hover:bg-gold hover:text-black hover:border-gold">
                            Read Our Story <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] w-full bg-zinc-800 rounded-lg relative overflow-hidden group border border-zinc-700"
                    >
                        <img src={aboutBg} alt="Precision Machining Action" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-black/80"></div>

                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#FFB800 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 max-w-[85%] bg-black/80 p-6 rounded border-r-4 border-gold text-right backdrop-blur-sm shadow-xl">
                            <p className="text-gold font-bold text-xl mb-1">State-of-the-Art</p>
                            <p className="text-white text-3xl font-heading font-bold leading-tight">Manufacturing Facility</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
