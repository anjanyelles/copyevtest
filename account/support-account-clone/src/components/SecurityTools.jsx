import React from 'react';

const SecurityTools = () => {
    return (
        <div>
            <h1>Account Security Tools</h1>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Explore tools that help keep your account secure and prevent unauthorized access.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                1. Two-Factor Authentication (2FA)
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Enable Two-Factor Authentication (2FA) to add an extra layer of security.<br />
                - 2FA requires a code from your phone or an authenticator app in addition to your password when logging in.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                2. Security Alerts
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Set up security alerts to be notified of suspicious login attempts or other unusual activities.<br />
                - Alerts can be sent to your email or phone for immediate action.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                3. Account Recovery Options
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Set up recovery options such as a trusted email or phone number for account recovery in case of a forgotten password.<br />
                - Keep your recovery details updated to ensure you can regain access quickly.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                4. Regular Password Updates
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Change your password regularly to maintain account security.<br />
                - Ensure your password is unique, complex, and not reused across other accounts.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                5. Secure Your Devices
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Ensure that the devices you use to access your account are secure.<br />
                - Use device passwords, biometrics, and trusted security software to protect your devices.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Need Help Securing Your Account?
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                If you need assistance with setting up security tools or have any concerns about your account's safety, please contact our support team at{" "}
                <a href="mailto:support@gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
                    support@gatnix.com
                </a>.
            </p>
        </div>
    );
};

export default SecurityTools;
