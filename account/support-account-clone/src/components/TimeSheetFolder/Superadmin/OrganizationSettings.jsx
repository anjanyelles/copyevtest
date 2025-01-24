import React from 'react';

const OrganizationSettings = () => {
  return (
    <div>
      <h4>Organization Settings</h4>
      <p>
        From the main dashboard, navigate to Organization Settings to configure your organization's product access.
      </p>

      <h5>Configure Product Access</h5>
      <p>
        In the Product Access section, you can enable or disable access to different products for your organization:
      </p>
      <ul>
        <li>
          <strong>SAT:</strong> Enable or disable access to the SAT product by clicking the corresponding checkbox.
        </li>
        <li>
          <strong>TIME SHEET:</strong> Enable or disable access to the Time Sheet product by clicking the corresponding checkbox.
        </li>
        <li>
          <strong>JOB PORTAL:</strong> Enable or disable access to the Job Portal product by clicking the corresponding checkbox.
        </li>
      </ul>

      <img
                className="placeholder-image image_gatnix_support"
                src="  https://res.cloudinary.com/danfpnuui/image/upload/v1737530016/Screenshot_2025-01-21_153404_a9kenj.png"
                alt="Employee Table Screenshot"
            />
    </div>
  );
};

export default OrganizationSettings;
