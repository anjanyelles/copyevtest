import React from 'react';

function ConsultantProfileEdit() {
    return (
        <div>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                Editing Consultant Profile in Super Admin Module
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Managing and updating consultant profiles is simple in the Super Admin module. Follow the steps below to edit key details in a consultant’s profile, including education, work experience, skills, and more.
            </p>

            {/* Image */}
            <img 
                src="https://example.com/path/to/your/image.jpg" 
                alt="Consultant Profile Edit" 
          className="image_gatnix_support"
            />

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                How to Edit Consultant Profile
            </h3>

            <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                <li>
                    <strong>1. Navigate to the Consultant Section:</strong>
                    <br />
                    Log in to the Super Admin Module and navigate to the Consultant Tab.
                </li>
                <li>
                    <strong>2. Edit Educational Details:</strong>
                    <br />
                    <ul>
                        <li>Education Establishment: Update the consultant's educational institution.</li>
                        <li>Education Level: Select the relevant education level (e.g., Bachelor’s, Master’s).</li>
                        <li>Start Date and End Date: Specify the duration of the education.</li>
                        <li>Location: Enter the location of the educational institution.</li>
                    </ul>
                </li>
                
                <li>
                    <strong>3. Edit Work Experience:</strong>
                    <br />
                    <ul>
                        <li>Job Title: Update the consultant’s job position.</li>
                        <li>Company: Enter the name of the company where the consultant worked.</li>
                        <li>State and City: Specify the location of the job.</li>
                        <li>Start Date and End Date: Indicate the duration of the work experience.</li>
                    </ul>
                </li>
                <li>
                    <strong>4. Edit Skill Set:</strong>
                    <br />
                    <ul>
                        <li>Skill Name: Add or update skills the consultant possesses.</li>
                        <li>Rating: Rate the proficiency of each skill.</li>
                        <li>Versions: Specify the version of each skill (if applicable).</li>
                    </ul>
                </li>
                <li>
                    <strong>5. Ideal Job Preferences:</strong>
                    <br />
                    <ul>
                        <li>Willing to Relocate: Indicate if the consultant is open to relocation.</li>
                        <li>Currently Available: Specify the consultant’s availability (e.g., part-time, full-time).</li>
                        <li>Hourly Rate or Annual Salary: Enter the consultant’s desired rate or salary.</li>
                        <li>Desired Work Settings: Choose the consultant’s preferred work settings: On-site, Hybrid, or Remote.</li>
                    </ul>
                </li>
                <li>
                    <strong>6. Profile Details:</strong>
                    <br />
                    <ul>
                        <li>Resume: Upload or update the consultant’s resume.</li>
                        <li>VISA: Add or modify the consultant’s visa status.</li>
                        <li>Driver’s License (DL): Update the consultant’s driver’s license information.</li>
                    </ul>
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
                <li>Ensure all updated information is accurate and up-to-date.</li>
                <li>Verify the changes before saving to prevent any data inconsistencies.</li>
                <li>For further assistance, refer to the user manual or contact support at <strong>support@gatnix.com</strong>.</li>
            </ul>
        </div>
    );
}

export default ConsultantProfileEdit;
