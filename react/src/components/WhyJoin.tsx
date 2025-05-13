import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Sparkles, Zap, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { cn } from '../lib/utils';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const WhyJoin = () => {
    const workshops = [
        {
            title: 'Introduction to Python for AI',
            description: 'Learn the fundamentals of Python programming, a crucial language for AI development.',
            icon: '🐍',
        },
        {
            title: 'Machine Learning Basics',
            description: 'Dive into the core concepts of machine learning, including algorithms and applications.',
            icon: <BrainCircuit className="w-7 h-7 text-[#22ddd2]" />,
        },
        {
            title: 'Deep Learning with TensorFlow',
            description: 'Explore the power of deep learning using Google’s TensorFlow framework.',
            icon: <Zap className="w-7 h-7 text-[#8c15e9]" />,
        },
        {
            title: 'AI in the Real World',
            description: 'Understand how AI is applied in industries like healthcare, finance, and more.',
            icon: <Lightbulb className="w-7 h-7 text-[#2e73e9]" />,
        },
    ];

    return (
        <section id="workshops" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-16">
                    <Sparkles className="inline-block w-12 h-12 mr-2 text-teal-400" />
                    Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22ddd2] to-[#8c15e9]">NxGen AI Lab?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                    {workshops.map((workshop, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            viewport={{ once: true }}
                            {...{ className: cn("flex justify-center") }}
                        >
                            <Card
                                className={cn(
                                    "w-full max-w-[320px] min-h-[380px] flex flex-col justify-between",
                                    "bg-white/90 backdrop-blur-lg border border-gray-200 shadow-md",
                                    "hover:shadow-xl transition-transform duration-300 hover:-translate-y-2",
                                    "rounded-2xl text-center py-10 px-6",
                                    "bg-gradient-to-b from-white via-teal-50 to-purple-50"
                                )}
                            >
                                <div>
                                    <CardHeader>
                                        <CardTitle className="text-5xl mb-6">
                                            {typeof workshop.icon === 'string' ? (
                                                <span className="inline-block">{workshop.icon}</span>
                                            ) : (
                                                workshop.icon
                                            )}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-2xl font-bold text-gray-800 mb-4">
                                            {workshop.title}
                                        </CardDescription>
                                        <p className="text-lg text-gray-600">{workshop.description}</p>
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
