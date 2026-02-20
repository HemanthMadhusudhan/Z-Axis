import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import CapabilitiesSection from '../components/home/CapabilitiesSection';
import ClientsSection from '../components/home/ClientsSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
    return (
        <div>
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
