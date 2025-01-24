import React from 'react';

const AdminAccessManagement = () => {
    return (
        <div className="admin-access-management-container">
            <div className="content-section">
                <h2 className="main-heading">Restrict and Allow Admin Login Access</h2>

                {/* Restrict Admin Login Access */}
                <section className="restrict-access-section">
                    <h3 className="section-heading">Restrict Admin Login Access for Super Admin</h3>
                    <ol className="steps-list">
                        <li>
                            <strong>Open the Admin Tab:</strong>
                            <p>Navigate to the Admin Tab in your system and select the desired admin profile from the list.</p>
                        </li>
                        <li>
                            <strong>Disable Login Status:</strong>
                            <p>Locate the <em>Login Status</em> option on the right side of the screen. Click <strong>Disable</strong> to restrict the admin's access to the system.</p>
                        </li>
                    </ol>
                </section>

                {/* Allow Admin Login Access */}
                <section className="allow-access-section">
                    <h3 className="section-heading">Allow Admin Login Access</h3>
                    <ol className="steps-list">
                        <li>
                            <strong>Open the Admin Tab:</strong>
                            <p>Navigate to the Admin Tab and choose the admin profile for which you want to enable access.</p>
                        </li>
                        <li>
                            <strong>Enable Login Status:</strong>
                            <p>Find the <em>Login Status</em> option on the right-hand side. Click <strong>Enable</strong> to grant login access.</p>
                        </li>
                    </ol>
                </section>

                {/* Things to Remember */}
                <section className="things-to-remember-section">
                    <h3 className="section-heading">Things to Remember</h3>
                    <ul className="tips-list">
                        <li>
                            <strong>Action Confirmation:</strong> A prompt may appear before applying changes. Review carefully.
                        </li>
                        <li>
                            <strong>Security Practices:</strong> Use login restrictions to maintain system security.
                        </li>
                    </ul>
                    <p>
                        For more detailed instructions, refer to the user manual or contact support at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
                    </p>
                </section>

                {/* Understanding Admin Status */}
                <section className="admin-status-section">
                    <h3 className="section-heading">Understanding Admin Status</h3>
                    <ul className="status-details-list">
                        <li>
                            <strong>Active Admins:</strong>
                            <p>Admins currently active and with login enabled. Displayed when you select the <strong>Active</strong> checkbox.</p>
                        </li>
                        <li>
                            <strong>Inactive Admins:</strong>
                            <p>Admins who are not currently active or have login disabled. Displayed when you select the <strong>Inactive</strong> checkbox.</p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AdminAccessManagement;
