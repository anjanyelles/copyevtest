import React from 'react';

const Verification = () => {
    return (
        <div>
            <h1>Sign-In Verification</h1>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Set up and manage verification options to enhance the security of your Gatnix account.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 1: Go to the Verification Settings
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Log in to your account and navigate to the <strong>Account Settings</strong> page.<br />
                - Click on the <strong>"Security"</strong> tab to access verification options.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 2: Choose a Verification Method
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Select from the available options, such as <strong>Two-Factor Authentication (2FA)</strong>, <strong>Email Verification</strong>, or <strong>Phone Number Verification</strong>.<br />
                - Click on the <strong>"Enable"</strong> button for your preferred method.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 3: Set Up the Chosen Verification Method
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - For <strong>Two-Factor Authentication</strong>, link your account with a verification app (e.g., Google Authenticator).<br />
                - For <strong>Email or Phone Number Verification</strong>, enter the required details and complete the verification process via the confirmation code sent.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 4: Save Your Settings
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - After completing the setup for your selected verification method, click <strong>"Save Settings"</strong> to activate your chosen security option.
            </p>
        </div>
    );
};

export default Verification;
