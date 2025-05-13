import React, { useState } from 'react';

export default function ApplyPage() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:3001/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Form submitted successfully:", data);
            alert("Application submitted successfully!");
        } else {
            console.error("Error submitting form:", response.statusText);
            alert("Failed to submit the application. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-teal-400">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-black">Apply for the AI Workshop</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Student Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Student Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
}
