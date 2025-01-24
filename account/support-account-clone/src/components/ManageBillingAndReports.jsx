import React from 'react';

const ManageBillingAndReports = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#4F4F4F" }}>
            {/* Section: Manage Invoices and Payment Methods */}
            <div style={{ maxWidth: "800px", marginBottom: "40px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000", marginBottom: "10px" }}>
                    Efficiently Manage Invoices and Payment Methods
                </h2>
                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000", marginTop: "20px", marginBottom: "10px" }}>
                    How Can You Track and Organize Your Invoices and Payment Details?
                </h3>

             
                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000", marginTop: "10px", marginBottom: "10px" }}>
                    Invoices
                </h4>
                <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                    View detailed information like S.No, Date, Invoice Number, User Name, and Document Type for each invoice.
                    Ensure accurate records for seamless tracking of payments and purchases.
                </p>

                <h4 style={{ fontSize: "18px", fontWeight: "300", color: "#000", marginTop: "10px", marginBottom: "10px" }}>
                    Payment Methods
                </h4>
                <p style={{ fontSize: "16px", marginBottom: "30px" }}>
                    Manage payment options associated with your account, such as cards or other methods linked to <strong>user@gmail.com</strong>. 
                    Update or add new payment methods as needed to simplify future transactions.
                </p>

                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20170831-png.png" 
                    alt="SAT Report Generation" 
              className="image_gatnix_support"
                />

            </div>

        </div>
    );
};

export default ManageBillingAndReports;
