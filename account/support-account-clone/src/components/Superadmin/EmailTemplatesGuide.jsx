import React from 'react';


const EmailTemplatesGuide = () => {
    return (
        <div className="email-templates-guide-container">
            <div className="content-section">
                <h2 className="main-heading">Email Templates Management: Step-by-Step Guide</h2>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Open the Email Templates Module</h3>
                <p className="description">
                    <strong>Log in to the Super Admin Dashboard:</strong> Use your credentials to access the dashboard.
                </p>
                <p className="description">
                    <strong>Access the E-mail Templates Section:</strong> From the left-hand navigation menu, click on <strong>E-mails</strong>. Select <strong>E-mail Templates</strong> from the dropdown menu. The Email Templates module will open.
                </p>

                {/* Step 2 */}
                <h3 className="step-heading">Step 2: Create a New Email Template</h3>
                <p className="description">
                    <strong>Locate the Add Button:</strong> On the top-right corner of the module, find and click the <strong>Add</strong> button.
                </p>
                <p className="description">
                    <strong>Open the Template Form:</strong> Clicking the button will open the form where you can create a new email template.
                </p>

                {/* Step 3 */}
                <h3 className="step-heading">Step 3: Fill Out the Template Form</h3>
                <p className="description">
                    <strong>Select Recipients:</strong> In the <strong>To</strong> section, choose one or more recipient types by checking the boxes:
                </p>
                <ul className="details-list">
                    <li>Recruiter (Vendor)</li>
                    <li>Employer</li>
                    <li>Consultant</li>
                    <li>Admin</li>
                </ul>
                <p className="description">
                    <strong>Add CC (Optional):</strong> Enter any additional recipients in the CC section.
                </p>
                <p className="description">
                    <strong>Enter Sender Details:</strong> Fill in the <strong>From Email</strong> and <strong>Reply To</strong> fields with the appropriate email addresses.
                </p>
                <p className="description">
                    <strong>Select Template Type:</strong> Use the dropdown menu under <strong>Template Type</strong> to select the appropriate type.
                </p>
                <p className="description">
                    <strong>Add Subject and Message:</strong> Enter a subject in the <strong>Subject</strong> field. Compose your email message in the text editor. Use the available formatting tools to customize the message.
                </p>
                <p className="description">
                    <strong>Use Custom Fields:</strong> Below the message editor, you will find various <strong>Custom Fields</strong> such as Consultant Name, Employer Email, Submission Date, etc. Click on a custom field to insert it into your message.
                </p>

                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Save or Cancel the Template</h3>
                <p className="description">
                    <strong>Save the Template:</strong> After completing the form, click the <strong>Save</strong> button at the bottom of the form.
                </p>
                <p className="description">
                    <strong>Cancel (If Necessary):</strong> If you do not wish to save the template, click the <strong>Cancel</strong> button.
                </p>

                {/* Need Help Section */}
                <h3 className="help-heading">Need Help?</h3>
                <p className="help-text">
                    If you encounter any issues or have questions, contact your <strong>Help Desk</strong> team for support.
                </p>

                {/* Image Section */}
                <img
                    src="https://example.com/email-templates-guide-image.png"
                    alt="Email Templates Guide"
                    className="guide-image"
                />
            </div>
        </div>
    );
};

export default EmailTemplatesGuide;
