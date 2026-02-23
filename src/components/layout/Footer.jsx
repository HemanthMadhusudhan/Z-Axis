import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo-client.png';

const Footer = () => {
    return (
        <footer className="bg-obsidian text-slate-300 pt-20 lg:pt-32 pb-12 border-t border-glass-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 lg:from-gold/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 lg:pr-8">
                        <Link to="/" className="flex items-center gap-4 mb-8 group">
                            <div className="w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-110 relative">
                                <div className="absolute inset-0 bg-gold/10 rounded-full blur-md"></div>
                                <img src={logo} alt="Z-AXIS" className="w-full h-full object-contain relative z-10" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black font-heading tracking-tight text-white group-hover:text-gold transition-colors">
                                    Z-AXIS
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 group-hover:text-slate-400 transition-colors">
                                    Precision Engineering
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-8 leading-relaxed font-light">
                            Engineering excellence through state-of-the-art CNC machining and innovative fixturing solutions. Delivering absolute precision to industry leaders worldwide.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com/z_axish365" />
                            <SocialIcon icon={<MessageCircle size={20} />} href="https://wa.me/919741930919" />
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-gold"></span>
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            <FooterLink to="/">Overview</FooterLink>
                            <FooterLink to="/about">Our Story</FooterLink>
                            <FooterLink to="/services">Services</FooterLink>
                            <FooterLink to="/capabilities">Technology</FooterLink>
                            <FooterLink to="/samples">Projects</FooterLink>
                        </ul>
                    </div>

                    {/* Services Summary */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-gold"></span>
                            Expertise
                        </h4>
                        <ul className="space-y-4">
                            <li className="text-slate-400 hover:text-white transition-colors cursor-default text-sm font-medium">CNC Precision Machining</li>
                            <li className="text-slate-400 hover:text-white transition-colors cursor-default text-sm font-medium">Advanced Product Development</li>
                            <li className="text-slate-400 hover:text-white transition-colors cursor-default text-sm font-medium">Specialized Grinding</li>
                            <li className="text-slate-400 hover:text-white transition-colors cursor-default text-sm font-medium">Wirecut & DRO Operations</li>
                            <li className="text-slate-400 hover:text-white transition-colors cursor-default text-sm font-medium">Custom Fabrication</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-gold"></span>
                            Connect
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors group">
                                <div className="p-2 rounded bg-glass border border-glass-border group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                                    <MapPin size={18} className="text-gold" />
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Survey+no+91+vanijya+malige,+hosahudya+village+bashettihalli+factory+circle,+bangalore+rural+561203"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium leading-relaxed hover:text-gold transition-colors"
                                >
                                    Survey No 91 Vanijya Malige, Hosahudya Village Bashettihalli Factory Circle, Bangalore Rural 561203
                                </a>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                                <div className="p-2 rounded bg-glass border border-glass-border group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                                    <Phone size={18} className="text-gold" />
                                </div>
                                <a
                                    href="https://wa.me/919741930919"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium tracking-wider hover:text-gold transition-colors"
                                >
                                    +91 97419 30919
                                </a>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                                <div className="p-2 rounded bg-glass border border-glass-border group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                                    <Mail size={18} className="text-gold" />
                                </div>
                                <a href="mailto:zaxiscadcamcnc@gmail.com" className="text-sm font-medium tracking-wide hover:text-gold transition-colors">zaxiscadcamcnc@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-glass-border pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Z-Axis. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em]">
                        Designed for <span className="text-gold">Excellence</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <li>
        <Link to={to} className="text-slate-400 hover:text-gold transition-colors text-sm font-medium flex items-center gap-2 group">
            <span className="w-0 h-[1px] bg-gold group-hover:w-4 transition-all duration-300"></span>
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-glass-border bg-glass flex items-center justify-center text-slate-300 hover:border-gold hover:text-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]">
        {icon}
    </a>
);

export default Footer;
