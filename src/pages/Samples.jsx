import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import headerBg from '../assets/precision-parts.png';
import PageMeta from '../components/common/PageMeta';

import sample1 from '../assets/sample-1.jpg';
import sample2 from '../assets/sample-2.jpg';
import sample3 from '../assets/sample-3.jpg';
import sample4 from '../assets/sample-4.jpg';
import sample5 from '../assets/sample-5.jpg';
import sample6 from '../assets/sample-6.jpg';

const Samples = () => {
    // Gallery data based on user-provided images
    const samples = [
        { id: 1, title: 'Complex Maze Milling', material: 'Aluminum 6061', desc: 'Intricate labyrinthine toolpaths demonstrating high-speed machining and thin-wall stability.', image: sample1 },
        { id: 2, title: 'Multi-Part Fixture Array', material: 'Tool Steel', desc: 'Precision fixture plate holding 8 circular components with T-slot geometry for batch processing.', image: sample2 },
        { id: 3, title: 'Large Vertical Base Plate', material: 'Stainless Steel', desc: 'Large format structural plate featuring critical bore tolerances and side-milled pockets.', image: sample3 },
        { id: 4, title: 'Batch Production Tray', material: 'Aluminum 7075', desc: 'High-volume manufacturing of hexagonal fittings with consistent surface finish.', image: sample4 },
        { id: 5, title: 'Dual Housing Blocks', material: 'Aluminum 6061', desc: 'Complex deep pocket milling with side mounting features and chamfered edges.', image: sample5 },
        { id: 6, title: 'Heavy Block Machining', material: 'Mold Steel', desc: 'Large heavy-duty block in vise setup with dual bored cavities and coolant application.', image: sample6 },
    ];

    return (
        <div className="pt-20 min-h-screen flex flex-col bg-zinc-50 dark:bg-black transition-colors duration-300">
            <PageMeta title="Projects & Samples | Z-Axis" description="A gallery of precision parts, complex machining samples, and engineering excellence by Z-Axis." />
            {/* Page Header */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <img src={headerBg} alt="Precision Parts" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[clamp(2.5rem,8vw,4rem)] md:text-6xl font-black font-heading text-white mb-4 leading-tight"
                    >
                        Our <span className="text-gold">Work</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        A gallery of precision and engineering excellence.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 flex-grow">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {samples.map((sample, index) => (
                            <motion.div
                                key={sample.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 hover:border-gold dark:hover:border-gold transition-all duration-300"
                            >
                                {/* Image Container */}
                                <div className="h-64 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={sample.image}
                                        alt={sample.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback Pattern if image fails to load */}
                                    <div className="absolute inset-0 hidden items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest text-center p-4">
                                        Please save image: sample-{sample.id}.jpg
                                    </div>
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gold/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-black font-bold uppercase tracking-wider">View Details</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{sample.title}</h3>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gold font-semibold">{sample.material}</span>
                                    </div>
                                    <p className="mt-3 text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {sample.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Samples;
