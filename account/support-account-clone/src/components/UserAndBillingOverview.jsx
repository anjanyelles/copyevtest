import React from 'react';

const UserAndBillingOverview = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#4F4F4F" }}>
            {/* Section: Comprehensive Overview */}
            <div style={{ maxWidth: "800px", marginBottom: "40px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000", marginBottom: "10px" }}>
                    Comprehensive Overview of User and Billing Information
                </h2>
                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000", marginTop: "20px", marginBottom: "10px" }}>
                    How Can You Effectively Track Users and Billing Details?
                </h3>
                <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                    Gain insights into your user and billing status with these key details:
                </p>

                {/* Section: User Management */}
                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000", marginTop: "10px", marginBottom: "10px" }}>
                    User Management
                </h4>
                <ul style={{ fontSize: "16px", marginBottom: "20px", paddingLeft: "20px" }}>
                    <li>
                        <strong>Active Users:</strong> Monitor the count of users actively utilizing the platform.
                    </li>
                    <li>
                        <strong>Inactive Users:</strong> Identify users who are not currently engaged.
                    </li>
                </ul>

                {/* Section: License and Product Information */}
                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000", marginTop: "10px", marginBottom: "10px" }}>
                    License and Product Information
                </h4>
                <ul style={{ fontSize: "16px", marginBottom: "20px", paddingLeft: "20px" }}>
                    <li>
                        <strong>Licenses:</strong> Keep track of the number of licenses available or in use.
                    </li>
                    <li>
                        <strong>Products:</strong> View details of the total products linked to your account.
                    </li>
                </ul>

<img src='https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736939030/Screenshot_2025-01-15_at_2.31.16_PM_n7czgt.png'  alt='resune'   className='placeholder-image image_gatnix_support'/>
                {/* Section: Billing Information */}
                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000", marginTop: "10px", marginBottom: "10px" }}>
                    Billing Information
                </h4>
                <p style={{ fontSize: "16px", marginBottom: "30px" }}>
                    Access critical payment and subscription details under <strong>Billing Info</strong> to ensure uninterrupted service.
                </p>

                {/* Placeholder Image */}
                <p>
        If you encounter any issues, please reach out to our Help Desk or
        contact us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
      </p>
            </div>
        </div>
    );
};

export default UserAndBillingOverview;
