import React from "react";

const AdminAccessControl = () => {
  return (
    <div className="admin-access-control-container">
      <div className="content-section">
        <h2 className="main-heading">Admin Access Control</h2>
        <p>Follow these steps to restrict or allow admin login access:</p>

        <h3>Restrict Admin Login Access</h3>
        <ol className="steps-list">
          <li>
            <strong>1. Open the Admin Tab</strong>
            <ul>
              <li>Navigate to the <strong>Admin Tab</strong> in your system.</li>
              <li>Select the desired admin profile from the list.</li>
            </ul>
          </li>
          <li>
            <strong>2. Disable Login Status</strong>
            <ul>
              <li>Locate the <strong>Login Status</strong> option on the right side of the screen.</li>
              <li>Click <strong>Disable</strong> to restrict the admin's access to the system.</li>
            </ul>
          </li>
        </ol>
        <img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014075/Admin_-_roxzvn.png"  alt="admin_access_control"   className="placeholder-image image_gatnix_support"/>

        <h3>Allow Admin Login Access</h3>
        <ol className="steps-list">
          <li>
            <strong>1. Open the Admin Tab</strong>
            <ul>
              <li>Navigate to the <strong>Admin Tab</strong>.</li>
              <li>Choose the admin profile for which you want to enable access.</li>
            </ul>
          </li>
          <li>
            <strong>2. Enable Login Status</strong>
            <ul>
              <li>Find the <strong>Login Status</strong> option on the right-hand side.</li>
              <li>Click <strong>Enable</strong> to grant login access.</li>
            </ul>
          </li>
        </ol>

        <h3>Things to Remember</h3>
        <ul className="notes-list">
          <li>
            <strong>Action Confirmation:</strong> A prompt may appear before applying changes. Review carefully.
          </li>
          <li>
            <strong>Security Practices:</strong> Use login restrictions to maintain system security.
          </li>
        </ul>
        <p>
          For more detailed instructions, refer to the user manual or contact support.
        </p>

        <h3>Understanding Admin Status</h3>
        <ol className="steps-list">
          <li>
            <strong>1. Active Admins</strong>
            <ul>
              <li>Admins currently active and with login enabled.</li>
              <li>Displayed when you select the <strong>Active</strong> checkbox.</li>
            </ul>
          </li>
          <li>
            <strong>2. Inactive Admins</strong>
            <ul>
              <li>Admins who are not currently active or have login disabled.</li>
              <li>Displayed when you select the <strong>Inactive</strong> checkbox.</li>
            </ul>
          </li>
        </ol>

        <div className="support-section">
          <p>
            For any issues or further assistance, please reach us at{" "}
            <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminAccessControl;
