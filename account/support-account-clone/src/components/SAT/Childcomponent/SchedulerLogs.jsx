import React from 'react';

function SchedulerLogs() {
    return (
        <div>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                Understanding Scheduler Logs: Guides to Monitoring Email Campaigns
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                The Scheduler Logs section provides essential information to track and manage your email campaign schedules effectively. Here's what you can view in the logs:
            </p>

            {/* Image */}
            <img 
                src="https://example.com/path/to/your/image.jpg" 
                alt="Scheduler Logs Overview" 
          className="image_gatnix_support"
            />

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                What Details Can I View in Scheduler Logs?
            </h3>

            <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                <li>
                    <strong>Scheduler Name:</strong> Identifies the name of the scheduler managing the email campaign.
                </li>
                <li>
                    <strong>Created Date:</strong> Displays the date when the scheduler was created, offering insight into its history.
                </li>
                <li>
                    <strong>Previous Mail Date & Count:</strong> Shows the date and number of emails sent in the last scheduled batch.
                </li>
                <li>
                    <strong>Next Mail Date:</strong> Indicates when the next batch of emails is scheduled to be sent.
                </li>
            </ol>
            <img 
                    src="https://via.placeholder.com/800x400" // Replace with your image URL
                    alt="Create Approval Manager"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Things to Remember
            </h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                <li>Ensure you regularly monitor the logs to stay updated on email campaign progress.</li>
                <li>Check the previous mail date and count to assess the effectiveness of previous campaigns.</li>
                <li>Verify the next mail date to ensure timely delivery of the next batch of emails.</li>
                <li>If there are any discrepancies or issues, consult with the support team for assistance.</li>
            </ul>
        </div>
    );
}

export default SchedulerLogs;
