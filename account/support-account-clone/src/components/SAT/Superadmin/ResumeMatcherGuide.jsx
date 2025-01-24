import React from 'react';

const ResumeMatcherGuide = () => {
    return (
        <div className="resume-matcher-container">
            <div className="content-section">
                <h2 className="main-heading">AI Resume Matcher: Match Your Resume for Any Job Description</h2>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Paste Job Description</h3>
                <p className="description">
                    Locate the <strong>Paste JD Here</strong> section in the AI Resume Matcher interface. Paste the job description or skills required for the job in the provided text box.
                </p>

                {/* Step 2 */}
                <h3 className="step-heading">Step 2: Upload and Analyze</h3>
                <p className="description">
                    Click the <strong>Upload</strong> button to upload your saved resume. The system will then analyze your resume against the job description.
                </p>

                {/* Step 3 */}
                <h3 className="step-heading">Step 3: View Matched and Unmatched Skills</h3>
                <p className="description">
                    The system will display the skills from your resume and compare them with the job description:
                </p>
                <ul className="details-list">
                    <li><strong>Matched Skills:</strong> Skills and experience points in your resume that match the job description.</li>
                    <li><strong>Unmatched Skills:</strong> Skills from the job description that are not found in your resume.</li>
                </ul>
                <p className="example">
                    Example:
                </p>
                <ul className="example-list">
                    <li><strong>Matched Skills (1/1):</strong> Java</li>
                    <li><strong>Unmatched Skills:</strong> Select All (Checkbox)</li>
                </ul>

                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Select Unmatched Skills</h3>
                <p className="description">
                    Click the checkbox for <strong>Select All</strong> or manually select specific unmatched skills to integrate into your resume.
                </p>

                {/* Step 5 */}
                <h3 className="step-heading">Step 5: Match Resume to Job Description</h3>
                <p className="description">
                    Click the <strong>Match Resume to JD</strong> button. The system will navigate to a Keywords Details screen where you can view a pie chart representation showing:
                </p>
                <ul className="details-list">
                    <li><strong>Matched Keywords:</strong> Percentage and Count.</li>
                    <li><strong>Unmatched Keywords:</strong> Percentage and Count.</li>
                </ul>

                {/* Step 6 */}
                <h3 className="step-heading">Step 6: Update and Customize</h3>
                <p className="description">
                    <strong>Edit Resume Content:</strong> Click on the resume header or any section to modify content.
                </p>
                <p className="description">
                    <strong>Finalize Resume:</strong> Ensure all matched and selected unmatched skills are incorporated into your resume.
                </p>

                {/* Step 7 */}
                <h3 className="step-heading">Step 7: Download Resume</h3>
                <p className="description">
                    Once satisfied with the updates, download your resume in <strong>Word</strong> or <strong>PDF</strong> format.
                </p>

                {/* Template Settings */}
                <h3 className="help-heading">Template Settings</h3>
                <p className="description">
                    Customize your resume presentation using the following options:
                </p>
                <ul className="details-list">
                    <li><strong>Matching Keywords Count:</strong> Select the number of keywords to display (1–5).</li>
                    <li><strong>Summary Points Placement:</strong> Choose the placement of your summary points:
                        <ul>
                            <li><strong>Top:</strong> Placed at the beginning.</li>
                            <li><strong>Random:</strong> Distributed throughout.</li>
                            <li><strong>Bottom:</strong> Placed at the end.</li>
                        </ul>
                    </li>
                    <li><strong>Experience Points Placement:</strong> Decide where your experience points should appear:
                        <ul>
                            <li><strong>Top:</strong> Highlighted at the start.</li>
                            <li><strong>Random:</strong> Scattered randomly.</li>
                            <li><strong>Bottom:</strong> Positioned at the conclusion.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ResumeMatcherGuide;
