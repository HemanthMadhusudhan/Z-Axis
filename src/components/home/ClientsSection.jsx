import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
    const clients = [
        { name: "TAFE", url: "https://www.tafe.com" },
        { name: "ADITYA Future Driven", url: "https://www.adityaauto.com/products" },
        { name: "XNG Automation", url: "https://www.xng.co.in/" },
        { name: "Omni Matrix", url: "https://omnimatrix.com/" },
        { name: "Succinova", url: "https://succinnova.com/" }
    ];

    return (
        <section className="py-20 lg:py-32 bg-obsidian border-t border-glass-border relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-glass to-transparent opacity-20"></div>

            {/* Huge Animated Background Text */}
            <div className="absolute inset-0 flex flex-col justify-center overflow-hidden opacity-5 pointer-events-none select-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                    className="flex whitespace-nowrap mb-8"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none font-black font-heading text-transparent text-stroke-gold uppercase tracking-tighter mx-8">PARTNERSHIPS</span>
                    ))}
                </motion.div>
                <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none font-black font-heading text-transparent text-stroke-cyan uppercase tracking-tighter mx-8">INNOVATORS</span>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gold uppercase tracking-[0.3em] text-xs font-mono font-bold mb-16 flex items-center justify-center gap-4">
                        <span className="w-12 h-[1px] bg-gold/50"></span>
                        Trusted By Industry Leaders
                        <span className="w-12 h-[1px] bg-gold/50"></span>
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-12 lg:gap-24 items-center">
                    {clients.map((client, index) => (
                        <motion.a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-black text-slate-600 hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-pointer select-none group relative"
                        >
                            {client.name}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
