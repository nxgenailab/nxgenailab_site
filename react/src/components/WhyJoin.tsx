import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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
            title: 'Explore the Future of Technology',
            description: 'Explore how AI powers things like smart assistants and self-driving cars—and learn how to build your own!',
            icon: '🔍',
        },
        {
            title: 'Develop Critical Thinking & Problem-Solving',
            description: 'Learn how to break big problems into small steps, analyze data, and think creatively—just like real AI developers do.',
            icon: '🧠',
        },
        {
            title: 'Stand Out in School & Beyond',
            description: 'AI skills look great on college apps and resumes. Show you’re ready for the future of tech and innovation.',
            icon: '💼',
        },
        {
            title: 'Turn Curiosity into Creation',
            description: 'Don’t just learn—create! Design your own chatbots, smart tools, and fun AI apps with hands-on guidance.',
            icon: '💡',
        },
    ];

    return (
        <section id="why-join" className="py-20 md:py-28 bg-white">
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
                                <div className="flex flex-col items-center">
                                    <CardHeader>
                                        <CardTitle className="text-5xl mb-4 flex justify-center">
                                            {typeof workshop.icon === 'string' ? (
                                                <span className="inline-block">{workshop.icon}</span>
                                            ) : (
                                                workshop.icon
                                            )}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-2xl font-bold text-gray-800 mb-2">
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
