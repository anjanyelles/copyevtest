import React from "react";
import "./TrendingTopics.css";
import { Link } from "react-router-dom";

const TrendingTopics = () => {
  return (
    <>
    <section className="trending-topics">
      <h2 style={{ textAlign: "center", padding: "20px", margin: "20px" }}>
         Trending Topics in Timesheet Management
      </h2>
      <div
        className="topics-grid"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="itemwrapmedia">
    
          <div>
            <h3 style={{ marginLeft: "1rem" }}>Super Admin</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  to="/time/superadmin/organization"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Manage Organization
                </Link>
              </li>
              <li>
                <Link
                  to="/time/superadmin/vendor"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Manage Vendors
                </Link>
              </li>
              <li>
                <Link
                  to="/time/superadmin/client"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Manage Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/time/superadmin/organization-info"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View Organization Info
                </Link>
              </li>
              <li>
                <Link
                  to="/time/superadmin/organization-settings"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Update Organization Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/time/superadmin/users"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Manage Users
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginLeft: "1rem" }}>Approver Managers</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  to="/time/approverManagers"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Approver Managers
                </Link>
              </li>
              <li>
                <Link
                  to="/time/approverManagers/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View or Edit Your Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/time/approverManagers/employee"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Add or View Employee
                </Link>
              </li>
              <li>
                <Link
                  to="/time/approverManagers/client"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Add or View Client
                </Link>
              </li>
              <li>
                <Link
                  to="/time/approverManagers/project"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Create or Edit Project
                </Link>
              </li>
              <li>
                <Link
                  to="/time/approverManagers/timesheet"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View All TimeSheets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginLeft: "1rem" }}>Employee</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  to="/time/employee/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View or Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/time/employee/timesheet"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  TimeSheet
                </Link>
              </li>
              <li>
                <Link
                  to="/time/employee/timesubmittedSheets"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View Submitted Sheets
                </Link>
              </li>
              <li>
                <Link
                  to="/time/employee/approvedsheets"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View Approved Sheets
                </Link>
              </li>
              <li>
                <Link
                  to="/time/employee/pendingtimesheets"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View Pending Sheets
                </Link>
              </li>
              <li>
                <Link
                  to="/time/employee/rejectedtimesheets"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View Rejected Sheets
                </Link>
              </li>
            </ul>
          </div>




          <div>
            <h3 style={{ marginLeft: "1rem" }}>Gatnix Activation</h3>
            <ul>
            {/* <li>Activate Gatnix Suite</li>
            <li>Register your Gatnix product</li>
            <li>Find your Gatnix product key</li> */}

            <Link
              to="/accounthelp/create-approval-manager"
              style={{ textDecoration: "none", color: "inherit" }}
            >
             <li>Create Approval Manager  </li> 
            </Link>

            <Link
              to="/accounthelp/understanding-billing"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <li style={{ cursor: "pointer" }}>Understanding Billing</li>{" "}
            </Link>

            <Link
              to="/accounthelp/manage-invoices"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <li style={{ cursor: "pointer" }}>Manage Invoices</li>{" "}
            </Link>
            <Link
              to="/accounthelp/consultant-data"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <li style={{ cursor: "pointer" }}>Consultant Data</li>{" "}
            </Link>
            <Link
              to="/accounthelp/troubleshooting"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <li style={{ cursor: "pointer" }}>Troubleshooting</li>{" "}
            </Link>
            <Link
              to="/accounthelp/satreportgeneration"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <li style={{ cursor: "pointer" }}>SAT Report Generation</li>
            </Link>
          </ul>
          </div>
          <div>
            <h3 style={{ marginLeft: "1rem" }}>Gatnix Account & Storage</h3>
            <ul >
            <Link to="/GatnixAccountHelproute/sign-in-help"                style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              <li>Sign in to your Gatnix account</li>
            </Link>
            <Link to="/GatnixAccountHelproute/password-recovery"               style={{ textDecoration: "none", color: "inherit" }}>
              <li>Reset your Gatnix password</li>
            </Link>
            <Link to="/sat/approverManagers/profile"               style={{ textDecoration: "none", color: "inherit" }}>
              <li>Learn how Gatnix Cloud storage works</li>
            </Link>
          </ul>
          </div>



        </div>


         

    


        <div></div>
      </div>
    </section>

    
    <section className="trending-topics">
      <h2 style={{ textAlign: "center", padding: "20px", margin: "20px" }}>
         Trending Topics in SAT Management
      </h2>
      <div
        className="topics-grid"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="itemwrapmedia">
          <div>
            <h3 style={{ marginLeft: "1rem" }}>Admin</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  to="/sat/admin/adminviewEmployee"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Manage Employer
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/admin/adminviewEmployee"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Manage Consultant
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/admin/adminrestrictEmployers"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View or Restrict Employers
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/admin/adminrestrictConsultants"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View or Restrict Consultants
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/admin/managesubmissionsheets"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View or Add Submission Sheets
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/admin/adminmanagesatreports"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Generate SAT Reports
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginLeft: "1rem" }}>Super Admin</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  to="/sat/timesheet/submissions-sheet"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
               View or Add Submission Sheets
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/superadmin/emails"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                Manage E-mails
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/superadmin/schedulersettings"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                View Scheduler Logs
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/superadmin/manageconsultantlicenses"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
View My Licenses
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/superadmin/resumeAnalyzerGuide"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
             How Resume Analyzer Works
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/superadmin/savedResumes"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                Saved Resumes
                </Link>
              </li>
            </ul>
          </div>
    
          <div>
            <h3 style={{ marginLeft: "1rem" }}>Employer</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  to="/sat/consultant/consultantprofile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View or Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/consultant/consultantresumebuilder"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
               Use Resume Builder
                </Link>
              </li>
            
              <li>
                <Link
                  to="/sat/consultant/consultantresumeanalyzer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
             Resume Analyzer Works

                </Link>
              </li>
              <li>
                <Link
                  to="/sat/consultant/consultantemailtemplateguide"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
       Change Template Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/consultant/consultantsavedjobs"
                  style={{ textDecoration: "none", color: "inherit" }}
                >

View My Saved Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/consultant/managesubmissionsheets"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                 View or Add Submission Sheets
                </Link>
              </li>
            </ul>
          </div>
          <div>

            <h3 style={{ marginLeft: "1rem" }}>Consultant</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  to="/sat/consultant/profilesetup"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
               View or Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/consultant/managesatreport"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
              Generate SAT Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/consultant/emailtemplateguide"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
            Change Template Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/consultant/resumebuilder"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Use Resume Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/sat/employee/employeesavedjobs"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
        View My Saved Jobs
                </Link>
              </li>
     
            </ul>
          </div>
        </div>


         

    


        <div></div>
      </div>
    </section>





    </>
  );
};

export default TrendingTopics;
