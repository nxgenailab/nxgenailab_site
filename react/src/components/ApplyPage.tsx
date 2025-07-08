import React from 'react';
import handleSubmit from '../lib/submitregistration';
import RegistrationForm from '../lib/registrationform';

export default function ApplyPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-teal-400">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-black">Apply for the AI Free Webinar</h1>
                <RegistrationForm onSubmit={handleSubmit} />
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 text-sm text-blue-800 rounded-lg text-center">
                    Thanks for applying to the webinar! We'll be in touch soon with next steps.
                </div>
            </div>
        </div>
    );
}
