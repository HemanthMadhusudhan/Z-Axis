import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Maximize, Zap, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import specsBg from '../assets/machining-process.png';

const Capabilities = () => {
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
                        Capabilities & <span className="text-gold">Specs</span>
                    </motion.h1>
                    <div className="h-1 w-20 bg-gold"></div>
                </div>
            </section>

            {/* Our Workhouse */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900 rounded-lg min-h-[300px] relative overflow-hidden group border border-zinc-800"
                        >
                            <img src={specsBg} alt="Technical Specs" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-gold tracking-widest uppercase mt-4 font-bold">Precision Center</div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold font-heading mb-8">Our <span className="text-gold">Workhouse</span></h2>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse border border-zinc-700">
                                    <tbody>
                                        <TableRow label="Make" value="Dmg (Germany)" />
                                        <TableRow label="Bedsize" value="650*600*500 (x*y*z)" />
                                        <TableRow label="MC" value="Heidenhain itnc 530" />
                                        <TableRow label="Max RPM" value="12000" />
                                        <TableRow label="Tool pocket" value="32 ATC" />
                                        <TableRow label="Probing" value="Blum for offset and tool length" />
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-20 bg-zinc-900 relative">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Machine <span className="text-gold">Specifications</span></h2>
                        <p className="text-gray-400 mt-2">Detailed parameters of our CNC fleet.</p>
                    </div>

                    <div className="overflow-x-auto shadow-xl rounded-lg border border-zinc-700">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black text-gold">
                                    <th className="p-4 border border-zinc-700">TRAVELS</th>
                                    <th className="p-4 border border-zinc-700">VF_2_1</th>
                                    <th className="p-4 border border-zinc-700">VF_4_1</th>
                                    <th className="p-4 border border-zinc-700">VF_5_1</th>
                                </tr>
                            </thead>
                            <tbody className="bg-zinc-800 text-gray-300">
                                <SpecRow label="X Axis" v1="762 mm" v2="1270 mm" v3="1270 mm" />
                                <SpecRow label="Y Axis" v1="406 mm" v2="508 mm" v3="660 mm" />
                                <SpecRow label="Z Axis" v1="508 mm" v2="635 mm" v3="635 mm" />
                                <SpecRow label="Spindle Nose to Table (~ max)" v1="610mm" v2="742 mm" v3="742 mm" />
                                <SpecRow label="Spindle Nose to Table (~ min)" v1="102 mm" v2="107 mm" v3="107 mm" />

                                {/* Table Section Header */}
                                <tr className="bg-zinc-900 font-bold text-white"><td colSpan="4" className="p-4 border border-zinc-700">TABLE</td></tr>
                                <SpecRow label="Length" v1="914 mm" v2="1321 mm" v3="1372 mm" />
                                <SpecRow label="Width" v1="356 mm" v2="457 mm" v3="610 mm" />
                                <SpecRow label="T-Slot Width" v1="16 mm" v2="16 mm" v3="16 mm" />
                                <SpecRow label="Max Weight on Table" v1="1361 kg" v2="1588 kg" v3="1814 kg" />

                                {/* Spindle Section Header */}
                                <tr className="bg-zinc-900 font-bold text-white"><td colSpan="4" className="p-4 border border-zinc-700">SPINDLE</td></tr>
                                <SpecRow label="Max Rating" v1="22.4 kW" v2="-" v3="-" />
                                <SpecRow label="Max Speed" v1="10,000rpm" v2="-" v3="-" />
                                <SpecRow label="Max Torque" v1="122 Nm @ 2000 rpm" v2="-" v3="-" />
                                <SpecRow label="Drive System" v1="Inline Direct-Drive" v2="-" v3="-" />
                                <SpecRow label="Taper" v1="BT 40" v2="-" v3="-" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

const TableRow = ({ label, value }) => (
    <tr className="border-b border-zinc-700 hover:bg-zinc-900 transition-colors">
        <th className="p-4 text-gray-400 font-medium w-1/3">{label}</th>
        <td className="p-4 text-white font-bold">{value}</td>
    </tr>
);

const SpecRow = ({ label, v1, v2, v3 }) => (
    <tr className="border-b border-zinc-700 hover:bg-zinc-700/50 transition-colors">
        <td className="p-4 border-r border-zinc-700 font-medium">{label}</td>
        <td className="p-4 border-r border-zinc-700">{v1}</td>
        <td className="p-4 border-r border-zinc-700">{v2}</td>
        <td className="p-4 border-r border-zinc-700">{v3}</td>
    </tr>
);

export default Capabilities;
