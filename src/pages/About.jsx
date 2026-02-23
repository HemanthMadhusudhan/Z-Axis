import React from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import missionImg from '../assets/cnc-action.png';
import PageMeta from '../components/common/PageMeta';

const About = () => {
    return (
        <div className="pt-24 bg-obsidian min-h-screen">
            <PageMeta title="Our Story | Z-Axis" description="Learn about Z-Axis's journey, mission, and commitment to precision manufacturing excellence." />
            {/* Page Header */}
            <section className="py-20 relative overflow-hidden border-b border-glass-border">
                {/* Background ambient glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6"
                    >
                        Our Story
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,4.5rem)] md:text-7xl font-black font-heading mb-6 tracking-tight text-white leading-[1.1]"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Built</span> on Excellence,<br /> Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Innovation.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 lg:py-32 relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 lg:mb-32">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title text-white">Our <span className="text-gold">Mission</span></h2>

                            <div className="glass-panel p-8 md:p-10 mb-10 border-l-4 border-l-gold relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="p-3 rounded-xl bg-obsidian border border-glass-border">
                                        <Target className="text-gold" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-heading">The Core Objective</h3>
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed italic relative z-10 font-light">
                                    "To engineer and deliver products of uncompromising quality within stipulated time frames, consistently exceeding the rigorous expectations of our global partners."
                                </p>
                            </div>

                            <div className="space-y-6 text-slate-400 leading-relaxed font-light text-lg">
                                <p>
                                    <strong className="text-white font-bold">Z-Axis</strong> is a premier manufacturing solutions provider specializing in high-precision components and complex assemblies.
                                    With an unwavering commitment to <span className="text-gold">quality</span> and a deeply customer-centric approach, we have established ourselves as the trusted partner
                                    for industries demanding exact tolerances and superior surface finishes.
                                </p>
                                <p>
                                    Our facility is equipped with state-of-the-art multi-axis machinery and staffed by a dedicated team of experienced engineers and technicians
                                    who continuously push the boundaries of modern manufacturing capabilities.
                                </p>
                            </div>
                        </motion.div>

                        {/* Image Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="glass-panel p-2 rotate-1 hover:rotate-0 transition-transform duration-700">
                                <div className="relative rounded-lg overflow-hidden h-[500px] group w-full">
                                    <img
                                        src={missionImg}
                                        alt="Z-Axis Manufacturing Facility"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent"></div>

                                    {/* Overlay Metric */}
                                    <div className="absolute bottom-8 left-8 right-8 bg-glass backdrop-blur-md border border-glass-border p-6 rounded-xl flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <div>
                                            <p className="text-gold font-mono text-xs uppercase tracking-[0.2em] mb-1">Precision Standard</p>
                                            <p className="text-white font-bold text-xl">ISO 9001:2015</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                                            <Target className="text-gold" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/10 rounded-full blur-[50px] -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-[50px] -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-32 relative border-t border-glass-border overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h4 className="section-subtitle justify-center">Evolution</h4>
                        <h2 className="section-title text-white">Our <span className="text-gold">Journey</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0"></div>

                        <TimelineCard
                            year="Foundation"
                            title="Fixture Plates"
                            desc="Began our journey specializing in the manufacturing of high-quality fixture plates for VMC & HMC machines, establishing our core precision standards."
                            delay={0}
                        />
                        <TimelineCard
                            year="Expansion"
                            title="Tool Components"
                            desc="Strategically expanded our manufacturing capabilities to include complex press tool components and custom plastic mould bases."
                            delay={0.2}
                        />
                        <TimelineCard
                            year="Innovation"
                            title="Advanced Fixturing"
                            desc="Evolved into a complete solutions provider, specializing in the design and development of intricate welding, BIW, and hydraulic fixtures."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const TimelineCard = ({ year, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className="glass-panel p-8 relative z-10 text-center group hover:border-gold/50 transition-colors duration-500 h-full flex flex-col"
    >
        {/* Top Node Indicator */}
        <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-obsidian border-2 border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors duration-300 z-20">
            <div className="w-3 h-3 rounded-full bg-gold group-hover:shadow-[0_0_10px_rgba(255,215,0,0.8)] transition-all"></div>
        </div>

        <div className="mt-6 mb-8 inline-block px-5 py-1.5 border border-glass-border/50 text-gold font-mono font-bold uppercase tracking-[0.2em] rounded-full text-xs group-hover:border-gold/30 group-hover:bg-gold/5 transition-colors">
            {year}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-slate-400 font-light leading-relaxed mb-4">{desc}</p>
    </motion.div>
);

export default About;
