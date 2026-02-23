import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Maximize, Zap, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import specsBg from '../assets/machining-process.png';
import PageMeta from '../components/common/PageMeta';

const Capabilities = () => {
    return (
        <div className="pt-24 bg-obsidian min-h-screen">
            <PageMeta title="Capabilities | Z-Axis" description="Detailed technical specifications of our advanced CNC milling fleet, high-volume production, and precision machines." />
            {/* Page Header */}
            <section className="py-20 relative overflow-hidden border-b border-glass-border">
                {/* Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] md:w-[700px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6 flex items-center justify-center gap-3"
                    >
                        <span className="w-10 h-[1px] bg-gold/50"></span>
                        Technical Specs
                        <span className="w-10 h-[1px] bg-gold/50"></span>
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,4.5rem)] md:text-7xl font-black font-heading mb-6 tracking-tight text-white leading-[1.1]"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Capabilities</span>
                    </motion.h1>
                </div>
            </section>

            {/* Our Workhorse */}
            <section className="py-16 lg:py-20 relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Image Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative min-h-[500px]"
                        >
                            <div className="glass-panel p-2 rotate-1 hover:rotate-0 transition-transform duration-700 h-full">
                                <div className="relative rounded-lg overflow-hidden h-full flex flex-col justify-end p-8 group w-full min-h-[500px]">
                                    <img
                                        src={specsBg}
                                        alt="Technical Precision Equipment"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-70"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/90 via-obsidian/40 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80"></div>

                                    {/* Elevated Content Overlay inside Image Panel */}
                                    <div className="relative z-10 w-full">
                                        <div className="glass-panel backdrop-blur-md px-6 py-3 border-gold/30 inline-block mb-6 shadow-2xl">
                                            <div className="text-gold tracking-[0.3em] uppercase font-bold text-xs flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                                                Live Facility Status
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-obsidian/60 backdrop-blur-sm border border-glass-border rounded-lg p-4 transform-gpu hover:border-gold/30 transition-colors">
                                                <div className="text-2xl font-black font-heading text-white">99.8%</div>
                                                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">Uptime</div>
                                            </div>
                                            <div className="bg-obsidian/60 backdrop-blur-sm border border-glass-border rounded-lg p-4 transform-gpu hover:border-gold/30 transition-colors">
                                                <div className="text-2xl font-black font-heading text-white">±2µm</div>
                                                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">Tolerance</div>
                                            </div>
                                            <div className="bg-obsidian/60 backdrop-blur-sm border border-glass-border rounded-lg p-4 transform-gpu hover:border-gold/30 transition-colors">
                                                <div className="text-2xl font-black font-heading text-white">24/7</div>
                                                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">Operation</div>
                                            </div>
                                            <div className="bg-obsidian/60 backdrop-blur-sm border border-glass-border rounded-lg p-4 transform-gpu hover:border-gold/30 transition-colors">
                                                <div className="text-2xl font-black font-heading text-white">ISO</div>
                                                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">9001:2015</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <h4 className="section-subtitle">Flagship Equipment</h4>
                            <h2 className="section-title text-white mb-10">Our <span className="text-gold">Workhorse</span></h2>

                            <div className="glass-panel overflow-hidden border border-glass-border shadow-2xl">
                                <table className="w-full text-left">
                                    <tbody>
                                        <TableRow label="Manufacture" value="DMG (Germany)" />
                                        <TableRow label="Work Envelope" value="650 × 600 × 500 mm (X,Y,Z)" />
                                        <TableRow label="Control System" value="Heidenhain iTNC 530" />
                                        <TableRow label="Max Spindle Speed" value="12,000 RPM Direct Drive" />
                                        <TableRow label="Tool Capacity" value="32 Position ATC" />
                                        <TableRow label="Inline Probing" value="Blum Laser Tool & Work Offset" isLast />
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Matrix */}
            <section className="py-20 relative border-t border-glass-border overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h4 className="section-subtitle justify-center">Performance Metrics</h4>
                        <h2 className="section-title text-white">Machine <span className="text-gold">Specifications</span></h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
                            Comprehensive technical parameters of our advanced CNC milling fleet, engineered for high-volume, high-precision operations.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel overflow-x-auto border border-glass-border shadow-2xl"
                    >
                        <table className="w-full text-left min-w-[800px]">
                            <thead>
                                <tr className="bg-obsidian/80 border-b-2 border-gold/30">
                                    <th className="p-4 md:p-6 font-bold text-gold uppercase tracking-wider text-xs md:text-sm w-1/4">Parameter</th>
                                    <th className="p-4 md:p-6 font-bold text-white uppercase tracking-wider text-xs md:text-sm w-1/4 bg-glass">VF-2 Series</th>
                                    <th className="p-4 md:p-6 font-bold text-white uppercase tracking-wider text-xs md:text-sm w-1/4 border-l border-glass-border">VF-4 Series</th>
                                    <th className="p-4 md:p-6 font-bold text-white uppercase tracking-wider text-xs md:text-sm w-1/4 border-l border-glass-border">VF-5 Series</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-glass-border font-light">
                                {/* Travels Section */}
                                <tr className="bg-obsidian/40"><td colSpan="4" className="px-6 py-3 text-xs font-mono text-gold uppercase tracking-[0.2em] font-bold">Axis Travels</td></tr>
                                <SpecRow label="X Axis" v1="762 mm" v2="1270 mm" v3="1270 mm" />
                                <SpecRow label="Y Axis" v1="406 mm" v2="508 mm" v3="660 mm" />
                                <SpecRow label="Z Axis" v1="508 mm" v2="635 mm" v3="635 mm" />
                                <SpecRow label="Spindle Nose to Table (Max)" v1="610 mm" v2="742 mm" v3="742 mm" />
                                <SpecRow label="Spindle Nose to Table (Min)" v1="102 mm" v2="107 mm" v3="107 mm" />

                                {/* Table Section */}
                                <tr className="bg-obsidian/40"><td colSpan="4" className="px-6 py-3 text-xs font-mono text-gold uppercase tracking-[0.2em] font-bold border-t border-glass-border">Workholding Table</td></tr>
                                <SpecRow label="Length" v1="914 mm" v2="1321 mm" v3="1372 mm" />
                                <SpecRow label="Width" v1="356 mm" v2="457 mm" v3="610 mm" />
                                <SpecRow label="T-Slot Width" v1="16 mm" v2="16 mm" v3="16 mm" />
                                <SpecRow label="Max Weight Capacity" v1="1,361 kg" v2="1,588 kg" v3="1,814 kg" />

                                {/* Spindle Section */}
                                <tr className="bg-obsidian/40"><td colSpan="4" className="px-6 py-3 text-xs font-mono text-gold uppercase tracking-[0.2em] font-bold border-t border-glass-border">Spindle Dynamics</td></tr>
                                <SpecRow label="Max Power Rating" v1="22.4 kW" v2="-" v3="-" />
                                <SpecRow label="Max Speed" v1="10,000 RPM" v2="-" v3="-" />
                                <SpecRow label="Max Torque" v1="122 Nm @ 2000 RPM" v2="-" v3="-" />
                                <SpecRow label="Drive System type" v1="Inline Direct-Drive" v2="-" v3="-" />
                                <SpecRow label="Tooling Taper" v1="BT 40" v2="-" v3="-" />
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const TableRow = ({ label, value, isLast }) => (
    <tr className={`hover:bg-glass-hover transition-colors ${!isLast ? 'border-b border-glass-border' : ''}`}>
        <th className="p-5 text-slate-400 font-medium w-1/3 text-sm md:text-base">{label}</th>
        <td className="p-5 text-white font-bold text-sm md:text-base">{value}</td>
    </tr>
);

const SpecRow = ({ label, v1, v2, v3 }) => (
    <tr className="hover:bg-glass-hover transition-colors">
        <td className="p-5 font-medium text-slate-300">{label}</td>
        <td className="p-5 text-white bg-glass/30">{v1}</td>
        <td className="p-5 text-white border-l border-glass-border/50">{v2}</td>
        <td className="p-5 text-white border-l border-glass-border/50">{v3}</td>
    </tr>
);

export default Capabilities;
