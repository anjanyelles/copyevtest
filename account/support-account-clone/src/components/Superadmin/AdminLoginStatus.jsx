/**
 * React Component for Managing Admin Login Status
 */
import React from 'react';

const AdminLoginStatus = () => {
    return (
        <div className="admin-login-status-container">
            <div className="content-section">
                <h2 className="main-heading">Restriction Admin Login Status</h2>

                {/* Overview */}
                <h3 className="section-heading">Overview</h3>
                <p className="description">
                    Manage the login status of admins to control access to the platform. Admins can be marked as Active or Inactive:
                </p>
                <ul className="status-list">
                    <li><strong>Active Admin:</strong> Login status is Enabled. The admin has full access to their assigned permissions.</li>
                    <li><strong>Inactive Admin:</strong> Login status is Disabled. The admin is considered an inactive employer and cannot access the platform.</li>
                </ul>

                {/* Steps to Change Login Status */}
                <h3 className="section-heading">Steps to Change Login Status</h3>

                {/* Step 1 */}
                <h4 className="step-heading">Step 1: Locate Admin</h4>
                <p className="description">
                    Use the search bar or scroll through the admin list to find the desired admin.
                </p>

                {/* Step 2 */}
                <h4 className="step-heading">Step 2: Modify Login Status</h4>
                <p className="description">
                    Toggle the Login Status switch:
                </p>
                <ul className="details-list">
                    <li><strong>Enable:</strong> Activates the admin account.</li>
                    <li><strong>Disable:</strong> Deactivates the admin account.</li>
                </ul>




                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014075/Admin_-_roxzvn.png"
        alt="Help Desk Screenshot"
        className="placeholder-image image_gatnix_support"
      />
                {/* Step 3 */}
                <h4 className="step-heading">Step 3: Save Changes</h4>
                <p className="description">
                    Click <strong>Save</strong> to confirm the update.
                </p>

                {/* Confirmation */}
                <h4 className="step-heading">Confirmation</h4>
                <p className="description">
                    After making changes, a confirmation message will appear:
                </p>
                <blockquote className="confirmation-message">
                    “Admin login status has been successfully updated.”
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

export default AdminLoginStatus;
