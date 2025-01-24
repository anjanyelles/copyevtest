import React from 'react';

const GenerateSATReport = () => {
    return (
        <div className="generate-sat-report-container">
            <div className="content-section">
                <h2 className="main-heading">Generating SAT Report</h2>

                {/* Step 1: Navigate to the SAT Report */}
                <section className="navigate-section">
                    <h3 className="section-heading">Step 1: Navigate to the SAT Report</h3>
                    <p>From the dashboard, locate the left-side menu and click on the SAT Report option.</p>
                </section>

                {/* Step 2: Input Report Details */}
                <section className="input-details-section">
                    <h3 className="section-heading">Step 2: Input Report Details</h3>
                    <table className="steps-table" style={{ border: '1px solid #ddd', borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Field</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Date Range</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Enter the Start Date and End Date in the format dd-mm-yyyy.</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Requirement</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Select the requirement from the dropdown (e.g., Direct, Implemented Partner, Layer).</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Status</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Select the status from the dropdown (e.g., Submitted, Screening Completed, Offer Received, etc.).</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Step 3: Choose Consultants */}
                <section className="consultants-section">
                    <h3 className="section-heading">Step 3: Choose Consultants</h3>
                    <p>Click the Choose Consultant button to select consultants. A popup window will appear with a list of consultants. Select the desired consultants and click Next.</p>
                </section>

                {/* Step 4: Generate the SAT Report */}
                <section className="generate-report-section">
                    <h3 className="section-heading">Step 4: Generate the SAT Report</h3>
                    <p>Click the Generate Report button. The SAT Report will display on the screen based on your selections.</p>
                </section>

                {/* Step 5: Download or Share the Report */}
                <section className="download-share-section">
                    <h3 className="section-heading">Step 5: Download or Share the Report</h3>
                    <table className="steps-table" style={{ border: '1px solid #ddd', borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Action</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Download Options</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Click the buttons at the top of the report to download the report in Excel, CSV, or PDF format.</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Share via Email</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Click the Email option to share the SAT Report directly via email.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="help-section">
                    <h3 className="section-heading">Need Assistance?</h3>
                    <p>If you encounter any issues or need further help, please contact our Help Desk at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.</p>
                </section>
            </div>
        </div>
    );
};

export default GenerateSATReport;
