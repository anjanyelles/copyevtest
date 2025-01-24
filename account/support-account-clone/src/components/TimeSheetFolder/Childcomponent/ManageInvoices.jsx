import React from 'react';

function ManageInvoices(props) {
    return (
        <div>
            <>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Managing Invoices and Payment Methods
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Manage your invoices and payment methods efficiently by following these steps.
                </p>

                {/* Image */}
                <img 
                    src="https://via.placeholder.com/800x400"  // Replace with your image URL
                    alt="Invoices and Payment Management"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }} 
                />

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Steps to View Invoices and Payment Information:
                </h3>
                <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <li>
                        <strong>Navigate to the Invoices Section:</strong>
                        <br />
                        Locate the Invoices tab in your platform dashboard.
                    </li>
                    
                    <li>
                        <strong>Information Available in the Invoices Section:</strong>
                        <br />
                        <ul>
                            <li><strong>Date:</strong> View the date the invoice was issued.</li>
                            <li><strong>Invoice Number:</strong> Access the unique identifier for each invoice.</li>
                            <li><strong>User Name:</strong> Check the username associated with the transaction.</li>
                            <li><strong>Document Type:</strong> Identify the type of document (e.g., invoice, receipt, etc.).</li>
                        </ul>
                    </li>

                    <li>
                        <strong>View and Manage Payment Methods:</strong>
                        <br />
                        Click on the Payment Methods section to review or update payment details securely.
                    </li>
                </ol>
            </>
        </div>
    );
}

export default ManageInvoices;
