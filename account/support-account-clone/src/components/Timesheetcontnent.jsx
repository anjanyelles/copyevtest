import React from 'react';


const Timesheetcontnent = () => {
    return (
        <div className="timesheet-container">
            <div className="content-section">
                <h2 className="main-heading">Timesheet Management Made Simple</h2>
                <h3 className="sub-heading">
                    Streamline Timesheet Submissions and Approvals
                </h3>
                <p className="description">
                    Timesheets are crucial for payroll, tracking hours, and ensuring compliance with labor laws. However, chasing employees for timely submissions can be frustrating. 
                    Clear and professional emails for timesheet approvals can prevent delays and keep everything on track.
                </p>

                <h4 className="section-heading">What This Guide Covers</h4>
                <ul className="list">
                    <li>
                        <strong>Timesheet Submission Emails and Reminders:</strong> Practical tips and templates to request timely submissions.
                    </li>
                    <li>
                        <strong>How to Write Emails for Requests, Reminders, and Approvals:</strong> Guidance on crafting effective and professional communication.
                    </li>
                    <li>
                        <strong>Common Mistakes to Avoid:</strong> Learn about typical pitfalls in timesheet management and how to steer clear of them.
                    </li>
                </ul>

                <p className="closing-text">
                    Whether you're a manager approving timesheets or an HR professional processing them, effective communication plays a vital role in ensuring smooth operations. 
                    Use our advice and templates to stay ahead of the curve!
                </p>

                <img 
                    src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737029075/Screenshot_2025-01-16_at_5.34.26_PM_v8egtt.png" 
                    alt="Timesheet Management" 
                    className="placeholder-image 
 image_gatnix_support"
                />
            </div>
        </div>
    );
};

export default Timesheetcontnent;
