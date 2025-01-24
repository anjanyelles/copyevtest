import React from 'react';
import './ApprovalManagerRecalled.css'; // Import the CSS file for styles

const ApprovalManagerRecalled = () => {
    return (
        <div className="rejected-time-sheets-container">
            <div className="content-section">
                <h2 className="main-heading">Recalled Time Sheets</h2>
                <p className="description">
                    This section displays timesheets that have been Recalled by the approval manager or the super admin due to issues in the submission. Employees can review the comments to correct and resubmit their timesheets.
                </p>

                <h4 className="section-heading">Recalled Sheets</h4>
                
                {/* Wrapper to enable horizontal scroll */}
                <div className="table-wrapper">
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
                </div>
                <img
                className="placeholder-image image_gatnix_support"
                src="  https://res.cloudinary.com/danfpnuui/image/upload/v1737459249/WhatsApp_Image_2025-01-21_at_4.39.59_PM_vsretj.jpg "
                alt="Employee Table Screenshot"
            />
            </div>
        </div>
    );
};

export default ApprovalManagerRecalled;

