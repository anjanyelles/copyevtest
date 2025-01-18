import React from 'react';

const RestrictionAdminLoginStatus = () => {
    return (
        <div className="admin-login-status-container">
            <div className="content-section">
                <h2 className="main-heading">Restriction Admin Login Status</h2>

                {/* Locate the Admin */}
                <h3 className="section-heading">Locate the Admin You Want to Update</h3>
                <p className="description">
                    Use the search bar or scroll through the admin list to find the desired admin.
                </p>

                {/* Login Status */}
                <h3 className="section-heading">Login Status:</h3>
                <p className="description">
                    <strong>Enable:</strong> Marks the admin as Active.
                    <br />
                    <strong>Disable:</strong> Marks the admin as Inactive.
                </p>

                {/* Active vs. Inactive Admins */}
                <h3 className="section-heading">Active vs. Inactive Admins</h3>
                <ul className="admin-status-list">
                    <li>
                        <strong>Active Admin:</strong>
                        <ul>
                            <li>Login status is Enabled.</li>
                            <li>The admin has full access to their assigned permissions.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Inactive Admin:</strong>
                        <ul>
                            <li>Login status is Disabled.</li>
                            <li>The admin is considered an inactive employer and cannot access the platform.</li>
                        </ul>
                    </li>
                </ul>


                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014152/Employer_y0g7tp.png"
        alt="Help Desk Screenshot"
        className="placeholder-image image_gatnix_support"
      />
                {/* Steps to Change Login Status */}
                <h3 className="section-heading">Steps to Change Login Status</h3>

                {/* Step 1 */}
                <h4>Step 1: Locate Admin</h4>
                <p className="description">
                    Use the search bar or scroll through the admin list to find the desired admin.
                </p>

                {/* Step 2 */}
                <h4>Step 2: Modify Login Status</h4>
                <p className="description">
                    Toggle the Login Status switch:
                </p>
                <ul className="details-list">
                    <li><strong>Enable:</strong> Activates the admin account.</li>
                    <li><strong>Disable:</strong> Deactivates the admin account.</li>
                </ul>

                {/* Step 3 */}
                <h4>Step 3: Save Changes</h4>
                <p className="description">
                    Click <strong>Save</strong> to confirm the update.
                </p>

                {/* Confirmation */}
                <h3 className="section-heading">Confirmation</h3>
                <p className="description">
                    After making changes, a confirmation message will appear:
                </p>
                <blockquote className="confirmation-message">
                    “Admin login status has been successfully updated.”
                </blockquote>
            </div>
        </div>
    );
};

export default RestrictionAdminLoginStatus;
