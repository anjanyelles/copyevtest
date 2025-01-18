import React from "react";

const AssignLicensesToConsultant = () => {
  return (
    <div className="assign-licenses-container">
      <div className="content-section">
        <h2 className="main-heading">Assign Licenses to a Consultant</h2>
        <p>Follow these steps to efficiently assign licenses to a consultant:</p>

        <ol className="steps-list">
          <li>
            <h3>Step 1: Locate the Consultant</h3>
            <ul>
              <li>Navigate to the <strong>Consultants</strong> section of the platform.</li>
              <li>
                Use the <strong>search bar</strong> to find the consultant by their name or email.
              </li>
              <li>Click on the consultant’s profile to view their details.</li>
            </ul>
          </li>


<img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014077/Consultant-5_hvzvz9.png"   alt="image_lincence"  className="placeholder-image image_gatnix_support" />
          <li>
            <h3>Step 2: Access License Assignment</h3>
            <ul>
              <li>Click on <strong>Assign Licenses</strong> to proceed.</li>
              <li>
                This action will navigate you to the <strong>Billing Users</strong> section.
              </li>
              <li>
                Select the consultant from the list and click on their name to open the <strong>User Information</strong> page.
              </li>
            </ul>
          </li>

          <li>
            <h3>Step 3: Assign Licenses</h3>
            <ul>
              <li>
                In the <strong>User Information</strong> view, locate the <strong>Assigned Licenses</strong> section.
              </li>
              <li>Click on the section to expand and view the available licenses.</li>
              <li>
                Check the box next to the license(s) you want to assign to the consultant.
              </li>
            </ul>
          </li>


          <img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014076/Consultant-6_lixz2q.png"   alt="image_lincence"  className="placeholder-image image_gatnix_support" />
          <li>
            <h3>Step 4: Save the Changes</h3>
            <ul>
              <li>
                After selecting the desired license(s), click <strong>Save</strong> to confirm the changes.
              </li>
              <li>
                A confirmation message will appear:  
                <blockquote className="confirmation-message">
                  "0 out of 0 licenses assigned."
                </blockquote>
                This indicates that no licenses were assigned previously and confirms the process is underway.
              </li>
            </ul>
          </li>

          <li>
            <h3>Step 5: Cancel License Assignment (Optional)</h3>
            <ul>
              <li>
                If you decide not to assign any licenses, click <strong>Cancel</strong> to exit without saving changes.
              </li>
            </ul>
          </li>
        </ol>

        <div className="notes-section">
          <h3>Notes:</h3>
          <ul>
            <li>
              <strong>Assigned Licenses:</strong> Only available licenses will be displayed in the "Assigned Licenses" section. Ensure you have the required licenses before starting the assignment process.
            </li>
            <li>
              <strong>Consultant Profile:</strong> Verify the consultant’s profile and permissions to ensure proper access and license assignment.
            </li>
            <li>
              <strong>Support:</strong> For any issues or further assistance, please contact support.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssignLicensesToConsultant;
