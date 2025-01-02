import React from 'react';


const ViewSubmittedSheets = () => {
    return (
        <div className="view-submitted-sheets-container">
            <div className="content-section">
                <h2 className="main-heading">View Submitted Sheets</h2>
                <h3 className="sub-heading">Easily Access and Review Submitted Sheets</h3>
                <p className="description">
                    Keep track of all submitted sheets in one place. This table displays details of the submissions for easy review and follow-up.
                </p>

                <h4 className="section-heading">Submitted Sheets</h4>
                <table className="submitted-sheets-table"  >
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Date</th>
                            <th>Consultant</th>
                            <th>Role</th>
                            <th>Vendor Email</th>
                            <th>Pay Rate</th>
                            <th>Client</th>
                            <th>Phone No</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2025-01-01</td>
                            <td>John Doe</td>
                            <td>Consultant</td>
                            <td>johndoe@email.com</td>
                            <td>$500</td>
                            <td>Company XYZ</td>
                            <td>+1234567890</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2025-01-02</td>
                            <td>Jane Smith</td>
                            <td>Developer</td>
                            <td>janesmith@email.com</td>
                            <td>$700</td>
                            <td>Company ABC</td>
                            <td>+9876543210</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2025-01-03</td>
                            <td>Michael Lee</td>
                            <td>Analyst</td>
                            <td>michaellee@email.com</td>
                            <td>$600</td>
                            <td>Company DEF</td>
                            <td>+1122334455</td>
                            <td>Rejected</td>
                        </tr>
                    </tbody>
                </table>

                <p className="closing-text">
                    Use this table to quickly access submission details and their current status. For further actions or edits, reach out to the respective stakeholders.
                </p>

                <img 
                    src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-26%20172409-png.png" 
                    alt="Submitted Sheets Overview" 
                    className="placeholder-image"
                />
            </div>
        </div>
    );
};

export default ViewSubmittedSheets;
