import React from 'react';

const SavedJobsAdmin = () => {
    return (
        <div className="saved-jobs-container">
            <div className="content-section">
                <h2 className="main-heading">Saved Jobs</h2>

                {/* Adding a New Job Section */}
                <h3 className="section-heading">Adding a New Job</h3>
                <p className="description">
                    Navigate to the <strong>Job Details</strong> section. Click on <strong>Add Job</strong> to begin entering details.
                </p>
                <h4>Input Job Information</h4>
                <p className="description">
                    Fill in the following fields:
                </p>
                <ul className="details-list">
                    <li><strong>Job Name:</strong> Enter the title of the job. Example: Software Engineer</li>
                    <li><strong>Company Name:</strong> Enter the name of the company offering the job. Example: Tech Corp</li>
                    <li><strong>Website URL:</strong> Add the link to the company's website. Example: www.gatnix.com</li>
                    <li><strong>Job Description:</strong> Enter a detailed description of the job. Example: "Responsible for designing and developing scalable applications..."</li>
                </ul>
                <p className="description">
                    Click <strong>Save</strong> to store the job details in the system. If you wish to discard your changes, click <strong>Cancel</strong>.
                </p>

                {/* View and Manage Jobs Section */}
                <h3 className="section-heading">View and Manage Jobs</h3>
                <p className="description">
                    After saving, the job will appear in the list with the following columns:
                </p>
                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736947320/Screenshot_2025-01-15_at_6.51.32_PM_jfvpdf.png"
        alt="Help Desk Screenshot"
        className="placeholder-image image_gatnix_support"
      />
                <ul className="details-list">
                    <li><strong>S.NO:</strong> Serial number of the job entry.</li>
                    <li><strong>Job Name:</strong> Title of the job.</li>
                    <li><strong>Company Name:</strong> Name of the hiring company.</li>
                    <li><strong>Web URL:</strong> Link to the company's website.</li>
                    <li><strong>Description:</strong> Brief summary of the job details.</li>
                    <li><strong>Action:</strong> Options to Edit or Delete the job entry.</li>
                </ul>


                <p className="description">
                    If no jobs have been added yet, the table will display: <strong>"No data available."</strong>
                </p>
                <p>
        If you encounter any issues, please reach out to our Help Desk or
        contact us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
      </p>
            </div>
        </div>
    );
};

export default SavedJobsAdmin;
