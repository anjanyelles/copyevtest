import React from 'react';

const ForgotUsername = () => {
    return (
        <div>
            <h1>Forgot Username</h1>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Retrieve your forgotten Gatnix account username by following these steps:
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 1: Go to the Forgot Username Page
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - On the login page, click on the <strong>"Forgot Username"</strong> link.<br />
                - This will redirect you to the <strong>Forgot Username</strong> page.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 2: Enter Your Registered Email
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Enter the email address associated with your Gatnix account.<br />
                - Click the <strong>"Send Username"</strong> button to receive your username.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 3: Check Your Inbox
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Open the email sent from Gatnix support.<br />
                - The email will contain your <strong>Gatnix account username</strong>.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 4: Log In Using Your Username
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Return to the login page.<br />
                - Enter your username and password to access your account.
            </p>
        </div>
    );
};

export default ForgotUsername;
