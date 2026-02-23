import React from 'react';
import SectionHeader from '../components/common/SectionHeader';

const TermsConditions = () => {
    return (
        <div className="pt-24 pb-20 bg-obsidian min-h-screen">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <SectionHeader
                    title="Terms & Conditions"
                    subtitle="Our service agreement"
                    align="left"
                />
                <div className="prose prose-invert prose-lg mt-8 text-slate-300">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h3>
                    <p className="mb-4">
                        By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Services Content</h3>
                    <p className="mb-4">
                        Our services, including but not limited to precision machining and allied capabilities, are provided "as is" and "as available". Z-Axis makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Limitation of Liability</h3>
                    <p className="mb-4">
                        In no event shall Z-Axis or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or our physical services.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Governing Law</h3>
                    <p className="mb-4">
                        These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Contact Information</h3>
                    <p className="mb-4">
                        Questions about the Terms & Conditions should be sent to us at <a href="mailto:zaxiscadcamcnc@gmail.com" className="text-gold hover:underline">zaxiscadcamcnc@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
