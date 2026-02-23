import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-gold relative overflow-hidden">
            {/* Abstract Premium Pattern */}
            <div className="absolute inset-0 opacity-[0.15]" style={{
                backgroundImage: 'radial-gradient(#050505 2px, transparent 2px)',
                backgroundSize: '30px 30px'
            }}></div>

            {/* Animated Marquee Background */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden opacity-10 pointer-events-none select-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-[6rem] md:text-[8rem] leading-none font-black font-heading text-obsidian uppercase tracking-tighter mx-12">CLICK ON GET QUOTE AND CONTACT US</span>
                    ))}
                </motion.div>
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gold/50 to-transparent"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto glass-panel border-obsidian/10 bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-heading text-obsidian mb-6 tracking-tight">Ready to Elevate <br /> Your Production?</h2>

                    <p className="text-obsidian/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                        Experience precision perfected. Partner with top-tier engineers to transform your manufacturing process today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="btn bg-obsidian text-gold hover:text-white hover:bg-slate-900 border border-obsidian shadow-xl shadow-obsidian/20">
                            Get a Quote
                        </Link>
                        <Link to="/about" className="btn bg-transparent border border-obsidian text-obsidian hover:bg-obsidian hover:text-white">
                            Discover More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
