import React from 'react';

function ViewEmployer() {
    return (
        <div>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                Viewing Employer Details
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Easily access Employer profiles with a few simple steps. Here’s how to view the Employer details in your system.
            </p>

            {/* Image */}
            <img 
                src="https://example.com/path/to/your/image.jpg" 
                alt="View Employer Details" 
                style={{ width: "60%", height: "auto", marginBottom: "20px" }} 
            />

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                How to View Employer Details
            </h3>

            <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                <li>
                    <strong>1. Click the Employer Tab:</strong> Navigate to the Employer Tab in your system.
                </li>
                <li>
                    <strong>2. Locate the Eye Symbol:</strong> On the right side of the screen, you will see an eye symbol next to each Employer's profile.
                </li>
                <li>
                    <strong>3. View Employer Profile:</strong> Click the eye symbol to open and view the Employer's profile details.
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
                <li>This method allows you to easily view Employer information with just a click.</li>
                <li>You can access all the important details of the Employer’s profile.</li>
                <li>For further assistance, refer to the user manual or contact support.</li>
            </ul>
        </div>
    );
}

export default ViewEmployer;
