/**
 * React Component for Managing Consultant Login and Schedule Status
 */
import React from 'react';

const ConsultantStatusManagement = () => {
    return (
        <div className="consultant-status-management-container">
            <div className="content-section">
                <h2 className="main-heading">Restriction Consultant Login Status and Schedule Status</h2>

                {/* Overview */}
                <h3 className="section-heading">Overview</h3>
                <p className="description">
                    Follow the steps below to update the login status and schedule status of a consultant in your system.
                </p>

                {/* Steps to Change Status */}
                <h3 className="section-heading">Steps to Update Consultant Status</h3>

                {/* Step 1 */}
                <h4 className="step-heading">Step 1: Locate the Consultant</h4>
                <p className="description">
                    To begin, find the consultant whose login status and schedule status you wish to update:
                </p>


                <img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014075/Consultant-_mz79bu.png" alt="Help Desk Screenshot" class="placeholder-image image_gatnix_support"></img>
                <ul className="details-list">
                    <li><strong>Search:</strong> Use the search bar to quickly locate the consultant by name or email.</li>
                    <li><strong>Scroll:</strong> Alternatively, scroll through the consultant list to find the desired consultant.</li>
                </ul>

                {/* Step 2 */}
                <h4 className="step-heading">Step 2: Modify Login Status</h4>
                <p className="description">
                    Once the consultant is located, you can change their login status:
                </p>
                <ul className="details-list">
                    <li><strong>Enable:</strong> Marks the consultant as Active. The consultant will have full access to the platform and their assigned permissions.</li>
                    <li><strong>Disable:</strong> Marks the consultant as Inactive. The consultant will be restricted from accessing the platform.</li>
                </ul>

                {/* Step 3 */}
                <h4 className="step-heading">Step 3: Modify Schedule Status</h4>
                <p className="description">
                    Next, you can update the consultant’s schedule status to control whether they receive email notifications for submission-related activities:
                </p>
                <ul className="details-list">
                    <li><strong>Enable:</strong> The consultant will receive emails regarding their scheduled submissions, keeping them informed of upcoming tasks.</li>
                    <li><strong>Disable:</strong> The consultant will not receive any email notifications related to submissions, restricting their ability to get email updates.</li>
                </ul>

                {/* Step 4 */}
                <h4 className="step-heading">Step 4: Save Changes</h4>
                <p className="description">
                    After updating both the login and schedule statuses, click <strong>Save</strong> to confirm and apply the changes.
                </p>

                {/* Confirmation */}
                <h4 className="step-heading">Step 5: Confirmation Message</h4>
                <p className="description">
                    Upon successfully updating the login status and schedule status, a confirmation message will appear:
                </p>
                <blockquote className="confirmation-message">
                    “Consultant login status and schedule status have been successfully updated.”
                </blockquote>

                {/* Important Notes */}
                <h3 className="section-heading">Important Notes</h3>
                <ul className="details-list">
                    <li><strong>Active Consultant:</strong> A consultant marked as Active will have unrestricted access to all platform features based on their assigned permissions.</li>
                    <li><strong>Inactive Consultant:</strong> A consultant marked as Inactive will be restricted from logging into the platform and will not have access to any platform features.</li>
                    <li><strong>Schedule Status – Enabled:</strong> An enabled schedule status means the consultant will receive emails regarding submissions and updates.</li>
                    <li><strong>Schedule Status – Disabled:</strong> A disabled schedule status means the consultant will not receive any email notifications about submissions.</li>
                </ul>

                {/* Contact Support */}
                <h4 className="step-heading">Facing Issues?</h4>
                <p className="description">
                    For any issues or further assistance, please contact us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
                </p>
            </div>
        </div>
    );
};

export default ConsultantStatusManagement;
