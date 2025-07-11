import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HeroSection = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegisterClick = () => {
        navigate('/apply'); // Navigate to the /register page
    };

    return (
        <section className="py-4 md:py-20 bg-gradient-to-b">
            <div className="container mx-auto max-w-screen-lg flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
                
                {/* Left Column: Logo + Tagline + Mission */}
                <div className="md:w-1/2 text-center md:text-left my-2 md:my-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        {...{className:"mb-6"}}
                    >
                        <img
                            src="assets/logo-white.png"
                            alt="Logo"
                            className="mx-auto md:mx-0 mb-6 w-80 h-auto md:w-96"
                        />
                        <span
                            className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400 mb-6 block"
                            style={{ fontFamily: "'Codec Pro', sans-serif" }}
                        >
                            AI Education for Next Generation
                        </span>
                    </motion.div>
                </div>

                {/* Right Column: Workshop Registration Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    {...{className:"md:w-1/2 bg-[#17072b] bg-opacity-70 p-8 rounded-2xl shadow-lg text-center max-w-md md:ml-12 my-2 md:my-12"}}
                >
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-2">
                        Upcoming Webinar :
                    </h3>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        AI Roadmap for Youth
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 mb-6">
                        <span className="text-teal-300 text-2xl font-bold">
                            Saturday | Jul 26<sup>th</sup>, 2025
                        </span>
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
                    >
                        <Button
                            variant="outline"
                            className="bg-gradient-to-r from-teal-400 to-purple-400 text-white border-none
                                px-16 py-3 rounded-full hover:scale-110 transition-all duration-300
                                shadow-2xl hover:shadow-3xl flex items-center gap-3 text-lg md:text-xl mx-auto font-bold"
                            onClick={handleRegisterClick} // Add onClick handler
                        >
                            <Sparkles className="w-9 h-9" />
                            Register Today!!
                            <ArrowRight className="w-9 h-9 ml-3" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
