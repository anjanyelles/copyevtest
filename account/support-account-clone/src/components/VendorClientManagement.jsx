import React from 'react';

const ManageVendorsAndClients = () => {
    return (
        <div style={{ display: "flex",  flexDirection: "column", padding: "20px" }}>
            <div style={{ maxWidth: "800px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Comprehensive Guide for Managing Vendors and Clients in Your System (Individual Pro)
                </h2>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                    How to Manage Vendor Information in the System?
                </h3>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Adding Vendor Details:
                </h4>
                <img 
                        src="https://via.placeholder.com/150"  
                        alt="Adding Vendor Details" 
                        style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                    />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                   
                    Click on the "Add Vendor" button. Enter the required vendor details in the provided form. Save the details to complete the process.
                </p>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Editing Vendor Details:
                </h4>
                <img 
                        src="https://via.placeholder.com/150"  
                        alt="Editing Vendor Details" 
                        style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                    />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                  
                    Locate the vendor whose details need modification. Click the "Edit" button. Make the necessary changes and save the updates.
                </p>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Deleting Vendor Details:
                </h4>
                <img 
                        src="https://via.placeholder.com/150"  
                        alt="Deleting Vendor Details" 
                        style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                    />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                 
                    Locate the vendor you wish to delete. Click the "Delete" button. Confirm the action to permanently delete the vendor details.
                </p>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                    How to Manage Client Information in the System?
                </h3>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Adding Client Details:
                </h4>
                <img 
                        src="https://via.placeholder.com/150"  
                        alt="Adding Client Details" 
                        style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                    />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                  
                    Click on the "Add Client" button. Fill in the required client details in the provided form. Save the details to complete the process.
                </p>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Editing Client Details:
                </h4>
                <img 
                        src="https://via.placeholder.com/150"  
                        alt="Editing Client Details" 
                        style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                    />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                   
                    Locate the client whose details you want to edit. Click the "Edit" button. Update the necessary information and save the changes.
                </p>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000000", marginTop: "10px", marginBottom: "10px" }}>
                    Deleting Client Details:
                </h4>
                <img 
                        src="https://via.placeholder.com/150"  
                        alt="Deleting Client Details" 
                        style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                    />
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                   
                    Locate the client you want to remove. Click the "Delete" button. Confirm the deletion to permanently remove the client details.
                </p>
            </div>     
        </div>
    );
};

export default ManageVendorsAndClients;
