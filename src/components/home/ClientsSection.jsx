import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
    const clients = [
        "TAFE",
        "ADITYA Future Driven",
        "XNG Automation",
        "Omni Matrix",
        "Succinova"
    ];

    return (
        <section className="py-20 bg-black border-t border-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-zinc-800"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-12">Trusted By Industry Leaders</p>

                <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-2xl md:text-3xl font-heading font-bold text-gray-400 hover:text-white transition-colors cursor-default"
                        >
                            {client}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
