import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils'; // Relative path

interface AnimatedGradientProps {
    children: React.ReactNode;
    className?: string;
    gradients: string[];
    duration?: number;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
    children,
    className,
    gradients,
    duration = 5000,
}) => {
    const [gradientIndex, setGradientIndex] = useState(0);
    const [currentGradient, setCurrentGradient] = useState(gradients[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
        }, duration);

        return () => clearInterval(intervalId);
    }, [gradients.length, duration]);

    useEffect(() => {
        const nextGradient = gradients[gradientIndex];
        setCurrentGradient(nextGradient);
    }, [gradientIndex, gradients]);

    return (
        <motion.div
            {...{
                className: cn(
                    "bg-clip-text text-transparent",
                    className
                ),
            }}
            style={{
                backgroundImage: currentGradient,
            }}
            animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
                loop: Infinity,
                duration: duration * 3,
                ease: 'linear',
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedGradient;