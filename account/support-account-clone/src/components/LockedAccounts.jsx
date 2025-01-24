import React from 'react';

const LockedAccounts = () => {
    return (
        <div>
            <h1>Locked or Compromised Accounts</h1>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Recover access to your account if it is locked or compromised.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 1: Identify the Issue
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Determine if your account is locked due to multiple unsuccessful login attempts, security violations, or other issues.<br />
                - If your account is compromised, verify any suspicious activity through recent account activity or notifications.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 2: Account Recovery Options
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Use the "Forgot Password" or "Account Recovery" option on the login page to begin the recovery process.<br />
                - Enter the email or phone number associated with the account to receive a recovery link or code.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 3: Verify Your Identity
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Enter the verification code sent to your email or phone.<br />
                - If you are unable to receive the code, check your spam folder or update your contact details.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 4: Secure Your Account
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - After successfully recovering access to your account, reset your password to a more secure one.<br />
                - Review any security settings, such as enabling two-factor authentication, to prevent future compromises.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Need Additional Help?
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                If you encounter any issues during the recovery process, please contact our support team at{" "}
                <a href="mailto:support@gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
                    support@gatnix.com
                </a>.
            </p>
        </div>
    );
};

export default LockedAccounts;
