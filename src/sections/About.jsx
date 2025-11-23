import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { skills } from '../data/skills';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 bg-gray-900 text-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-8 border-l-4 border-blue-500 pl-4">About Me</h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                        {profile.summary}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/80 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-4 capitalize text-blue-400">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
