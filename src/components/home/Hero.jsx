import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Target, Mouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero-industrial.png';
import heroVideo from '../../assets/hero-video.mp4';

const Hero = () => {
    // 3D Parallax Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-7deg", "7deg"]);
    const translateX = useTransform(springX, [-0.5, 0.5], ["-30px", "30px"]);
    const translateY = useTransform(springY, [-0.5, 0.5], ["-30px", "30px"]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = clientX / innerWidth - 0.5;
            const y = clientY / innerHeight - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-obsidian">
            {/* Background Image/Video */}
            <div className="absolute inset-0 overflow-hidden bg-obsidian">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={heroBg}
                    className="w-full h-full object-cover transform-gpu opacity-30"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                {/* Complex Overlays for depth without expensive blend modes */}
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian"></div>
                <div className="absolute inset-0 bg-glass-gradient opacity-40"></div>

                {/* Optimized Glowing Orbs using radial-gradient instead of heavy blur filters */}
                <motion.div style={{ x: translateX, y: translateY }} className="absolute top-0 -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none transform-gpu animate-float"></motion.div>
                <motion.div style={{ x: translateX, y: translateY, animationDelay: '-3s' }} className="absolute bottom-0 -right-[10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan/10 via-transparent to-transparent pointer-events-none transform-gpu animate-float"></motion.div>
            </div>

            {/* Content */}
            <motion.div
                className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center mt-24 md:mt-32 transform-gpu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ rotateX, rotateY, perspective: 1200, transformStyle: "preserve-3d" }}
            >
                <motion.div
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-glass-border bg-obsidian backdrop-blur-md z-20 mb-8 shadow-[0_0_15px_rgba(255,215,0,0.15)] transform-gpu relative overflow-hidden group"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                    <Zap className="text-gold w-4 h-4 animate-pulse-glow" />
                    <span className="text-gold uppercase tracking-[0.25em] text-[10px] font-bold drop-shadow-md">The Future of Manufacturing</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-black mb-6 font-heading text-white leading-[0.9] tracking-tighter transform-gpu">
                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={titleVariants}
                        className="overflow-hidden flex justify-center"
                    >
                        {"PRECISION".split('').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.05), type: "spring", stiffness: 100 }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div custom={3} initial="hidden" animate="visible" variants={titleVariants} className="overflow-hidden mt-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-[#fff2aa] to-[#cca700] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                            PERFECTED
                        </span>
                    </motion.div>
                </h1>

                <motion.p
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="text-slate-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide drop-shadow-md transform-gpu"
                >
                    Pioneering excellence in fixturing and comprehensive manufacturing solutions. Delivering unparalleled quality to industry leaders.
                </motion.p>

                <motion.div
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto transform-gpu"
                >
                    <Link to="/contact" className="btn btn-primary group w-full sm:w-auto overflow-hidden relative">
                        <span className="relative z-10 flex items-center justify-center gap-3 font-bold">
                            Start a Project <Target size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                    </Link>
                    <Link to="/services" className="btn btn-outline group w-full sm:w-auto bg-obsidian/50 border-gold/50 text-gold hover:bg-gold hover:text-obsidian hover:border-gold border relative overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-3 font-bold transition-colors duration-300">
                            Explore Services <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </Link>
                </motion.div>
                {/* Scroll Indicator Moved from absolute bottom to the content column */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer mt-16 lg:mt-24 z-20"
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <div className="text-[10px] text-gold uppercase tracking-[0.3em] font-mono">Discover</div>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <Mouse size={24} className="text-gold opacity-80" strokeWidth={1.5} />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative Side Lines - Optimized */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 opacity-40 pointer-events-none transform-gpu">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-[2px] h-12 bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
