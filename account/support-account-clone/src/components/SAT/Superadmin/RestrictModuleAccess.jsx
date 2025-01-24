/**
 * React Component for Restricting Module Access
 */
import React from 'react';

const RestrictModuleAccess = () => {
    return (
        <div className="module-access-container">
            <div className="content-section">
                <h2 className="main-heading">Restricting Module Access: Timesheets, SAT, and Job Portal</h2>

                {/* Overview */}
                <h3 className="section-heading">Overview</h3>
                <p className="description">
                    Restricting access to specific modules ensures that only authorized users or groups can use certain features within the system. The modules available for restriction include:
                </p>
                <ul className="module-list">
                    <li><strong>Timesheets</strong></li>
                    <li><strong>SAT</strong></li>
                    <li><strong>Job Portal</strong></li>
                </ul>


                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736948306/Screenshot_2025-01-15_at_7.07.13_PM_nmokim.png"
        alt="Help Desk Screenshot"
        className="placeholder-image image_gatnix_support"
      />
                {/* Steps to Restrict Module Access */}
                <h3 className="section-heading">Steps to Restrict Module Access</h3>

                {/* Step 1 */}
                <h4 className="step-heading">Step 1: Navigate to Organization Settings</h4>
                <p className="description">
                    From the left-side menu, click on <strong>Organization Settings</strong>.
                </p>

                {/* Step 2 */}
                <h4 className="step-heading">Step 2: Open Product Access</h4>
                <p className="description">
                    Locate and select the <strong>Product Access</strong> section within the Organization Settings interface.
                </p>

                {/* Step 3 */}
                <h4 className="step-heading">Step 3: Select the Module to Restrict</h4>
                <p className="description">
                    Identify the module you want to restrict:
                </p>
                <ul className="module-list">
                    <li><strong>Timesheets</strong></li>
                    <li><strong>SAT</strong></li>
                    <li><strong>Job Portal</strong></li>
                </ul>

                {/* Step 4 */}
                <h4 className="step-heading">Step 4: Apply Restrictions</h4>
                <p className="description">
                    For each module:
                </p>
                <ul className="details-list">
                    <li><strong>Disable Access:</strong> Toggle the access switch to "OFF" for users or groups.</li>
                    <li><strong>Assign Access Levels:</strong> Define which users or roles can access the module (e.g., only Super Admin).</li>
                    <li><strong>Save Changes:</strong> After applying restrictions, click <strong>Save</strong> to finalize updates.</li>
                </ul>

                {/* Step 5 */}
                <h4 className="step-heading">Step 5: Verify Restrictions</h4>
                <p className="description">
                    Confirm that the restricted modules are no longer visible or accessible to unauthorized users:
                </p>
                <ul className="details-list">
                    <li><strong>Timesheets:</strong> Hidden from the dashboard or restricted from usage.</li>
                    <li><strong>SAT:</strong> Users will be unable to access skill assessments or settings.</li>
                    <li><strong>Job Portal:</strong> Job posting and candidate management features will be unavailable.</li>
                </ul>

                {/* Optional */}
                <h4 className="step-heading">Optional: Customize Messages</h4>
                <p className="description">
                    Add a notification message for restricted users indicating:
                </p>
                <blockquote className="custom-message">
                    “You do not have access to this module. Please contact your administrator.”
                </blockquote>

                {/* Save or Cancel Changes */}
                <h4 className="step-heading">Save or Cancel Changes</h4>
                <ul className="details-list">
                    <li><strong>Save:</strong> Click the <strong>Save</strong> button to apply restriction changes.</li>
                    <li><strong>Cancel:</strong> Click <strong>Cancel</strong> to discard the modifications and retain existing access.</li>
                </ul>

                {/* Confirmation */}
                <h4 className="step-heading">Confirmation</h4>
                <p className="description">
                    A confirmation message will appear:
                </p>
                <blockquote className="confirmation-message">
                    “Module restrictions have been successfully updated.”
                </blockquote>

                {/* Contact Support */}
                <h4 className="step-heading">Facing Issues?</h4>
                <p className="description">
                    If you are facing any issues, please reach us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
                </p>
            </div>
        </div>
    );
};

export default RestrictModuleAccess;
