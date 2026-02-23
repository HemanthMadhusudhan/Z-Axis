import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings, PenTool, Layout, ArrowRight, Zap, Combine, Cpu } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: <PenTool size={32} />,
            title: "Designing & Development",
            desc: "Innovating tomorrow with comprehensive, engineering-led design solutions."
        },
        {
            icon: <Settings size={32} />,
            title: "CNC Machining",
            desc: "Unmatched precision down to the micron, engineered to perfection."
        },
        {
            icon: <Combine size={32} />,
            title: "Assembly Integration",
            desc: "Seamless assembly of complex components for turnkey delivery."
        },
        {
            icon: <Layout size={32} />,
            title: "Prototyping & Fab",
            desc: "Bringing concepts to life rapidly with expert fabrication methodologies."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 lg:py-32 bg-obsidian relative overflow-hidden">
            {/* Background elements - Optimized with radial gradient instead of blur */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-blue/5 via-transparent to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none transform-gpu"></div>

            {/* Dynamic Animated Separator filling the empty space - INFINITE LOOP (No useScroll) */}
            <div className="absolute top-0 left-0 w-full h-32 flex flex-col justify-center opacity-40 pointer-events-none overflow-hidden select-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex whitespace-nowrap gap-4 md:gap-8 items-center"
                >
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={`top-${i}`}>
                            <span className="text-2xl md:text-4xl font-heading font-black text-transparent text-stroke-gold uppercase tracking-widest opacity-20">Precision Engineering</span>
                            <span className="w-8 md:w-12 h-[1px] bg-gold/30 block"></span>
                            <span className="w-2 md:w-3 h-2 md:h-3 rotate-45 border border-gold/50 block"></span>
                            <span className="w-8 md:w-12 h-[1px] bg-gold/30 block"></span>
                        </React.Fragment>
                    ))}
                </motion.div>
                <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                    className="flex whitespace-nowrap gap-4 md:gap-8 items-center mt-4"
                >
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={`bottom-${i}`}>
                            <span className="w-6 md:w-8 h-[1px] bg-cyan/30 block"></span>
                            <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-cyan/20 block"></span>
                            <span className="w-6 md:w-8 h-[1px] bg-cyan/30 block"></span>
                            <span className="text-2xl md:text-4xl font-heading font-black text-transparent text-stroke-cyan uppercase tracking-widest opacity-10">Advanced Manufacturing</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>


            <div className="container mx-auto px-4 lg:px-8 relative z-10 mt-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl transform-gpu"
                    >
                        <h4 className="section-subtitle">Core Capabilities</h4>
                        <h2 className="section-title mb-0">
                            Uncompromising <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Quality.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="transform-gpu"
                    >
                        <Link to="/services" className="hidden md:inline-flex items-center gap-3 text-slate-300 hover:text-cyan transition-colors font-bold uppercase tracking-widest text-sm group">
                            Explore All Services
                            <span className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-cyan group-hover:bg-cyan/10 transition-all duration-300">
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            variants={cardVariants}
                            key={index}
                            className="glass-panel p-6 md:p-8 glass-panel-hover group relative overflow-hidden flex flex-col h-full min-h-[320px] transform-gpu"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Animated Top Border */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

                            {/* Shimmer on Hover */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"></div>

                            <div className="mb-auto relative z-10">
                                <div className="w-16 h-16 rounded-xl bg-obsidian border border-glass-border flex items-center justify-center text-slate-400 group-hover:text-cyan group-hover:shadow-[0_0_20px_rgba(102,252,241,0.2)] group-hover:animate-pulse-glow transition-all duration-500 mb-8">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-heading leading-tight group-hover:text-cyan transition-colors">{service.title}</h3>
                                <p className="text-slate-400 font-light leading-relaxed">{service.desc}</p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-glass-border/50 relative z-10">
                                <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-cyan flex items-center gap-2">
                                    Learn More <ArrowRight size={14} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/services" className="btn btn-outline w-full text-cyan border-cyan hover:bg-cyan hover:text-obsidian">View All Services</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
