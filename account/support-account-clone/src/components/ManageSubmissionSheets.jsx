import React from 'react';

const ManageSubmissionSheets = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <div style={{ maxWidth: "800px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Managing Submission Sheets
                </h2>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                    How to Add, Edit, and Delete Submission Sheets?
                </h3>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Adding Submission Details:
                </h4>
                <img 
                    src="https://via.placeholder.com/150"  
                    alt="Adding Submission Details" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Go to the "Submission Sheets" section. Navigate to the designated area for submission sheets in the system.
                    Fill in the required details in the submission form, such as name, email, and mobile number.
                    Click "Save" to securely store the information.
                </p>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Editing Submission Details:
                </h4>
                <img 
                    src="https://via.placeholder.com/150"  
                    alt="Editing Submission Details" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Locate the submission you want to update. Click the "Edit" button next to the entry. Make the necessary changes and click "Save" to apply the updates.
                </p>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Deleting Submission Details:
                </h4>
                <img 
                    src="https://via.placeholder.com/150"  
                    alt="Deleting Submission Details" 
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Find the submission you wish to remove. Click the "Delete" button. Confirm the action to permanently delete the submission.
                </p>
            </div>
        </div>
    );
};

export default ManageSubmissionSheets;
