import React from 'react';
import SectionHeader from '../components/common/SectionHeader';

const Disclaimer = () => {
    return (
        <div className="pt-24 pb-20 bg-obsidian min-h-screen">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <SectionHeader
                    title="Website Disclaimer"
                    subtitle="Liability and fair use"
                    align="left"
                />
                <div className="prose prose-invert prose-lg mt-8 text-slate-300">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">General Information</h3>
                    <p className="mb-4">
                        The information provided by Z-Axis ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">External Links Disclaimer</h3>
                    <p className="mb-4">
                        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Professional Disclaimer</h3>
                    <p className="mb-4">
                        The Site cannot and does not contain engineering or precise technical advice replacing custom consultation. The machining, fabrication, and engineering capability information is provided for general informational and educational purposes only and is not a substitute for professional consultation. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Errors and Omissions Disclaimer</h3>
                    <p className="mb-4">
                        While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Z-Axis is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
