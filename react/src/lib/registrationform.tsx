import React, { useState } from 'react';

interface RegistrationFormProps {
    onSubmit: (formData: {
        name: string;
        email: string;
        phone: string;
        age: string;
        occupation: string;
        otherOccupation: string;
        city: string;
        aiFamiliarity: string;
        aiInterest: string;
        aiTopics: string[];
        aiInterestOther: string;
    }) => Promise<any> | void;
}

export default function RegistrationForm({ onSubmit }: RegistrationFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        occupation: '',
        otherOccupation: '',
        city: '',
        aiFamiliarity: '',
        aiInterest: '',
        aiTopics: [] as string[],
        aiInterestOther: '',
    });
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement;
            setFormData((prev) => {
                const topics = prev.aiTopics.includes(value)
                    ? prev.aiTopics.filter((t) => t !== value)
                    : [...prev.aiTopics, value];
                return { ...prev, aiTopics: topics };
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess(false);
        const submitData = {
            ...formData,
            occupation: formData.occupation === 'Other' ? formData.otherOccupation : formData.occupation,
            aiInterest: formData.aiInterest === 'Other' ? formData.aiInterestOther : formData.aiInterest,
        };
        const result = onSubmit(submitData);
        if (result instanceof Promise) {
            try {
                await result;
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    age: '',
                    occupation: '',
                    otherOccupation: '',
                    city: '',
                    aiFamiliarity: '',
                    aiInterest: '',
                    aiTopics: [],
                    aiInterestOther: '',
                });
                setSuccess(true);
            } catch {
                // handle error if needed
            }
        } else {
            setFormData({
                name: '',
                email: '',
                phone: '',
                age: '',
                occupation: '',
                otherOccupation: '',
                city: '',
                aiFamiliarity: '',
                aiInterest: '',
                aiTopics: [],
                aiInterestOther: '',
            });
            setSuccess(true);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-8">
            <form
                onSubmit={handleSubmit}
                className="space-y-8 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
                <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">AI Education Registration</h2>
                {success && (
                    <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-center font-medium">
                        Thank you! Your application has been submitted.
                    </div>
                )}

                {/* Personal Info */}
                <div>
                    <h3 className="text-xl font-bold text-teal-700 mb-3">👤 Who Are You, Really?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-base font-semibold text-gray-800 mb-1" htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-base font-semibold text-gray-800 mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-base font-semibold text-gray-800 mb-1" htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-base font-semibold text-gray-800 mb-1" htmlFor="city">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>
                    </div>
                </div>

                {/* Demographics */}
                <div>
                    <h3 className="text-xl font-bold text-teal-700 mb-3">🎂 Age, Stage & Occupation Vibes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-base font-semibold text-gray-800 mb-1">
                                Where do you fit?
                            </label>
                            <div className="space-y-1">
                                {["15-19", "20-24", "25-29", "30+"].map(option => (
                                    <label key={option} className="flex items-center cursor-pointer hover:text-teal-600">
                                        <input
                                            type="radio"
                                            name="age"
                                            value={option}
                                            checked={formData.age === option}
                                            onChange={handleChange}
                                            required
                                            className="mr-2 accent-teal-600"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-base font-semibold text-gray-800 mb-1">
                                What do you do?
                            </label>
                            <div className="space-y-1">
                                {[
                                    "High School Student",
                                    "College/ University Student",
                                    "Working Professional",
                                    "Recent Graduate",
                                    "Parent",
                                    "Teacher",
                                    "Other"
                                ].map(option => (
                                    <label key={option} className="flex items-center cursor-pointer hover:text-teal-600">
                                        <input
                                            type="radio"
                                            name="occupation"
                                            value={option}
                                            checked={formData.occupation === option}
                                            onChange={handleChange}
                                            required
                                            className="mr-2 accent-teal-600"
                                        />
                                        {option}
                                    </label>
                                ))}
                                {formData.occupation === 'Other' && (
                                    <input
                                        type="text"
                                        name="otherOccupation"
                                        value={formData.otherOccupation}
                                        onChange={handleChange}
                                        placeholder="Please specify"
                                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                                        required
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Familiarity */}
                <div>
                    <h3 className="text-xl font-bold text-teal-700 mb-3">🤖 AI & You: A Love Story?</h3>
                    <label className="block text-base font-semibold text-gray-800 mb-1">
                        How familiar are you (or your child/student) with Artificial Intelligence?
                    </label>
                    <div className="space-y-1">
                        {["Never heard of it", "Heard of it, but don’t know much", "Know a little bit", "Very familiar"].map(option => (
                            <label key={option} className="flex items-center cursor-pointer hover:text-teal-600">
                                <input
                                    type="radio"
                                    name="aiFamiliarity"
                                    value={option}
                                    checked={formData.aiFamiliarity === option}
                                    onChange={handleChange}
                                    required
                                    className="mr-2 accent-teal-600"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                {/* AI Interest */}
                <div>
                    <h3 className="text-xl font-bold text-teal-700 mb-3">🧠 Why AI? (No Wrong Answers!)</h3>
                    <label className="block text-base font-semibold text-gray-800 mb-1">
                        Why are you interested in AI education?
                    </label>
                    <div className="space-y-1">
                        {["Career opportunities", "Academic interest", "Want to keep up with the future", "Just curious", "Other"].map(option => (
                            <label key={option} className="flex items-center cursor-pointer hover:text-teal-600">
                                <input
                                    type="radio"
                                    name="aiInterest"
                                    value={option}
                                    checked={formData.aiInterest === option}
                                    onChange={handleChange}
                                    required
                                    className="mr-2 accent-teal-600"
                                />
                                {option}
                            </label>
                        ))}
                        {formData.aiInterest === "Other" && (
                            <input
                                type="text"
                                name="aiInterestOther"
                                value={formData.aiInterestOther}
                                onChange={handleChange}
                                placeholder="Please specify"
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                                required
                            />
                        )}
                    </div>
                </div>

                {/* AI Topics */}
                <div>
                    <h3 className="text-xl font-bold text-teal-700 mb-3">🚀 Pick Your AI Adventure!</h3>
                    <label className="block text-base font-semibold text-gray-800 mb-1">
                        What topics in AI are most interesting to you or your child? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                            "AI & ChatGPT",
                            "Coding & Python",
                            "Data Science",
                            "Robotics",
                            "Ethical AI",
                            "AI in healthcare / business / art"
                        ].map(option => (
                            <label key={option} className="flex items-center cursor-pointer hover:text-teal-600">
                                <input
                                    type="checkbox"
                                    name="aiTopics"
                                    value={option}
                                    checked={formData.aiTopics.includes(option)}
                                    onChange={handleChange}
                                    className="mr-2 accent-teal-600"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition duration-300 text-lg"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
}