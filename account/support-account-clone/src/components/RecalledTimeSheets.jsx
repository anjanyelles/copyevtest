import React from 'react';
import './RecalledTimeSheets.css'; // Import the CSS file for styles

const RecalledTimeSheets = () => {
    return (
        <div className="recalled-time-sheets-container">
            <div className="content-section">
                <h2 className="main-heading">Recalled Time Sheets</h2>
                <p className="description">
                    This section displays timesheets that employees have recalled due to errors or changes required in the submission. 
                    Recalled timesheets are returned to the employee for corrections and resubmission.
                </p>

                <h4 className="section-heading">Recalled Sheets</h4>
                <div className="table-wrapper">
                    <table className="recalled-sheets-table">
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
                                <td>T0022449</td>
                                <td>Vishwa Tejaaaa</td>
                                <td>2024-12-01 / 2024-12-07</td>
                                <td>35.0</td>
                                <td>Samsung</td>
                                <td>IBM</td>
                                <td>Recall Requested</td>
                                <td>Timesheet ...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="closing-text">
                    Employees can recall timesheets when they detect errors or need to make adjustments. Recalled timesheets are returned for corrections and must be resubmitted for approval.
                </p>
            </div>
        </div>
    );
};

export default RecalledTimeSheets;
