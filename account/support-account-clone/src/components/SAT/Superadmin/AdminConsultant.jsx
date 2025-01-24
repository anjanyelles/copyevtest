import React from 'react';

function AdminConsultant() {
    return (
        <div>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                Viewing Consultant Details
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Easily access consultant profiles with a few simple steps. Here’s how to view the consultant details in your system.
            </p>

            {/* Image */}
            {/* <img 
                src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736954748/Screenshot_2025-01-15_at_8.53.37_PM_wqk9mi.png" 
                alt="View Consultant Details" 
          className="image_gatnix_support"
            /> */}

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                How to View Consultant Details
            </h3>

            <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                <li>
                    <strong>1. Click the Consultant Tab:</strong> Navigate to the Consultant Tab in your system.
                </li>
                <li>
                    <strong>2. Locate the Eye Symbol:</strong> On the right side of the screen, you will see an eye symbol next to each consultant's profile.
                </li>
                <li>
                    <strong>3. View Consultant Profile:</strong> Click the eye symbol to open and view the consultant's profile details.
                </li>
            </ol>
            <img 
                    src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736961106/Screenshot_2025-01-15_at_10.41.33_PM_cknme5.png" // Replace with your image URL
                    alt="Create Approval Manager"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                    className='image_gatnix_support'
                />
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Things to Remember
            </h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                <li>This method allows you to easily view consultant information with just a click.</li>
                <li>You can access all the important details of the consultant’s profile.</li>
                <li>For further assistance, refer to the user manual or contact support.</li>
            </ul>
        </div>
    );
}

export default AdminConsultant;
