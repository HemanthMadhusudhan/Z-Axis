import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings, PenTool, Layout, ChevronRight, ArrowRight } from 'lucide-react';
import servicesBg from '../../assets/hero-industrial.png';

const ServicesSection = () => {
    const services = [
        {
            icon: <PenTool size={32} />,
            title: "Designing & Development",
            desc: "Innovating tomorrow, today with comprehensive design solutions."
        },
        {
            icon: <Settings size={32} />,
            title: "CNC Machining",
            desc: "Unmatched precision, engineered to perfection."
        },
        {
            icon: <Layout size={32} />,
            title: "Prototyping & Fabrication",
            desc: "Bringing concepts to life with rapid prototyping and expert fabrication."
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            {/* Background Image with heavy overlay */}
            {/* Background Image with heavy overlay */}
            {/* Background Image with heavy overlay */}
            <div className="absolute inset-0 z-0">
                <img src={servicesBg} alt="Services Background" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-zinc-950/90"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-widest mb-2">Our Capabilities</h4>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Precision</span>
                        </h2>
                    </div>
                    <Link to="/services" className="hidden md:flex items-center text-white hover:text-gold transition-colors font-bold uppercase tracking-wider mt-6 md:mt-0">
                        View All Services <ArrowRight className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-zinc-900 p-8 rounded border-t-4 border-transparent hover:border-gold transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="mb-6 text-gray-400 group-hover:text-gold transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.desc}</p>
                            <Link to="/services" className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-gold flex items-center">
                                Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/services" className="btn btn-outline w-full">View All Services</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
