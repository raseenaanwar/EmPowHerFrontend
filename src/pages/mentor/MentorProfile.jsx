import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../components/CustomNavbar';
import MentorSidebar from '../../components/MentorSideBar';

const MentorProfile = () => {
    const navigate = useNavigate(); 
    const [introduction, setIntroduction] = useState('');
    const [mentoringTopics, setMentoringTopics] = useState('');
    const [selectedExpertise, setSelectedExpertise] = useState([]);
    const [linkedin, setLinkedin] = useState('');
    const [expertiseOptions] = useState([
        "Web Development",
        "Data Science",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Marketing",
        "Project Management",
        "Entrepreneurship",
        // Add more expertise options as needed
    ]);

   

    const handleSubmit = () => {
        // Handle reviewing the entered information
        console.log("Introduction:", introduction);
        console.log("Mentoring Topics:", mentoringTopics);
        console.log("Selected Expertise:", selectedExpertise);
        console.log("LinkedIn:", linkedin);
        
        // Navigate to the review page or perform further actions
    };

    return (
        <div className='container-fluid bg-secondary min-vh-100'>
            <div className='row'>
                <div className='col-2 bg-white vh-100'>
                    <MentorSidebar />
                </div>
                <div className='col'>
                    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
                        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <br/><br/><br/><br/><h3>Guidance for Your Mentor Page</h3>
                            <p>We kindly request you to compose a brief description for your mentor page. This should provide an overview of your career, including your achievements, experiences, and expertise. Additionally, you can mention any specific areas you specialize in and your approach to mentoring. Be sure to make it engaging and informative to attract mentees.</p>
                        </div>

                        <h2>Your Introduction as a Mentor</h2>
                        <textarea
                            value={introduction}
                            onChange={(e) => setIntroduction(e.target.value)}
                            placeholder="Enter your introduction (max 500 characters)"
                            rows={5}
                            maxLength={500}
                            style={{ width: '100%', marginBottom: '20px' }}
                            required
                        />

                        <h2>Your Mentoring Topics</h2>
                        <textarea
                            value={mentoringTopics}
                            onChange={(e) => setMentoringTopics(e.target.value)}
                            placeholder="Enter your mentoring topics (one per line)"
                            rows={5}
                            style={{ width: '100%', marginBottom: '20px' }}
                            required
                        />

                        <h2>LinkedIn</h2>
                        <input
                            type="text"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            placeholder="Enter your LinkedIn URL"
                            style={{ width: '100%', marginBottom: '20px' }}
                            required
                        />


                        <h2>Area of Expertise</h2>
                        <div>
                            {expertiseOptions.map((expertise, index) => (
                                <label key={index} style={{ marginRight: '10px' }}>
                                    <input
                                        type="checkbox"
                                        value={expertise}
                                        checked={selectedExpertise.includes(expertise)}
                                        onChange={(e) => {
                                            const checked = e.target.checked;
                                            setSelectedExpertise(prev => {
                                                if (checked) return [...prev, expertise];
                                                return prev.filter(item => item !== expertise);
                                            });
                                        }}
                                        style={{ marginRight: '5px' }}
                                    />
                                    {expertise}
                                </label>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorProfile;
