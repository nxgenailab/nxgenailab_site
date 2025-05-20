import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="py-6">
            <div className="container mx-auto flex justify-between items-center relative">
                {/* Logo: hidden on small screens */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-2 hidden sm:flex"
                >
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/HorizontalLogo.png" alt="NxGen AI Lab Logo" className="w-50 h-8" />
                    </a>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden sm:block">
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="/#workshops"
                                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
                            >
                                Workshops
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#team"
                                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
                            >
                                Team
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#resources"
                                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
                            >
                                Resources
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Burger Icon */}
                <button
                    className="sm:hidden flex items-center text-gray-300 ml-4" // Added ml-4
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-64 bg-gray-900 z-50 sm:hidden">
                        <ul className="flex flex-col items-center py-2 space-y-2 w-32 mx-auto">
                            <li>
                                <a
                                    href="/#workshops"
                                    className="text-gray-300 hover:text-white transition-colors duration-300 text-base px-2 py-1 w-full text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Workshops
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#team"
                                    className="text-gray-300 hover:text-white transition-colors duration-300 text-base px-2 py-1 w-full text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#resources"
                                    className="text-gray-300 hover:text-white transition-colors duration-300 text-base px-2 py-1 w-full text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;