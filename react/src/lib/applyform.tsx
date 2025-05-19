import React, { useState } from 'react';

interface ApplyFormProps {
    onSubmit: (formData: { name: string; email: string }) => void;
}

export default function ApplyForm({ onSubmit }: ApplyFormProps) {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
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
    );
}