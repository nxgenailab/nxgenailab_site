const handleSubmit = async (
    formData: {
        name: string;
        email: string;
        phone: string;
        age: string;
        occupation: string;
        city: string;
        aiFamiliarity: string;
        aiInterest: string;
        aiTopics: string[];
    },
    formElement?: HTMLFormElement
): Promise<Response | undefined> => {
        try {
            console.log("Submitting form data:", formData);
            const response = await fetch("https://nxgenailab-site-fastapi-751892319793.us-east1.run.app/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Form submitted successfully:", data);

                // Show a fancy popup with a green tick mark and a message
                const popup = document.createElement('div');
                popup.style.position = 'fixed';
                popup.style.top = '50%';
                popup.style.left = '50%';
                popup.style.transform = 'translate(-50%, -50%)';
                popup.style.background = '#fff';
                popup.style.padding = '32px 48px';
                popup.style.borderRadius = '16px';
                popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
                popup.style.display = 'flex';
                popup.style.flexDirection = 'column';
                popup.style.alignItems = 'center';
                popup.style.zIndex = '9999';

                const tick = document.createElement('div');
                tick.innerHTML = `
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#22c55e"/>
                    <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                `;
                popup.appendChild(tick);

                const msg = document.createElement('div');
                msg.textContent = "Application submitted successfully!";
                msg.style.marginTop = '18px';
                msg.style.fontSize = '1.15rem';
                msg.style.fontWeight = 'bold';
                msg.style.color = '#222';
                popup.appendChild(msg);

                document.body.appendChild(popup);

                setTimeout(() => {
                    popup.style.transition = 'opacity 0.2s';
                    popup.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(popup);
                    }, 300);
                }, 1000);
                if (formElement && typeof formElement.reset === 'function') {
                    formElement.reset();
                }
            } else {
                console.error("Error submitting form:", response.statusText);
                // Show a fancy popup with a red cross mark and a message
                const popup = document.createElement('div');
                popup.style.position = 'fixed';
                popup.style.top = '50%';
                popup.style.left = '50%';
                popup.style.transform = 'translate(-50%, -50%)';
                popup.style.background = '#fff';
                popup.style.padding = '32px 48px';
                popup.style.borderRadius = '16px';
                popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
                popup.style.display = 'flex';
                popup.style.flexDirection = 'column';
                popup.style.alignItems = 'center';
                popup.style.zIndex = '9999';

                const cross = document.createElement('div');
                cross.innerHTML = `
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ef4444"/>
                    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                `;
                popup.appendChild(cross);

                const msg = document.createElement('div');
                msg.textContent = "Failed to submit the application. Please try again.";
                msg.style.marginTop = '18px';
                msg.style.fontSize = '1.15rem';
                msg.style.fontWeight = 'bold';
                msg.style.color = '#222';
                popup.appendChild(msg);

                document.body.appendChild(popup);

                setTimeout(() => {
                    popup.style.transition = 'opacity 0.2s';
                    popup.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(popup);
                    }, 300);
                }, 1000);
            }
            return response;
        } catch (error) {
            console.error("Error:", error);
            // Show a fancy popup with a red cross mark and a message for error
            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = '#fff';
            popup.style.padding = '32px 48px';
            popup.style.borderRadius = '16px';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'center';
            popup.style.zIndex = '9999';

            const cross = document.createElement('div');
            cross.innerHTML = `
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#ef4444"/>
                <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            `;
            popup.appendChild(cross);

            const msg = document.createElement('div');
            msg.textContent = "An error occurred. Please try again.";
            msg.style.marginTop = '18px';
            msg.style.fontSize = '1.15rem';
            msg.style.fontWeight = 'bold';
            msg.style.color = '#222';
            popup.appendChild(msg);

            document.body.appendChild(popup);

                setTimeout(() => {
                    popup.style.transition = 'opacity 0.2s';
                    popup.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(popup);
                    }, 300);
                }, 1000);
            return undefined;
        }
    };
export default handleSubmit;