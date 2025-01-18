import React from 'react';
import './ManageConsultantLicenses.css'; // Import the CSS file

const ManageConsultantLicenses = () => {
    return (
        <div className="manage-licenses-container">
            <div className="content-section">
                <h2 className="main-heading">
                    Effortlessly Manage Licenses for Consultants
                </h2>
                <h3 className="sub-heading">
                    How Can You Assign, Upgrade, or Delete Licenses for Consultants?
                </h3>
                <p className="description">
                    Streamline your license management with the following actions:
                </p>

                <h4 className="section-heading">Overview of Licenses</h4>
                <ul className="list">
                    <li><strong>Name:</strong> Displays the consultant's name.</li>
                    <li><strong>Total:</strong> Shows the total number of licenses associated with the consultant.</li>
                    <li><strong>Assigned Licenses:</strong> Indicates the number of licenses currently in use.</li>
                    <li><strong>Available Licenses:</strong> Reflects the remaining licenses available for assignment.</li>
                </ul>

                <h4 className="section-heading">Actions You Can Perform</h4>
                <ul className="list">
                    <li><strong>Upgrade Button:</strong> Quickly upgrade licenses to provide additional features or services.</li>
                    <li><strong>Delete Action:</strong> Remove licenses or consultant records if no longer needed.</li>
                </ul>

                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20171948-png.png" 
                    alt="Manage Consultant Licenses" 
                    className="placeholder-image 
 image_gatnix_support"
                />
            </div>
        </div>
    );
};

export default ManageConsultantLicenses;
