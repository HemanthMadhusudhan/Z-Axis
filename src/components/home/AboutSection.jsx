import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Cpu, Clock } from 'lucide-react';
import aboutBg from '../../assets/cnc-action.png';

const featureList = [
    { text: 'Micron-Level Precision', icon: <Cpu size={20} className="text-gold" /> },
    { text: 'ISO Certified Quality', icon: <ShieldCheck size={20} className="text-gold" /> },
    { text: 'Rapid Turnaround', icon: <Clock size={20} className="text-gold" /> }
];

const AboutSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-obsidian relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                backgroundSize: '4rem 4rem'
            }}></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col mb-16 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="section-subtitle justify-center">Who We Are</h4>
                        <h2 className="section-title">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Excellence</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
                    {/* Main Text Content - spans 7 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 glass-panel p-8 md:p-12 relative overflow-hidden group border border-glass-border shadow-2xl transform-gpu"
                    >
                        {/* Optimized from blur-[80px] to radial-gradient */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:from-gold/20 transition-all duration-700 pointer-events-none"></div>

                        {/* Shimmer on Hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none z-0"></div>

                        <div className="relative z-10">
                            <h3 className="text-[clamp(2rem,4vw,2.5rem)] font-heading font-bold text-white mb-6 leading-tight">Mastering the Art of <br />Industrial Precision.</h3>
                            <p className="text-slate-400 text-[clamp(1rem,2vw,1.125rem)] mb-8 leading-relaxed font-light">
                                Since our inception, Z-Axis has been dedicated to excellence in manufacturing.
                                We don't just machine parts; we engineer solutions. As pioneers in the design
                                and development of complex fixturing, we are the trusted backbone for industry
                                leaders navigating the demands of modern production.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {featureList.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex items-center gap-4 bg-obsidian/50 p-4 rounded-lg border border-glass-border/50 transform-gpu group/feature hover:bg-obsidian/80 transition-colors duration-300"
                                    >
                                        <div className="p-2 bg-gold/10 rounded-md group-hover/feature:bg-gold/20 transition-colors duration-300">
                                            <div className="group-hover/feature:animate-pulse-glow">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <span className="text-slate-200 font-medium text-sm group-hover/feature:text-gold transition-colors duration-300">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <Link to="/about" className="btn btn-primary relative overflow-hidden group/btn">
                                <span className="relative z-10 flex items-center">
                                    Discover Our Story <ArrowRight size={18} className="ml-3 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Panel - spans 5 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 relative rounded-xl overflow-hidden min-h-[400px] lg:min-h-full group border border-glass-border shadow-2xl transform-gpu"
                    >
                        <img
                            src={aboutBg}
                            alt="Precision Machining Facility"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 ease-out transform-gpu"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>

                        {/* Interactive Overlay Stat - Reduced blur processing */}
                        <div className="absolute bottom-8 left-8 right-8 bg-obsidian/80 backdrop-blur-sm border border-glass-border rounded-xl p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 transform-gpu">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gold font-mono text-xs mb-1 uppercase tracking-widest">Facility</p>
                                    <p className="text-white font-bold text-xl">State-of-the-Art CNC</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                                    <ArrowRight className="text-gold -rotate-45" size={20} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Row - Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 transform-gpu"
                    >
                        {[
                            { value: '20+', label: 'Years Experience' },
                            { value: '10k+', label: 'Projects Completed' },
                            { value: '50+', label: 'Expert Engineers' },
                            { value: '100%', label: 'Quality Assured' }
                        ].map((stat, idx) => (
                            <div key={idx} className="glass-panel glass-panel-hover p-6 text-center group transition-colors duration-300">
                                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading mb-2 group-hover:text-gold transition-colors">{stat.value}</h4>
                                <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
