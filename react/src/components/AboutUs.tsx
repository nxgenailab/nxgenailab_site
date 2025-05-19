import React from 'react';
import { motion } from 'framer-motion';
import { User2 } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';

const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Deep Shah',
            avatar: "assets/DP.png", // Example URL
            bio: `Hi! I’m Deep, the creator of the NxGen AI Lab. I graduated from the University of Waterloo six years ago 
            and have since gained 5 years of experience in AI and Machine Learning. I’m passionate about teaching and 
            empowering the next generation of innovators. I’ve had the chance to speak at institutions like Toronto 
            Metropolitan University and North Toronto Collegiate Institute, sharing how AI is shaping 
            the future, and how students like you can be a part of it. My goal is to make 
            complex topics simple, fun, and hands-on so you can build real 
            AI skills with confidence.`,
            linkedin: "https://www.linkedin.com/in/deep-shah-28b323126/" // Example LinkedIn URL
        }
    ];

    return (
        <section id="team" className="py-10 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-5">
                    <User2 className="inline-block w-12 h-12 mr-2 text-teal-400" />
                    Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22ddd2] to-[#8c15e9]">Course Instructor</span>
                </h2>
                <div className="flex justify-center">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-full max-w-4xl"
                        >
                            <Card className="bg-gray-100 border border-white/10 text-black flex flex-col md:flex-row items-center md:items-start">
                                <div className="md:w-3/4 p-1">
                                    <CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 text-left text-lg">{member.bio}</p>
                                        </CardContent>
                                    </CardHeader>
                                </div>
                                <div className="flex flex-col items-center md:w-1/2 p-6 mt-6 md:mt-8">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-64 h-64 rounded-full border-4 border-teal-500/30 mb-4"
                                    />
                                    <p className="text-xl font-semibold text-center">{member.name}</p>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 text-teal-500 hover:underline flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.381-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.604v5.588z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AboutUs;
