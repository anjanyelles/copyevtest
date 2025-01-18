import React from "react";

const SATReportGuide = () => {
  return (
    <div className="sat-report-guide">
      <h2>Generating SAT Reports</h2>
      <p>
        This guide will help you navigate to the SAT Report section, filter your
        data, and generate detailed reports in various formats.
      </p>

      <h3>Step 1: Navigate to the SAT Report</h3>
      <p>
        From the dashboard, locate the left-side menu and click on the SAT
        Report option.
      </p>

      <h3>Step 2: Input Report Details</h3>
      <p>On the SAT Report Page, provide the required information:</p>
      <ul>
        <li>
          <strong>Date Range:</strong> Enter the Start Date and End Date in the
          format dd-mm-yyyy.
        </li>
        <li>
          <strong>Requirement:</strong> Use the dropdown menu to select from
          Direct, Implemented Partner, or Layer.
        </li>
        <li>
          <strong>Status:</strong> Choose the appropriate status from the
          dropdown menu. Options include:
          <ul>
            <li>Submitted</li>
            <li>Screening Completed</li>
            <li>1st Round Interview</li>
            <li>2nd Round Interview</li>
            <li>Client Interview</li>
            <li>Offer Received</li>
            <li>Client Received</li>
            <li>On Hold</li>
            <li>Rejected</li>
            <li>Other</li>
          </ul>
        </li>
      </ul>

      <h3>Step 3: Choose Consultants</h3>
      

      <img src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014063/SAT_Report_-2_nk70ln.png" alt="Help Desk Screenshot" class="placeholder-image image_gatnix_support" />
      <p>
        Click the <strong>Choose Consultant</strong> button. A popup window with
        a list of consultants will appear. Select the desired consultants by
        checking the boxes next to their names and click <strong>Next</strong>.
      </p>

      <h3>Step 4: Generate the SAT Report</h3>
      <p>
        Click the <strong>Generate Report</strong> button. The SAT Report will
        display on the screen.
      </p>

      <h3>Step 5: Download or Share the Report</h3>
      <p>
        Use the download buttons at the top of the report to download it in your
        preferred format (Excel, CSV, or PDF). Alternatively, use the email
        option to share the report directly.
      </p>

      <h3>Need Assistance?</h3>
      <p>
        If you encounter any issues, please reach out to our Help Desk or
        contact us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
      </p>
    </div>
  );
};

export default SATReportGuide;
