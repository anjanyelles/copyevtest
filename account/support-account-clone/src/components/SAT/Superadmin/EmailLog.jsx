import React from 'react';


const EmailLog = () => {
    return (
        <div className="email-logs-container">
            <div className="content-section">
                <h2 className="main-heading">How to Navigate the Email Logs in Gatnix</h2>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Log in to the Super Admin Dashboard</h3>
                <p className="description">
                    Open your web browser and visit the Gatnix Super Admin login page. Enter your <strong>Username</strong> and <strong>Password</strong>. Click the <strong>Login</strong> button to access the dashboard.
                </p>

                {/* Step 2 */}
                <h3 className="step-heading">Step 2: Locate the Email Logs Section</h3>
                <p className="description">
                    After logging in, you will see the Dashboard menu on the left-hand side of the screen. In the menu, look for the <strong>E-Mails</strong> section. Click the small arrow beside it to expand the submenu. In the expanded list, select <strong>Scheduler Logs</strong>.
                </p>

                {/* Step 3 */}
                <h3 className="step-heading">Step 3: Access the Email Logs</h3>
                <p className="description">
                    Inside the Scheduler Logs page, you will see the logs for scheduled tasks. To view detailed email logs, click the <strong>Email Logs</strong> tab located within the same section.
                </p>

                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Review the Email Logs</h3>
                <p className="description">
                    On the Email Logs page, you can view details such as:
                </p>
                <img src='https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736929069/Screenshot_2025-01-15_at_1.46.52_PM_vqnbwr.png'  className='placeholder-image 
 image_gatnix_support'  />
                <ul className="details-list">
                    <li><strong>Status:</strong> Indicates the delivery status of the email.</li>
                    <li><strong>Subject:</strong> Displays the email subject.</li>
                    <li><strong>To Email:</strong> Shows the recipient's email address.</li>
                    <li><strong>Last Event Received:</strong> Notes the last activity timestamp.</li>
                    <li><strong>Opens:</strong> Shows the count of email opens.</li>
                    <li><strong>Clicks:</strong> Displays the number of link clicks in the email.</li>
                </ul>
                <p className="description">
                    Use the <strong>Search Bar</strong> at the top right to filter emails by the sender or recipient.
                </p>

                {/* Step 5 */}
                <h3 className="step-heading">Step 5: Adjust Viewing Options</h3>
                <p className="description">
                    Use the <strong>Items per Page</strong> dropdown at the bottom of the Email Logs table to customize the number of records displayed. Navigate between pages using the arrow icons for better control.
                </p>

                {/* Need Help Section */}
                <h3 className="help-heading">Need Help?</h3>
                <p>
        If you encounter any issues, please reach out to our Help Desk or
        contact us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
      </p>
            </div>
        </div>
    );
};

export default EmailLog;
