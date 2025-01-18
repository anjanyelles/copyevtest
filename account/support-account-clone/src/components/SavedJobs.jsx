import React from 'react';
import './SavedJobs.css'; // Import the corresponding CSS file for styling

const SavedJobs = () => {
    return (
        <div className="saved-jobs-container">
            <div className="content-section">
                <h2 className="main-heading">My Saved Jobs: How to Manage Your Saved Job Listings</h2>
                <h3 className="sub-heading">
                    How Can You Manage Your Saved Jobs?
                </h3>
                <p className="description">
                    To effectively manage your saved jobs, follow these steps:
                </p>

                {/* Access Saved Jobs Section */}
                <h4 className="section-heading">Access My Saved Jobs</h4>
                <p className="description">
                    Click on <strong>"My Saved Jobs"</strong> to view your list of saved job opportunities.
                </p>

                {/* Add Job Details Section */}
                <h4 className="section-heading">Add Job Details</h4>
                <p className="description">
                    Include essential details such as:
                    <ul>
                        <li><strong>Job Description:</strong> The details of the job opportunity.</li>
                        <li><strong>Company Name:</strong> The company offering the job.</li>
                        <li><strong>Web URL:</strong> A link to the job posting.</li>
                    </ul>
                </p>

                {/* Edit or Delete Jobs Section */}
                <h4 className="section-heading">Edit or Delete Jobs</h4>
                <p className="description">
                    You can easily update or remove any saved job by selecting the <strong>edit</strong> or <strong>delete</strong> option next to the job listing.
                </p>

                <img
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20181250-png.png"
                    alt="Manage Saved Jobs"
                    className="placeholder-image 
 image_gatnix_support"
                />
            </div>
        </div>
    );
};

export default SavedJobs;
