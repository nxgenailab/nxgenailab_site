import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { cn } from '../lib/utils';

const WorkshopSection = () => {
    const workshops = [
        {
            title: 'Introduction to Python for AI',
            description: 'Learn the fundamentals of Python programming, a crucial language for AI development.',
            icon: '🐍',
        },
        {
            title: 'Machine Learning Basics',
            description: 'Dive into the core concepts of machine learning, including algorithms and applications.',
            icon: '🤖',
        },
        {
            title: 'Computer Vision',
            description: 'Discover how AI can "see" and interpret images and videos.',
            icon: '👁️',
        },
        {
            title: 'Natural Language Processing',
            description: 'Learn how AI understands and processes human language.',
            icon: '🗣️', 
        },
    ];

    return (
        <section id="workshops" className="relative py-16 md:py-24 overflow-hidden">
            {/* 🎨 Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-teal-300 via-purple-300 to-pink-300 opacity-30" />

            <div className="container mx-auto">
                <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-10">
                    Our Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500">Workshops!!</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left Section: Image */}
                    <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                        <img 
                            src="assets/AIWorkshop.png" 
                            alt="Descriptive Alt Text" 
                            className="w-full max-w-xl rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Right Section: Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2">
                        {workshops.map((workshop, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    className={cn(
                                        "relative bg-black/20 backdrop-blur-md border border-black/30",
                                        "hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300",
                                        "overflow-hidden rounded-xl h-full flex flex-col justify-between"
                                    )}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-4xl font-bold text-white flex items-center gap-4">
                                            {typeof workshop.icon === 'string' ? (
                                                <span className="text-4xl">{workshop.icon}</span>
                                            ) : (
                                                workshop.icon
                                            )}
                                            {workshop.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-white">
                                            {workshop.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkshopSection;