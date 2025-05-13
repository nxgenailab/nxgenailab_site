import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm md:text-base mb-4">
                    © {new Date().getFullYear()} NxGen AI Lab. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6">
                    {/* <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;