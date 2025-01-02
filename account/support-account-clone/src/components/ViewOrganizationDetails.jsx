import React from 'react';

const ViewOrganizationDetails = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <div style={{ maxWidth: "800px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Viewing Organization Information
                </h2>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                    How to Access and View Organization Details in the System?
                </h3>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Steps to View Organization Details:
                </h4>
                <img 
                    src="https://via.placeholder.com/150"  
                    alt="Viewing Organization Details" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    To view the details of your organization in the system, follow these simple steps:
                </p>

                <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <li>Click on the "Organization Info" button.</li>
                    <li>This will direct you to the section where your organization’s details are stored.</li>
                    <li>User information will be displayed.</li>
                    <li>Once you click the button, all relevant information about the organization, such as name, contact details, and other user data, will be shown on the screen for review.</li>
                </ol>

            </div>
        </div>
    );
};

export default ViewOrganizationDetails;
