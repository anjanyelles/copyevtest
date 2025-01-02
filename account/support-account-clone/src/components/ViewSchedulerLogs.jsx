import React from 'react';

const ViewSchedulerLogs = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <div style={{ maxWidth: "800px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Scheduler Logs Key Information to Track Email Activity
                </h2>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                    How to View and Understand Scheduler Logs for Email Automation?
                </h3>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Click on Scheduler Logs to View Essential Details About Your Email Automation
                </h4>
                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20164244-png.png"  
                    alt="Scheduler Logs" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    To track the progress of your email automation, click on the <strong>Scheduler Logs</strong> section. Here are the key fields you can view:
                </p>

                <ul style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <li><strong>Scheduler Name:</strong> Identifies the name of the mail scheduler.</li>
                    <li><strong>Created Date:</strong> Shows when the scheduler was created.</li>
                    <li><strong>Previous Mail Date and Count:</strong> Displays the last date the email was sent and the number of emails sent.</li>
                    <li><strong>Next Mail Date:</strong> Indicates when the next email will be sent according to the scheduler.</li>
                </ul>

                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginTop: "20px" }}>
                    These details will help you monitor and track the performance of your automated emails.
                </p>
            </div>
        </div>
    );
};

export default ViewSchedulerLogs;
