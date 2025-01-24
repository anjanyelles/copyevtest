import React from 'react';

const SubmittedSheetsEmployee = () => {
    return (
        <div className="view-submitted-sheets-container">
            <div className="content-section">
                <h2 className="main-heading">View Submitted Sheets</h2>
                <h3 className="sub-heading">Easily Access and Review Submitted Sheets</h3>
                <p className="description">
                    Keep track of all submitted sheets in one place. This table displays details of the submissions for easy review and follow-up.
                </p>

                <h4 className="section-heading">Submitted Sheets</h4>
                <div className="table-wrapper">
                    <table className="submitted-sheets-table">
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
                                <td>Submitted</td>
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
                                <td>Submitted</td>
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
                                <td>Submitted</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="closing-text">
                    Use this table to quickly access submission details and their current status. For further actions or edits, reach out to the respective stakeholders.
                </p>

                <img
                className="placeholder-image image_gatnix_support"
                src="  https://res.cloudinary.com/danfpnuui/image/upload/v1737352284/Submitted_sheets-1_n9ch9g.png"
                alt="Employee Table Screenshot"
            />
            </div>

            <style jsx>{`
                .view-submitted-sheets-container {
                    padding: 20px;
                }

                .content-section {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .main-heading {
                    font-size: 24px;
                    font-weight: 300;
                    color: #000000;
                    margin-bottom: 10px;
                }

                .sub-heading {
                    font-size: 20px;
                    font-weight: 300;
                    color: #555;
                    margin-bottom: 20px;
                }

                .description {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #4F4F4F;
                    margin-bottom: 20px;
                }

                .section-heading {
                    font-size: 18px;
                    font-weight: 300;
                    color: #000000;
                    margin-bottom: 10px;
                }

                .submitted-sheets-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }

                .submitted-sheets-table th,
                .submitted-sheets-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }

                .closing-text {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #4F4F4F;
                    margin-bottom: 20px;
                }

                .placeholder-image 
 image_gatnix_support {
                    width: 100%;
                    height: auto;
                    margin-top: 20px;
                }

                /* Scrollable Table */
                .table-wrapper {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                }

                /* Media Queries for Responsive Design */
                @media (max-width: 768px) {
                    .main-heading {
                        font-size: 20px;
                    }

                    .sub-heading {
                        font-size: 18px;
                    }

                    .description {
                        font-size: 14px;
                    }

                    .section-heading {
                        font-size: 16px;
                    }

                    .submitted-sheets-table th,
                    .submitted-sheets-table td {
                        font-size: 14px;
                        padding: 6px;
                    }

                    .closing-text {
                        font-size: 14px;
                    }

                    .placeholder-image 
 image_gatnix_support {
                        width: 100%;
                        height: auto;
                    }
                }

                @media (max-width: 480px) {
                    .main-heading {
                        font-size: 18px;
                    }

                    .sub-heading {
                        font-size: 16px;
                    }

                    .description {
                        font-size: 12px;
                    }

                    .section-heading {
                        font-size: 14px;
                    }

                    .submitted-sheets-table th,
                    .submitted-sheets-table td {
                        font-size: 12px;
                        padding: 4px;
                    }

                    .closing-text {
                        font-size: 12px;
                    }

                    .placeholder-image 
 image_gatnix_support {
                        width: 100%;
                        height: auto;
                    }
                }
            `}</style>
        </div>
    );
};

export default SubmittedSheetsEmployee;

