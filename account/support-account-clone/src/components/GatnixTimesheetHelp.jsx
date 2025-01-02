import React, { useState } from "react";
import "./GatnixAccountHelp.css";
import Header from "./Header";

const GatnixTimesheetHelp = () => {
  const [activeTab, setActiveTab] = useState(null);

  const contentMap = {
    "create-approval-manager": {
      title: "Create Approval Manager",
      description: (
        <>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            <strong>Step 1:</strong> Log in to Super Admin Module.
            <br />
            <strong>Step 2:</strong> Access the Approval Manager Page and click on the Add button.
            <br />
            <strong>Step 3:</strong> Enter the Manager’s details:
            <ul>
              <li>First Name, Last Name, and Email</li>
              <li>Password for the Approval Manager</li>
              <li>Phone Number and WhatsApp Number</li>
              <li>If the WhatsApp number is the same as the phone number, tick the box.</li>
            </ul>
            <strong>Step 4:</strong> Click Save to add the manager.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%203.48.58%20PM.png" alt="Approval Manager Setup" style={{ width: "60%", height: "auto", marginTop: "20px" }} />
        </>
      ),
    },
    "create-employee": {
      title: "Create Employee",
      description: (
        <>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            <strong>Step 1:</strong> Log in to the Super Admin Module.
            <br />
            <strong>Step 2:</strong> Navigate to the Employee Page and click the Employee button.
            <br />
            <strong>Step 3:</strong> Click on the Add button and enter the required employee details.
            <br />
            <strong>Step 4:</strong> Click Save to save the employee record.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%203.51.08%20PM.png" alt="Employee Creation" style={{ width: "60%", height: "auto", marginTop: "20px" }} />
        </>
      ),
    },
    "create-client": {
      title: "Create Client",
      description: (
        <>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            <strong>Step 1:</strong> Log in to Super Admin and navigate to the Client Tab.
            <br />
            <strong>Step 2:</strong> Click on the Client button.
            <br />
            <strong>Step 3:</strong> Click the Add button and fill in the client details.
            <br />
            <strong>Step 4:</strong> Click Save to save the client information.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%204.09.07%20PM.png" alt="Client Creation" style={{ width: "60%", height: "auto", marginTop: "20px" }} />
        </>
      ),
    },
    "create-project": {
      title: "Create Project for Employee",
      description: (
        <>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            <strong>Step 1:</strong> Log in to Super Admin and navigate to the Sheets Tab.
            <br />
            <strong>Step 2:</strong> Go to the Projects section and click the Add button.
            <br />
            <strong>Step 3:</strong> Enter the project details:
            <ul>
              <li>Project Type, Pay Terms</li>
              <li>Employee Name (Email, Phone, WhatsApp auto-filled)</li>
              <li>Client Name</li>
              <li>Approval Manager, Employee Pay Rate</li>
              <li>Start and End Date</li>
            </ul>
            <strong>Step 4:</strong> Click Save to create the project.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%204.10.52%20PM.png" alt="Project Creation" style={{ width: "60%", height: "auto", marginTop: "20px" }} />
        </>
      ),
    },
    "access-employee-module": {
      title: "Access Employee Module",
      description: (
        <>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            <strong>Step 1:</strong> Use the provided employee credentials to log in.
            <br />
            <strong>Step 2:</strong> Navigate to the Timesheets Tab.
            <br />
            <strong>Step 3:</strong> Click on the assigned project to view the timesheet.
            <br />
            <strong>Step 4:</strong> Click on the Project ID to open the Employee Timesheet.
            <br />
            <strong>Step 5:</strong> Fill in the billable hours for the work performed.
            <br />
            <strong>Step 6:</strong> Upload the necessary documents (Screenshot, Time of Work Report).
            <br />
            <strong>Step 7:</strong> Click Submit to submit the timesheet for approval.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%204.15.54%20PM.png" alt="Employee Module Access" style={{ width: "60%", height: "auto", marginTop: "20px" }} />
        </>
      ),
    },
    "approve-reject-timesheets": {
      title: "Approve or Reject Timesheets (Approval Manager / Super Admin)",
      description: (
        <>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            <strong>Step 1:</strong> Log in as Super Admin or Approval Manager.
            <br />
            <strong>Step 2:</strong> Check notifications by clicking on the Notification Bell at the top.
            <br />
            <strong>Step 3:</strong> Click on the Submitted Sheets section to view timesheet details.
            <br />
            <strong>Step 4:</strong> Click on the Timesheet ID to open it.
            <br />
            Use the Approve or Reject button to approve or reject the timesheet.
            <br />
            <strong>Step 5:</strong> Approved timesheets move to the Approved Sheets section, and rejected ones to the Rejected Sheets section.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%204.18.11%20PM.png" alt="Approve or Reject Timesheet" style={{ width: "60%", height: "auto", marginTop: "20px" }} />
        </>
      ),
    },
    "recall-timesheet": {
      title: "Recalling Timesheet Requests",
      description: (
        <>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            <strong>Step 1:</strong> Log in to the Employee Module.
            <br />
            <strong>Step 2:</strong> Navigate to the Approval Sheets section.
            <br />
            <strong>Step 3:</strong> Click on the Recall Request button to initiate the recall.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/timesheet/Screenshot%202024-12-13%20at%204.24.34%20PM.png" alt="Recalling Timesheet" style={{ width: "60%", height: "auto", marginTop: "20px" }} />
        </>
      ),
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  return (
    <>
      <Header />
      <div className="account-help-container" style={{ borderTop: "1px solid gray", display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <div className="sidebar" style={{ flex: "0 0 20%", padding: "10px" }}>
          <h3>Gatnix Help Topics</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {Object.keys(contentMap).map((tabKey, index) => (
              <li
                key={tabKey}
                className={activeTab === tabKey ? "active" : ""}
                onClick={() => handleTabClick(tabKey)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderLeft: activeTab === tabKey ? "3px solid #0078D4" : "none",
                  backgroundColor: activeTab === tabKey ? "#f0f8ff" : "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "8px", fontWeight: "bold", color: "#0078D4" }}>{index + 1}.</span>
                <span>{contentMap[tabKey].title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="content-area" style={{ flex: "1", padding: "20px", backgroundColor: "white" }}>
          {activeTab && (
            <div className="tab-content">
              <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000" }}>
                {contentMap[activeTab].title}
              </h2>
              <div>{contentMap[activeTab].description}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GatnixTimesheetHelp;
