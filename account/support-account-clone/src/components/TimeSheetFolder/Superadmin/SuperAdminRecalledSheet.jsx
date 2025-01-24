import React from 'react';
import './SuperAdminRecalledSheet.css'; // Import the CSS file for styles

const SuperAdminRecalledSheet = () => {
    return (
        <div className="view-approved-sheets-container">
            <div className="content-section">
                <h2 className="main-heading">Recalled Time Sheets</h2>
                <p className="description">
                    This section displays all the timesheets that have been Recalled by the approval manager or superadmin . 
                    Only the records that have passed through the entire approval process are visible here for tracking and review.
                </p>

                <h4 className="section-heading">Recalled Sheets</h4>
                <div className="table-wrapper">
                    <table className="approved-sheets-table">
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
                                <td>T0022450</td>
                                <td>Vishwa Tejaaaa</td>
                                <td>2024-12-08 / 2024-12-14</td>
                                <td>35.0</td>
                                <td>Samsung</td>
                                <td>IBM</td>
                                <td>Recalled</td>
                                <td>Rejected</td>
                            </tr>
                            <tr>
                                <td>T0022451</td>
                                <td>Vishwa Tejaaaa</td>
                                <td>2024-12-15 / 2024-12-21</td>
                                <td>35.0</td>
                                <td>Samsung</td>
                                <td>IBM</td>
                                <td>Recalled</td>
                                <td>Approved</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img
                className="placeholder-image image_gatnix_support"
                src="  https://res.cloudinary.com/danfpnuui/image/upload/v1737466110/Screenshot_2025-01-21_153311_dv9wer.png"
                alt="Employee Table Screenshot"
            />
                <p className="closing-text">
                    The above table provides a detailed summary of all recalled timesheets, including the approval status and any comments provided by the approvers.
                </p>
            </div>
        </div>
    );
};

export default SuperAdminRecalledSheet;
