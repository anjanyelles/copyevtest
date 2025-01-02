import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./GatnixAccountHelp.css";
import Header from "./Header";
import Troubleshooting from "./Troubleshooting"; // Import Troubleshooting component
import CreateApprovalManager from "./Childcomponent/CreateApprovalManager";
import UnderstandingBilling from "./Childcomponent/UnderstandingBilling";
import ManageInvoices from "./Childcomponent/ManageInvoices";
import ConsultantData from "./Childcomponent/ConsultantData";
import SATReportGeneration from "./Childcomponent/SATReportGeneration";
import ConsultantProfileEdit from "./Childcomponent/ConsultantProfileEdit";
import SchedulerLogs from "./Childcomponent/SchedulerLogs";
import ViewConsultantDetails from "./Childcomponent/ViewConsultantDetails";
import EmailTemplateGuide from "./EmailTemplateGuide";
import ProfileSetup from "./Childcomponent/ProfileSetup";
import VendorClientManagement from "./VendorClientManagement";
import OrganizationInformation from "./OrganizationInformation";
import ManageSubmissionSheets from "./ManageSubmissionSheets";
import ViewOrganizationDetails from "./ViewOrganizationDetails";
import ViewEmailHistory from "./ViewEmailHistory";
import ManageSchedulerSettings from "./ManageSchedulerSettings";
import ViewSchedulerLogs from "./ViewSchedulerLogs";
import ManageSATReports from "./ManageSATReports";
import BillingAndSATReports from "./BillingAndSATReports";
import ManageBillingAndReports from "./ManageBillingAndReports";
import UserAndBillingOverview from "./UserAndBillingOverview";
import ManageConsultantLicenses from "./ManageConsultantLicenses";
import ManageOrders from "./ManageOrders";
import ResumeBuilder from "./ResumeBuilder";
import AIResumeMatcher from "./AIResumeMatcher";
import ImportOrCreateResume from "./ImportOrCreateResume";
import TemplateSettings from "./TemplateSettings";
import SavedJobs from "./SavedJobs";
import Footer1 from "./Footer1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import ViewEmployer from "./ViewEmployer";
import RestrictEmployers from "./RestrictEmployers";
import RestrictConsultants from "./RestrictConsultants";
import Timesheetcontnent from "./Timesheetcontnent";
import ViewSubmittedSheets from "./ViewSubmittedSheets";
import ViewApprovedSheets from "./ViewApprovedSheets";
import PendingTimeSheets from "./PendingTimeSheets";
import RejectedTimeSheets from "./RejectedTimeSheets";
import RecalledTimeSheets from "./RecalledTimeSheets";


// Individual components for each help topic

const Timesheet = () => {
  const location = useLocation();




  const [openMenus, setOpenMenus] = useState({});

  const handleMenuClick = (menu) => {
    // Toggle the clicked menu while keeping others intact
    setOpenMenus((prevMenus) => ({
      ...prevMenus,
      [menu]: !prevMenus[menu], // Toggle the current menu
    }));
  };



  let content = null;
  if (location.pathname === "/timesheet/create-approval-manager") {
    content = <CreateApprovalManager />;
  } else if (location.pathname === "/timesheet/understanding-billing") {
    content = <UnderstandingBilling />;
  } else if (location.pathname === "/timesheet/manage-invoices") {
    content = <ManageInvoices />;
  } else if (location.pathname === "/timesheet/consultant-data") {
    content = <ConsultantData />;
  } else if (location.pathname === "/timesheet/troubleshooting") {
    content = <Troubleshooting />;
  } else if (location.pathname === "/timesheet/satreportgeneration") {
    content = <SATReportGeneration />;
  } else if (location.pathname === "/timesheet/consultantprofileedit") {
    content = <ConsultantProfileEdit />;
  } else if (location.pathname === "/timesheet/schedulerlogs") {
    content = <SchedulerLogs />;
  } else if (location.pathname === "/timesheet/viewconsultantdetails"  || location.pathname === "/admin/viewconsultantdetails" || location.pathname === "/superadmin/viewconsultantdetails") {
    content = <ViewConsultantDetails />;
  } else if (location.pathname === "/timesheet/viewEmployer"  || location.pathname === "/admin/viewEmployer" || location.pathname === "/superadmin/viewEmployer") {
    content = <ViewEmployer />;
  }
  else if (location.pathname === "/timesheet/restrictEmployers"  || location.pathname === "/admin/restrictEmployers" || location.pathname === "/superadmin/restrictEmployers") {
    content = <RestrictEmployers />;
    

  }
  else if (location.pathname === "/timesheet/restrictConsultants"  || location.pathname === "/admin/restrictConsultants" || location.pathname === "/superadmin/restrictConsultants") {
    content = <RestrictConsultants />;
    

  }
   else if (location.pathname === "/timesheet/emailtemplateguide"  ||    location.pathname === "/consultant/emailtemplateguide" ) {
    content = <EmailTemplateGuide />;
  } else if (location.pathname === "/timesheet/profilesetup") {
    content = <ProfileSetup />;
  } else if (location.pathname === "/timesheet/vendorclientmanagement") {
    content = <VendorClientManagement />;
  } else if (location.pathname === "/timesheet/organizationinformation") {
    content = <OrganizationInformation />;
  } else if (location.pathname === "/timesheet/managesubmissionsheets" || location.pathname === "/consultant/managesubmissionsheets") {
    content = <ManageSubmissionSheets />;
  }

    else if (location.pathname === "/admin/managesubmissionsheets") {
      content = <ManageSubmissionSheets />;
   

  }
  else if (location.pathname === "/employee/rejectedtimesheets") {
    content = <RejectedTimeSheets />;
}else if (location.pathname === "/employee/recalledtimesheets"  || location.pathname === "/approverManagers/recalledtimesheets") {
  content = <RecalledTimeSheets />;
}
  
   else if (location.pathname === "/timesheet/vieworganizationdetails") {
    content = <ViewOrganizationDetails />;
  } else if (location.pathname === "/timesheet/manageschedulersettings") {
    content = <ManageSchedulerSettings />;
  } else if (location.pathname === "/timesheet/viewemailhistory") {
    content = <ViewEmailHistory />;
  } else if (location.pathname === "/timesheet/viewschedulerlogs") {
    content = <ViewSchedulerLogs />;
  } else if (location.pathname === "/timesheet/managesatreports"  || location.pathname === "/consultant/managesatreports" ) {
    content = <ManageSATReports />;
  } else if (location.pathname === "/timesheet/billingandsatreports") {
    content = <BillingAndSATReports />;
  } else if (location.pathname === "/timesheet/managebillingandreports") {
    content = <ManageBillingAndReports />;
  } else if (location.pathname === "/timesheet/userandbillingoverview"  || location.pathname === "/admin/userandbillingoverview" || location.pathname === "/superadmin/userandbillingoverview") {
    content = <UserAndBillingOverview />;
  } else if (location.pathname === "/timesheet/manageconsultantlicenses"  ||  location.pathname === "/superadmin/manageconsultantlicenses") {
    content = <ManageConsultantLicenses />;
  } else if (location.pathname === "/timesheet/manageorders" || location.pathname === "/superadmin/manageorders") {
    content = <ManageOrders />;
  } else if (location.pathname === "/timesheet/resumebuilder"  || location.pathname === "/admin/resumebuilder" || location.pathname === "/consultant/resumebuilder"   ) {
    content = <ResumeBuilder />;
  } else if (location.pathname === "/timesheet/airesumematcher"  || location.pathname === "/admin/airesumematcher"   || location.pathname === "/superadmin/superadmin" || location.pathname === "/consultant/managesatreports" ||  location.pathname === "/consultant/airesumematcher"  || location.pathname === "/superadmin/airesumematcher" ) {
    content = <AIResumeMatcher />;
  } else if (location.pathname === "/timesheet/importorcreateresume") {
    content = <ImportOrCreateResume />;
  }
  else if (location.pathname === "/employee/timesheet"  || location.pathname === "/approverManagers/timesheet") {
    content = <Timesheetcontnent />;
  }
  else if (location.pathname === "/employee/timesubmittedSheets" || location.pathname === "/approverManagers/timesubmittedSheets") {
    content = <ViewSubmittedSheets />;
  }
  else if (location.pathname === "/employee/approvedsheets"  || location.pathname === "/approverManagers/approvedsheets") {
    content = <ViewApprovedSheets />;
  }
  else if (location.pathname === "/employee/pendingtimesheets"  || location.pathname === "/approverManagers/pendingtimesheets") {
    content = <PendingTimeSheets />;
  }
  
   else if (location.pathname === "/timesheet/templatesettings") {
    content = <TemplateSettings />;
  } 
  else if (location.pathname === "/admin/templatesettings"  || location.pathname === "/superadmin/emailtemplateguide") {
    content = <TemplateSettings />;
  }else if (location.pathname === "/timesheet/savedjobs" || location.pathname === "/admin/savedjobs" || location.pathname === "/superadmin/savedjobs" ) {
    content = <SavedJobs />;
  } else if (location.pathname === "/timesheet/profilesetup"  ||   location.pathname === "/consultant/profilesetup" || location.pathname === "/employee/profile"  || location.pathname === "/approverManagers/profile"  ) {
    content = <ProfileSetup />;
  } else {
    content = (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "300",
            color: "#000000",
            marginBottom: "10px",
          }}
        >
          Welcome to Gatnix
        </h2>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#4F4F4F",
            marginBottom: "20px",
          }}
        >
          Gatnix provides an all-in-one platform to streamline hiring, empower
          talent management, and enhance communication through intelligent
          automation and real-time tracking.
        </p>

        <img
          src="https://res.cloudinary.com/dqdvdseyk/image/upload/v1732015726/rzehjanzhthqr6smjkmx.png"
          alt="Gatnix Overview"
          style={{ width: "60%", height: "auto", marginBottom: "20px" }}
        />

        <h3
          style={{
            fontSize: "20px",
            fontWeight: "300",
            color: "#000000",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          Features
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - Centralized job application tracking with categorization by status,
          company, or position.
          <br />
          - Employee management tools for profile tracking, performance
          monitoring, and task management.
          <br />
          - Automated follow-up services to save time and ensure timely
          communication.
          <br />
          - Real-time updates for clear insights into application progress.
          <br />
          - Email and SMS automation for enhanced communication and efficiency.
          <br />
        </p>

        <h3
          style={{
            fontSize: "20px",
            fontWeight: "300",
            color: "#000000",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          Products
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - <strong>Smart Application Tracker:</strong> Simplify hiring with
          seamless candidate management.
          <br />- <strong>Job Board:</strong> Discover and connect with top
          talent in a dynamic environment.
          <br />- <strong>AI Resume Matcher:</strong> Use AI-powered tools to
          match talent with opportunities.
          <br />- <strong>Timesheet Portal:</strong> Optimize productivity with
          intuitive time-tracking tools.
          <br />
        </p>

        <h3
          style={{
            fontSize: "20px",
            fontWeight: "300",
            color: "#000000",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          Pricing Plans
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          Choose from individual or organization plans, starting with free
          trials.
          <br />
          <strong>Individual:</strong> Basic (Free/90 days) and Pro ($7/month).
          <br />
          <strong>Organization:</strong> Basic ($22/month) and Pro ($35/month).
          <br />
        </p>

        <h3
          style={{
            fontSize: "20px",
            fontWeight: "300",
            color: "#000000",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          Customer Support
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - Comprehensive knowledge base for quick answers.
          <br />
          - 24/7 live chat support for personalized assistance.
          <br />- Direct support available at{" "}
          <strong style={{ color: "#000000" }}>+1 (614) 421-7545</strong>.<br />
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div
        className="account-help-container"
        style={{ display: "flex", height: "100vh" }}
      >
        {/* Sidebar */}
        <div className="sidebar" style={{ flex: "0 0 20%", padding: "10px", }}>
         
          <ul style={{ listStyleType: "none", padding: 0 }}>


      



<li style={{ padding: "10px", cursor: "pointer" }}>
  <div
    onClick={() => handleMenuClick("approverManagers")}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span>Approver Managers</span>
    <FontAwesomeIcon
      icon={openMenus["approverManagers"] ? faCircleChevronUp : faCircleChevronDown}
    />
  </div>
  {openMenus["approverManagers"] && (
    <ul style={{ listStyleType: "none", marginTop: "5px" }}>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers" style={{ textDecoration: "none", color: "inherit" }}>
          Approver Managers
        </Link>
      </li>

      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/profile" style={{ textDecoration: "none", color: "inherit" }}>
          View or Edit Your Profile
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/employee" style={{ textDecoration: "none", color: "inherit" }}>
          Add or View Employee
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/client" style={{ textDecoration: "none", color: "inherit" }}>
          Add or View Client
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/project" style={{ textDecoration: "none", color: "inherit" }}>
          Create or Edit Project
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/timesheet" style={{ textDecoration: "none", color: "inherit" }}>
          View All TimeSheets
        </Link>
      </li>

      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/submitted-sheets" style={{ textDecoration: "none", color: "inherit" }}>
          View Submitted Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/timesubmittedSheets" style={{ textDecoration: "none", color: "inherit" }}>
          View Approved Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/approvedsheets" style={{ textDecoration: "none", color: "inherit" }}>
          Approve Time Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/pendingtimesheets" style={{ textDecoration: "none", color: "inherit" }}>
          View Pending Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/rejectedtimesheets" style={{ textDecoration: "none", color: "inherit" }}>
          View Rejected Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/approverManagers/recalledtimesheets" style={{ textDecoration: "none", color: "inherit" }}>
          View Recalled Sheets
        </Link>
      </li>
    </ul>
  )}
</li>


<li style={{ padding: "10px", cursor: "pointer" }}>
  <div
    onClick={() => handleMenuClick("employee")}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span>Employee</span>
    <FontAwesomeIcon
      icon={openMenus["employee"] ? faCircleChevronUp : faCircleChevronDown}
    />
  </div>
  {openMenus["employee"] && (
    <ul style={{ listStyleType: "none", marginTop: "5px" }}>

      <li style={{ padding: "5px 0" }}>
        <Link to="/employee/profile" style={{ textDecoration: "none", color: "inherit" }}>
        View or Edit   Profile
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/employee/timesheet" style={{ textDecoration: "none", color: "inherit" }}>
          TimeSheet
        </Link>
      </li>

      <li style={{ padding: "5px 0" }}>
        <Link to="/employee/timesubmittedSheets" style={{ textDecoration: "none", color: "inherit" }}>
        View   Submitted Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/employee/approvedsheets" style={{ textDecoration: "none", color: "inherit" }}>
        View   Approved Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/employee/pendingtimesheets" style={{ textDecoration: "none", color: "inherit" }}>
        View Pending Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/employee/rejectedtimesheets" style={{ textDecoration: "none", color: "inherit" }}>
        View  Rejected Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/employee/recalledtimesheets" style={{ textDecoration: "none", color: "inherit" }}>
         View  Recalled Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/employee/help-desk" style={{ textDecoration: "none", color: "inherit" }}>
          Help Desk
        </Link>
      </li>
    </ul>
  )}
</li>



<li style={{ padding: "10px", cursor: "pointer" }}>
  <div
    onClick={() => handleMenuClick("admin")}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span>Admin</span>
    <FontAwesomeIcon
      icon={openMenus["admin"] ? faCircleChevronUp : faCircleChevronDown}
    />
  </div>
  {openMenus["admin"] && (
    <ul style={{ listStyleType: "none", marginTop: "5px" }}>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/viewEmployer" style={{ textDecoration: "none", color: "inherit" }}>
          Manage Employer
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/viewconsultantdetails" style={{ textDecoration: "none", color: "inherit" }}>
          Manage Consultant
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/restrictEmployers" style={{ textDecoration: "none", color: "inherit" }}>
          View or Restrict Employers
        </Link>
      </li>
      
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/restrictConsultants" style={{ textDecoration: "none", color: "inherit" }}>
          View or Restrict Consultants
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/managesubmissionsheets" style={{ textDecoration: "none", color: "inherit" }}>
          View or Add Submission Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/timesheet/managesatreports" style={{ textDecoration: "none", color: "inherit" }}>
          Generate SAT Reports
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/resumebuilder" style={{ textDecoration: "none", color: "inherit" }}>
          Open Resume Builder
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/airesumematcher" style={{ textDecoration: "none", color: "inherit" }}>
          Learn How Resume Analyzer Works
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/airesumematcher" style={{ textDecoration: "none", color: "inherit" }}>
          Learn How AI Resume Matcher Works
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/templatesettings" style={{ textDecoration: "none", color: "inherit" }}>
          Change Template Settings
        </Link>
      </li>
   
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/savedjobs" style={{ textDecoration: "none", color: "inherit" }}>
          View My Saved Jobs
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/help-desk" style={{ textDecoration: "none", color: "inherit" }}>
          Access Help Desk
        </Link>
      </li>
    </ul>
  )}
</li>


<li style={{ padding: "10px", cursor: "pointer" }}>
  <div
    onClick={() => handleMenuClick("consultant")}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span>Consultant</span>
    <FontAwesomeIcon
      icon={openMenus["consultant"] ? faCircleChevronUp : faCircleChevronDown}
    />
  </div>
  {openMenus["consultant"] && (
    <ul style={{ listStyleType: "none", marginTop: "5px" }}>
      <li style={{ padding: "5px 0" }}>
        <Link to="/consultant/profilesetup" style={{ textDecoration: "none", color: "inherit" }}>
          View or Edit Profile
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/consultant/managesubmissionsheets" style={{ textDecoration: "none", color: "inherit" }}>
          View or Add Submission Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/consultant/managesatreports" style={{ textDecoration: "none", color: "inherit" }}>
          Generate SAT Reports
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/consultant/resumebuilder" style={{ textDecoration: "none", color: "inherit" }}>
          Use Resume Builder
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/consultant/managesatreports" style={{ textDecoration: "none", color: "inherit" }}>
          Learn How Resume Analyzer Works
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/consultant/airesumematcher" style={{ textDecoration: "none", color: "inherit" }}>
          Learn How AI Resume Matcher Works
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/consultant/emailtemplateguide" style={{ textDecoration: "none", color: "inherit" }}>
          Change Template Settings
        </Link>
      </li>
 
      <li style={{ padding: "5px 0" }}>
        <Link to="/admin/savedjobs" style={{ textDecoration: "none", color: "inherit" }}>
          View My Saved Jobs
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/consultant/help-desk" style={{ textDecoration: "none", color: "inherit" }}>
          Access Help Desk
        </Link>
      </li>
    </ul>
  )}
</li>



<li style={{ padding: "10px", cursor: "pointer" }}>
  <div
    onClick={() => handleMenuClick("superAdmin")}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span>Super Admin</span>
    <FontAwesomeIcon
      icon={openMenus["superAdmin"] ? faCircleChevronUp : faCircleChevronDown}
    />
  </div>
  {openMenus["superAdmin"] && (
    <ul style={{ listStyleType: "none", marginTop: "5px" }}>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/organization" style={{ textDecoration: "none", color: "inherit" }}>
          Manage Organization
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/vendor" style={{ textDecoration: "none", color: "inherit" }}>
          Manage Vendors
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/client" style={{ textDecoration: "none", color: "inherit" }}>
          Manage Clients
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/organization-info" style={{ textDecoration: "none", color: "inherit" }}>
          View Organization Info
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/organization-settings" style={{ textDecoration: "none", color: "inherit" }}>
          Update Organization Settings
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/users" style={{ textDecoration: "none", color: "inherit" }}>
          Manage Users
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/admin" style={{ textDecoration: "none", color: "inherit" }}>
          Admin Settings
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/employers" style={{ textDecoration: "none", color: "inherit" }}>
          Manage Employers
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/timesheet/consultantprofileedit" style={{ textDecoration: "none", color: "inherit" }}>
          Manage or Edit Consultants
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/submissions-sheet" style={{ textDecoration: "none", color: "inherit" }}>
          View or Add Submission Sheets
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/emails" style={{ textDecoration: "none", color: "inherit" }}>
          Manage E-mails
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/email-templates" style={{ textDecoration: "none", color: "inherit" }}>
          Manage E-mail Templates
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/scheduler-settings" style={{ textDecoration: "none", color: "inherit" }}>
          Update Scheduler Settings
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/scheduler-logs" style={{ textDecoration: "none", color: "inherit" }}>
          View Scheduler Logs
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/sat-reports" style={{ textDecoration: "none", color: "inherit" }}>
          Generate SAT Reports
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/userandbillingoverview" style={{ textDecoration: "none", color: "inherit" }}>
          View Billing Details
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/purchase-services" style={{ textDecoration: "none", color: "inherit" }}>
          Purchase Services
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/payments" style={{ textDecoration: "none", color: "inherit" }}>
          View Payments
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/manageconsultantlicenses" style={{ textDecoration: "none", color: "inherit" }}>
          View My Licenses
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/manageorders" style={{ textDecoration: "none", color: "inherit" }}>
          View My Orders
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/resumebuilder" style={{ textDecoration: "none", color: "inherit" }}>
          Use Resume Builder
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/airesumematcher" style={{ textDecoration: "none", color: "inherit" }}>
          Learn How Resume Analyzer Works
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/airesumematcher" style={{ textDecoration: "none", color: "inherit" }}>
          Learn How AI Resume Matcher Works
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/emailtemplateguide" style={{ textDecoration: "none", color: "inherit" }}>
          Change Template Settings
        </Link>
      </li>
 
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/savedjobs" style={{ textDecoration: "none", color: "inherit" }}>
          View My Saved Jobs
        </Link>
      </li>
      <li style={{ padding: "5px 0" }}>
        <Link to="/superadmin/help-desk" style={{ textDecoration: "none", color: "inherit" }}>
          Access Help Desk
        </Link>
      </li>
    </ul>
  )}
</li>

      {/* Submitted Sheets */}
      <li style={{ padding: "10px", cursor: "pointer" }}>
        <div
          onClick={() => handleMenuClick("submittedSheets")}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Submitted Sheets</span>
          <FontAwesomeIcon
            icon={openMenus["submittedSheets"] ? faCircleChevronUp : faCircleChevronDown}
          />
        </div>
        {openMenus["submittedSheets"] && (
          <ul style={{ listStyleType: "none", marginTop: "5px" }}>
            <li style={{ padding: "5px 0" }}>
              <Link to="/timesheet/check-submitted-sheets" style={{ textDecoration: "none", color: "inherit" }}>
                Check Submission Status
              </Link>
            </li>
            <li style={{ padding: "5px 0" }}>
              <Link to="/timesheet/review-submitted-sheets" style={{ textDecoration: "none", color: "inherit" }}>
                Review Submitted Sheets
              </Link>
            </li>
          </ul>
        )}
      </li>



{/* Repeat similar structure for Sheet, Submitted Sheets, Approved Sheets, Pending Sheets, Rejected Sheets, and Recalled Sheets */}

          <li style={{ padding: "10px", cursor: "pointer" }}>
          {/* <h3 >Gatnix Help Topics</h3> */}
          </li>
    
       
         
            <li style={{ padding: "10px", cursor: "pointer" }}>
       
              <Link
                to="/timesheet/consultant-data"
                style={{ textDecoration: "none", color: "inherit" }}
              >
               Create A Project
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              {/* <Link to="/timesheet/troubleshooting" style={{ textDecoration: "none", color: "inherit" }}> */}
              Create Time Sheet
              {/* </Link> */}
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/timesheet/satreportgeneration"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SATReportGeneration
              </Link>
            </li>

            <li style={{ padding: "10px", cursor: "pointer" }}>
          
              <Link
                to="/timesheet/consultantprofileedit"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Consultant Profile Edit
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/timesheet/schedulerlogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Scheduler Logs
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/viewconsultantdetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Consultant Details
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/timesheet/emailtemplateguide"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Email Template Guide
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/profilesetup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Profile Setup
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/timesheet/vendorclientmanagement"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Vendor Client Management
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/organizationinformation"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Organization Information
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/timesheet/managesubmissionsheets"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Submission Sheets
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/vieworganizationdetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Submission Sheets
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/viewemailhistory"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Email History
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/timesheet/manageschedulersettings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Scheduler Settings
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/timesheet/viewschedulerlogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Scheduler Logs
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/managesatreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage SAT Reports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/timesheet/billingandsatreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Billing And SATReports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/timesheet/managebillingandreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Billing And Reports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/timesheet/userandbillingoverview"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                User Billing Overview
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/timesheet/manageconsultantlicenses"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Consultant Licenses
              </Link>
            </li>

            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/manageconsultantlicenses"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Consultant Licenses
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/timesheet/manageorders"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Orders
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/resumebuilder"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Resume Builder
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/airesumematcher"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                AIResume Matcher
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/timesheet/importorcreateresume"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Import CreateResume
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/timesheet/templatesettings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Template Settings
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/timesheet/savedjobs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Saved Jobs
              </Link>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div
          className="content-area"
          style={{ flex: "1", padding: "20px", backgroundColor: "white" , height:'90vh', overflowY:'scroll'}}
        >
          {content}
        </div>
      </div>
      {/* <Footer1 /> */}
    </>
  );
};

export default Timesheet;
