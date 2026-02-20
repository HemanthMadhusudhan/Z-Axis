
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo-client.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                                <img src={logo} alt="Z-AXIS" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold font-heading">
                                    <span className="text-gold">Z</span>-AXIS
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Precision perfected, satisfaction guaranteed. Everything starts here.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com/z_axish365" />
                            <SocialIcon icon={<MessageCircle size={20} />} href="https://wa.me/919741930919" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-gold">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/about">About Company</FooterLink>
                            <FooterLink to="/services">Services</FooterLink>
                            <FooterLink to="/capabilities">Capabilities</FooterLink>
                            <FooterLink to="/contact">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-gold">Our Services</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400">CNC Machining</li>
                            <li className="text-gray-400">Product Development</li>
                            <li className="text-gray-400">Grinding</li>
                            <li className="text-gray-400">Wirecut & DRO</li>
                            <li className="text-gray-400">Fabrication</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-gold">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                                <MapPin size={20} className="text-gold shrink-0 mt-1" />
                                <a
                                    href="https://maps.google.com/?q=Survey+no+91+vanijya+malige,+hosahudya+village+bashettihalli+factory+circle,+bangalore+rural+561203"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold transition-colors"
                                >
                                    Survey No 91 Vanijya Malige, Hosahudya Village Bashettihalli Factory Circle, Bangalore Rural 561203
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Phone size={20} className="text-gold shrink-0" />
                                <a
                                    href="https://wa.me/919741930919"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold transition-colors"
                                >
                                    9741930919
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail size={20} className="text-gold shrink-0" />
                                <a href="mailto:zaxiscadcamcnc@gmail.com" className="hover:text-gold transition-colors">zaxiscadcamcnc@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Z-Axis. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <li>
        <Link to={to} className="text-gray-400 hover:text-gold transition-colors">
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300">
        {icon}
    </a>
);

export default Footer;
