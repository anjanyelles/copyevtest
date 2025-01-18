import React from 'react';
import './ManageOrders.css'; // Import the CSS file for styles

const ManageOrders = () => {
    return (
        <div className="manage-orders-container">
            <div className="content-section">
                <h2 className="main-heading">
                    Effectively Manage and Track Your Orders
                </h2>
                <h3 className="sub-heading">
                    How Can You Review and Manage Your Order Details?
                </h3>
                <p className="description">
                    Easily monitor your order transactions with these details:
                </p>

                <h4 className="section-heading">Order Details</h4>
                <ul className="list">
                    <li>
                        <strong>Start Date:</strong> View the date when your order or subscription began.
                    </li>
                    <li>
                        <strong>Document Type:</strong> Identify the type of document associated with your order, such as invoices or receipts.
                    </li>
                    <li>
                        <strong>Total Amount:</strong> Check the total cost associated with each order for accurate financial tracking.
                    </li>
                    <li>
                        <strong>Payment Status:</strong> Verify whether the payment has been completed or is pending.
                    </li>
                </ul>

                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20172409-png.png" 
                    alt="Order Management" 
                    className="placeholder-image 
 image_gatnix_support"
                />
            </div>
        </div>
    );
};

export default ManageOrders;
