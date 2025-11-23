import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center px-4"
            >
                <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">Hello, I'm</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    {profile.name}
                </h1>
                <h3 className="text-2xl md:text-3xl text-gray-300 mb-8">{profile.role}</h3>

                <div className="flex gap-4 justify-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`mailto:${profile.contact.email}`}
                        className="px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Contact Me
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={profile.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors"
                    >
                        LinkedIn
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <span className="text-gray-500 text-sm">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
