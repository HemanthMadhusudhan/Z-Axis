import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageMeta from '../components/common/PageMeta';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: `Phone Number: ${formData.phone}\n\nClient Message:\n${formData.message}`
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus({ type: 'success', message: 'Message securely transmitted to our engineering team.' });
                setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Transmission failed. Please verify connection and retry.' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="pt-24 bg-obsidian min-h-screen relative">
            <PageMeta title="Contact Us | Z-Axis" description="Connect with our technical team to discuss your operational requirements, precision machining needs, or to initiate a project." />
            {/* Background elements - Optimized with radial gradients */}
            <div className="absolute top-1/4 right-0 w-[80vw] h-[80vw] md:w-[500px] md:h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan/10 via-transparent to-transparent pointer-events-none transform-gpu"></div>
            <div className="absolute bottom-0 left-0 w-[90vw] h-[60vw] md:w-[600px] md:h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none transform-gpu"></div>

            {/* Page Header */}
            <section className="py-20 relative overflow-hidden border-b border-glass-border">
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6"
                    >
                        Connect
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-left"
                    >
                        <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] md:text-7xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
                            Let's Build <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Together.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-5"
                        >
                            <h2 className="section-title text-white mb-6">Direct <span className="text-gold">Line</span></h2>
                            <p className="text-slate-400 mb-12 leading-relaxed font-light text-lg">
                                Engineering solutions for complex geometries and critical tolerances. Connect with our technical team to discuss your operational requirements.
                            </p>

                            <div className="space-y-6">
                                <ContactDetail
                                    icon={<MapPin size={24} />}
                                    title="Location"
                                    content="Survey No 91 Vanijya Malige, Hosahudya Village Bashettihalli Factory Circle, Bangalore Rural 561203"
                                    isLink={true}
                                    href="https://maps.app.goo.gl/sPz1Crf1nuBjcjLj9"
                                    target="_blank"
                                />
                                <ContactDetail
                                    icon={<Phone size={24} />}
                                    title="Technical Support"
                                    content="+91 9741930919"
                                    isLink={true}
                                    href="tel:+919741930919"
                                />
                                <ContactDetail
                                    icon={<Mail size={24} />}
                                    title="Project Inquiries"
                                    content="zaxiscadcamcnc@gmail.com"
                                    isLink={true}
                                    href="mailto:zaxiscadcamcnc@gmail.com"
                                />
                            </div>

                            {/* Google Map Integration */}
                            <div className="mt-12 w-full h-64 glass-panel p-2 rotate-1 hover:rotate-0 transition-transform duration-700">
                                <div className="relative rounded-lg overflow-hidden h-full group w-full border border-glass-border">
                                    <iframe
                                        title="Z-Axis Location"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                        src="https://maps.google.com/maps?q=Z-Axis%20CAD%20CAM%20CNC%2C%20Survey%20No%2091%20Vanijya%20Malige%2C%20Hosahudya%20Village%20Bashettihalli%2C%20Karnataka%20561203&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        className="filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 absolute inset-0"
                                    ></iframe>
                                    {/* Overlay that disappears on hover - Removed heavy mix-blend-mode */}
                                    <div className="absolute inset-0 bg-obsidian/40 pointer-events-none group-hover:opacity-0 transition-opacity duration-700 transform-gpu"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-7"
                        >
                            <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
                                {/* Form decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-[100px] border-b border-l border-gold/20"></div>

                                <h3 className="text-3xl font-bold mb-8 font-heading text-white relative z-10">Contact Us</h3>

                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-xl mb-8 border backdrop-blur-md flex items-center gap-3 relative z-10 ${status.type === 'success'
                                            ? 'bg-green-900/20 text-green-400 border-green-500/30'
                                            : 'bg-red-900/20 text-red-400 border-red-500/30'
                                            }`}
                                    >
                                        <div className={`w-2 h-2 rounded-full ${status.type === 'success' ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                                        <p className="font-mono text-sm">{status.message}</p>
                                    </motion.div>
                                )}

                                <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-obsidian/50 border border-glass-border text-white px-5 py-4 rounded-xl focus:outline-none focus:border-gold focus:bg-obsidian/80 transition-all peer placeholder-transparent"
                                                placeholder="Name"
                                            />
                                            <label htmlFor="name" className="absolute left-5 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-2 peer-valid:text-xs bg-obsidian/80 px-1 rounded">
                                                Name
                                            </label>
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-obsidian/50 border border-glass-border text-white px-5 py-4 rounded-xl focus:outline-none focus:border-gold focus:bg-obsidian/80 transition-all peer placeholder-transparent"
                                                placeholder="Phone Number"
                                            />
                                            <label htmlFor="phone" className="absolute left-5 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-2 peer-valid:text-xs bg-obsidian/80 px-1 rounded">
                                                Phone Number
                                            </label>
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-obsidian/50 border border-glass-border text-white px-5 py-4 rounded-xl focus:outline-none focus:border-gold focus:bg-obsidian/80 transition-all peer placeholder-transparent"
                                                placeholder="Email"
                                            />
                                            <label htmlFor="email" className="absolute left-5 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-2 peer-valid:text-xs bg-obsidian/80 px-1 rounded">
                                                Email
                                            </label>
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-obsidian/50 border border-glass-border text-white px-5 py-4 rounded-xl focus:outline-none focus:border-gold focus:bg-obsidian/80 transition-all peer placeholder-transparent"
                                                placeholder="Project Details"
                                            />
                                            <label htmlFor="subject" className="absolute left-5 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-2 peer-valid:text-xs bg-obsidian/80 px-1 rounded">
                                                Project Details
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative group mt-6">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full bg-obsidian/50 border border-glass-border text-white px-5 py-4 rounded-xl focus:outline-none focus:border-gold focus:bg-obsidian/80 transition-all peer placeholder-transparent resize-none"
                                            placeholder="Message Details"
                                        ></textarea>
                                        <label htmlFor="message" className="absolute left-5 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-2 peer-valid:text-xs bg-obsidian/80 px-1 rounded">
                                            Specification Details
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full btn btn-primary flex justify-center items-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed mt-4 py-4 rounded-xl"
                                    >
                                        {loading ? (
                                            <>Sending <Loader2 size={18} className="animate-spin" /></>
                                        ) : (
                                            <>
                                                <span>Send your information</span>
                                                <Send size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

const ContactDetail = ({ icon, title, content, isLink, href, target }) => (
    <div className="flex items-start gap-6 group glass-panel p-5 hover:border-gold/30 hover:bg-glass-hover transition-all duration-300 w-full">
        <div className="w-14 h-14 bg-obsidian border border-glass-border rounded-xl flex items-center justify-center text-slate-400 shrink-0 group-hover:text-gold group-hover:border-gold/30 transition-all duration-300">
            {icon}
        </div>
        <div className="flex-1">
            <h4 className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-1 font-bold">{title}</h4>
            {isLink ? (
                <a
                    href={href}
                    target={target || "_self"}
                    rel={target === "_blank" ? "noopener noreferrer" : ""}
                    className="text-white hover:text-cyan transition-colors block leading-relaxed font-light"
                >
                    {content}
                </a>
            ) : (
                <p className="text-white leading-relaxed font-light">{content}</p>
            )}
        </div>
    </div>
);

export default Contact;
