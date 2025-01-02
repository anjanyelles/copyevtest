import React from 'react';
import './SavedResumes.css'; // Import the corresponding CSS file for styling

const SavedResumes = () => {
    return (
        <div className="saved-resumes-container">
            <div className="content-section">
                <h2 className="main-heading">Saved Resumes: Access and Manage Your Resume Files</h2>
                <h3 className="sub-heading">
                    How Can You Access and Manage Your Saved Resumes?
                </h3>
                <p className="description">
                    To manage your resumes efficiently, follow these steps:
                </p>

                {/* View Saved Resumes Section */}
                <h4 className="section-heading">View Saved Resumes</h4>
                <p className="description">
                    Click on <strong>"Saved Resumes"</strong> to view all the resumes you've created or imported.
                </p>

                {/* Edit Resumes Section */}
                <h4 className="section-heading">Edit Resumes</h4>
                <p className="description">
                    Modify any saved resume by selecting the <strong>edit option</strong>, updating details, and saving changes.
                </p>

                {/* Create New Resumes Section */}
                <h4 className="section-heading">Create New Resumes</h4>
                <p className="description">
                    If needed, you can create new resumes directly from this section.
                </p>

                <img
                    src="https://via.placeholder.com/300x150"
                    alt="Manage Resumes"
                    className="placeholder-image"
                />
            </div>
        </div>
    );
};

export default SavedResumes;
