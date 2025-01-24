import React from 'react';

const RestrictionEmployerLoginStatus = () => {
    return (
        <div className="employer-login-status-container">
            <div className="content-section">
                <h2 className="main-heading">Restriction Employer Login Status</h2>

                {/* Step 1: Locate the Employer */}
                <h3 className="step-heading">Step 1: Locate the Employer</h3>
                <p className="description">
                    To begin, find the employer whose login status you wish to update:
                </p>
                <ul className="details-list">
                    <li><strong>Search:</strong> Use the search bar to quickly locate the employer by name or email.</li>
                    <li><strong>Scroll:</strong> Alternatively, scroll through the employer list to find the desired employer.</li>
                </ul>

                {/* Step 2: Modify Login Status */}
                <h3 className="step-heading">Step 2: Modify Login Status</h3>
                <p className="description">
                    Once the employer is located, you can change their login status:
                </p>
                <ul className="details-list">
                    <li><strong>Enable:</strong> Marks the employer as Active. The employer will have full access to the platform and their assigned permissions.</li>
                    <li><strong>Disable:</strong> Marks the employer as Inactive. The employer will be restricted from accessing the platform.</li>
                </ul>

                {/* Step 3: Save Changes */}
                <h3 className="step-heading">Step 3: Save Changes</h3>
                <p className="description">
                    After updating the login status, click <strong>Save</strong> to confirm and apply the changes.
                </p>

                {/* Step 4: Confirmation Message */}
                <h3 className="step-heading">Step 4: Confirmation Message</h3>
                <p className="description">
                    Upon successfully updating the login status, a confirmation message will appear:
                </p>
                <blockquote className="confirmation-message">
                    “Employer login status has been successfully updated.”
                </blockquote>

                {/* Important Notes */}
                <h3 className="important-notes-heading">Important Notes:</h3>
                <ul className="important-notes-list">
                    <li><strong>Active Employer:</strong> An employer marked as Active will have unrestricted access to all platform features based on their assigned permissions.</li>
                    <li><strong>Inactive Employer:</strong> An employer marked as Inactive will be restricted from logging into the platform and will not have access to any platform features.</li>
                </ul>

                <p className="description">
                    For any issues or further assistance, please contact support.
                </p>
            </div>
        </div>
    );
};

export default RestrictionEmployerLoginStatus;
