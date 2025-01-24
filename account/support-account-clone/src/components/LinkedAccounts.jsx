import React from 'react';

const LinkedAccounts = () => {
    return (
        <div>
            <h1>Linked Accounts</h1>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Manage accounts linked to your Gatnix account for a seamless and secure experience.
            </p>
        
            <h2 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                How to Link or Unlink Accounts
            </h2>
        
            <h3 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 1: Navigate to Linked Accounts
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Go to your account settings and select "Linked Accounts" from the menu.<br />
                - Here, you can view all accounts currently linked to your Gatnix account.
            </p>
        
            <h3 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 2: Link a New Account
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Click on the "Link Account" button.<br />
                - Choose the platform or service you want to link (e.g., Google, Facebook, LinkedIn).<br />
                - Follow the instructions to authenticate and connect the account.
            </p>
        
            <h3 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 3: Unlink an Account
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - Locate the account you want to unlink in the "Linked Accounts" section.<br />
                - Click the "Unlink" button next to the account.<br />
                - Confirm the action to successfully unlink the account.
            </p>
        
            <h3 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Step 4: Troubleshooting
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                - If you encounter any issues while linking or unlinking accounts, contact our support team.<br />
                - Email us at{" "}
                <a href="mailto:support@gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
                    support@gatnix.com
                </a>{" "}
                for assistance.
            </p>
        </div>
    );
};

export default LinkedAccounts;
