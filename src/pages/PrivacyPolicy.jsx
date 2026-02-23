import React from 'react';
import SectionHeader from '../components/common/SectionHeader';

const PrivacyPolicy = () => {
    return (
        <div className="pt-24 pb-20 bg-obsidian min-h-screen">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <SectionHeader
                    title="Privacy Policy"
                    subtitle="How we handle your data"
                    align="left"
                />
                <div className="prose prose-invert prose-lg mt-8 text-slate-300">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Information We Collect</h3>
                    <p className="mb-4">
                        We collect information you provide directly to us when you fill out a contact form, request a quote, or communicate with us. The types of personal information we may collect include your name, email address, phone number, company name, and any other information you choose to provide.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h3>
                    <p className="mb-4">
                        We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and send you technical notices and administrative messages.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Information Sharing</h3>
                    <p className="mb-4">
                        We do not share your personal information with third parties except as necessary to provide our services or as required by law.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Security</h3>
                    <p className="mb-4">
                        We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Contact Us</h3>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:zaxiscadcamcnc@gmail.com" className="text-gold hover:underline">zaxiscadcamcnc@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
