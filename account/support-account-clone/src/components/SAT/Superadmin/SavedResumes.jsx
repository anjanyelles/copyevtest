import React from 'react';

const SavedResumes = () => {
    return (
        <div className="saved-resumes-container">
            <div className="content-section">
                <h2 className="main-heading">Navigating Saved Resumes</h2>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Access Saved Resumes</h3>
                <p className="description">
                    Go to the <strong>Resume Builder</strong> section in the left-side menu. 
                    Click on <strong>Choose From Saved Resumes</strong> to access your saved resumes.
                </p>

                {/* Step 2 */}
                <h3 className="step-heading">Step 2: Edit a Saved Resume</h3>
                <p className="description">
                    Select the resume you want to edit from the list of saved resumes. 
                    Click <strong>Edit Resume</strong> to open it in the Resume Builder interface.
                </p>


                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014201/7_a7vulf.png"
        alt="Help Desk Screenshot"
        className="placeholder-image image_gatnix_support"
      />
                {/* Step 3 */}
                <h3 className="step-heading">Step 3: Make Changes to the Resume</h3>
                <p className="description">
                    Edit any section of the resume as needed:
                </p>
                <ul className="details-list">
                    <li><strong>Personal Info:</strong> Update details like your name, email, or phone number.</li>
                    <li><strong>Experience:</strong> Add, edit, or regenerate new points under experiences.</li>
                    <li><strong>Summary:</strong> Update or regenerate your professional summary.</li>
                    <li><strong>Education:</strong> Modify or add new education entries.</li>
                    <li><strong>Skills:</strong> Drag and drop skills or regenerate new ones.</li>
                </ul>
                <p className="description">
                    Preview changes in real-time as you make edits.
                </p>

                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Save and Exit</h3>
                <p className="description">
                    Once edits are complete, click <strong>Save Resume</strong>. 
                    Your updated resume will be stored in the dashboard under <strong>Saved Resumes</strong> for future access or downloads.
                </p>
            </div>
        </div>
    );
};

export default SavedResumes;
