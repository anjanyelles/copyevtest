import React from 'react';

function SATReportGeneration() {
    return (
        <div>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                Simplifying SAT Reports: How to Generate Insightful Data
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                <strong>Steps to Generate SAT Report with Custom Fields and Filters:</strong>
            </p>

            {/* Adding Image */}
            <img 
                src="https://via.placeholder.com/800x400"  // Replace with your image URL
                alt="SAT Report Generation"
                style={{ width: "60%", height: "auto", marginBottom: "20px" }} 
            />

            <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                <li>
                    <strong>Access the SAT Report Section:</strong>
                    <br />
                    Navigate to the SAT Report tab in the platform.
                </li>
                <li>
                    <strong>Start Date and End Date:</strong>
                    <br />
                    Define the time range for the report.
                </li>
                <li>
                    <strong>Requirement Field:</strong>
                    <br />
                    Select criteria such as direct client, layer, or other options to refine the report.
                </li>
                <li>
                    <strong>Status:</strong>
                    <br />
                    Choose relevant statuses like submitted, screening completed, rejected, or hold to categorize the data.
                </li>
                <img 
                    src="https://via.placeholder.com/800x400" // Replace with your image URL
                    alt="Create Approval Manager"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <li>
                    <strong>Generate the Report:</strong>
                    <br />
                    Click <strong>Generate Report</strong> to retrieve and display the filtered data.
                </li>
            </ol>
        </div>
    );
}

export default SATReportGeneration;
