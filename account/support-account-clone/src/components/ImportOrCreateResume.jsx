import React from 'react';
import './ImportOrCreateResume.css'; // Import the corresponding CSS file for styling

const ImportOrCreateResume = () => {
    return (
        <div className="import-create-resume-container">
            <div className="content-section">
                <h2 className="main-heading">Seamlessly Import or Create Your Resume</h2>
                <h3 className="sub-heading">
                    How Can You Effortlessly Build or Import a Resume Using This Tool?
                </h3>
                <p className="description">
                    Creating or importing a resume has never been easier with this streamlined process:
                </p>

                {/* Import Resume Section */}
                <h4 className="section-heading">Import Resume</h4>
                <ul className="list">
                    <li>Upload your existing resume in PDF format.</li>
                    <li>Ensure the details are accurate for quick updates or reviews.</li>
                </ul>

                {/* Create a New Resume Section */}
                <h4 className="section-heading">Create a New Resume</h4>
                <p className="description">
                    Fill in essential fields like Personal Information, Experience, Summary, and Education Details. 
                    Save the resume and download it in your preferred format (PDF or Word).
                </p>

                <h4 className="section-heading">Edit or Delete Sections</h4>
                <p className="description">
                    Edit or delete sections whenever needed to keep your resume updated.
                </p>

                <img
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20175759-png-1.png"
                    alt="Import or Create Resume"
                    className="placeholder-image 
 image_gatnix_support"
                />
            </div>
        </div>
    );
};

export default ImportOrCreateResume;
