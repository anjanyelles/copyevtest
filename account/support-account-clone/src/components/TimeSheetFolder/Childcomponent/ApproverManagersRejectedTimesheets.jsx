import React from 'react';
import './RejectedTimesheetss.css'; // Correct filename
 // Import the CSS file for styles

const ApproverManagersRejectedTimesheets =()=>{
    return (
        <div className="rejected-time-sheets-container">
            <div className="content-section">
                <h2 className="main-heading">Rejected Time Sheets</h2>
                <p className="description">
                    This section displays timesheets that have been rejected by the approval manager or the super admin due to issues in the submission. Employees can review the comments to correct and resubmit their timesheets.
                </p>

                <h4 className="section-heading">Rejected Sheets</h4>
                <table className="rejected-sheets-table">
                    <thead>
                        <tr>
                            <th>T.ID</th>
                            <th>Employee Name</th>
                            <th>Period</th>
                            <th>Total Hours</th>
                            <th>Client</th>
                            <th>End Client</th>
                            <th>Status</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="8" className="no-data">
                                No data available
                            </td>
                        </tr>
                    </tbody>
                </table>

                <img 
                    src="https://res.cloudinary.com/danfpnuui/image/upload/v1737357379/Rejected_sheets-3_a32w4o.png"
                    alt="Submitted Sheets Overview" 
                    className="placeholder-image"
                />
            </div>
        </div>
    );
};

export default ApproverManagersRejectedTimesheets
