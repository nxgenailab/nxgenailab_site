import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Dr. Eleanor Vance',
            role: 'Lead Instructor',
            bio: 'Expert in AI and machine learning, passionate about educating the next generation.',
            avatar: 'https://source.unsplash.com/random/150x150/?woman,teacher,1', // Example URL
        },
        {
            name: 'Dr. David Chen',
            role: 'Curriculum Developer',
            bio: 'Specializes in creating engaging and effective learning experiences for students.',
            avatar: 'https://source.unsplash.com/random/150x150/?man,professor,1',  // Example URL
        },
        {
            name: 'Aisha Khan',
            role: 'Workshop Facilitator',
            bio: 'Experienced AI engineer, dedicated to making AI accessible to high school students.',
            avatar: 'https://source.unsplash.com/random/150x150/?woman,engineer,1',  // Example URL
        },
        {
            name: 'Samuel Rodriguez',
            role: 'Technical Assistant',
            bio: 'Provides technical support and guidance during workshops.',
            avatar: 'https://source.unsplash.com/random/150x150/?man,developer,1',  // Example URL
        },
    ];

    return (
        <section id="team" className="py-16 md:py-24 bg-gradient-to-br from-dark to-darkBlue">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                <Users className="inline-block w-8 h-8 mr-2 text-teal-400" />
                    Our Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
                                <CardHeader>
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full border-4 border-teal-500/30"
                                        />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-center">{member.name}</CardTitle>
                                    <CardDescription className="text-gray-400 text-center">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 text-sm text-center">{member.bio}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TeamSection;