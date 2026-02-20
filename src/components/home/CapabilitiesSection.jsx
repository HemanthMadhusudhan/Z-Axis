import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';
import machinesBg from '../../assets/precision-parts.png';

const CapabilitiesSection = () => {
    return (
        <section className="py-24 bg-zinc-900">
            <div className="container mx-auto px-4">
                <div className="bg-black rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl border border-gray-800">

                    {/* Content */}
                    <motion.div
                        className="p-12 md:w-1/2 flex flex-col justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Cpu className="text-gold" size={32} />
                            <span className="text-gray-400 uppercase tracking-widest font-bold">Technology</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                            State-of-the-Art <br /> <span className="text-gold">Machinery</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Our facility allows us to cater to diverse industries with precision and efficiency.
                            Featuring high-performance CNC machines like the DMG and Haas VF series.
                        </p>

                        <Link to="/capabilities" className="btn btn-primary self-start">
                            View Specifications
                        </Link>
                    </motion.div>

                    {/* Code/Tech Visual Placeholder -> Replaced with Action Image */}
                    <div className="md:w-1/2 min-h-[400px] relative bg-zinc-900 border-l border-zinc-800 overflow-hidden group">
                        <img src={machinesBg} alt="CNC Action" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                <StatBox label="Max RPM" value="12,000" />
                                <StatBox label="Axis" value="3 & 5" />
                                <StatBox label="Precision" value="±0.005" />
                                <StatBox label="Capacity" value="24/7" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const StatBox = ({ label, value }) => (
    <div className="bg-zinc-900/80 backdrop-blur p-4 rounded border border-zinc-700">
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-xs text-gray-400 uppercase">{label}</div>
    </div>
);

export default CapabilitiesSection;
