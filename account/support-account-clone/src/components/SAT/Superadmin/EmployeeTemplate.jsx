import React from 'react';
// import './TemplateSettings.css'; // Import the corresponding CSS file for styling

const EmployeeTemplate = () => {
    return (
        <div className="template-settings-container">
            <div className="content-section">
                <h2 className="main-heading">Template Settings: Customize Your Resume for Better Match Results</h2>
                <h3 className="sub-heading">
                    How Can You Adjust Template Settings to Optimize Resume Matching?
                </h3>
                <p className="description">
                    To fine-tune your resume template for optimal matching with job descriptions, follow these simple steps:
                </p>

                {/* Matching Keyword Points Section */}
                <h4 className="section-heading">Matching Keyword Points</h4>
                <p className="description">
                    View and adjust the points assigned to matching keywords, ensuring your resume aligns with the most relevant job criteria.
                </p>

                {/* Summary Points Section */}
                <h4 className="section-heading">Summary Points</h4>
                <p className="description">
                    Edit the points given to your resume summary to highlight key strengths and experience.
                </p>

                {/* Experience Points Section */}
                <h4 className="section-heading">Experience Points</h4>
                <p className="description">
                    Modify the points for work experience to reflect the depth and relevance of your skills.
                </p>

                <img
                    src="  https://res.cloudinary.com/danfpnuui/image/upload/v1737635507/WhatsApp_Image_2025-01-23_at_5.52.17_PM_rossfc.jpg"
                    alt="Resume Template Customization"
                    className="placeholder-image 
 image_gatnix_support"
                />
            </div>
        </div>
    );
};

export default EmployeeTemplate;
