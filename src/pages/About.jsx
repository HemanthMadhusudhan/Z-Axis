import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, History, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import missionImg from '../assets/cnc-action.png';

const About = () => {
    return (
        <div className="pt-20">
            {/* Page Header */}
            <section className="bg-zinc-900 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-4"
                    >
                        About <span className="text-gold">Company</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                        Built on Excellence, Driven by Innovation.
                    </p>
                    {/* <div className="h-1 w-20 bg-gold"></div> Removed to avoid visual conflict */}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold font-heading mb-6">Our <span className="text-gold">Mission</span></h2>
                            <div className="bg-zinc-900 p-8 rounded border-l-4 border-gold mb-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <Target className="text-gold" size={32} />
                                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                                </div>
                                <p className="text-gray-400 italic">
                                    "To provide and deliver quality products within stipulated time frames, consistently exceeding customer expectations."
                                </p>
                            </div>
                            <div className="mt-12 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    <span className="font-bold text-white">Z-Axis</span> is a premier manufacturing solutions provider specializing in high-precision components and assemblies.
                                    With a commitment to <span className="text-gold">quality</span> and a customer-centric approach, we have established ourselves as a trusted partner
                                    for industries demanding exact tolerances and superior finishes.
                                </p>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Our facility is equipped with state-of-the-art machinery and staffed by a team of experienced engineers and technicians
                                dedicated to pushing the boundaries of what's possible in manufacturing.
                            </p>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="bg-zinc-800 w-full h-[400px] rounded flex items-center justify-center relative z-10 overflow-hidden group shadow-2xl border border-zinc-700">
                                <img src={missionImg} alt="Our Mission" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-zinc-900/50"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Target size={80} className="text-gold dropshawdow-lg" />
                                </div>

                                <div className="relative z-10 text-center p-8 group-hover:translate-y-2 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2">Focused on Goals</h3>
                                    <p className="text-gray-300">Delivering precision in every component.</p>
                                </div>
                            </div>
                            {/* Decorative elements adjusted */}
                            {/* <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-gold rounded-tr-xl opacity-50"></div> */}
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-gold rounded-bl-xl opacity-50"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our <span className="text-gold">Journey</span></h2>
                        <p className="text-gray-400">A timeline of our growth and milestones.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 z-0"></div>

                        <TimelineCard
                            year="The Beginning"
                            title="Fixture Plates"
                            desc="Started with manufacturing of high-quality fixture plates for VMC & HMC machines."
                        />
                        <TimelineCard
                            year="Expansion"
                            title="Tool Components"
                            desc="Expanded capabilities to include press tool components and plastic mould bases."
                        />
                        <TimelineCard
                            year="Innovation"
                            title="Pioneering Fixturing"
                            desc="Specialized in design & development of welding, BIW, and hydraulic fixtures."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const TimelineCard = ({ year, title, desc }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-black p-8 rounded-lg border border-zinc-800 relative z-10 text-center group hover:border-gold transition-colors"
    >
        <div className="inline-block px-4 py-1 bg-zinc-800 text-gold font-bold rounded-full text-sm mb-6 group-hover:bg-gold group-hover:text-black transition-colors">
            {year}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </motion.div>
);

export default About;
