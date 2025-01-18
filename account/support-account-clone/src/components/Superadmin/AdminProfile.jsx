import React from "react";

const AdminProfile = () => {
  return (
    <div className="admin-profile-container">
      <div className="content-section">
        <h2 className="main-heading">Admin Profile</h2>
        <p>Follow the steps below to manage and update a consultant's profile:</p>

        <ol className="steps-list">
          <li>
            <h3>1. Navigate to the Consultant Profile</h3>
            <ul>
              <li>Open the <strong>Consultants</strong> section.</li>
              <li>Use the <strong>search bar</strong> to find the consultant by name or email.</li>
              <li>Click on the consultant’s profile to view their details.</li>
            </ul>
          </li>

          <li>
            <h3>2. Update Educational Details</h3>
            <p>To add new educational details:</p>
            <ul>
              <li>Click <strong>Add Education</strong>.</li>
              <li>Fill in the following fields:</li>
              <ul>
                <li><strong>Education Establishment:</strong> Name of the institution.</li>
                <li><strong>Education Level:</strong> Level of education (e.g., Bachelor's, Master's).</li>
                <li><strong>Start Date:</strong> Date the education started.</li>
                <li><strong>End Date:</strong> Date the education ended.</li>
                <li><strong>Location:</strong> Location of the institution.</li>
              </ul>
              <li>
                To modify or remove existing educational details, click the <strong>Actions</strong> button next to the entry.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Update Work Experience</h3>
            <p>To add new work experience:</p>
            <ul>
              <li>Click <strong>Add Work Experience</strong>.</li>
              <li>Fill in the following fields:</li>
              <ul>
                <li><strong>Job Title:</strong> The consultant’s job title.</li>
                <li><strong>Company:</strong> The name of the company.</li>
                <li><strong>State:</strong> The state where the company is located.</li>
                <li><strong>City:</strong> The city of the company’s location.</li>
                <li><strong>Start Date:</strong> Start date of the job.</li>
                <li><strong>End Date:</strong> End date of the job.</li>
              </ul>
              <li>
                To modify or remove existing work experience, click the <strong>Actions</strong> button next to the entry.
              </li>
            </ul>
          </li>

          <li>
            <h3>4. Update Skill Set</h3>
            <p>To add new skills:</p>
            <ul>
              <li>Click <strong>Add Skill</strong>.</li>
              <li>Fill in the following fields:</li>
              <ul>
                <li><strong>S.No:</strong> Auto-generated serial number.</li>
                <li><strong>Skill Name:</strong> Name of the skill (e.g., Data Analysis).</li>
                <li><strong>Rating:</strong> Proficiency rating (e.g., 1-5 stars).</li>
                <li><strong>Version:</strong> Version of the skill/tool (if applicable).</li>
              </ul>
              <li>
                To modify or remove existing skills, click the <strong>Actions</strong> button next to the entry.
              </li>
            </ul>
          </li>

          <li>
            <h3>5. Upload Resume</h3>
            <ul>
              <li>Click <strong>Click to select</strong> or drag and drop a PDF file into the Resume section.</li>
              <li>Ensure the resume is in <strong>PDF format</strong>.</li>
              <li>Verify the uploaded file to ensure the details are correct.</li>
            </ul>
          </li>

          <li>
            <h3>6. Update User Details</h3>
            <ul>
              <li>In the <strong>User Details</strong> section, update the following fields:</li>
              <ul>
                <li><strong>First Name:</strong> Consultant’s first name.</li>
                <li><strong>Last Name:</strong> Consultant’s last name.</li>
                <li><strong>Phone Number:</strong> Consultant’s phone number.</li>
                <li><strong>WhatsApp Number:</strong> Consultant’s WhatsApp number.</li>
                <li><strong>Experience:</strong> Total work experience.</li>
                <li><strong>Job Role:</strong> Select or type the job role.</li>
              </ul>
              <li>
                To modify or remove existing details, click the <strong>Actions</strong> button next to the entry.
              </li>
            </ul>
          </li>

          <li>
            <h3>7. Save Changes</h3>
            <p>After updating all sections, click <strong>Save</strong> to apply changes to the consultant’s profile.</p>
          </li>

          <li>
            <h3>8. Cancel Changes (If Needed)</h3>
            <p>If you do not wish to save any changes, click <strong>Cancel</strong> to exit without saving.</p>
          </li>
        </ol>

        <div className="notes-section">
          <h3>Notes:</h3>
          <ul>
            <li><strong>Educational Details:</strong> Ensure all educational information is accurate and current.</li>
            <li><strong>Work Experience:</strong> Add relevant work history that reflects the consultant's qualifications.</li>
            <li><strong>Skill Set:</strong> Rate each skill based on proficiency.</li>
            <li><strong>User Details:</strong> Update personal information carefully to ensure contact details are up-to-date.</li>
            <li><strong>Resume:</strong> Upload the most current resume in PDF format.</li>
          </ul>
        </div>

        <div className="support-section">
          <p>
            For any issues or further assistance, please reach us at{" "}
            <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
