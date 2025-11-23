import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 border-l-4 border-purple-500 pl-4"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/50 p-8 rounded-2xl hover:bg-gray-800/50 transition-colors group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-blue-400 font-medium">{exp.company}</p>
                                </div>
                                <span className="text-gray-500 mt-2 md:mt-0 font-mono text-sm border border-white/10 px-3 py-1 rounded-full">
                                    {exp.date}
                                </span>
                            </div>

                            <p className="text-gray-300 mb-6 italic">
                                {exp.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Achievements</h4>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start text-gray-300 text-sm">
                                            <span className="mr-2 text-purple-500">▹</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {exp.tech.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded">
                                        {tech}
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

export default Experience;
