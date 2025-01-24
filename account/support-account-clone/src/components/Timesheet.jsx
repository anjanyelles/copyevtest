import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/TimeSheetFolder/GatnixAccountHelp.css";
import Header from "./Header";
import Troubleshooting from "./Troubleshooting"; // Import Troubleshooting component
import CreateApprovalManager from "../components/TimeSheetFolder/Childcomponent/CreateApprovalManager";
import UnderstandingBilling from "../components/TimeSheetFolder/Childcomponent/UnderstandingBilling";
import ManageInvoices from "../components/TimeSheetFolder/Childcomponent/ManageInvoices";
import ConsultantData from "../components/TimeSheetFolder/Childcomponent/ConsultantData";
import SATReportGeneration from "../components/TimeSheetFolder/Childcomponent/SATReportGeneration";
import ConsultantProfileEdit from "../components/TimeSheetFolder/Childcomponent/ConsultantProfileEdit";
import SchedulerLogs from "../components/TimeSheetFolder/Childcomponent/SchedulerLogs";
import ViewConsultantDetails from "../components/TimeSheetFolder/Childcomponent/ViewConsultantDetails";
import EmailTemplateGuide from "../components/TimeSheetFolder/EmailTemplateGuide";
import ProfileSetup from "../components/TimeSheetFolder/Childcomponent/ProfileSetup";
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
import ManageSchedulerSettings from "../components/TimeSheetFolder/ManageSchedulerSettings";
import ViewSchedulerLogs from "./ViewSchedulerLogs";
import ManageSATReports from "./ManageSATReports";
import BillingAndSATReports from "../components/TimeSheetFolder/BillingAndSATReports";
import ManageBillingAndReports from "./ManageBillingAndReports";
import UserAndBillingOverview from "./UserAndBillingOverview";
import ManageConsultantLicenses from "./ManageConsultantLicenses";
import ManageOrders from "./ManageOrders";
import ResumeBuilder from "./ResumeBuilder";
import AIResumeMatcher from "../components/TimeSheetFolder/AIResumeMatcher";
import ImportOrCreateResume from "./ImportOrCreateResume";
import TemplateSettings from "./TemplateSettings";
import SavedJobs from "../components/SavedJobs";
import Footer1 from "./Footer1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewEmployer from "../components/ViewEmployer";
import RestrictEmployers from "../components/RestrictEmployers";
import RestrictConsultants from "../components/RestrictConsultants";
import Timesheetcontnent from "../components/Timesheetcontnent";
import ViewSubmittedSheets from "../components/ViewSubmittedSheets";
import ViewApprovedSheets from "../components/ViewApprovedSheets";
import PendingTimeSheets from "../components/PendingTimeSheets";
import RejectedTimeSheets from "../components/RejectedTimeSheets";
import RecalledTimeSheets from "../components/RecalledTimeSheets";
import AddOrViewEmployee from "../components/TimeSheetFolder/AddViewEmployee";
import AddOrViewClient from "../components/TimeSheetFolder/AddOrViewClient";
import ManageConsultants from "../components/TimeSheetFolder/Superadmin/ManageConsultants";
import SubmissionComments from "../components/TimeSheetFolder/Superadmin/SubmissionComments";
import EmailTemplates from "../components/TimeSheetFolder/Superadmin/EmailTemplates";
import EmailTemplatesGuide from "../components/TimeSheetFolder/Superadmin/EmailTemplatesGuide";
import SchedulerSettings from "../components/TimeSheetFolder/Superadmin/SchedulerSettings";
// import EmailLog from "./Superadmin/EmailLog";
import ResumeAnalyzerGuide from "../components/TimeSheetFolder/Superadmin/ResumeAnalyzerGuide";
import ResumeBuilderGuide from "../components/TimeSheetFolder/Superadmin/ResumeBuilderGuide";
import ResumeMatcherGuide from "../components/TimeSheetFolder/Superadmin/ResumeMatcherGuide";
import SavedResumes from "../components/TimeSheetFolder/Superadmin/SavedResumes";
import SavedJobsAdmin from "../components/TimeSheetFolder/Superadmin/SavedJobsAdmin";
import RestrictionAdminLoginStatus from "../components/TimeSheetFolder/Superadmin/RestrictionAdminLoginStatus";
import RestrictionEmployerLoginStatus from "../components/TimeSheetFolder/Superadmin/RestrictionEmployerLoginStatus";
import RestrictionConsultant from "../components/TimeSheetFolder/Superadmin/RestrictionConsultant";
import RestrictModuleAccess from "../components/TimeSheetFolder/Superadmin/RestrictModuleAccess";
import AdminLoginStatus from "../components/TimeSheetFolder/Superadmin/AdminLoginStatus";
import ConsultantStatusManagement from "../components/TimeSheetFolder/ConsultantStatusManagement";
import AdminAccessManagement from "../components/TimeSheetFolder/AdminAccessManagement";
import GenerateSATReport from "../components/TimeSheetFolder/GenerateSATReport";
import SearchSidebar from "../components/SearchSidebar";
import SATReportGuide from "../components/TimeSheetFolder/Superadmin/SATReportGuide";
import AdminAccessControl from "../components/TimeSheetFolder/Superadmin/AdminAccessControl";
import AdminProfile from "../components/TimeSheetFolder/Superadmin/AdminProfile";
import AssignLicensesToConsultant from "../components/TimeSheetFolder/Superadmin/AssignLicensesToConsultant";
import Create from "../components/TimeSheetFolder/Create";
import ProfileEmployee from "../components/TimeSheetFolder/Childcomponent/ProfileEmployee";
import TimesheetsEmployee from "../components/TimeSheetFolder/Childcomponent/TimesheetsEmployee";
import SubmittedSheetsEmployee from "../components/TimeSheetFolder/Childcomponent/SubmittedSheetsEmployee";
import ApprovedSheetsEmployee from "../components/TimeSheetFolder/Childcomponent/ApprovedSheetsEmployee";
import PendingSheetsEmployee from "../components/TimeSheetFolder/Childcomponent/PendingSheetsEmployee";
import RejectedTimeSheetsEmployee from "../components/TimeSheetFolder/Childcomponent/RejectedTimeSheetsEmployee";
import SuperAdminProfile from "../components/TimeSheetFolder/Superadmin/SuperAdminProfile";
import ApprovalManagerSuperAdmin from "../components/TimeSheetFolder/Superadmin/ApprovalManagerSuperAdmin";
import EmployeeSuperAdmin from "../components/TimeSheetFolder/Superadmin/EmployeeSuperAdmin";
import EmployeeRecalledSheet from "../components/TimeSheetFolder/Childcomponent/EmployeeRecalledSheet";
import ApprovalManagerRecalled from "../components/TimeSheetFolder/Childcomponent/ApprovalManagerRecalled";
import SuperAdminApprovedSheet from "../components/TimeSheetFolder/Superadmin/SuperAdminApprovedSheet";
import SuperAdminPendingSheet from "../components/TimeSheetFolder/Superadmin/SuperAdminPendingSheet";
import SuperAdminRejectedSheet from "../components/TimeSheetFolder/Superadmin/SuperAdminRejectedSheet";
import SuperAdminRecalledSheet from "../components/TimeSheetFolder/Superadmin/SuperAdminRecalledSheet";
import TimeSheetSettings from "../components/TimeSheetFolder/Superadmin/TimeSheetSettings";
import OrganizationSettings from "../components/TimeSheetFolder/Superadmin/OrganizationSettings";
import SuperAdminHelpDesk from "../components/TimeSheetFolder/Superadmin/SuperAdminHelpDesk";
import SuperAdminSubmittedSheet from "../components/TimeSheetFolder/Superadmin/SuperAdminSubmittedSheet";
import SuperAdminProject from "../components/TimeSheetFolder/Superadmin/SuperAdminProject";
import SearchSidebarTime from "./SearchSidebarTime";

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
  if (location.pathname === "/time/timesheet/create-approval-manager") {
    content = <CreateApprovalManager />;
  } else if (location.pathname === "/time/timesheet/understanding-billing") {
    content = <UnderstandingBilling />;
  } else if (location.pathname === "/time/timesheet/manage-invoices") {
    content = <ManageInvoices />;
  } else if (location.pathname === "/time/timesheet/consultant-data") {
    content = <ConsultantData />;
  } else if (location.pathname === "/time/timesheet/troubleshooting") {
    content = <Troubleshooting />;
  } else if (location.pathname === "/time/timesheet/satreportgeneration") {
    content = <SATReportGeneration />;
  } else if (location.pathname === "/time/timesheet/consultantprofileedit") {
    content = <ConsultantProfileEdit />;
  } else if (location.pathname === "/time/timesheet/schedulerlogs") {
    content = <SchedulerLogs />;
  } else if (
    location.pathname === "/time/timesheet/viewconsultantdetails" ||
    location.pathname === "/time/admin/viewconsultantdetails" ||
    location.pathname === "/time/superadmin/viewconsultantdetails"
  ) {
    content = <ViewConsultantDetails />;
  } else if (
    location.pathname === "/time/timesheet/viewEmployer" ||
    location.pathname === "/time/admin/viewEmployer" ||
    location.pathname === "/time/superadmin/viewEmployer"
  ) {
    content = <ViewEmployer />;
  } else if (
    location.pathname === "/time/timesheet/restrictEmployers" ||
    location.pathname === "/time/admin/restrictEmployers" ||
    location.pathname === "/time/superadmin/restrictEmployers"
  ) {
    content = <RestrictEmployers />;
  } else if (
    location.pathname === "/time/timesheet/restrictConsultants" ||
    location.pathname === "/time/admin/restrictConsultants" ||
    location.pathname === "/time/superadmin/restrictConsultants"
  ) {
    content = <RestrictConsultants />;
  } else if (
    location.pathname === "/time/timesheet/emailtemplateguide" ||
    location.pathname === "/time/consultant/emailtemplateguide"
  ) {
    content = <EmailTemplateGuide />;
  } else if (location.pathname === "/time/timesheet/profilesetup") {
    content = <ProfileSetup />;
  } else if (location.pathname === "/time/timesheet/vendorclientmanagement") {
    content = <VendorClientManagement />;
  } else if (location.pathname === "/time/timesheet/organizationinformation") {
    content = <OrganizationInformation />;
  } else if (
    location.pathname === "/time/timesheet/managesubmissionsheets" ||
    location.pathname === "/time/consultant/managesubmissionsheets"
  ) {
    content = <ManageSubmissionSheets />;
  } else if (location.pathname === "/time/admin/managesubmissionsheets") {
    content = <ManageSubmissionSheets />;
  } else if (location.pathname === "/time/employee/rejectedtimesheets") {
    content = <RejectedTimeSheets />;
  } else if 
    (location.pathname === "/time/employee/recalledtimesheets" ){
      content = <EmployeeRecalledSheet />
    }
    else if
   ( location.pathname === "/time/approverManagers/recalledtimesheets"){
     content = <ApprovalManagerRecalled />;
   
  } else if (location.pathname === "/time/timesheet/vieworganizationdetails") {
    content = <ViewOrganizationDetails />;
  } else if (location.pathname === "/time/timesheet/manageschedulersettings") {
    content = <ManageSchedulerSettings />;
  } else if (location.pathname === "/time/timesheet/viewemailhistory") {
    content = <ViewEmailHistory />;
  } else if (location.pathname === "/time/timesheet/viewschedulerlogs") {
    content = <ViewSchedulerLogs />;
  } else if (
    location.pathname === "/time/timesheet/managesatreports" ||
    location.pathname === "/time/consultant/managesatreports"
  ) {
    content = <ManageSATReports />;
  } else if (location.pathname === "/time/timesheet/billingandsatreports") {
    content = <BillingAndSATReports />;
  } else if (location.pathname === "/time/timesheet/managebillingandreports") {
    content = <ManageBillingAndReports />;
  } else if (
    location.pathname === "/time/timesheet/userandbillingoverview" ||
    location.pathname === "/time/admin/userandbillingoverview" ||
    location.pathname === "/time/superadmin/userandbillingoverview"
  ) {
    content = <UserAndBillingOverview />;
  } else if (
    location.pathname === "/time/timesheet/manageconsultantlicenses" ||
    location.pathname === "/time/superadmin/manageconsultantlicenses"
  ) {
    content = <ManageConsultantLicenses />;
  } else if (
    location.pathname === "/time/timesheet/manageorders" ||
    location.pathname === "/time/superadmin/manageorders"
  ) {
    content = <ManageOrders />;
  } else if (
    location.pathname === "/time/timesheet/resumebuilder" ||
    location.pathname === "/time/admin/resumebuilder" ||
    location.pathname === "/time/consultant/resumebuilder"
  ) {
    content = <ResumeBuilder />;
  } else if (
    location.pathname === "/time/timesheet/airesumematcher" ||
    location.pathname === "/time/admin/airesumematcher" ||
    location.pathname === "/time/superadmin/superadmin" ||
    location.pathname === "/time/consultant/managesatreports" ||
    location.pathname === "/time/consultant/airesumematcher" ||
    location.pathname === "/time/superadmin/airesumematcher"
  ) {
    content = <AIResumeMatcher />;
  } else if (location.pathname === "/time/timesheet/importorcreateresume") {
    content = <ImportOrCreateResume />;
  } else if (
    location.pathname === "/time/employee/timesheet" ||
    location.pathname === "/time/approverManagers/timesheet"
  ) {
    content = <Timesheetcontnent />;
  }
  else if (
    location.pathname === "/time/approverManagers/project"
  ) {
    content = <Create />;
  }  else if (
   
    location.pathname === "/time/approverManagers/timesubmittedSheets"
  ) {
    content = <ViewSubmittedSheets />;
  } else if (
    
    location.pathname === "/time/approverManagers/approvedsheets"
  ) {
    content = <ViewApprovedSheets />;
  } else if (
   
    location.pathname === "/time/approverManagers/pendingtimesheets"
  ) {
    content = <PendingTimeSheets />;
  } else if (location.pathname === "/time/timesheet/templatesettings") {
    content = <TemplateSettings />;
  } else if (
    location.pathname === "/time/admin/templatesettings" ||
    location.pathname === "/time/superadmin/emailtemplateguide"
  ) {
    content = <TemplateSettings />;
  } else if (
    location.pathname === "/time/timesheet/savedjobs" ||
    location.pathname === "/time/admin/savedjobs"
  ) {
    content = <SavedJobs />;
  } else if (
    location.pathname === "/time/approverManagers/rejectedtimesheets"

  ) {
    content = <RejectedTimeSheets />;
  }
   else if (
    location.pathname === "/time/timesheet/profilesetup" ||
    location.pathname === "/time/consultant/profilesetup" ||

    location.pathname === "/time/approverManagers/profile"
  ) {
    content = <ProfileSetup />;
    
  } else if (location.pathname === "/time/approverManagers/addOrviewemployee") {
    content = <AddOrViewEmployee />;
  } else if (location.pathname === "/time/approverManagers/addOrViewClient") {
    content = <AddOrViewClient />;
  }

  // superadmin routes
  else if (location.pathname === "/time/timesheet/manageConsultantssuperadmin") {
    content = <ManageConsultants />;
  } else if (location.pathname === "/time/timesheet/submissions-sheet") {
    content = <SubmissionComments />;
  } else if (location.pathname === "/time/superadmin/emails") {
    content = <EmailTemplates />;
  } else if (location.pathname === "/time/superadmin/emails") {
    content = <EmailTemplatesGuide />;
  } else if (location.pathname === "/time/superadmin/schedulersettings") {
    content = <SchedulerSettings />;
  // } else if (location.pathname === "/time/superadmin/emaillogs") {
  //   content = <EmailLog />;
  } else if (location.pathname === "/time/superadmin/resumeAnalyzerGuide") {
    content = <ResumeAnalyzerGuide />;
  } else if (location.pathname === "/time/superadmin/resumeBuilderGuide") {
    content = <ResumeBuilderGuide />;
  } else if (location.pathname === "/time/superadmin/resumeMatcherGuide") {
    content = <ResumeMatcherGuide />;
  } else if (location.pathname === "/time/superadmin/savedResumes") {
    content = <SavedResumes />;
  } else if (location.pathname === "/time/superadmin/savedJobs") {
    content = <SavedJobsAdmin />;
  } else if (location.pathname === "/time/superadmin/savedJobs") {
    content = <SavedJobsAdmin />;
  } else if (location.pathname === "/time/superadmin/RestrictionLoginStatus") {
    content = <RestrictionAdminLoginStatus />;
  } else if (location.pathname === "/time/superadmin/RestrictionEmployerStatus") {
    content = <RestrictionEmployerLoginStatus />;
  } else if (location.pathname === "/time/superadmin/restrictionConsultant") {
    content = <RestrictionConsultant />;
  } else if (location.pathname === "/time/superadmin/RestrictModuleAccess") {
    content = <RestrictModuleAccess />;
  } else if (location.pathname === "/time/superadmin/AdminLoginStatus") {
    content = <AdminLoginStatus />;
  } else if (location.pathname === "/time/superadmin/EmployerLoginStatus") {
    // content = <EmployerLoginStatus />;
  } else if (location.pathname === "/time/superadmin/ConsultantStatusManagement") {
    content = <ConsultantStatusManagement />;
  } else if (location.pathname === "/time/superadmin/AdminAccessManagement") {
    content = <AdminAccessManagement />;
  }
  else if (location.pathname === "/time/superadmin/AdminProfile") {
    content = <AdminProfile />;
  } else if (location.pathname === "/time/superadmin/GenerateSATReport") {
    
    content = <GenerateSATReport />;
  }
   
  else if (location.pathname === "/time/superadmin/AssignLicensesToConsultant") {
    content = <AssignLicensesToConsultant />;
  }else if (location.pathname === "/time/superadmin/AdminAccessControl") {
    content = <AdminAccessControl />;
  } else if (location.pathname === "/time/superadmin/SATReportGuide") {
    content = <SATReportGuide />;
  } else if (location.pathname === "/time/superadmin/AdminAccessManagement") {
    content = <AdminAccessManagement />;

  } else if (location.pathname === "/time/employee/profileemployee"){
    content = <ProfileEmployee />;
  
  } else if (location.pathname === "/time/employee/timesheetsemployee"){
    content = <TimesheetsEmployee />;
  
  } else if ( location.pathname === "/time/employee/timesubmittedSheets" ) {
    content = <SubmittedSheetsEmployee />;
  
  } else if (location.pathname === "/time/employee/approvedsheetsemployee" ){
    content = < ApprovedSheetsEmployee />;
  }
     else if (location.pathname === "/time/employee/pendingtimesheets" ){
    
    content = <PendingSheetsEmployee />
  }
  else if (location.pathname === "/time/employee/rejectedtimesheetsemployee") {
    content = <RejectedTimeSheetsEmployee />; 
  }

  else if (location.pathname === "/time/superadmin/superadminprofile") {
    content = <SuperAdminProfile />; 
  }

  else if (location.pathname === "/time/superadmin/superadminapprovalmanager") {
    content = <ApprovalManagerSuperAdmin />; 
  }

  else if (location.pathname === "/time/superadmin/superadminemployee") {
    content = <EmployeeSuperAdmin />; 
  } 

  else if (location.pathname === "/time/superadmin/superadminsubmittedsheets"){
    content = <SuperAdminSubmittedSheet />;
}

  else if (location.pathname === "/time/superadmin/superadminapprovedsheets"){
    content = <SuperAdminApprovedSheet />;
}
else if (location .pathname ==="/time/superadmin/superadminpendingsheets"){
  content = <SuperAdminPendingSheet />
}

else if (location.pathname ==="/time/superadmin/superadminrejectedsheets"){
  content = <SuperAdminRejectedSheet />;
} 

else if (location.pathname ==="/time/superadmin/superadminrecalledsheets"){
  content = <SuperAdminRecalledSheet />;
}

else if  (location .pathname ==="/time/superadmin/timesheetsettings"){
  content = <TimeSheetSettings />;
}
else if (location.pathname === "/time/superadmin/organizationsettings"){
  content = <OrganizationSettings />;

} else if (location.pathname === "/time/superadmin/helpdesk"){
content = <SuperAdminHelpDesk />
}

else if (location.pathname === "/time/superadmin/superadminproject"){
  content = <SuperAdminProject />
  }
  else {
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
          <SearchSidebarTime isSidebarVisible={isSidebarVisible} openMenus={openMenus} handleMenuClick={handleMenuClick} isActive={isActive} />
          <h3  style={{textAlign:'start'}}>Time sheets</h3>
                  <li>
        <div
          onClick={() => handleMenuClick("approverManagers")}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Approval Managers</span>
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
                to="/time/approverManagers/profile"
                className={isActive("/time/approverManagers/profile") ? "active" : ""}
              >
                View or Edit Your Profile
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/addOrviewemployee"
                className={isActive("/time/approverManagers/addOrviewemployee") ? "active" : ""}
              >
                Add or View Employee
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/addOrViewClient"
                className={isActive("/time/approverManagers/addOrViewClient") ? "active" : ""}
              >
                Add or View Client
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/project"
                className={isActive("/time/approverManagers/project") ? "active" : ""}
              >
                Create or Edit Project
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/timesheet"
                className={isActive("/time/approverManagers/timesheet") ? "active" : ""}
              >
                View All TimeSheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/timesubmittedSheets"
                className={isActive("/time/approverManagers/timesubmittedSheets") ? "active" : ""}
              >
                View Submitted Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/approvedsheets"
                className={isActive("/time/approverManagers/approvedsheets") ? "active" : ""}
              >
                Approve Time Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/pendingtimesheets"
                className={isActive("/time/approverManagers/pendingtimesheets") ? "active" : ""}
              >
                View Pending Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/rejectedtimesheets"
                className={isActive("/time/approverManagers/rejectedtimesheets") ? "active" : ""}
              >
                View Rejected Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/approverManagers/recalledtimesheets"
                className={isActive("/time/approverManagers/recalledtimesheets") ? "active" : ""}
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
                to="/time/employee/profileemployee"
                className={isActive("/time/employee/profileemployee") ? "active" : ""}
              >
                View or Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/time/employee/timesheetsemployee"
                className={isActive("/time/employee/timesheetsemployee") ? "active" : ""}
              >
                TimeSheet
              </Link>
            </li>
            <li>
              <Link
                to="/time/employee/timesubmittedSheets"
                className={isActive("/time/employee/timesubmittedSheets") ? "active" : ""}
              >
                View Submitted Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/employee/approvedsheetsemployee"
                className={isActive("/time/employee/approvedsheetsemployee") ? "active" : ""}
              >
                View Approved Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/employee/pendingtimesheets"
                className={isActive("/time/employee/pendingtimesheets") ? "active" : ""}
              >
                View Pending Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/employee/rejectedtimesheetsemployee"
                className={isActive("/time/employee/rejectedtimesheetsemployee") ? "active" : ""}
              >
                View Rejected Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/employee/recalledtimesheets"
                className={isActive("/time/employee/recalledtimesheets") ? "active" : ""}
              >
                View Recalled Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/employee/help-desk"
                className={isActive("/time/employee/help-desk") ? "active" : ""}
              >
                Help Desk
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* <li style={{ padding: "10px", cursor: "pointer" }}>
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
        </div> */}
        {/* {openMenus["admin"] && (
          <ul style={{ listStyleType: "none", marginTop: "5px" }}>
            <li>
              <Link
                to="/time/admin/viewEmployer"
                className={isActive("/time/admin/viewEmployer") ? "active" : ""}
              >
                Manage Employer
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/viewconsultantdetails"
                className={isActive("/time/admin/viewconsultantdetails") ? "active" : ""}
              >
                Manage Consultant
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/restrictEmployers"
                className={isActive("/time/admin/restrictEmployers") ? "active" : ""}
              >
                View or Restrict Employers
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/restrictConsultants"
                className={isActive("/time/admin/restrictConsultants") ? "active" : ""}
              >
                View or Restrict Consultants
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/managesubmissionsheets"
                className={isActive("/time/admin/managesubmissionsheets") ? "active" : ""}
              >
                View or Add Submission Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/timesheet/managesatreports"
                className={isActive("/time/timesheet/managesatreports") ? "active" : ""}
              >
                Generate SAT Reports
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/resumebuilder"
                className={isActive("/time/admin/resumebuilder") ? "active" : ""}
              >
                Open Resume Builder
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/airesumematcher"
                className={isActive("/time/admin/airesumematcher") ? "active" : ""}
              >
                Learn How Resume Analyzer Works
              </Link>
            </li>
   
            <li>
              <Link
                to="/time/admin/templatesettings"
                className={isActive("/time/admin/templatesettings") ? "active" : ""}
              >
                Change Template Settings
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/savedjobs"
                className={isActive("/time/admin/savedjobs") ? "active" : ""}
              >
                View My Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/help-desk"
                className={isActive("/time/admin/help-desk") ? "active" : ""}
              >
                Access Help Desk
              </Link>
            </li>
          </ul>
        )}
      </li> */}

      {/* <li style={{ padding: "10px", cursor: "pointer" }}>
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
                to="/time/consultant/profilesetup"
                className={isActive("/time/consultant/profilesetup") ? "active" : ""}
              >
                View or Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/time/consultant/managesubmissionsheets"
                className={isActive("/time/consultant/managesubmissionsheets") ? "active" : ""}
              >
                View or Add Submission Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/time/consultant/managesatreports"
                className={isActive("/time/consultant/managesatreports") ? "active" : ""}
              >
                Generate SAT Reports
              </Link>
            </li>
            <li>
              <Link
                to="/time/consultant/resumebuilder"
                className={isActive("/time/consultant/resumebuilder") ? "active" : ""}
              >
                Use Resume Builder
              </Link>
            </li>
            <li>
              <Link
                to="/time/consultant/managesatreports"
                className={isActive("/time/consultant/managesatreports") ? "active" : ""}
              >
                Learn How Resume Analyzer Works
              </Link>
            </li>
            <li>
              <Link
                to="/time/consultant/airesumematcher"
                className={isActive("/time/consultant/airesumematcher") ? "active" : ""}
              >
                Learn How AI Resume Matcher Works
              </Link>
            </li>
            <li>
              <Link
                to="/time/consultant/emailtemplateguide"
                className={isActive("/time/consultant/emailtemplateguide") ? "active" : ""}
              >
                Change Template Settings
              </Link>
            </li>
            <li>
              <Link
                to="/time/admin/savedjobs"
                className={isActive("/time/admin/savedjobs") ? "active" : ""}
              >
                View My Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/time/consultant/help-desk"
                className={isActive("/time/consultant/help-desk") ? "active" : ""}
              >
                Access Help Desk
              </Link>
            </li>
          </ul>
        )}
      </li> */}


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
          to="/time/superadmin/superadminprofile"
          className={isActive("/time/superadmin/superadminprofile") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View or Edit Profile
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/superadminapprovalmanager"
          className={isActive("/time/superadmin/superadminapprovalmanager") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View or Add Approval Manager
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/superadminemployee"
          className={isActive("/time/superadmin/superadminemployee") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View or Add Employee 
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/emaillogs"
          className={isActive("/time/superadmin/emaillogs") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View or Add Client
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/superadminproject"
          className={isActive("/time/superadmin/superadminproject") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View or Create Project
        </Link>
      </li>

      <li>
        <Link
          to="/time/superadmin/superadminsubmittedsheets"
          className={isActive("/time/superadmin/superadminsubmittedsheets") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
             Submitted TimeSheets
        </Link>
      </li>
  <li></li>
  <li>
        <Link
          to="/time/superadmin/superadminapprovedsheets"
          className={isActive("/time/superadmin/superadminapprovedsheets") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
             View  Approved TimeSheets
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/superadminpendingsheets"
          className={isActive("/time/superadmin/superadminpendingsheets") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
               View Pending TimeSheets
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/superadminrejectedsheets"
          className={isActive("/time/superadmin/superadminrejectedsheets") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
             View Rejected TimeSheets
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/superadminrecalledsheets"
          className={isActive("/time/superadmin/superadminrecalledsheets") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
             View Recalled TimeSheets
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/timesheetsettings"
          className={isActive("/time/superadmin/timesheetsettings") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          TimeSheet Settings
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/organizationsettings"
          className={isActive("/time/superadmin/organizationsettings") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Organization Settings
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/helpdesk"
          className={isActive("/time/superadmin/helpdesk") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          HelpDesk
        </Link>
        
       </li>
  {/* <li> */}
        {/* <Link */}
          {/* to="/time/admin/savedjobs" */}
          {/* className={isActive("/time/admin/savedJobs") ? "active" : ""} */}
          {/* style={{ textDecoration: "none", color: "inherit" }} */}
        {/* > */}
          {/* Saved Job */}
        {/* </Link> */} 
      {/* </li>
  <li>
        <Link
          to="/time/superadmin/emailtemplateguide"
          className={isActive("/time/superadmin/emailtemplateguide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Change Template Settings
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/RestrictionLoginStatus"
          className={isActive("/time/superadmin/RestrictionLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restriction Login Status
        </Link>
      </li> */}
  {/* <li>
        <Link
          to="/time/superadmin/savedjobs"
          className={isActive("/time/superadmin/savedjobs") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View My Saved Jobs
        </Link>
      </li> */}
  {/* <li>
        <Link
          to="/time/superadmin/RestrictModuleAccess"
          className={isActive("/time/superadmin/RestrictModuleAccess") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restricting Module Access
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/AdminLoginStatus"
          className={isActive("/time/superadmin/AdminLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restriction Admin Login
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/EmployerLoginStatus"
          className={isActive("/time/superadmin/EmployerLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Employer Login Status
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/ConsultantStatusManagement"
          className={isActive("/time/superadmin/ConsultantStatusManagement") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Consultant Status Management
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/AdminAccessManagement"
          className={isActive("/time/superadmin/AdminAccessManagement") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Admin Access Management
        </Link>
      </li>
  <li>
        <Link
          to="/time/superadmin/GenerateSATReport"
          className={isActive("/time/superadmin/GenerateSATReport") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Generate SAT Report
        </Link>
      </li>
      <li>
        <Link
          to="/time/superadmin/AdminProfile"
          className={isActive("/time/superadmin/AdminProfile") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
Admin Profile
        </Link>
      </li>
      <li>
        <Link
          to="/time/superadmin/AdminAccessControl"
          className={isActive("/time/superadmin/AdminAccessControl") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
      Admin Access Control
        </Link>
      </li>
      <li>
        <Link
          to="/time/superadmin/AssignLicensesToConsultant"
          className={isActive("/time/superadmin/AssignLicensesToConsultant") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
 Assign Licenses To Consultant
        </Link>
      </li>
      <li>
        <Link
          to="/time/superadmin/SATReportGuide"
          className={isActive("/time/superadmin/SATReportGuide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
        SAT Report Guide
        </Link>
      </li> */}
  {/* <li>
        <Link
          to="/time/superadmin/help-desk"
          className={isActive("/time/superadmin/help-desk") ? "active" : ""}
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
                to="/time/timesheet/consultant-data"
                style={{ textDecoration: "none", color: "inherit" }}
              >
               Create A Project
              </Link>
            </li> */}
            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link to="/time/timesheet/troubleshooting" style={{ textDecoration: "none", color: "inherit" }}>
              Create Time Sheet
              </Link>
            </li> */}
            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/time/timesheet/satreportgeneration"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SATReportGeneration
              </Link>
            </li> */}

            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
          
              <Link
                to="/time/timesheet/consultantprofileedit"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Consultant Profile Edit
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/time/timesheet/schedulerlogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Scheduler Logs
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/viewconsultantdetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Consultant Details
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/time/timesheet/emailtemplateguide"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Email Template Guide
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/profilesetup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Profile Setup
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/time/timesheet/vendorclientmanagement"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Vendor Client Management
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/organizationinformation"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Organization Information
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/time/timesheet/managesubmissionsheets"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Submission Sheets
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/vieworganizationdetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Submission Sheets
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/viewemailhistory"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Email History
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/time/timesheet/manageschedulersettings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Scheduler Settings
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/time/timesheet/viewschedulerlogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Scheduler Logs
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/managesatreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage SAT Reports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/time/timesheet/billingandsatreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Billing And SATReports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/time/timesheet/managebillingandreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Billing And Reports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/time/timesheet/userandbillingoverview"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                User Billing Overview
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/time/timesheet/manageconsultantlicenses"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Consultant Licenses
              </Link>
            </li>

            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/manageconsultantlicenses"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Consultant Licenses
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/time/timesheet/manageorders"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Orders
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/resumebuilder"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Resume Builder
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/airesumematcher"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                AIResume Matcher
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/time/timesheet/importorcreateresume"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Import CreateResume
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/time/timesheet/templatesettings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Template Settings
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/time/timesheet/savedjobs"
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
