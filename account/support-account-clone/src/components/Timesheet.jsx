import React, { useEffect, useState } from "react";
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
import {
  faBars,
  faTimes,
  faCircleChevronUp,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewEmployer from "./ViewEmployer";
import RestrictEmployers from "./RestrictEmployers";
import RestrictConsultants from "./RestrictConsultants";
import Timesheetcontnent from "./Timesheetcontnent";
import ViewSubmittedSheets from "./ViewSubmittedSheets";
import ViewApprovedSheets from "./ViewApprovedSheets";
import PendingTimeSheets from "./PendingTimeSheets";
import RejectedTimeSheets from "./RejectedTimeSheets";
import RecalledTimeSheets from "./RecalledTimeSheets";
import AddOrViewEmployee from "./AddViewEmployee";
import AddOrViewClient from "./AddOrViewClient";
import ManageConsultants from "./Superadmin/ManageConsultants";
import SubmissionComments from "./Superadmin/SubmissionComments";
import EmailTemplates from "./Superadmin/EmailTemplates";
import EmailTemplatesGuide from "./Superadmin/EmailTemplatesGuide";
import SchedulerSettings from "./Superadmin/SchedulerSettings";
import EmailLog from "./Superadmin/EmailLog";
import ResumeAnalyzerGuide from "./Superadmin/ResumeAnalyzerGuide";
import ResumeBuilderGuide from "./Superadmin/ResumeBuilderGuide";
import ResumeMatcherGuide from "./Superadmin/ResumeMatcherGuide";
import SavedResumes from "./Superadmin/SavedResumes";
import SavedJobsAdmin from "./Superadmin/SavedJobsAdmin";
import RestrictionAdminLoginStatus from "./Superadmin/RestrictionAdminLoginStatus";
import RestrictionEmployerLoginStatus from "./Superadmin/RestrictionEmployerLoginStatus";
import RestrictionConsultant from "./Superadmin/RestrictionConsultant";
import RestrictModuleAccess from "./Superadmin/RestrictModuleAccess";
import AdminLoginStatus from "./Superadmin/AdminLoginStatus";
import ConsultantStatusManagement from "./ConsultantStatusManagement";
import AdminAccessManagement from "./AdminAccessManagement";
import GenerateSATReport from "./GenerateSATReport";
import SearchSidebar from "./SearchSidebar";
import SATReportGuide from "./Superadmin/SATReportGuide";
import AdminAccessControl from "./Superadmin/AdminAccessControl";
import AdminProfile from "./Superadmin/AdminProfile";
import AssignLicensesToConsultant from "./Superadmin/AssignLicensesToConsultant";
import Create from "./Create";

// Individual components for each help topic

const Timesheet = () => {
  const location = useLocation();

  const [openMenus, setOpenMenus] = useState({});
  const [isSidebarVisible, setSidebarVisible] = useState(false); // Handles sidebar visibility
  const [activeMenus, setActiveMenus] = useState({}); // Tracks which submenus are open

  // Toggles sidebar visibility
  const toggleSidebarVisibility = () => {
    setSidebarVisible((prev) => !prev);
  };

  const handleMenuClick = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const isActive = (path) => location.pathname === path;

  // useEffect to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setSidebarVisible(true); // Automatically show sidebar if window width > 800px
      } else {
        setSidebarVisible(false); // Hide sidebar on small screens
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run effect only once on mount

  // Toggles the state of a submenu
  const handleSubMenuToggle = (menuName) => {
    setActiveMenus((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
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
  } else if (
    location.pathname === "/timesheet/viewconsultantdetails" ||
    location.pathname === "/admin/viewconsultantdetails" ||
    location.pathname === "/superadmin/viewconsultantdetails"
  ) {
    content = <ViewConsultantDetails />;
  } else if (
    location.pathname === "/timesheet/viewEmployer" ||
    location.pathname === "/admin/viewEmployer" ||
    location.pathname === "/superadmin/viewEmployer"
  ) {
    content = <ViewEmployer />;
  } else if (
    location.pathname === "/timesheet/restrictEmployers" ||
    location.pathname === "/admin/restrictEmployers" ||
    location.pathname === "/superadmin/restrictEmployers"
  ) {
    content = <RestrictEmployers />;
  } else if (
    location.pathname === "/timesheet/restrictConsultants" ||
    location.pathname === "/admin/restrictConsultants" ||
    location.pathname === "/superadmin/restrictConsultants"
  ) {
    content = <RestrictConsultants />;
  } else if (
    location.pathname === "/timesheet/emailtemplateguide" ||
    location.pathname === "/consultant/emailtemplateguide"
  ) {
    content = <EmailTemplateGuide />;
  } else if (location.pathname === "/timesheet/profilesetup") {
    content = <ProfileSetup />;
  } else if (location.pathname === "/timesheet/vendorclientmanagement") {
    content = <VendorClientManagement />;
  } else if (location.pathname === "/timesheet/organizationinformation") {
    content = <OrganizationInformation />;
  } else if (
    location.pathname === "/timesheet/managesubmissionsheets" ||
    location.pathname === "/consultant/managesubmissionsheets"
  ) {
    content = <ManageSubmissionSheets />;
  } else if (location.pathname === "/admin/managesubmissionsheets") {
    content = <ManageSubmissionSheets />;
  } else if (location.pathname === "/employee/rejectedtimesheets") {
    content = <RejectedTimeSheets />;
  } else if (
    location.pathname === "/employee/recalledtimesheets" ||
    location.pathname === "/approverManagers/recalledtimesheets"
  ) {
    content = <RecalledTimeSheets />;
  } else if (location.pathname === "/timesheet/vieworganizationdetails") {
    content = <ViewOrganizationDetails />;
  } else if (location.pathname === "/timesheet/manageschedulersettings") {
    content = <ManageSchedulerSettings />;
  } else if (location.pathname === "/timesheet/viewemailhistory") {
    content = <ViewEmailHistory />;
  } else if (location.pathname === "/timesheet/viewschedulerlogs") {
    content = <ViewSchedulerLogs />;
  } else if (
    location.pathname === "/timesheet/managesatreports" ||
    location.pathname === "/consultant/managesatreports"
  ) {
    content = <ManageSATReports />;
  } else if (location.pathname === "/timesheet/billingandsatreports") {
    content = <BillingAndSATReports />;
  } else if (location.pathname === "/timesheet/managebillingandreports") {
    content = <ManageBillingAndReports />;
  } else if (
    location.pathname === "/timesheet/userandbillingoverview" ||
    location.pathname === "/admin/userandbillingoverview" ||
    location.pathname === "/superadmin/userandbillingoverview"
  ) {
    content = <UserAndBillingOverview />;
  } else if (
    location.pathname === "/timesheet/manageconsultantlicenses" ||
    location.pathname === "/superadmin/manageconsultantlicenses"
  ) {
    content = <ManageConsultantLicenses />;
  } else if (
    location.pathname === "/timesheet/manageorders" ||
    location.pathname === "/superadmin/manageorders"
  ) {
    content = <ManageOrders />;
  } else if (
    location.pathname === "/timesheet/resumebuilder" ||
    location.pathname === "/admin/resumebuilder" ||
    location.pathname === "/consultant/resumebuilder"
  ) {
    content = <ResumeBuilder />;
  } else if (
    location.pathname === "/timesheet/airesumematcher" ||
    location.pathname === "/admin/airesumematcher" ||
    location.pathname === "/superadmin/superadmin" ||
    location.pathname === "/consultant/managesatreports" ||
    location.pathname === "/consultant/airesumematcher" ||
    location.pathname === "/superadmin/airesumematcher"
  ) {
    content = <AIResumeMatcher />;
  } else if (location.pathname === "/timesheet/importorcreateresume") {
    content = <ImportOrCreateResume />;
  } else if (
    location.pathname === "/employee/timesheet" ||
    location.pathname === "/approverManagers/timesheet"
  ) {
    content = <Timesheetcontnent />;
  }
  else if (
    location.pathname === "/approverManagers/project"
  ) {
    content = <Create />;
  }  else if (
    location.pathname === "/employee/timesubmittedSheets" ||
    location.pathname === "/approverManagers/timesubmittedSheets"
  ) {
    content = <ViewSubmittedSheets />;
  } else if (
    location.pathname === "/employee/approvedsheets" ||
    location.pathname === "/approverManagers/approvedsheets"
  ) {
    content = <ViewApprovedSheets />;
  } else if (
    location.pathname === "/employee/pendingtimesheets" ||
    location.pathname === "/approverManagers/pendingtimesheets"
  ) {
    content = <PendingTimeSheets />;
  } else if (location.pathname === "/timesheet/templatesettings") {
    content = <TemplateSettings />;
  } else if (
    location.pathname === "/admin/templatesettings" ||
    location.pathname === "/superadmin/emailtemplateguide"
  ) {
    content = <TemplateSettings />;
  } else if (
    location.pathname === "/timesheet/savedjobs" ||
    location.pathname === "/admin/savedjobs"
  ) {
    content = <SavedJobs />;
  } else if (
    location.pathname === "/approverManagers/rejectedtimesheets"

  ) {
    content = <RejectedTimeSheets />;
  }
   else if (
    location.pathname === "/timesheet/profilesetup" ||
    location.pathname === "/consultant/profilesetup" ||
    location.pathname === "/employee/profile" ||
    location.pathname === "/approverManagers/profile"
  ) {
    content = <ProfileSetup />;
  } else if (location.pathname === "/approverManagers/addOrviewemployee") {
    content = <AddOrViewEmployee />;
  } else if (location.pathname === "/approverManagers/addOrViewClient") {
    content = <AddOrViewClient />;
  }

  // superadmin routes
  else if (location.pathname === "/timesheet/manageConsultantssuperadmin") {
    content = <ManageConsultants />;
  } else if (location.pathname === "/timesheet/submissions-sheet") {
    content = <SubmissionComments />;
  } else if (location.pathname === "/superadmin/emails") {
    content = <EmailTemplates />;
  } else if (location.pathname === "/superadmin/emails") {
    content = <EmailTemplatesGuide />;
  } else if (location.pathname === "/superadmin/schedulersettings") {
    content = <SchedulerSettings />;
  } else if (location.pathname === "/superadmin/emaillogs") {
    content = <EmailLog />;
  } else if (location.pathname === "/superadmin/resumeAnalyzerGuide") {
    content = <ResumeAnalyzerGuide />;
  } else if (location.pathname === "/superadmin/resumeBuilderGuide") {
    content = <ResumeBuilderGuide />;
  } else if (location.pathname === "/superadmin/resumeMatcherGuide") {
    content = <ResumeMatcherGuide />;
  } else if (location.pathname === "/superadmin/savedResumes") {
    content = <SavedResumes />;
  } else if (location.pathname === "/superadmin/savedJobs") {
    content = <SavedJobsAdmin />;
  } else if (location.pathname === "/superadmin/savedJobs") {
    content = <SavedJobsAdmin />;
  } else if (location.pathname === "/superadmin/RestrictionLoginStatus") {
    content = <RestrictionAdminLoginStatus />;
  } else if (location.pathname === "/superadmin/RestrictionEmployerStatus") {
    content = <RestrictionEmployerLoginStatus />;
  } else if (location.pathname === "/superadmin/restrictionConsultant") {
    content = <RestrictionConsultant />;
  } else if (location.pathname === "/superadmin/RestrictModuleAccess") {
    content = <RestrictModuleAccess />;
  } else if (location.pathname === "/superadmin/AdminLoginStatus") {
    content = <AdminLoginStatus />;
  } else if (location.pathname === "/superadmin/EmployerLoginStatus") {
    // content = <EmployerLoginStatus />;
  } else if (location.pathname === "/superadmin/ConsultantStatusManagement") {
    content = <ConsultantStatusManagement />;
  } else if (location.pathname === "/superadmin/AdminAccessManagement") {
    content = <AdminAccessManagement />;
  }
  else if (location.pathname === "/superadmin/AdminProfile") {
    content = <AdminProfile />;
  } else if (location.pathname === "/superadmin/GenerateSATReport") {
    
    content = <GenerateSATReport />;
  }
   
  else if (location.pathname === "/superadmin/AssignLicensesToConsultant") {
    content = <AssignLicensesToConsultant />;
  }else if (location.pathname === "/superadmin/AdminAccessControl") {
    content = <AdminAccessControl />;
  } else if (location.pathname === "/superadmin/SATReportGuide") {
    content = <SATReportGuide />;
  } else if (location.pathname === "/superadmin/AdminAccessManagement") {
    content = <AdminAccessManagement />;
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
        <div
          className="hamburger"
          onClick={toggleSidebarVisibility}
          style={{
            position: "absolute",
            top: "2rem",
            left: "10px",
            zIndex: 1000,
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >
          <FontAwesomeIcon icon={isSidebarVisible ? faTimes : faBars} />
        </div>
        <div
          className="sidebar"
          style={{
            flex: isSidebarVisible ? "0 0 16%" : "0 0 16%",
            padding: isSidebarVisible ? "10px" : "0px",
            backgroundColor: "#f5f5f5",
            transform: isSidebarVisible ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
            height: "100%",
            width: "100%",
            zIndex: 999,
            display: isSidebarVisible ? "flex" : "none",
          }}
        >

          <ul style={{ listStyleType: "none", padding: 0 }}>
          <SearchSidebar isSidebarVisible={isSidebarVisible} openMenus={openMenus} handleMenuClick={handleMenuClick} isActive={isActive} />
    
                  <li>
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
            icon={
              openMenus["approverManagers"]
                ? faCircleChevronUp
                : faCircleChevronDown
            }
          />
        </div>
        {openMenus["approverManagers"] && (
          <ul style={{ listStyleType: "none", marginTop: "5px" }}>
            <li>
              <Link
                to="/approverManagers/profile"
                className={isActive("/approverManagers/profile") ? "active" : ""}
              >
                View or Edit Your Profile
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/addOrviewemployee"
                className={isActive("/approverManagers/addOrviewemployee") ? "active" : ""}
              >
                Add or View Employee
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/addOrViewClient"
                className={isActive("/approverManagers/addOrViewClient") ? "active" : ""}
              >
                Add or View Client
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/project"
                className={isActive("/approverManagers/project") ? "active" : ""}
              >
                Create or Edit Project
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/timesheet"
                className={isActive("/approverManagers/timesheet") ? "active" : ""}
              >
                View All TimeSheets
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/timesubmittedSheets"
                className={isActive("/approverManagers/timesubmittedSheets") ? "active" : ""}
              >
                View Submitted Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/approvedsheets"
                className={isActive("/approverManagers/approvedsheets") ? "active" : ""}
              >
                Approve Time Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/pendingtimesheets"
                className={isActive("/approverManagers/pendingtimesheets") ? "active" : ""}
              >
                View Pending Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/rejectedtimesheets"
                className={isActive("/approverManagers/rejectedtimesheets") ? "active" : ""}
              >
                View Rejected Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/approverManagers/recalledtimesheets"
                className={isActive("/approverManagers/recalledtimesheets") ? "active" : ""}
              >
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
            icon={
              openMenus["employee"]
                ? faCircleChevronUp
                : faCircleChevronDown
            }
          />
        </div>
        {openMenus["employee"] && (
          <ul style={{ listStyleType: "none", marginTop: "5px" }}>
            <li>
              <Link
                to="/employee/profile"
                className={isActive("/employee/profile") ? "active" : ""}
              >
                View or Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/employee/timesheet"
                className={isActive("/employee/timesheet") ? "active" : ""}
              >
                TimeSheet
              </Link>
            </li>
            <li>
              <Link
                to="/employee/timesubmittedSheets"
                className={isActive("/employee/timesubmittedSheets") ? "active" : ""}
              >
                View Submitted Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/employee/approvedsheets"
                className={isActive("/employee/approvedsheets") ? "active" : ""}
              >
                View Approved Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/employee/pendingtimesheets"
                className={isActive("/employee/pendingtimesheets") ? "active" : ""}
              >
                View Pending Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/employee/rejectedtimesheets"
                className={isActive("/employee/rejectedtimesheets") ? "active" : ""}
              >
                View Rejected Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/employee/recalledtimesheets"
                className={isActive("/employee/recalledtimesheets") ? "active" : ""}
              >
                View Recalled Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/employee/help-desk"
                className={isActive("/employee/help-desk") ? "active" : ""}
              >
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
            <li>
              <Link
                to="/admin/viewEmployer"
                className={isActive("/admin/viewEmployer") ? "active" : ""}
              >
                Manage Employer
              </Link>
            </li>
            <li>
              <Link
                to="/admin/viewconsultantdetails"
                className={isActive("/admin/viewconsultantdetails") ? "active" : ""}
              >
                Manage Consultant
              </Link>
            </li>
            <li>
              <Link
                to="/admin/restrictEmployers"
                className={isActive("/admin/restrictEmployers") ? "active" : ""}
              >
                View or Restrict Employers
              </Link>
            </li>
            <li>
              <Link
                to="/admin/restrictConsultants"
                className={isActive("/admin/restrictConsultants") ? "active" : ""}
              >
                View or Restrict Consultants
              </Link>
            </li>
            <li>
              <Link
                to="/admin/managesubmissionsheets"
                className={isActive("/admin/managesubmissionsheets") ? "active" : ""}
              >
                View or Add Submission Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/timesheet/managesatreports"
                className={isActive("/timesheet/managesatreports") ? "active" : ""}
              >
                Generate SAT Reports
              </Link>
            </li>
            <li>
              <Link
                to="/admin/resumebuilder"
                className={isActive("/admin/resumebuilder") ? "active" : ""}
              >
                Open Resume Builder
              </Link>
            </li>
            <li>
              <Link
                to="/admin/airesumematcher"
                className={isActive("/admin/airesumematcher") ? "active" : ""}
              >
                Learn How Resume Analyzer Works
              </Link>
            </li>
   
            <li>
              <Link
                to="/admin/templatesettings"
                className={isActive("/admin/templatesettings") ? "active" : ""}
              >
                Change Template Settings
              </Link>
            </li>
            <li>
              <Link
                to="/admin/savedjobs"
                className={isActive("/admin/savedjobs") ? "active" : ""}
              >
                View My Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/admin/help-desk"
                className={isActive("/admin/help-desk") ? "active" : ""}
              >
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
            icon={
              openMenus["consultant"]
                ? faCircleChevronUp
                : faCircleChevronDown
            }
          />
        </div>
        {openMenus["consultant"] && (
          <ul style={{ listStyleType: "none", marginTop: "5px" }}>
            <li>
              <Link
                to="/consultant/profilesetup"
                className={isActive("/consultant/profilesetup") ? "active" : ""}
              >
                View or Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/consultant/managesubmissionsheets"
                className={isActive("/consultant/managesubmissionsheets") ? "active" : ""}
              >
                View or Add Submission Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/consultant/managesatreports"
                className={isActive("/consultant/managesatreports") ? "active" : ""}
              >
                Generate SAT Reports
              </Link>
            </li>
            <li>
              <Link
                to="/consultant/resumebuilder"
                className={isActive("/consultant/resumebuilder") ? "active" : ""}
              >
                Use Resume Builder
              </Link>
            </li>
            <li>
              <Link
                to="/consultant/managesatreports"
                className={isActive("/consultant/managesatreports") ? "active" : ""}
              >
                Learn How Resume Analyzer Works
              </Link>
            </li>
            <li>
              <Link
                to="/consultant/airesumematcher"
                className={isActive("/consultant/airesumematcher") ? "active" : ""}
              >
                Learn How AI Resume Matcher Works
              </Link>
            </li>
            <li>
              <Link
                to="/consultant/emailtemplateguide"
                className={isActive("/consultant/emailtemplateguide") ? "active" : ""}
              >
                Change Template Settings
              </Link>
            </li>
            <li>
              <Link
                to="/admin/savedjobs"
                className={isActive("/admin/savedjobs") ? "active" : ""}
              >
                View My Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/consultant/help-desk"
                className={isActive("/consultant/help-desk") ? "active" : ""}
              >
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
      icon={
        openMenus["superAdmin"]
          ? faCircleChevronUp
          : faCircleChevronDown
      }
    />
  </div>
  {openMenus["superAdmin"] && (
    <ul style={{ listStyleType: "none", marginTop: "5px" }}>
  <li>
        <Link
          to="/timesheet/manageConsultantssuperadmin"
          className={isActive("/timesheet/manageConsultantssuperadmin") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Manage or Edit Consultants
        </Link>
      </li>
  <li>
        <Link
          to="/timesheet/submissions-sheet"
          className={isActive("/timesheet/submissions-sheet") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View or Add Submission Sheets
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/emails"
          className={isActive("/superadmin/emails") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Manage E-mails
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/emaillogs"
          className={isActive("/superadmin/emaillogs") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          E-mails Logs
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/schedulersettings"
          className={isActive("/superadmin/schedulersettings") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View Scheduler Logs
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/userandbillingoverview"
          className={isActive("/superadmin/userandbillingoverview") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View Billing Details
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/manageconsultantlicenses"
          className={isActive("/superadmin/manageconsultantlicenses") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View My Licenses
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/manageorders"
          className={isActive("/superadmin/manageorders") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View My Orders
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/resumeBuilderGuide"
          className={isActive("/superadmin/resumeBuilderGuide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Use Resume Builder
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/resumeAnalyzerGuide"
          className={isActive("/superadmin/resumeAnalyzerGuide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Learn How Resume Analyzer Works
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/airesumematcher"
          className={isActive("/superadmin/airesumematcher") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Learn How AI Resume Matcher Works
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/savedResumes"
          className={isActive("/superadmin/savedResumes") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Saved Resumes
        </Link>
      </li>
  <li>
        <Link
          to="/admin/savedjobs"
          className={isActive("/admin/savedJobs") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Saved Job
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/emailtemplateguide"
          className={isActive("/superadmin/emailtemplateguide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Change Template Settings
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/RestrictionLoginStatus"
          className={isActive("/superadmin/RestrictionLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restriction Login Status
        </Link>
      </li>
  {/* <li>
        <Link
          to="/superadmin/savedjobs"
          className={isActive("/superadmin/savedjobs") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View My Saved Jobs
        </Link>
      </li> */}
  <li>
        <Link
          to="/superadmin/RestrictModuleAccess"
          className={isActive("/superadmin/RestrictModuleAccess") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restricting Module Access
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/AdminLoginStatus"
          className={isActive("/superadmin/AdminLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restriction Admin Login
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/EmployerLoginStatus"
          className={isActive("/superadmin/EmployerLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Employer Login Status
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/ConsultantStatusManagement"
          className={isActive("/superadmin/ConsultantStatusManagement") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Consultant Status Management
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/AdminAccessManagement"
          className={isActive("/superadmin/AdminAccessManagement") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Admin Access Management
        </Link>
      </li>
  <li>
        <Link
          to="/superadmin/GenerateSATReport"
          className={isActive("/superadmin/GenerateSATReport") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Generate SAT Report
        </Link>
      </li>
      <li>
        <Link
          to="/superadmin/AdminProfile"
          className={isActive("/superadmin/AdminProfile") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
Admin Profile
        </Link>
      </li>
      <li>
        <Link
          to="/superadmin/AdminAccessControl"
          className={isActive("/superadmin/AdminAccessControl") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
      Admin Access Control
        </Link>
      </li>
      <li>
        <Link
          to="/superadmin/AssignLicensesToConsultant"
          className={isActive("/superadmin/AssignLicensesToConsultant") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
 Assign Licenses To Consultant
        </Link>
      </li>
      <li>
        <Link
          to="/superadmin/SATReportGuide"
          className={isActive("/superadmin/SATReportGuide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
        SAT Report Guide
        </Link>
      </li>
  {/* <li>
        <Link
          to="/superadmin/help-desk"
          className={isActive("/superadmin/help-desk") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Access Help Desk
        </Link>
      </li> */}
    </ul>
  )}
</li>


            {/* Repeat similar structure for Sheet, Submitted Sheets, Approved Sheets, Pending Sheets, Rejected Sheets, and Recalled Sheets */}

            <li style={{ padding: "10px", cursor: "pointer" }}>
              {/* <h3 >Gatnix Help Topics</h3> */}
            </li>

            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
       
              <Link
                to="/timesheet/consultant-data"
                style={{ textDecoration: "none", color: "inherit" }}
              >
               Create A Project
              </Link>
            </li> */}
            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link to="/timesheet/troubleshooting" style={{ textDecoration: "none", color: "inherit" }}>
              Create Time Sheet
              </Link>
            </li> */}
            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/timesheet/satreportgeneration"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SATReportGeneration
              </Link>
            </li> */}

            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
          
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
            </li> */}
          </ul>
        </div>
        <div
          className="hamburger"
          onClick={toggleSidebarVisibility}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 1000,
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >
          <FontAwesomeIcon icon={isSidebarVisible ? faTimes : faBars} />
        </div>
        {/* Content Area */}
        <div
          className="content-area"
          style={{
            flex: "1",
            padding: "20px",
            backgroundColor: "white",
            height: "90vh",
            overflowY: "scroll",
          }}
        >
          {content}
        </div>
      </div>
      {/* <Footer1 /> */}
    </>
  );
};

export default Timesheet;
