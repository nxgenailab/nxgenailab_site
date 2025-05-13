import React from 'react';
import { motion } from 'framer-motion';
import { User2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Deep Shah',
            role: 'Instructor',
            avatar: "assets/DP.png", // Example URL
            bio: `With 5 years of experience in AI and ML, I am passionate about teaching and empowering the next generation.\n
                I have spoken at various institutions including at the Toronto Metropolitan University and the North Toronto Collegiate Institute.`,
        }
    ];

    return (
        <section id="team" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-16">
                <User2 className="inline-block w-12 h-12 mr-2 text-teal-400" />
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22ddd2] to-[#8c15e9]">Us</span>
            </h2>
                <div className="flex justify-center">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white border border-white/10 text-white">
                                <CardHeader>
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-40 h-40 rounded-full border-4 border-teal-500/30"
                                        />
                                    </div>
                                    <CardTitle className="text-2xl font-semibold text-center">{member.name}</CardTitle>
                                    <CardDescription className="text-gray-400 text-xl text-center">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 text-center text-2xl max-w-2lg mx-auto">{member.bio}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AboutUs;