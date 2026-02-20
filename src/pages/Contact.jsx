import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
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

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

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
                        Contact <span className="text-gold">Us</span>
                    </motion.h1>
                    <div className="h-1 w-20 bg-gold"></div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold font-heading mb-8">Get in <span className="text-gold">Touch</span></h2>
                            <p className="text-gray-400 mb-10 leading-relaxed">
                                Have a project in mind or need a quote? We'd love to hear from you.
                                Our team is ready to provide precise solutions for your manufacturing needs.
                            </p>

                            <div className="space-y-8">
                                <ContactDetail
                                    icon={<MapPin size={24} />}
                                    title="Visit Us"
                                    content="Survey No 91 Vanijya Malige, Hosahudya Village Bashettihalli Factory Circle, Bangalore Rural 561203"
                                    isLink={true}
                                    href="https://maps.app.goo.gl/sPz1Crf1nuBjcjLj9"
                                    target="_blank"
                                />
                                <ContactDetail
                                    icon={<Phone size={24} />}
                                    title="Call Us"
                                    content="+91 9741930919"
                                    isLink={true}
                                    href="tel:+919741930919"
                                />
                                <ContactDetail
                                    icon={<Mail size={24} />}
                                    title="Email Us"
                                    content="zaxiscadcamcnc@gmail.com"
                                    isLink={true}
                                    href="mailto:zaxiscadcamcnc@gmail.com"
                                />
                            </div>

                            {/* Google Map Integration */}
                            <div className="mt-12 w-full h-80 bg-zinc-900 rounded-lg overflow-hidden relative group border border-zinc-800">
                                <iframe
                                    title="Z-Axis Location"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?q=Z-Axis%20CAD%20CAM%20CNC%2C%20Survey%20No%2091%20Vanijya%20Malige%2C%20Hosahudya%20Village%20Bashettihalli%2C%20Karnataka%20561203&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>

                                {/* Overlay to open external link on click (optional, acts as a cover if we want the whole area clickable) */}
                                {/* <a href="https://share.google/jzRRpbScwFH5Iyb9l" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 block" aria-label="Open in Google Maps"></a> */}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-zinc-900 p-8 md:p-12 rounded-lg border border-zinc-800"
                        >
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                            {status.message && (
                                <div className={`p-4 rounded mb-6 ${status.type === 'success' ? 'bg-green-900/50 text-green-200 border border-green-800' : 'bg-red-900/50 text-red-200 border border-red-800'}`}>
                                    {status.message}
                                </div>
                            )}

                            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black border border-zinc-700 text-white p-4 rounded focus:outline-none focus:border-gold transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black border border-zinc-700 text-white p-4 rounded focus:outline-none focus:border-gold transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-black border border-zinc-700 text-white p-4 rounded focus:outline-none focus:border-gold transition-colors"
                                        placeholder="Inquiry about..."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full bg-black border border-zinc-700 text-white p-4 rounded focus:outline-none focus:border-gold transition-colors resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full btn btn-primary flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>Sending... <Loader2 size={18} className="animate-spin" /></>
                                    ) : (
                                        <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

const ContactDetail = ({ icon, title, content, isLink, href, target }) => (
    <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center text-gold shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-white text-lg">{title}</h4>
            {isLink ? (
                <a
                    href={href}
                    target={target || "_self"}
                    rel={target === "_blank" ? "noopener noreferrer" : ""}
                    className="text-gray-400 hover:text-gold transition-colors block mt-1"
                >
                    {content}
                </a>
            ) : (
                <p className="text-gray-400 mt-1">{content}</p>
            )}
        </div>
    </div>
);

export default Contact;
