/**
 * React Component for Admin Profile Management
 */
import React from 'react';

const AdminProfile = () => {
    return (
        <div className="admin-profile-container">
            <div className="content-section">
                <h2 className="main-heading">Admin Profile Management</h2>

                {/* Step 1: Navigate to the Consultant Profile */}
                <h3 className="section-heading">Step 1: Navigate to the Consultant Profile</h3>
                <p className="description">
                    Open the <strong>Consultants</strong> section. Use the search bar to find the consultant by name or email.
                    Click on the consultant’s profile to view their details.
                </p>

                {/* Step 2: Update Educational Details */}
                <h3 className="section-heading">Step 2: Update Educational Details</h3>
                <p className="description">
                    In the <strong>Educational Details</strong> section, click <strong>Add Education</strong> to enter new educational information:
                </p>
                <ul className="details-list">
                    <li><strong>Education Establishment:</strong> Enter the name of the institution.</li>
                    <li><strong>Education Level:</strong> Select the level of education (e.g., Bachelor's, Master's).</li>
                    <li><strong>Start Date:</strong> Choose the date the education started.</li>
                    <li><strong>End Date:</strong> Choose the date the education ended.</li>
                    <li><strong>Location:</strong> Enter the location of the institution.</li>
                </ul>
                <p className="description">
                    To modify or remove existing educational details, click the <strong>Actions</strong> button next to the entry.
                </p>

                {/* Step 3: Update Work Experience */}
                <h3 className="section-heading">Step 3: Update Work Experience</h3>
                <p className="description">
                    In the <strong>Work Experience</strong> section, click <strong>Add Work Experience</strong> to add new job information:
                </p>
                <ul className="details-list">
                    <li><strong>Job Title:</strong> Enter the consultant’s job title.</li>
                    <li><strong>Company:</strong> Enter the name of the company where the consultant worked.</li>
                    <li><strong>State:</strong> Choose the state where the company is located.</li>
                    <li><strong>City:</strong> Enter the city of the company’s location.</li>
                    <li><strong>Start Date:</strong> Select the date the consultant started working at the company.</li>
                    <li><strong>End Date:</strong> Select the date the consultant ended their work at the company.</li>
                </ul>
                <p className="description">
                    To modify or remove existing work experience, click the <strong>Actions</strong> button next to the entry.
                </p>

                {/* Step 4: Update Skill Set */}
                <h3 className="section-heading">Step 4: Update Skill Set</h3>
                <p className="description">
                    In the <strong>Skill Set</strong> section, click <strong>Add Skill</strong> to add a new skill:
                </p>
                <ul className="details-list">
                    <li><strong>S.No:</strong> The serial number will be auto-generated.</li>
                    <li><strong>Skill Name:</strong> Enter the name of the skill (e.g., Data Analysis, Project Management).</li>
                    <li><strong>Rating:</strong> Rate the skill on a scale (e.g., 1 to 5 stars).</li>
                    <li><strong>Version:</strong> Optionally, enter the version of the tool or skill (if applicable).</li>
                </ul>
                <p className="description">
                    To modify or remove existing skills, click the <strong>Actions</strong> button next to the entry.
                </p>

                {/* Step 5: Upload Resume */}
                <h3 className="section-heading">Step 5: Upload Resume</h3>
                <p className="description">
                    In the <strong>Resume</strong> section, click <strong>Click to select a PDF file</strong> or drag and drop the PDF resume. Ensure the resume is in PDF format for upload. Verify the details to ensure they are correct.
                </p>

                {/* Step 6: Update User Details */}
                <h3 className="section-heading">Step 6: Update User Details</h3>
                <p className="description">
                    To update the user’s personal information, enter the following in the <strong>User Details</strong> section:
                </p>
                <ul className="details-list">
                    <li><strong>First Name:</strong> Enter the consultant’s first name (e.g., Edward).</li>
                    <li><strong>Last Name:</strong> Enter the consultant’s last name (e.g., Livingston).</li>
                    <li><strong>Phone Number:</strong> Enter the consultant’s phone number (e.g., +91 77024 43766).</li>
                    <li><strong>WhatsApp Number:</strong> Enter the consultant’s WhatsApp number (e.g., +91 77024 43766).</li>
                    <li><strong>Experience:</strong> Enter the consultant’s total work experience (e.g., Enter Here).</li>
                    <li><strong>Job Role:</strong> Select or type to search the consultant’s job role.</li>
                </ul>

                {/* Step 7: Save Changes */}
                <h3 className="section-heading">Step 7: Save Changes</h3>
                <p className="description">
                    After updating all the sections, click <strong>Save</strong> to apply the changes to the consultant’s profile.
                </p>

                {/* Step 8: Cancel Changes */}
                <h3 className="section-heading">Step 8: Cancel Changes (If Needed)</h3>
                <p className="description">
                    If you do not wish to save any changes, click <strong>Cancel</strong> to exit without saving.
                </p>

                {/* Notes Section */}
                <h3 className="section-heading">Notes:</h3>
                <ul className="notes-list">
                    <li><strong>Educational Details:</strong> Ensure all educational information is accurate and current.</li>
                    <li><strong>Work Experience:</strong> Add relevant work history that reflects the consultant's qualifications.</li>
                    <li><strong>Skill Set:</strong> Rate each skill based on proficiency to provide a clear view of the consultant’s abilities.</li>
                    <li><strong>User Details:</strong> Update the personal information carefully to ensure all contact details are up-to-date.</li>
                    <li><strong>Resume:</strong> Upload the most up-to-date resume for the consultant in PDF format.</li>
                </ul>

                {/* Contact Support */}
                <h3 className="section-heading">Facing Issues?</h3>
                <p className="description">
                    If you are facing any issues, please reach us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
                </p>
            </div>
        </div>
    );
};

export default AdminProfile;
