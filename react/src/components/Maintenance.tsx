import React from 'react';

const MaintenanceScreen = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center text-white text-center bg-gradient-to-br from-teal to-purple animate-gradient">
            <img 
            src="assets/logo-white.png" 
            alt="Logo" 
            className="mb-4 w-40 md:w-80"
            />
            <div className="p-8 rounded-2xl bg-black bg-opacity-40 shadow-lg max-w-md">
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="text-xl">This site is currently under maintenance.</p>
            <p className="text-md mt-2">We’ll be back shortly. Thank you for your patience!</p>
            </div>
            <style>{`
            @keyframes gradient {
                0% {
                background-position: 0% 50%;
                }
                50% {
                background-position: 100% 50%;
                }
                100% {
                background-position: 0% 50%;
                }
            }

            .animate-gradient {
                background: linear-gradient(
                -45deg,
                #22ddd2,
                #8c15e9,
                #2e73e9,
                #17072b,
                #172d67
                );
                background-size: 400% 400%;
                animation: gradient 10s ease infinite;
            }
            `}</style>
        </div>
    );
};

export default MaintenanceScreen;
