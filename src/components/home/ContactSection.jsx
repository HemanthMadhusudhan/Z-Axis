import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <section className="py-24 bg-gold relative overflow-hidden">
            {/* Abstract Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-black mb-6">Ready to Start?</h2>
                    <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
                        Experience precision perfected. Contact us today for a quote or to discuss your manufacturing needs.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-black text-white font-bold rounded hover:bg-zinc-800 transition-colors uppercase tracking-wider">
                            Get a Quote
                        </Link>
                        <Link to="/about" className="px-8 py-4 border-2 border-black text-black font-bold rounded hover:bg-black hover:text-white transition-colors uppercase tracking-wider">
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
