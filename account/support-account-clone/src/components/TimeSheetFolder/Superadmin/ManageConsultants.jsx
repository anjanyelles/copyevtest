import React from 'react';


const ManageConsultants = () => {
    return (
        <div className="manage-consultants-container">
            <div className="content-section">
                <h2 className="main-heading">Managing Consultants in Super Admin</h2>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Access the Employer Module</h3>
                <p className="description">
                    Navigate to the left-side menu on your dashboard. Click on the <strong>Consultant</strong> option to proceed.
                </p>

                {/* Step 2 */}
                <h3 className="step-heading">Step 2: Open the Consultant Page</h3>
                <p className="description">
                    Clicking on <strong>Consultant</strong> will redirect you to the Consultant Page. On this page, you can view, add, or update consultant details.
                </p>
                <img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736926549/Screenshot_2025-01-15_at_1.04.43_PM_kw0owc.png" alt="SAT Report Generation" class="image_gatnix_support" />
                {/* Step 3 */}
                <h3 className="step-heading">Step 3: Add a New Consultant</h3>
                <p className="description">
                    Locate the <strong>Add Button</strong> on the right-hand side of the Consultant Page. Click it to open the consultant entry form.
                </p>

                <img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736926550/Screenshot_2025-01-15_at_1.04.55_PM_oclj84.png" alt="SAT Report Generation" class="image_gatnix_support" />
                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Fill in Consultant Details</h3>
                <ul className="details-list">
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Email ID</li>
                    <li>Password</li>
                    <li>Managing Admin Information</li>
                    <li>Consultant's Mobile Number</li>
                    <li>Consultant's WhatsApp Number</li>
                </ul>
                <p className="description">After entering the details, click <strong>Save</strong> to add the consultant to the system.</p>

                {/* Step 5 */}
                <h3 className="step-heading">Step 5: Add Educational Details</h3>
                <p className="description">
                    Scroll to the <strong>Educational Details</strong> section. Click the <strong>Add Button</strong> and provide the following details:
                </p>
                <ul className="details-list">
                    <li>Education Establishment</li>
                    <li>Education Level</li>
                    <li>Start Date</li>
                    <li>End Date</li>
                    <li>Location</li>
                </ul>
                <p className="description">Save the educational details by clicking <strong>Save</strong>.</p>
                <img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736928364/Screenshot_2025-01-15_at_1.08.36_PM_fr0tzi.png" alt="SAT Report Generation" class="image_gatnix_support" />
                {/* Step 6 */}
                <h3 className="step-heading">Step 6: Add Job Details</h3>
                <p className="description">
                    Navigate to the <strong>Job Details</strong> section and enter the following information:
                </p>
                <ul className="details-list">
                    <li>Job Title</li>
                    <li>Company Name</li>
                    <li>State</li>
                    <li>City</li>
                    <li>Start Date (dd-mm-yyyy)</li>
                    <li>End Date (if applicable, dd-mm-yyyy)</li>
                    <li>Description</li>
                </ul>
                <p className="description">Save the job details by clicking <strong>Save</strong>.</p>

                {/* Step 7 */}
                <h3 className="step-heading">Step 7: Add Skill Set</h3>
                <p className="description">
                    Go to the <strong>Skill Set</strong> section. Click <strong>Add Skill</strong> and provide the following details:
                </p>
                <ul className="details-list">
                    <li>Skill Name</li>
                    <li>Rating</li>
                    <li>Version</li>
                </ul>
                <p className="description">Save the skill details by clicking <strong>Save</strong>.</p>

                {/* Step 8 */}
                <h3 className="step-heading">Step 8: Review Employer and Admin Details</h3>
                <p className="description">
                    Review the automatically generated fields under <strong>Employer Details</strong> and <strong>Admin Details</strong>, such as:
                </p>
                <ul className="details-list">
                    <li>Managing Employer</li>
                    <li>Email</li>
                    <li>Phone</li>
                    <li>Managing Admin</li>
                </ul>

                {/* Image Section */}
                <img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1736926550/Screenshot_2025-01-15_at_1.04.55_PM_oclj84.png" alt="SAT Report Generation" class="image_gatnix_support" />

                <p className="help-text">
                    This guide ensures a seamless process for managing consultants in the Employer Module. For additional help, contact the <strong>Help Desk</strong>.
                </p>
            </div>
        </div>
    );
};

export default ManageConsultants;
