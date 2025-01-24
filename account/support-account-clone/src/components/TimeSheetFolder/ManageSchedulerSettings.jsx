import React from 'react';

const ManageSchedulerSettings = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <div style={{ maxWidth: "800px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Manage Scheduler Settings for Automated Email Sends
                </h2>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                    How to Configure Scheduler Settings for Automated Emails?
                </h3>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Scheduler Settings: A Quick Setup Guide
                </h4>
                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20163211-png.png"  
                    alt="Scheduler Settings" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    To configure a mail scheduler in your system, follow these simple steps:
                </p>

                <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <li>Click on <strong>Scheduler Settings</strong>.</li>
                    <li>Add a new mail scheduler by specifying the following details:</li>
                    <ul>
                        <li><strong>Status:</strong> Choose whether the scheduler is active or inactive.</li>
                        <li><strong>Time in EST:</strong> Set the specific time for sending the email.</li>
                        <li><strong>Frequency Intervals:</strong> Define how often the email will be sent (e.g., daily, weekly).</li>
                        <li><strong>Max Cycles:</strong> Set the maximum number of times the scheduler will run.</li>
                        <li><strong>Max Mail Limit:</strong> Limit the number of emails sent within a specified time frame.</li>
                    </ul>
                    <li>Click <strong>Save</strong> to apply the settings and start the scheduling process.</li>
                </ol>
                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20163307-png.png"  
                    alt="Scheduler Settings" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
            </div>
        </div>
    );
};

export default ManageSchedulerSettings;
