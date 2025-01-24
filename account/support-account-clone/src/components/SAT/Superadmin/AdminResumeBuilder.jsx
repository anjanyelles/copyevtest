import React from 'react';

const AdminResumeBuilder = () => {
    return (
        <div className="resume-builder-container">
            <div className="content-section">
                <h2 className="main-heading">AI Resume Builder: Step-by-Step Guide</h2>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Access the Resume Builder</h3>
                <p className="description">
                    Locate the <strong>Resume Builder</strong> option in the left-side menu. Click on it to open the Resume Builder interface.
                </p>

                {/* Step 2 */}
                <h3 className="step-heading">Step 2: Import Resume</h3>
                <p className="description">
                    To import your resume, click on <strong>Import Resume</strong>.
                </p>

                <img
        src=" https://res.cloudinary.com/danfpnuui/image/upload/v1737628069/Resume_Builder-1_ugu3df.png"
        alt="Import Resume"
        className="placeholder-image image_gatnix_support"
      />
                <p className="description">
                    Drag and drop your <strong>PDF</strong> file into the designated area. The uploaded details will automatically populate the form fields.
                </p>

                {/* Step 3 */}
                <h3 className="step-heading">Step 3: Fill in Personal Information</h3>
                <p className="description">
                    In the <strong>Personal Info</strong> section, provide the following details:
                </p>
                <ul className="details-list">
                    <li><strong>Full Name:</strong> Enter your name.</li>
                    <li><strong>Job Title:</strong> Specify your desired job title (e.g., Web Developer).</li>
                    <li><strong>Location:</strong> Enter your location (City and Country).</li>
                    <li><strong>Your Email:</strong> Provide your email address.</li>
                    <li><strong>LinkedIn URL:</strong> Enter your LinkedIn profile link.</li>
                    <li><strong>Phone Number:</strong> Include your phone number with country code (e.g., +1).</li>
                </ul>

                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Add Experiences</h3>
                <p className="description">
                    In the <strong>Add Experiences</strong> section, fill in the following:
                </p>
                <ul className="details-list">
                    <li><strong>Title:</strong> Job title (e.g., Java Developer).</li>
                    <li><strong>Company:</strong> Employer name (e.g., LLTOverseas).</li>
                    <li><strong>City and Country:</strong> Specify the location of the company.</li>
                    <li><strong>From and To Dates:</strong> Enter the start and end dates in dd-mm-yyyy format.</li>
                    <li><strong>Check "I currently work here":</strong> If still employed.</li>
                    <li><strong>Choose Expertise:</strong> Click <strong>Choose Expertise</strong> to select skills relevant to this experience.</li>
                    <li><strong>Regenerate Skills:</strong> Use this feature to generate suggested skills dynamically.</li>
                    <li><strong>Add Multiple Experiences:</strong> To add another experience, click <strong>Add Experiences</strong>.</li>
                </ul>

                {/* Step 5 */}
                <h3 className="step-heading">Step 5: Add Summary</h3>
                <p className="description">
                    In the <strong>Add Summary</strong> section, enter a brief summary of your skills and experience.
                </p>
                <p className="description">
                    You can click the <strong>Regenerate Summary</strong> button to auto-generate suggestions based on your inputs.
                </p>

                {/* Step 6 */}
                <h3 className="step-heading">Step 6: Add Education</h3>
                <p className="description">
                    In the <strong>Add Educations</strong> section, provide the following details:
                </p>
                <ul className="details-list">
                    <li><strong>Field of Study:</strong> Specify your area of study (e.g., Computer Science).</li>
                    <li><strong>Degree:</strong> Enter your degree (e.g., Bachelor’s).</li>
                    <li><strong>Institution:</strong> Provide the name of your institution.</li>
                    <li><strong>Percentage/Grade:</strong> Enter your score or grade.</li>
                    <li><strong>From and To Dates:</strong> Enter the start and end dates in dd-mm-yyyy format.</li>
                    <li><strong>Add More Education:</strong> You can add additional degrees or certifications.</li>
                </ul>

                {/* Step 7 */}
                <h3 className="step-heading">Step 7: Finalizing the Resume</h3>
                <p className="description">
                    After filling in all the sections, a preview of your resume will be displayed.
                </p>
                <p className="description">
                    You can edit your resume by clicking the resume header to make inline edits. Click anywhere on the resume to edit other sections as well.
                </p>
                <p className="description">
                    Once satisfied, you can save your resume or download it as needed.
                </p>

                {/* Key Features */}
                <h3 className="help-heading">Key Features</h3>
                <ul className="details-list">
                    <li><strong>Drag and Drop:</strong> Move elements like skills or points into specific resume sections.</li>
                    <li><strong>Regeneration Options:</strong> Dynamically generate new skills, summaries, or points to match the job description.</li>
                    <li><strong>Multiple Edits:</strong> Add or edit multiple experiences, skills, or education entries.</li>
                </ul>
                <p>
          If you encounter any issues, please reach out to our Help Desk or contact us at{" "}
          <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
        </p>
            </div>
        </div>
    );
};

export default AdminResumeBuilder;
