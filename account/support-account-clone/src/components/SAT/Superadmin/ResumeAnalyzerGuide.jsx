import React from 'react';

const ResumeAnalyzerGuide = () => {
    return (
        <div className="resume-analyzer-container">
            <div className="content-section">
                <h2 className="main-heading">How to Use the AI Resume Analyzer</h2>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Log in to Your Site's Super Admin Dashboard</h3>
                <p className="description">
                    Open your web browser and visit your site’s Super Admin login page. Enter your <strong>Username</strong> and <strong>Password</strong>. Click the <strong>Login</strong> button to access the dashboard.
                </p>

                {/* Step 2 */}
                <h3 className="step-heading">Step 2: Navigate to Resume Analyzer</h3>
                <p className="description">
                    After logging in, you will see the Dashboard menu on the left-hand side of the screen. Look for the <strong>Resume Builder</strong> section in the menu. Click to expand it, and select <strong>Resume Analyzer</strong>.
                </p>

                {/* Step 3 */}

                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014207/1_tw2m1l.png"
        alt="Resume Analyzer"
        className="placeholder-image image_gatnix_support"
      />
                <h3 className="step-heading">Step 3: Input Job Role & Description</h3>
                <p className="description">
                    In the Resume Analyzer section, enter the <strong>Job Role</strong> in the provided field. Then, paste the <strong>Job Description</strong> or skills into the <strong>Description</strong> box.
                </p>
                

                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Analyze Job Description</h3>
                <p className="description">
                    Click the <strong>Analyze Job Description</strong> button to process the input and generate relevant keywords for the job description.
                </p>
                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014207/3_w1oouv.png"
        alt="Resume Analyzer"
        className="placeholder-image image_gatnix_support"
      />

                {/* Step 5 */}
                <h3 className="step-heading">Step 5: JD Keywords Analyzer</h3>
                <p className="description">
                    This section will generate a list of keywords based on the job description. Keywords like <strong>ATS</strong>, <strong>real-time</strong>, and <strong>scenario-based</strong> will be displayed.
                </p>
                <p className="description">
                    You can drag and drop these keywords to the Resume Editor on the right side. A <strong>Regenerate</strong> button allows you to refresh the keyword suggestions at any time.
                </p>





                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014205/4_v0gkdw.png"
        alt="Resume Analyzer"
        className="placeholder-image image_gatnix_support"
      />
                {/* Step 6 */}
                <h3 className="step-heading">Step 6: Resume Keywords Analyzer</h3>
                <p className="description">
                    In this section, you can analyze the uploaded or typed resume for missing or relevant keywords. Suggested keywords will be shown, similar to the JD Keywords Analyzer.
                </p>
                <p className="description">
                    These keywords can be dragged and dropped into the Resume Editor to optimize the resume.
                </p>

                {/* Step 7 */}
                <h3 className="step-heading">Step 7: Dynamic Points Regeneration</h3>
                <p className="description">
                    Both the JD and Resume analyzers generate dynamic points related to specific areas:
                </p>
                <ul className="details-list">
                    <li><strong>ATS Compatibility:</strong> Keywords ensuring the resume is ATS-friendly.</li>
                    <li><strong>Real-Time Experience:</strong> Keywords related to real-time tasks or projects.</li>
                    <li><strong>Scenario-Based Skills:</strong> Keywords demonstrating problem-solving or use-case handling skills.</li>
                </ul>

                {/* Step 8 */}
                <h3 className="step-heading">Step 8: Integration with Resume Editor</h3>
                <p className="description">
                    The Resume Editor on the right side allows you to drag and drop keywords from both the JD and Resume analyzers into specific sections of the resume.
                </p>
                <p className="description">
                    Once dropped, the keywords will be automatically highlighted or added to the relevant sections in the Resume Editor. The format may also auto-adjust for seamless integration.
                </p>

                {/* Step 9 */}
                <h3 className="step-heading">Step 9: Update Analyze Buttons</h3>
                <p className="description">
                    After clicking the <strong>Analyze Job Description</strong> or <strong>Analyze Resume</strong> buttons, the system will identify keywords already present in the text and suggest new ones.
                </p>

                {/* Example Workflow */}
                <h3 className="help-heading">Example Interface Workflow</h3>
                <p className="description">
                    On the left side, the JD Keywords Analyzer will generate keywords like <strong>ATS</strong>, <strong>real-time</strong>, and <strong>scenario-based</strong>. You can drag these keywords into the Resume Editor on the right side.
                </p>
                <p className="description">
                    The Resume Editor allows you to drop the keywords into the text or highlighted sections. The formatting will adjust automatically for a smooth experience.
                </p>

                {/* Step 10 */}
                <h3 className="step-heading">Step 10: Regenerate and Analyze Again</h3>
                <p className="description">
                    Use the <strong>Regenerate</strong> button to refresh the suggestions in both JD and Resume analyzers. This will provide you with updated keywords for each.
                </p>

                {/* Step 11 */}


                <img
        src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014205/4_v0gkdw.png"
        alt="Resume Analyzer"
        className="placeholder-image image_gatnix_support"
      />
                <h3 className="step-heading">Step 11: Download the Edited Resume</h3>
                <p className="description">
                    Once you are satisfied with the changes, click the <strong>Download</strong> button to save the edited resume as a Word file.
                </p>

                {/* Need Help Section */}
                <h3 className="help-heading">Need Help?</h3>
                <p>
        If you encounter any issues, please reach out to our Help Desk or
        contact us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
      </p>
            </div>
        </div>
    );
};

export default ResumeAnalyzerGuide;
