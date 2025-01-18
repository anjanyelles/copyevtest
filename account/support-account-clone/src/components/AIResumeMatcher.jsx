import React from 'react';
import './AIResumeMatcher.css'; // Import the corresponding CSS file for styling

const AIResumeMatcher = () => {
    return (
        <div className="ai-resume-matcher-container">
            <div className="content-section">
                <h2 className="main-heading">Craft Tailored Resumes with AI Resume Matcher</h2>
                <h3 className="sub-heading">
                    How Can the AI Resume Matcher Help You Align Your Resume with Job Roles?
                </h3>
                <p className="description">
                    The AI Resume Matcher streamlines the process of creating resumes specifically designed for targeted job roles:
                </p>

                <h4 className="section-heading">Access the Tool</h4>
                <ul className="list">
                    <li>
                        Navigate to the <strong>"AI Resume Matcher"</strong> section of your dashboard.
                    </li>
                </ul>

                <h4 className="section-heading">Input Job Details</h4>
                <ul className="list">
                    <li>Provide the job role description in the designated field.</li>
                    <li>Upload your existing resume for analysis.</li>
                </ul>

                <h4 className="section-heading">Generate Tailored Resumes</h4>
                <ul className="list">
                    <li>
                        The AI tool analyzes your resume against the provided job description.
                    </li>
                    <li>A custom resume is generated to align perfectly with the role.</li>
                </ul>

                <img
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20180208-png.png"
                    alt="AI Resume Matcher"
                    className="placeholder-image 
 image_gatnix_support"
                />
            </div>
        </div>
    );
};

export default AIResumeMatcher;
