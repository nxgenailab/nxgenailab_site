import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const OurMissionSection = () => {
    return (
        <section className="py-20 md:py-28 bg-[#f9f9fb]">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left: Mission Content */}
                <motion.div
                    {...{ className: "md:w-1/2" }}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-center text-black mb-10">
                        <Target className="inline-block w-12 h-12 mr-2 text-teal-400" />
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500">Mission</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        At NxGen AI Lab, our mission is to **empower teenagers** with the skills, confidence, and ethical mindset needed to thrive in an AI-driven world. We believe that **AI education should be fun, accessible, and purposeful**—giving students the tools to build impactful solutions, question the world around them, and shape a better future through innovation.
                    </p>
                </motion.div>

                {/* Right: Illustration or Image */}
                <motion.div
                    {...{ className: "md:w-1/2" }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/assets/mission.png"
                        alt="Mission Illustration"
                        className="w-70% h-auto rounded-2xl shadow-md"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default OurMissionSection;
