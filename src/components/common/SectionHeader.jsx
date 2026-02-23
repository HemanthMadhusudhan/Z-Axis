import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, align = 'center' }) => {
    return (
        <div className={`flex flex-col mb-16 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={align === 'center' ? 'w-full' : ''}
            >
                {subtitle && (
                    <h4 className={`section-subtitle ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
                        {subtitle}
                    </h4>
                )}
                <h2 className={`section-title ${align === 'center' ? 'mx-auto' : ''}`}>
                    {title.split(' ').map((word, idx, arr) => {
                        if (idx === arr.length - 1 && arr.length > 1) {
                            return (
                                <span key={idx} className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
                                    {word}
                                </span>
                            );
                        }
                        return <span key={idx}>{word} </span>;
                    })}
                </h2>
            </motion.div>
        </div>
    );
};

export default SectionHeader;
