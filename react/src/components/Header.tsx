// Header Component
import { motion } from 'framer-motion';
// import { BrainCircuit } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <header className="py-6">
            <div className="container mx-auto flex justify-between items-center ">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    {...{ className: "flex items-center gap-2" }}
                >
                    <img src="/assets/HorizontalLogo.png" alt="NxGen AI Lab Logo" className="w-50 h-8" />
                    {/* <h1 className="text-2xl font-bold text-white">NxGen AI Lab</h1> */}
                </motion.div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#workshops"
                                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
                            >
                                Workshops
                            </a>
                        </li>
                        <li>
                            <a
                                href="#team"
                                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
                            >
                                Team
                            </a>
                        </li>
                        <li>
                            <a
                                href="#resources"
                                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
                            >
                                Resources
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;