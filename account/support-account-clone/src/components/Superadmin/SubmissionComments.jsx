import React from 'react';


const SubmissionComments = () => {
    return (
        <div className="submission-comments-container">
            <div className="content-section">
                <h2 className="main-heading">Ensuring Correct Submission: Comment Section</h2>
                <p className="description">
                    This guide outlines the steps to ensure that your submission is correctly added to the system. If you encounter any issues, please reach out to the <strong>Help Desk</strong> for support.
                </p>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Accessing Consultant Details</h3>
                <p className="description">
                    Navigate to the <strong>Consultant’s Profile</strong> by locating the consultant’s name or email address within the system. Click on the consultant’s name or email to access their profile.
                </p>

                {/* Step 2 */}
                <h3 className="step-heading">Step 2: Navigating to the Submission Comments Section</h3>
                <p className="description">
                    Once on the consultant’s profile, navigate to the <strong>Submission Comments</strong> section. This section allows you to communicate directly with the employer, admin, consultant, or super admin.
                </p>

                {/* Step 3 */}
                <h3 className="step-heading">Step 3: Contacting Relevant Parties</h3>
                <p className="description">
                    Use the message box in the <strong>Submission Comments</strong> section to send messages to the relevant parties (employer, admin, consultant, or super admin). Share any questions or comments regarding the submission here.
                </p>
                <img
                    src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736961521/Screenshot_2025-01-15_at_10.48.24_PM_wxr0yo.png"
                    alt="Submission Comments Guide"
                    className="placeholder-image image_gatnix_support"
                />

                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Contacting Help Desk (If Needed)</h3>
                <p className="description">
                    If you encounter any issues that you are unable to resolve, please contact the <strong>Help Desk</strong> for assistance. The Help Desk team is available to help with any technical or system-related issues.
                </p>

                {/* Image Section */}
             

                <p className="help-text">
                    For any further assistance, feel free to reach out to the Help Desk for support.
                </p>
            </div>
        </div>
    );
};

export default SubmissionComments;
