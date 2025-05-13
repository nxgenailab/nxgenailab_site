import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const FancyBackground = () => {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(prevAngle => (prevAngle + 1) % 360);
        }, 50); // Adjust for speed
        return () => clearInterval(interval);
    }, []);

    const colors = {
        teal: '#22ddd2',
        purple: '#8c15e9',
        blue: '#2e73e9',
        dark: '#17072b',
        darkBlue: '#172d67',
    };

    const gradient = `linear-gradient(${angle}deg, ${colors.darkBlue} 0%, ${colors.dark} 33%, ${colors.purple} 66%, ${colors.teal} 100%)`;

    return (
<motion.div
    style={{
        position: 'fixed', // Ensures it stays in place
        top: 0,
        left: 0,
        width: '100vw', // Full width
        height: '100vh', // Full height
        background: gradient,
        zIndex: -1, // Places it behind other content
    }}
    animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
    }}
    transition={{
        loop: Infinity,
        duration: 10000, // Adjust for overall animation speed
        ease: 'linear',
    }}
/>
    );
};

export default FancyBackground;