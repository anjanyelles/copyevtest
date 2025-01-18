import React from 'react';

const RestrictionConsultant = () => {
    return (
        <div className="consultant-status-container">
            <div className="content-section">
                <h2 className="main-heading">Restriction Consultant Login Status and Schedule Status</h2>

                <table className="steps-table">
                    <thead>
                        <tr>
                            <th>Step</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Step 1: Locate the Consultant</strong></td>
                            <td>
                                To begin, find the consultant whose login status and schedule status you wish to update:
                                <ul>
                                    <li><strong>Search:</strong> Use the search bar to quickly locate the consultant by name or email.</li>
                                    <li><strong>Scroll:</strong> Alternatively, scroll through the consultant list to find the desired consultant.</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Step 2: Modify Login Status</strong></td>
                            <td>
                                Once the consultant is located, you can change their login status:
                                <ul>
                                    <li><strong>Enable:</strong> Marks the consultant as Active. The consultant will have full access to the platform and their assigned permissions.</li>
                                    <li><strong>Disable:</strong> Marks the consultant as Inactive. The consultant will be restricted from accessing the platform.</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Step 3: Modify Schedule Status</strong></td>
                            <td>
                                Next, you can update the consultant’s schedule status to control whether they receive email notifications for submission-related activities:
                                <ul>
                                    <li><strong>Enable:</strong> The consultant will receive emails regarding their scheduled submissions, keeping them informed of upcoming tasks.</li>
                                    <li><strong>Disable:</strong> The consultant will not receive any email notifications related to submissions, restricting their ability to get email updates.</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Step 4: Save Changes</strong></td>
                            <td>
                                After updating both the login and schedule statuses, click <strong>Save</strong> to confirm and apply the changes.
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Step 5: Confirmation Message</strong></td>
                            <td>
                                Upon successfully updating the login status and schedule status, a confirmation message will appear:
                                <blockquote className="confirmation-message">
                                    “Consultant login status and schedule status have been successfully updated.”
                                </blockquote>
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Important Notes:</strong></td>
                            <td>
                                <ul>
                                    <li><strong>Active Consultant:</strong> An active consultant will have unrestricted access to all platform features based on their assigned permissions.</li>
                                    <li><strong>Inactive Consultant:</strong> An inactive consultant will be restricted from logging into the platform and will not have access to any platform features.</li>
                                    <li><strong>Schedule Status – Enabled:</strong> An enabled schedule status means the consultant will receive emails regarding submissions and updates.</li>
                                    <li><strong>Schedule Status – Disabled:</strong> A disabled schedule status means the consultant will not receive any email notifications about submissions.</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Support</strong></td>
                            <td>
                                For any issues or further assistance, please contact support.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RestrictionConsultant;
