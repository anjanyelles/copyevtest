import React from 'react';
import './ResumeBuilder.css'; // Import a CSS file for modular styles

const ResumeBuilder = () => {
    return (
        <div className="resume-builder-container">
            <div className="content-section">
                <h2 className="main-heading">Build a Professional Resume with Ease</h2>
                <h3 className="sub-heading">
                    How Can You Use the Resume Builder to Create and Analyze Resumes?
                </h3>
                <p className="description">
                    The Resume Builder simplifies the process of crafting and enhancing resumes:
                </p>

                <h4 className="section-heading">Resume Analyzer</h4>
                <p className="description">
                    Navigate to the <strong>"Resume Builder"</strong> section and select <strong>"Resume Analyzer"</strong>.
                </p>
                <ul className="list">
                    <li>
                        Paste your resume, edit it with matched keywords to align with job descriptions, and analyze its effectiveness.
                    </li>
                    <li>Download the polished resume for use.</li>
                </ul>

                <h4 className="section-heading">Import or Create Resume</h4>
                <ul className="list">
                    <li>
                        <strong>Import Resume:</strong> Upload an existing resume in PDF format.
                    </li>
                    <li>
                        <strong>Create Resume:</strong> Fill out essential details such as Personal Information, Experience, Summary, and Education.
                    </li>
                    <li>
                        Save and download the resume in PDF or Word format, with options to edit or delete sections as needed.
                    </li>
                </ul>

                <img
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20175440-png.png"
                    alt="Resume Builder"
                    className="placeholder-image"
                />
            </div>
        </div>
    );
};

export default ResumeBuilder;
