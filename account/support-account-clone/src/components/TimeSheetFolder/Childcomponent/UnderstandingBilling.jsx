import React from 'react';

function UnderstandingBilling(props) {
    return (
        <div>
            <>
                <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Understanding Billing and Product Details
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Managing and interpreting your billing and product information is simple and streamlined. Here's how you can access and interpret it effectively.
                </p>

                {/* Image */}
                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-21%20180239-png.png"  // Replace with your image URL
                    alt="Billing and Product Overview"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }} 
                />

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Products Overview:
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <ul>
                        <li><strong>License Details:</strong> Information about your active and inactive licenses.</li>
                        <li><strong>Payment Count:</strong> Number of payments completed.</li>
                        <li><strong>Item Information:</strong> Detailed view of:
                            <ul>
                                <li>Quantity of items purchased.</li>
                                <li>Price per month for each item.</li>
                                <li>Applicable discounts.</li>
                                <li>Total amounts (displayed in a tabular format).</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <img 
                    src="https://via.placeholder.com/800x400" // Replace with your image URL
                    alt="Create Approval Manager"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Payment Management:
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    Keep track of your payment history and methods for future transactions.
                </p>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    User Activity:
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <ul>
                        <li><strong>Active Users:</strong> Number of users currently utilizing the products.</li>
                        <li><strong>Inactive Users:</strong> Number of users with inactive accounts.</li>
                    </ul>
                </p>

                <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                    Billing Information:
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                    <ul>
                        <li><strong>Email:</strong> Registered email address.</li>
                        <li><strong>Invoice Details:</strong> Includes the provider (Gatnix.com), invoice number, issue date, and renewal date for your services.</li>
                    </ul>
                </p>
            </>
        </div>
    );
}

export default UnderstandingBilling;
