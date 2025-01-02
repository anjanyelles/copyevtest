import React from 'react';

const ViewEmailHistory = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <div style={{ maxWidth: "800px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Viewing Email History to Access and Track Sent Emails
                </h2>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                    How to Access and View the Email Logs in the System?
                </h3>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Key Fields in the Email Logs Section:
                </h4>
                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20162424-png.png"  
                    alt="Viewing Email Logs" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Here’s a quick guide to understanding the key fields in the Email Logs section:
                </p>

                <ul style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <li><strong>Status:</strong> Indicates the email's current state (Sent, Delivered, Failed, Bounced).</li>
                    <li><strong>Subject:</strong> Displays the subject line of the sent email.</li>
                    <li><strong>To Email:</strong> Shows the recipient’s email address.</li>
                    <li><strong>Last Event Received:</strong> The most recent event associated with the email (e.g., Opened, Clicked, Bounced).</li>
                    <li><strong>Opens:</strong> The number of times the recipient opened the email.</li>
                    <li><strong>Clicks:</strong> The number of times the recipient clicked on links within the email.</li>
                </ul>

            </div>
        </div>
    );
};

export default ViewEmailHistory;
