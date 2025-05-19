import React, { useState } from 'react';
import ApplyForm from '../lib/applyform'; // Adjust the path if necessary
import handleSubmit from '../lib/handlesubmit'; // Adjust the path if necessary

const AiRoadmapPdf: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmitAppearDownload = (formData: { name: string; email: string }) => {
        console.log("Form Data Submitted:", formData);
        setIsSubmitted(true);
    };

    const googleDriveLink = "https://drive.google.com/file/d/1rdug9rUMRMqL17HxYeCrm7cob7dKP9ND/view?usp=sharing"; // Replace with your actual Google Drive file link

    // Wrapper function to call both handlers
    const handleCombinedSubmit = async (formData: { name: string; email: string }) => {
        const response = await handleSubmit(formData);
        if (response && response.ok) {
            handleSubmitAppearDownload(formData);
        }
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-teal-400">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-black">Download Detail AI Learning Roadmap</h1>
            {!isSubmitted ? (
                <ApplyForm onSubmit={handleCombinedSubmit} />
            ) : (
                <div style={{ marginTop: '20px' }}>
                    <p style={{ textAlign: 'center' }}>Thank you! You can now download the PDF.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px' }}>
                        <a
                            href={googleDriveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#28A745',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
            )}
        </div>
        </div>
        </div>
    );
};

export default AiRoadmapPdf;