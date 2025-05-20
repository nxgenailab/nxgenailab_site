import React, { useState } from 'react';
import { Mail, Instagram, Phone } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            name: 'Footer',
            email: email,
        };

        try {
            const response = await fetch('https://nxgenailab-site-fastapi-751892319793.us-east1.run.app/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Thanks for subscribing!');
                setEmail('');
            } else {
                setStatus('Failed to subscribe. Try again.');
            }
        } catch (error) {
            setStatus('Error occurred. Try again later.');
        }
    };

    return (
<footer id='footer' className="bg-gray-900 text-gray-300 py-10">
    <div className="container mx-auto px-4 flex flex-col gap-8 md:grid md:grid-cols-3">
        {/* LEFT: Contact Info */}
        <div className="mb-8 md:mb-0">
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            
            {/* <div className="flex items-center mb-1 space-x-2"> */}
                {/* <Phone className="w-5 h-5" /> */}
                {/* <span>+1 (555) 123-4567</span> */}
            {/* </div> */}

            <div className="flex items-center mb-1 space-x-2"> {/* Reduced mb-2 to mb-1 */}
                <Mail className="w-5 h-5" />
                <span>nxgencoders@gmail.com</span>
            </div>

            <a
                href="/terms-and-conditions"
                className="text-sm underline hover:text-white"
            >
                Terms and Conditions
            </a>
        </div>

        {/* CENTER: Email Signup */}
        <div className="mb-8 md:mb-0">
            <p className="text-sm font-semibold mb-2">
                Enter your email address below for program updates:
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
                >
                    Submit
                </button>
            </form>
            {status && <p className="text-sm mt-2">{status}</p>}
        </div>

        {/* RIGHT: Navigation Links */}
        <div>
            <h3 className="text-sm font-semibold mb-4 flex justify-center items-center">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm items-center">
                <a href="/" className="hover:underline">Home</a>
                <a href="/#our-mission" className="hover:underline">Our Mission</a>
                <a href="/#why-join" className="hover:underline">Why Join NxGen AI Lab?</a>
                <a href="/#workshops" className="hover:underline">Workshops</a>
                <a href="/#team" className="hover:underline">About the Instructor</a>
                <a href="/#resources" className="hover:underline">Learning Resources</a>
            </div>
        </div>
    </div>

    {/* LINE AND COPYRIGHT */}
    <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} NxGen AI Lab. All rights reserved.
        </div>
    </div>
</footer>
    );
};

export default Footer;
