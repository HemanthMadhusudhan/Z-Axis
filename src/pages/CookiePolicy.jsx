import React from 'react';
import SectionHeader from '../components/common/SectionHeader';

const CookiePolicy = () => {
    return (
        <div className="pt-24 pb-20 bg-obsidian min-h-screen">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <SectionHeader
                    title="Cookie Policy"
                    subtitle="How we use cookies"
                    align="left"
                />
                <div className="prose prose-invert prose-lg mt-8 text-slate-300">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">1. What Are Cookies?</h3>
                    <p className="mb-4">
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide statistical information to the owners of the site.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">2. How We Use Cookies</h3>
                    <p className="mb-4">
                        We use cookies to understand how you interact with our website, to remember your preferences, and to track page visits and usage patterns so we can continually improve our site's performance and user experience.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Types of Cookies We Use</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Essential Cookies:</strong> Required for the basic functionality of the website.</li>
                        <li><strong>Analytical Cookies:</strong> Help us improve our website by collecting and reporting information on its usage.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Managing Cookies</h3>
                    <p className="mb-4">
                        Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
