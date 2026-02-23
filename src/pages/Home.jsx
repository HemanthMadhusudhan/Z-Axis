import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import CapabilitiesSection from '../components/home/CapabilitiesSection';
import ClientsSection from '../components/home/ClientsSection';
import ContactSection from '../components/home/ContactSection';
import PageMeta from '../components/common/PageMeta';

const Home = () => {
    return (
        <div>
            <PageMeta title="Z-Axis | Precision Engineering & CNC Machining" description="Engineering excellence through state-of-the-art CNC machining and innovative fixturing solutions." />
            <Hero />
            <AboutSection />
            <ServicesSection />
            <CapabilitiesSection />
            <ClientsSection />
            <ContactSection />
        </div>
    );
};

export default Home;
