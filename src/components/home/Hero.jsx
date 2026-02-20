import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero-industrial.png';
import heroVideo from '../../assets/hero-video.mp4';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image/Video */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={heroBg}
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
                {/* Animated Overlay Pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#FFB800 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-gold uppercase tracking-[0.2em] mb-4 text-sm font-bold">Welcome to Z-Axis</h2>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading text-white leading-tight">
                        PRECISION <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">PERFECTED</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Committed to delivering quality products promptly, and ensuring unparalleled customer satisfaction. Everything starts here.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link to="/contact" className="btn btn-primary group">
                            Get Started
                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services" className="btn btn-outline">
                            Explore Services
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decor elements */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll Down</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
