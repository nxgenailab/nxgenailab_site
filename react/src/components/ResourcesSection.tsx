import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Github } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';
import { Button } from './ui/button';

const ResourcesSection = () => {
    const resources = [
        {
            title: 'AI Learning Roadmap (PDF)',
            description: 'Download a step-by-step roadmap to mastering AI.',
            link: '/downloads/ai-learning-roadmap.pdf',
            icon: <GraduationCap className="w-5 h-5" />,
        },
        {
            title: 'Recommended Books (PDF)',
            description: 'A curated PDF guide of the best books to learn AI.',
            link: '/downloads/recommended-books.pdf',
            icon: <BookOpen className="w-5 h-5" />,
        },
        {
            title: 'Top Online Courses (Blog)',
            description: 'Check out our blog covering the best free and paid AI courses.',
            link: '/blog/top-ai-courses',
            icon: '💻',
        },
        {
            title: 'Must-Read AI Papers (Blog)',
            description: 'Discover key papers in AI with summaries in our blog post.',
            link: '/blog/important-ai-papers',
            icon: <BookOpen className="w-5 h-5" />,
        },
        {
            title: 'Community Forum',
            description: 'Join discussions with fellow AI learners and mentors.',
            link: '#',
            icon: <Users className="w-5 h-5" />,
        },
        {
            title: 'GitHub Projects',
            description: 'Explore real AI code in our open-source GitHub repos.',
            link: 'https://github.com/nxgen-ai-lab',
            icon: <Github className="w-5 h-5" />,
        },
    ];

    return (
        <section id="resources" className="relative py-16 md:py-24 overflow-hidden">
            {/* 🎨 Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-teal-300 via-purple-300 to-pink-300 opacity-30" />

            <div className="container mx-auto">
                <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-10">
                    <BookOpen className="inline-block w-12 h-12 mr-2 text-teal-400" />
                    Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500">Resources</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="relative bg-black/20 backdrop-blur-md border border-black/30 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 overflow-hidden rounded-xl">
                                <CardHeader>
                                    <CardTitle className="text-4xl font-bold text-white flex items-center gap-4">
                                        {typeof resource.icon === 'string' ? (
                                            <span className="text-4xl">{resource.icon}</span>
                                        ) : (
                                            resource.icon
                                        )}
                                        {resource.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-white">
                                        {resource.description}
                                    </CardDescription>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border-purple-500/30 hover:border-blue-500/30 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
                                    >
                                        <a href={resource.link} target={resource.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                                            {resource.link.endsWith('.pdf') ? 'Download PDF' : 'Learn More'}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;
