import React from 'react';

function CreateApprovalManager(props) {
    return (
        <div>
            <>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Create Approval Manager
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Follow these steps to create an Approval Manager:
                </p>

                {/* Image */}
                <img 
                    src="https://via.placeholder.com/800x400" // Replace with your image URL
                    alt="Create Approval Manager"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />

                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <strong>Step 1:</strong> Log in to Super Admin Module.
                    <br />
                    <strong>Step 2:</strong> Access the Approval Manager Page and click on the Add button.
                    <br />
                    <strong>Step 3:</strong> Enter the Manager’s details:
                    
                    <ul>
                        <li>First Name, Last Name, and Email</li>
                        <li>Password for the Approval Manager</li>
                        <li>Phone Number and WhatsApp Number</li>
                        <li>If the WhatsApp number is the same as the phone number, tick the box.</li>
                    </ul>
                    <strong>Step 4:</strong> Click Save to add the manager.
                </p>
                <img 
                    src="https://via.placeholder.com/800x400" // Replace with your image URL
                    alt="Create Approval Manager"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
            </>
        </div>
    );
}

export default CreateApprovalManager;
