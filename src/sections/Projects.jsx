import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 border-l-4 border-green-500 pl-4"
                >
                    University Projects
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black/40 p-8 rounded-2xl hover:bg-black/60 transition-colors border border-white/5 hover:border-green-500/30 group flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-green-400 font-medium text-sm mb-2">{project.role}</p>
                                <span className="text-gray-500 text-xs uppercase tracking-wider border border-white/10 px-2 py-1 rounded">
                                    {project.type}
                                </span>
                            </div>

                            <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                                <ul className="space-y-2">
                                    {project.features.slice(0, 3).map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-300 text-xs">
                                            <span className="mr-2 text-green-500">▹</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">
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

export default Projects;
