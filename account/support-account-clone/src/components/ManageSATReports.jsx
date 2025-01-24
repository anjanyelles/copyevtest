import React from 'react';

const ManageSATReports = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <div style={{ maxWidth: "800px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Managing and Generation of SAT Reports
                </h2>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                    How Can You Generate SAT Reports Efficiently?
                </h3>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Steps to Generate SAT Reports and Review Key Details
                </h4>
                <img 
                    src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736961605/Screenshot_2025-01-15_at_10.49.50_PM_yym6kc.png"  
                    alt="SAT Report Generation" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Follow these steps to generate SAT Reports and review the key details:
                </p>

                <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <li>Click on <strong>SAT Report</strong> to access the report generation section.</li>
                    <li>Choose the <strong>Start and End Date</strong> for the report period.</li>
                    <li>Fill in the <strong>Requirement Field</strong>, such as direct client or layer details.</li>
                    <li>Add the <strong>Status</strong> (e.g., submitted, screening completed, rejected, hold).</li>
                    <li>Click <strong>Generate Report</strong> to view the detailed SAT Report.</li>
                </ol>
            </div>
        </div>
    );
};

export default ManageSATReports;
