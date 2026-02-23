import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';
import machinesBg from '../../assets/precision-parts.png';

const CapabilitiesSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-obsidian relative overflow-hidden">
            {/* Background glow - Optimized with radial gradient instead of blur */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none transform-gpu"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="glass-panel overflow-hidden flex flex-col lg:flex-row border border-glass-border">

                    {/* Content */}
                    <motion.div
                        className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center relative z-10 bg-obsidian/80 backdrop-blur-md transform-gpu"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                                <Cpu className="text-gold" size={24} />
                            </div>
                            <span className="text-slate-300 uppercase tracking-[0.2em] font-bold text-sm">Technology</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white mb-6 leading-tight">
                            State-of-the-Art <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Machinery</span>
                        </h2>

                        <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
                            Our facility allows us to cater to diverse industries with precision and efficiency.
                            Featuring high-performance CNC machines meticulously maintained for ultra-tight tolerances.
                        </p>

                        <Link to="/capabilities" className="btn btn-primary self-start group relative overflow-hidden">
                            <span className="flex items-center gap-3 relative z-10">
                                View Technical Specs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                        </Link>
                    </motion.div>

                    {/* Stat Overlay / Image Panel */}
                    <div className="lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative overflow-hidden group">
                        <img
                            src={machinesBg}
                            alt="Precision CNC Operations"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out transform-gpu"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/40 to-transparent lg:from-obsidian lg:via-obsidian/50"></div>

                        {/* Interactive Grid overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 transform-gpu"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center mt-12 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-md relative z-20 transform-gpu"
                            >
                                <StatBox label="Max RPM" value="12,000" />
                                <StatBox label="Simultaneous" value="5-Axis" />
                                <StatBox label="Precision" value="±0.005mm" />
                                <StatBox label="Capacity" value="24/7 Ops" />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const StatBox = ({ label, value }) => (
    <div className="glass-panel glass-panel-hover p-3 lg:p-6 border border-glass-border/50 transition-all duration-500 transform-gpu relative overflow-hidden cursor-default group/stat flex flex-col items-center justify-center text-center !min-h-[100px]">
        {/* Subtle hover gradient - restricted to large screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 lg:group-hover/stat:opacity-100 transition-opacity duration-500"></div>
        <div className="text-[clamp(1.25rem,4vw,1.875rem)] lg:text-3xl font-black font-heading text-white mb-1 lg:mb-2 lg:group-hover/stat:text-gold lg:group-hover/stat:animate-pulse-glow transition-colors relative z-10 w-full min-w-0 break-words leading-tight">{value}</div>
        <div className="text-[9px] lg:text-[10px] text-slate-400 font-mono uppercase tracking-[0.1em] lg:tracking-[0.2em] relative z-10 w-full min-w-0 break-words">{label}</div>
    </div>
);

export default CapabilitiesSection;
