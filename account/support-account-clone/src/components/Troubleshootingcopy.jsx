import React from "react";
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

// Individual components for each help topic

const GatnixTimesheetHelp = () => {
  const location = useLocation();

  let content = null;
  if (location.pathname === "/accounthelp/create-approval-manager") {
    content = <CreateApprovalManager />;
  } else if (location.pathname === "/accounthelp/understanding-billing") {
    content = <UnderstandingBilling />;
  } else if (location.pathname === "/accounthelp/manage-invoices") {
    content = <ManageInvoices />;
  } else if (location.pathname === "/accounthelp/consultant-data") {
    content = <ConsultantData />;
  } else if (location.pathname === "/accounthelp/troubleshooting") {
    content = <Troubleshooting />;
  } else if (location.pathname === "/accounthelp/satreportgeneration") {
    content = <SATReportGeneration />;
  } else if (location.pathname === "/accounthelp/consultantprofileedit") {
    content = <ConsultantProfileEdit />;
  } else if (location.pathname === "/accounthelp/schedulerlogs") {
    content = <SchedulerLogs />;
  } else if (location.pathname === "/accounthelp/viewconsultantdetails") {
    content = <ViewConsultantDetails />;
  } else if (location.pathname === "/accounthelp/emailtemplateguide") {
    content = <EmailTemplateGuide />;
  } else if (location.pathname === "/accounthelp/profilesetup") {
    content = <ProfileSetup />;
  } else if (location.pathname === "/accounthelp/vendorclientmanagement") {
    content = <VendorClientManagement />;
  } else if (location.pathname === "/accounthelp/organizationinformation") {
    content = <OrganizationInformation />;
  } else if (location.pathname === "/accounthelp/managesubmissionsheets") {
    content = <ManageSubmissionSheets />;
  } else if (location.pathname === "/accounthelp/vieworganizationdetails") {
    content = <ViewOrganizationDetails />;
  } else if (location.pathname === "/accounthelp/manageschedulersettings") {
    content = <ManageSchedulerSettings />;
  } else if (location.pathname === "/accounthelp/viewemailhistory") {
    content = <ViewEmailHistory />;
  } else if (location.pathname === "/accounthelp/viewschedulerlogs") {
    content = <ViewSchedulerLogs />;
  } else if (location.pathname === "/accounthelp/managesatreports") {
    content = <ManageSATReports />;
  } else if (location.pathname === "/accounthelp/billingandsatreports") {
    content = <BillingAndSATReports />;
  } else if (location.pathname === "/accounthelp/managebillingandreports") {
    content = <ManageBillingAndReports />;
  } else if (location.pathname === "/accounthelp/userandbillingoverview") {
    content = <UserAndBillingOverview />;
  } else if (location.pathname === "/accounthelp/manageconsultantlicenses") {
    content = <ManageConsultantLicenses />;
  } else if (location.pathname === "/accounthelp/manageorders") {
    content = <ManageOrders />;
  } else if (location.pathname === "/accounthelp/resumebuilder") {
    content = <ResumeBuilder />;
  } else if (location.pathname === "/accounthelp/airesumematcher") {
    content = <AIResumeMatcher />;
  } else if (location.pathname === "/accounthelp/importorcreateresume") {
    content = <ImportOrCreateResume />;
  } else if (location.pathname === "/accounthelp/templatesettings") {
    content = <TemplateSettings />;
  } else if (location.pathname === "/accounthelp/savedjobs") {
    content = <SavedJobs />;
  } else if (location.pathname === "/accounthelp/profilesetup") {
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
          <h3 >Gatnix Help Topics</h3>
          </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
          
              <Link
                to="/accounthelp/create-approval-manager"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Create Approval Manager
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/accounthelp/understanding-billing"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Understanding Billing
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/accounthelp/manage-invoices"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Invoices
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
       
              <Link
                to="/accounthelp/consultant-data"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Consultant Data
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              {/* <Link to="/accounthelp/troubleshooting" style={{ textDecoration: "none", color: "inherit" }}> */}
              Troubleshooting
              {/* </Link> */}
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/accounthelp/satreportgeneration"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SATReportGeneration
              </Link>
            </li>

            <li style={{ padding: "10px", cursor: "pointer" }}>
          
              <Link
                to="/accounthelp/consultantprofileedit"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Consultant Profile Edit
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/accounthelp/schedulerlogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Scheduler Logs
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/viewconsultantdetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Consultant Details
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/accounthelp/emailtemplateguide"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Email Template Guide
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/profilesetup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Profile Setup
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/accounthelp/vendorclientmanagement"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Vendor Client Management
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/organizationinformation"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Organization Information
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/accounthelp/managesubmissionsheets"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Submission Sheets
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/vieworganizationdetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Submission Sheets
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/viewemailhistory"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Email History
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/accounthelp/manageschedulersettings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Scheduler Settings
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/accounthelp/viewschedulerlogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Scheduler Logs
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/managesatreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage SAT Reports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/accounthelp/billingandsatreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Billing And SATReports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/accounthelp/managebillingandreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Billing And Reports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/accounthelp/userandbillingoverview"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                User Billing Overview
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/accounthelp/manageconsultantlicenses"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Consultant Licenses
              </Link>
            </li>

            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/manageconsultantlicenses"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Consultant Licenses
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/accounthelp/manageorders"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Orders
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/resumebuilder"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Resume Builder
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/airesumematcher"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                AIResume Matcher
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/accounthelp/importorcreateresume"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Import CreateResume
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/accounthelp/templatesettings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Template Settings
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/accounthelp/savedjobs"
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

export default GatnixTimesheetHelp;
