import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool, Layout, Truck, CheckCircle, CheckSquare } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import outsourcingBg from '../assets/water-cutting-new.jpg';
import PageMeta from '../components/common/PageMeta';

const Services = () => {
    return (
        <div className="pt-24 bg-obsidian min-h-screen">
            <PageMeta title="Services | Z-Axis" description="Explore our core capabilities including CNC machining, precision grinding, and product development." />
            {/* Page Header */}
            <section className="py-20 relative overflow-hidden border-b border-glass-border">
                <div className="absolute top-0 right-1/4 w-[80vw] md:w-[600px] h-[300px] bg-electric-blue/5 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6"
                    >
                        Expertise
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,4.5rem)] md:text-7xl font-black font-heading tracking-tight text-white leading-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Services</span>
                    </motion.h1>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 lg:py-32 relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<PenTool size={36} />}
                            title="Designing & Product Dev"
                            tagline="Innovating Tomorrow"
                            description="Comprehensive engineering and design solutions transforming complex concepts into production-ready reality."
                            delay={0}
                        />
                        <ServiceCard
                            icon={<Settings size={36} />}
                            title="CNC Machining"
                            tagline="Unmatched Precision"
                            description="State-of-the-art multi-axis CNC capabilities ensuring exact tolerances down to the micron and superior surface finishes."
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={<Layout size={36} />}
                            title="Precision Grinding"
                            tagline="Flawless Finishes"
                            description="Specialized surface and cylindrical grinding services designed for critical dimensions and absolute surface quality."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Out Sourcing Work */}
            <section className="py-20 lg:py-32 relative border-y border-glass-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-glass to-transparent opacity-30"></div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h4 className="section-subtitle">Integration</h4>
                            <h2 className="section-title text-white mb-12">
                                Allied <span className="text-gold">Capabilities</span>
                            </h2>

                            <ul className="space-y-4">
                                {['Wirecut EDM Machining', 'DRO Operations', 'Precision Punch Press', 'Conventional Milling', 'MIG Welding & Complex Fabrication'].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex items-center gap-6 glass-panel p-5 group hover:border-gold/30 hover:bg-glass-hover transition-all duration-300"
                                    >
                                        <div className="w-3 h-3 bg-obsidian border border-gold rounded-full group-hover:bg-gold group-hover:shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-all"></div>
                                        <span className="text-lg text-slate-300 font-medium group-hover:text-white transition-colors">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Visual Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                            className="relative min-h-[400px] lg:min-h-[500px] w-full"
                        >
                            <div className="absolute inset-x-0 lg:inset-0 top-0 bottom-0 glass-panel p-2 rotate-2 hover:rotate-0 transition-transform duration-700">
                                <div className="relative rounded-lg overflow-hidden h-full w-full group">
                                    <img
                                        src={outsourcingBg}
                                        alt="Water Cutting Machining"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/60 to-transparent"></div>

                                    {/* Overlay Grid */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <Settings size={120} className="text-gold/10 group-hover:text-gold/30 group-hover:rotate-180 transition-all duration-[3s] ease-in-out" />
                                            <div className="absolute inset-0 flex items-center justify-center text-white font-mono text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">Systems</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-20">
                        <h4 className="section-subtitle justify-center">Advantage</h4>
                        <h2 className="section-title text-white">Why <span className="text-gold">Partner With Us?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10">
                        <FeatureCard
                            title="Uncompromising Quality"
                            description="We pride ourselves on delivering products and services of the highest standard, adhering to stringent, aerospace-grade quality control measures at every stage of production."
                            delay={0}
                        />
                        <FeatureCard
                            title="Customer Centricity"
                            description="Our global partners are at the core of our operations. We integrate deeply to understand exact requirements and provide engineered, tailored solutions."
                            delay={0.1}
                        />
                        <FeatureCard
                            title="Relentless Innovation"
                            description="We embrace complex challenges, leveraging decades of collective expertise and cutting-edge technologies to maintain competitive superiority."
                            delay={0.2}
                        />
                        <FeatureCard
                            title="Absolute Reliability"
                            description="Trust and dependability form the bedrock of our business. We forge enduring partnerships based on operational transparency and infallible delivery."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ icon, title, tagline, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className="glass-panel p-10 group hover:border-gold/50 transition-colors duration-500 relative overflow-hidden h-full flex flex-col"
    >
        {/* Glow behind icon */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gold/10 blur-[30px] rounded-full group-hover:bg-cyan/20 transition-colors duration-500"></div>

        <div className="w-16 h-16 bg-obsidian border border-glass-border rounded-xl flex items-center justify-center text-slate-400 mb-8 group-hover:text-cyan group-hover:border-cyan/30 transition-all duration-300 relative z-10">
            {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-gold transition-colors relative z-10 leading-tight">{title}</h3>
        <p className="text-gold text-xs font-mono font-bold uppercase tracking-[0.2em] mb-6 relative z-10">{tagline}</p>
        <p className="text-slate-400 font-light leading-relaxed relative z-10">{description}</p>
    </motion.div>
);

const FeatureCard = ({ title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
        className="flex gap-6 glass-panel p-8 hover:bg-glass-hover transition-colors group"
    >
        <div className="shrink-0">
            <div className="w-12 h-12 bg-obsidian border border-glass-border rounded-lg flex items-center justify-center group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all">
                <CheckSquare className="text-gold" size={20} />
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-gold transition-colors">{title}</h3>
            <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">{description}</p>
        </div>
    </motion.div>
);

export default Services;
