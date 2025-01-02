import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
            <h1>Update Your Profile</h1>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                How to Edit Your Profile Details
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Follow the steps below to edit your profile details and keep your information up to date.
            </p>
        
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 1: Login to Your Account
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Ensure you are logged into your account with the correct email address and password.<br />
                - If you are unable to log in, follow the password reset steps provided on the login page.
            </p>
        
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 2: Navigate to Profile Settings
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Once logged in, go to the profile section or settings.<br />
                - Look for options like "Edit Profile" or "Update Information."
            </p>
        
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 3: Edit Your Details
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - You can now update the following details:
                <ul>
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Education and work experience</li>
                    <li>Preferred job settings and location</li>
                </ul>
                - Make sure all the information is correct and up to date.
            </p>
        
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 4: Save Your Changes
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - After updating your details, click the "Save" or "Update" button to save your changes.<br />
                - If you're unable to save your information, check for any required fields that might be missing or incorrect.
            </p>
        
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 5: Contact Support
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - If you encounter any issues while editing your profile, feel free to contact support.<br />
                - Email us at{" "}
                <a href="mailto:support@gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
                    support@gatnix.com
                </a>.
            </p>
        </div>
    );
};

export default UpdateProfile;
