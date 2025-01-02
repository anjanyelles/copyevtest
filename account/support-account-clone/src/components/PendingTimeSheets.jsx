import React from 'react';
import './PendingTimeSheets.css'; // Import the CSS file for styles

const PendingTimeSheets = () => {
    return (
        <div className="pending-time-sheets-container">
            <div className="content-section">
                <h2 className="main-heading">Pending Time Sheets</h2>
                <p className="description">
                    This section displays timesheets that are currently in a pending state. When an employee submits a timesheet, it enters the pending state until approved by the approval manager or super admin. 
                    Review and take the necessary actions promptly to avoid delays.
                </p>

                <h4 className="section-heading">Pending Sheets</h4>
                <table className="pending-sheets-table">
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
        </div>
    );
};

export default PendingTimeSheets;
