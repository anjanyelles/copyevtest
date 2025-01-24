import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./GatnixAccountHelp.css";
import Header from "./Header";
import Troubleshooting from "./Troubleshooting"; // Import Troubleshooting component
import CreateApprovalManager from "../components/SAT/Childcomponent/CreateApprovalManager";
import UnderstandingBilling from "../components/SAT/Childcomponent/UnderstandingBilling";
import ManageInvoices from "../components/SAT/Childcomponent/ManageInvoices";
import ConsultantData from "../components/SAT/Childcomponent/ConsultantData";
import SATReportGeneration from "../components/SAT/Childcomponent/SATReportGeneration";
import ConsultantProfileEdit from "../components/SAT/Childcomponent/ConsultantProfileEdit";
import SchedulerLogs from "../components/SAT/Childcomponent/SchedulerLogs";
import ViewConsultantDetails from "../components/SAT/Childcomponent/ViewConsultantDetails";
import EmailTemplateGuide from "./EmailTemplateGuide";
import ProfileSetup from "../components/SAT/Childcomponent/ProfileSetup";
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
import ManageConsultants from "../components/SAT/Superadmin/ManageConsultants";
import SubmissionComments from "../components/SAT/Superadmin/SubmissionComments";
import EmailTemplates from "../components/SAT/Superadmin/EmailTemplates";
import EmailTemplatesGuide from "../components/SAT/Superadmin/EmailTemplatesGuide";
import SchedulerSettings from "../components/SAT/Superadmin/SchedulerSettings";
import EmailLog from "../components/SAT/Superadmin/EmailLog";
import ResumeAnalyzerGuide from "../components/SAT/Superadmin/ResumeAnalyzerGuide";
import ResumeBuilderGuide from "../components/SAT/Superadmin/ResumeBuilderGuide";
import ResumeMatcherGuide from "../components/SAT/Superadmin/ResumeMatcherGuide";
import SavedResumes from "../components/SAT/Superadmin/SavedResumes";
import SavedJobsAdmin from "../components/SAT/Superadmin/SavedJobsAdmin";
import RestrictionAdminLoginStatus from "../components/SAT/Superadmin/RestrictionAdminLoginStatus";
import RestrictionEmployerLoginStatus from "../components/SAT/Superadmin/RestrictionEmployerLoginStatus";
import RestrictionConsultant from "../components/SAT/Superadmin/RestrictionConsultant";
import RestrictModuleAccess from "../components/SAT/Superadmin/RestrictModuleAccess";
import AdminLoginStatus from "../components/SAT/Superadmin/AdminLoginStatus";
import ConsultantStatusManagement from "./ConsultantStatusManagement";
import AdminAccessManagement from "./AdminAccessManagement";
import GenerateSATReport from "./GenerateSATReport";
import SearchSidebar from "./SearchSidebar";
import SATReportGuide from "../components/SAT/Superadmin/SATReportGuide";
import AdminAccessControl from "../components/SAT/Superadmin/AdminAccessControl";
import AdminProfile from "../components/SAT/Superadmin/AdminProfile";
import AssignLicensesToConsultant from "../components/SAT/Superadmin/AssignLicensesToConsultant";
import Create from "./Create";
import ConsultantProfile from "../components/SAT/Childcomponent/ConsultantProfile";
import ConsultantResumeBuilder from "../components/SAT/Childcomponent/ConsultantResumeBuilder";
import ConsultantResumeAnalyzer from "../components/SAT/Childcomponent/ConsultantResumeAnalyzer";
import ConsultantAiResumeMatcher from "../components/SAT/Childcomponent/ConsultantAiResumeMatcher";
import ConsultantEmailTemplate from "../components/SAT/Childcomponent/ConsultantEmailTemplate";
import ConsultantSavedJobs from "../components/SAT/Childcomponent/ConsultantSavedJobs";
import AdminEmployee from  "../components/SAT/Superadmin/AdminEmployee";
import AdminConsultant from "../components/SAT/Superadmin/AdminConsultant";
import AdminRestrictEmployer from "../components/SAT/Superadmin/AdminRestrictEmployer";
import AdminRestrictConsultant from "../components/SAT/Superadmin/AdminRestrictConsultant";
import AdminSatReport from "../components/SAT/Superadmin/AdminSatReport";
import AdminResumeBuilder from "../components/SAT/Superadmin/AdminResumeBuilder";
import AdminResumeMatcher from "../components/SAT/Superadmin/AdminResumeMatcher";
import AdminResumeAnalyzer from "../components/SAT/Superadmin/AdminResumeAnalyzer";
import AdminTemplateSetting from "../components/SAT/Superadmin/AdminTemplateSetting";
import AdminSavedJobs from "../components/SAT/Superadmin/AdminSavedJobs";
import EmployeeSubmission from "../components/SAT/Superadmin/EmployeeSubmission";
import EmployeeProfile from "../components/SAT/Superadmin/EmployeeProfile";
import EmployeeSat from "../components/SAT/Superadmin/EmployeeSat";
import EmployeeTemplate from "../components/SAT/Superadmin/EmployeeTemplate"
import EmployeeSavedJobs from "../components/SAT/Superadmin/EmployeeSavedJobs";
import EmployeeAnalyzer from "../components/SAT/Superadmin/EmployeeAnalyzer";

// import EmployerLoginStatus from "./Superadmin/EmployerLoginStatus";
const SAT = () => {
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
  if (location.pathname === "/sat/timesheet/create-approval-manager") {
    content = <CreateApprovalManager />;
  } else if (location.pathname === "/sat/timesheet/understanding-billing") {
    content = <UnderstandingBilling />;
  } else if (location.pathname === "/sat/timesheet/manage-invoices") {
    content = <ManageInvoices />;
  } else if (location.pathname === "/sat/timesheet/consultant-data") {
    content = <ConsultantData />;
  } else if (location.pathname === "/sat/timesheet/troubleshooting") {
    content = <Troubleshooting />;
  } else if (location.pathname === "/sat/timesheet/satreportgeneration") {
    content = <SATReportGeneration />;
  } else if (location.pathname === "/sat/timesheet/consultantprofileedit") {
    content = <ConsultantProfileEdit />;
  } else if (location.pathname === "/sat/timesheet/schedulerlogs") {
    content = <SchedulerLogs />;
  } else if (
    location.pathname === "/sat/timesheet/viewconsultantdetails" ||
    location.pathname === "/sat/superadmin/viewconsultantdetails"
  ) {
    content = <ViewConsultantDetails />;
  } else if (
    location.pathname === "/sat/timesheet/viewEmployer" ||
    
    location.pathname === "/sat/superadmin/viewEmployer"
  ) {
    content = <ViewEmployer />;
  } else if (
    
    location.pathname === "/sat/admin/restrictEmployers" ||
    location.pathname === "/sat/superadmin/restrictEmployers"
  ) {
    content = <RestrictEmployers />;
  } else if (
    location.pathname === "/sat/timesheet/restrictConsultants" ||
    
    location.pathname === "/sat/superadmin/restrictConsultants"
  ) {
    content = <RestrictConsultants />;
  } else if (
    location.pathname === "/sat/timesheet/emailtemplateguide" ||
    location.pathname === "/sat/consultant/emailtemplateguide"
  ) {
    content = <EmailTemplateGuide />;
  } else if (location.pathname === "/sat/timesheet/profilesetup") {
    content = <ProfileSetup />;
  } else if (location.pathname === "/sat/timesheet/vendorclientmanagement") {
    content = <VendorClientManagement />;
  } else if (location.pathname === "/sat/timesheet/organizationinformation") {
    content = <OrganizationInformation />;
  } else if (
    
    location.pathname === "/sat/consultant/managesubmissionsheets"
  ) {
    content = <ManageSubmissionSheets />;
  } else if (location.pathname === "/sat/admin/managesubmissionsheets") {
    content = <ManageSubmissionSheets />;
  } else if (location.pathname === "/sat/employee/employeeaimatcher") {
    content = <RejectedTimeSheets />;
  } else if (
    location.pathname === "/sat/employee/employeejobs"
  ) {
    content = <RecalledTimeSheets />;
  } else if (location.pathname === "/sat/timesheet/vieworganizationdetails") {
    content = <ViewOrganizationDetails />;
  } else if (location.pathname === "/sat/timesheet/manageschedulersettings") {
    content = <ManageSchedulerSettings />;
  } else if (location.pathname === "/sat/timesheet/viewemailhistory") {
    content = <ViewEmailHistory />;
  } else if (location.pathname === "/sat/timesheet/viewschedulerlogs") {
    content = <ViewSchedulerLogs />;
  } else if (
    
    location.pathname === "/sat/consultant/managesatreports"
  ) {
    content = <ManageSATReports />;
  } else if (location.pathname === "/sat/timesheet/billingandsatreports") {
    content = <BillingAndSATReports />;
  } else if (location.pathname === "/sat/timesheet/managebillingandreports") {
    content = <ManageBillingAndReports />;
  } else if (
    location.pathname === "/sat/timesheet/userandbillingoverview" ||
    location.pathname === "/sat/admin/userandbillingoverview" ||
    location.pathname === "/sat/superadmin/userandbillingoverview"
  ) {
    content = <UserAndBillingOverview />;
  } else if (
    location.pathname === "/sat/timesheet/manageconsultantlicenses" ||
    location.pathname === "/sat/superadmin/manageconsultantlicenses"
  ) {
    content = <ManageConsultantLicenses />;
  } else if (
    location.pathname === "/sat/timesheet/manageorders" ||
    location.pathname === "/sat/superadmin/manageorders"
  ) {
    content = <ManageOrders />;
  } else if (
    location.pathname === "/sat/timesheet/resumebuilder"
    
  ) {
    content = <ResumeBuilder />;
  } else if (
    location.pathname === "/sat/timesheet/airesumematcher" ||

    location.pathname === "/sat/superadmin/superadmin" ||
  
    location.pathname === "/sat/superadmin/airesumematcher"
  ) {
    content = <AIResumeMatcher />;
  } else if (location.pathname === "/sat/timesheet/importorcreateresume") {
    content = <ImportOrCreateResume />;
  } else if (
    location.pathname === "/sat/approverManagers/timesheet"
  ) {
    content = <Timesheetcontnent />;
  }
  else if (
    location.pathname === "/sat/employee/employeesat" ){
      content = <EmployeeSat />
    }
  else if (
    location.pathname === "/sat/approverManagers/project"
  ) {
    content = <Create />;
  }  else if (
    location.pathname === "/sat/employee/timesubmittedSheets" ||
    location.pathname === "/sat/approverManagers/timesubmittedSheets"
  ) {
    content = <ViewSubmittedSheets />;
  } else if (
    location.pathname === "/sat/employee/employerresumebuilder" 
  ) {
    content = <ViewApprovedSheets />;
  } else if (
    location.pathname === "/sat/employee/pendingtimesheets" ||
    location.pathname === "/sat/approverManagers/pendingtimesheets"
  ) {
    content = <PendingTimeSheets />;
  } else if (location.pathname === "/sat/timesheet/templatesettings") {
    content = <TemplateSettings />;
  } else if (
   
    location.pathname === "/sat/superadmin/emailtemplateguide"
  ) {
    content = <TemplateSettings />;
  } else if (
    location.pathname === "/sat/timesheet/savedjobs" 
   
  ) {
    content = <SavedJobs />;
  } else if (
    location.pathname === "/sat/approverManagers/rejectedtimesheets"

  ) {
    content = <RejectedTimeSheets />;
  }
   else if (
    location.pathname === "/sat/timesheet/profilesetup" ||
    
   
    location.pathname === "/sat/approverManagers/profile"
  ) {
    content = <ProfileSetup />;
  } else if (location.pathname === "/sat/approverManagers/addOrviewemployee") {
    content = <AddOrViewEmployee />;
  } else if (location.pathname === "/sat/approverManagers/addOrViewClient") {
    content = <AddOrViewClient />;
  }

  else if (location.pathname === "/sat/employee/profile" ){
    content = <EmployeeProfile />
  }
  // superadmin routes
  else if (location.pathname === "/sat/timesheet/manageConsultantssuperadmin") {
    content = <ManageConsultants />;
  } else if (location.pathname === "/sat/timesheet/submissions-sheet") {
    content = <SubmissionComments />;
  } else if (location.pathname === "/sat/superadmin/emails") {
    content = <EmailTemplates />;
  } else if (location.pathname === "/sat/superadmin/emails") {
    content = <EmailTemplatesGuide />;
  } else if (location.pathname === "/sat/superadmin/schedulersettings") {
    content = <SchedulerSettings />;
  } else if (location.pathname === "/sat/superadmin/emaillogs") {
    content = <EmailLog />;
  } else if (location.pathname === "/sat/superadmin/resumeAnalyzerGuide") {
    content = <ResumeAnalyzerGuide />;
  } else if (location.pathname === "/sat/superadmin/resumeBuilderGuide") {
    content = <ResumeBuilderGuide />;
  } else if (location.pathname === "/sat/superadmin/resumeMatcherGuide") {
    content = <ResumeMatcherGuide />;
  } else if (location.pathname === "/sat/superadmin/savedResumes") {
    content = <SavedResumes />;
  } else if (location.pathname === "/sat/superadmin/savedJobs") {
    content = <SavedJobsAdmin />;
  } else if (location.pathname === "/sat/superadmin/savedJobs") {
    content = <SavedJobsAdmin />;
  } else if (location.pathname === "/sat/superadmin/RestrictionLoginStatus") {
    content = <RestrictionAdminLoginStatus />;
  } else if (location.pathname === "/sat/superadmin/RestrictionEmployerStatus") {
    content = <RestrictionEmployerLoginStatus />;
  } else if (location.pathname === "/sat/superadmin/restrictionConsultant") {
    content = <RestrictionConsultant />;
  } else if (location.pathname === "/sat/superadmin/RestrictModuleAccess") {
    content = <RestrictModuleAccess />;
  } else if (location.pathname === "/sat/superadmin/AdminLoginStatus") {
    content = <AdminLoginStatus />;
  // } else if (location.pathname === "/sat/superadmin/EmployerLoginStatus") {
    // content = <EmployerLoginStatus />;
  } else if (location.pathname === "/sat/superadmin/ConsultantStatusManagement") {
    content = <ConsultantStatusManagement />;
  } else if (location.pathname === "/sat/superadmin/AdminAccessManagement") {
    content = <AdminAccessManagement />;
  }
  else if (location.pathname === "/sat/superadmin/AdminProfile") {
    content = <AdminProfile />;
  } else if (location.pathname === "/sat/superadmin/GenerateSATReport") {
    
    content = <GenerateSATReport />;
  }
   
  else if (location.pathname === "/sat/superadmin/AssignLicensesToConsultant") {
    content = <AssignLicensesToConsultant />;
  }else if (location.pathname === "/sat/superadmin/AdminAccessControl") {
    content = <AdminAccessControl />;
  } else if (location.pathname === "/sat/superadmin/SATReportGuide") {
    content = <SATReportGuide />;
  } else if (location.pathname === "/sat/superadmin/AdminAccessManagement") {
    content = <AdminAccessManagement />;
  }
  else if(location.pathname === "/sat/consultant/consultantprofile" ){
    content = <ConsultantProfile />
  }
   
  else if (location.pathname === "/sat/consultant/consultantresumebuilder"){
    content = <ConsultantResumeBuilder />
  }

  else if (location.pathname === "/sat/consultant/consultantresumeanalyzer" ){
    content = <ConsultantResumeAnalyzer />;
  }
  else if  (location.pathname === "/sat/consultant/consultantairesumematcher"){
    content = <ConsultantAiResumeMatcher />
  }

  else if (location.pathname === "/sat/consultant/consultantemailtemplateguide"){
    content = <ConsultantEmailTemplate />
  }

  else if (location.pathname === "/sat/consultant/consultantsavedjobs"){
    content = <ConsultantSavedJobs />
  }
  else if (location.pathname === "/sat/admin/adminviewEmployee" ){
    content = <AdminEmployee />
  }
  else if (location.pathname === "/sat/admin/adminviewconsultantdetails" ) {
    content = <AdminConsultant />
  }

  else if(location.pathname === "/sat/admin/adminrestrictEmployers" ){
    content = <AdminRestrictEmployer />
  } 
  else if(location.pathname === "/sat/admin/adminrestrictConsultants" ){
    content = <AdminRestrictConsultant />
  } else if (location.pathname ==="/sat/admin/adminmanagesatreports") {
    content = <AdminSatReport />
  }

  else if(location.pathname === "/sat/admin/adminresumebuilder" ){
    content = <AdminResumeBuilder />
  }
  else if (location.pathname === "/sat/admin/adminairesumematcher" ){
    content = <AdminResumeMatcher />
  }
  else if(location.pathname === "/sat/admin/adminairesumeanalyzer" ){
    content = <AdminResumeAnalyzer />
  }
  else if (location.pathname === "/sat/admin/admintemplatesettings" ){
    content = <AdminTemplateSetting />
  }
   else if (location.pathname === "/sat/admin/adminsavedjobs"){
    content = <AdminSavedJobs />
   }
   else if (location.pathname === "/sat/employee/employeesubmission"){
    content = <EmployeeSubmission />
   }
   else if (location.pathname === "/sat/employee/employeetemplate"){
    content = <EmployeeTemplate />
   }
   else if (location.pathname === "/sat/employee/employeesavedjobs"){
    content = <EmployeeSavedJobs />
   }
   else if (location.pathname === "/sat/employee/employeeanalyzer"){
    content = <EmployeeAnalyzer />
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
          <SearchSidebar isSidebarVisible={isSidebarVisible} openMenus={openMenus} handleMenuClick={handleMenuClick} isActive={isActive} />
    
                  {/* <li> */}
        {/* <div
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
                to="/sat/approverManagers/profile"
                className={isActive("/sat/approverManagers/profile") ? "active" : ""}
              >
                View or Edit Your Profile
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/addOrviewemployee"
                className={isActive("/sat/approverManagers/addOrviewemployee") ? "active" : ""}
              >
                Add or View Employee
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/addOrViewClient"
                className={isActive("/sat/approverManagers/addOrViewClient") ? "active" : ""}
              >
                Add or View Client
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/project"
                className={isActive("/sat/approverManagers/project") ? "active" : ""}
              >
                Create or Edit Project
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/timesheet"
                className={isActive("/sat/approverManagers/timesheet") ? "active" : ""}
              >
                View All TimeSheets
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/timesubmittedSheets"
                className={isActive("/sat/approverManagers/timesubmittedSheets") ? "active" : ""}
              >
                View Submitted Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/approvedsheets"
                className={isActive("/sat/approverManagers/approvedsheets") ? "active" : ""}
              >
                Approve Time Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/pendingtimesheets"
                className={isActive("/sat/approverManagers/pendingtimesheets") ? "active" : ""}
              >
                View Pending Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/rejectedtimesheets"
                className={isActive("/sat/approverManagers/rejectedtimesheets") ? "active" : ""}
              >
                View Rejected Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/sat/approverManagers/recalledtimesheets"
                className={isActive("/sat/approverManagers/recalledtimesheets") ? "active" : ""}
              >
                View Recalled Sheets
              </Link>
            </li>
          </ul>
        )}
      </li> */}

      <li style={{ padding: "10px", cursor: "pointer" }}>
        <div
          onClick={() => handleMenuClick("employee")}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Employer</span>
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
                to="/sat/employee/profile"
                className={isActive("/sat/employee/profile") ? "active" : ""}
              >
                View User Profile
              </Link>
            </li>
            <li>
              <Link
                to="/sat/employee/employeesubmission"
                className={isActive("/sat/employee/employeesubmission") ? "active" : ""}
              >
                View Submission Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/sat/employee/employeesat"
                className={isActive("/sat/employee/employeesat") ? "active" : ""}
              >
                Generate SAT Reports
              </Link>
            </li>
            <li>
              <Link
                to="/sat/employee/employerresumebuilder"
                className={isActive("/sat/employee/employerresumebuilder") ? "active" : ""}
              >
                Use Resume Builder
              </Link>
            </li>
            <li>
              <Link
                to="/sat/employee/employeeanalyzer"
                className={isActive("/sat/employee/employeeanalyzer") ? "active" : ""}
              >
                Learn How Resume Analyzer Works
              </Link>
            </li>
            <li>
              <Link
                to="/sat/employee/employeeaimatcher"
                className={isActive("/sat/employee/employeeaimatcher") ? "active" : ""}
              >
                Learn How AI Resume Matcher Works
              </Link>
            </li>
            
            <li>
              <Link
                to="/sat/employee/employeetemplate"
                className={isActive("/sat/employee/employeetemplate") ? "active" : ""}
              >
                Change Template Settings
              </Link>
            </li>
            <li>
              <Link
                to="/sat/employee/employeesavedjobs"
                className={isActive("/sat/employee/employeesavedjobs") ? "active" : ""}
              >
                My Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/sat/employee/help-desk"
                className={isActive("/sat/employee/help-desk") ? "active" : ""}
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
                to="/sat/admin/adminviewEmployee"
                className={isActive("/sat/admin/adminviewEmployee") ? "active" : ""}
              >
                Manage Employer
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/adminviewconsultantdetails"
                className={isActive("/sat/admin/adminviewconsultantdetails") ? "active" : ""}
              >
                Manage Consultant
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/adminrestrictEmployers"
                className={isActive("/sat/admin/adminrestrictEmployers") ? "active" : ""}
              >
                View or Restrict Employers
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/adminrestrictConsultants"
                className={isActive("/sat/admin/adminrestrictConsultants") ? "active" : ""}
              >
                View or Restrict Consultants
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/managesubmissionsheets"
                className={isActive("/sat/admin/managesubmissionsheets") ? "active" : ""}
              >
                View or Add Submission Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/adminmanagesatreports"
                className={isActive("/sat/admin/adminmanagesatreports") ? "active" : ""}
              >
                Generate SAT Reports
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/adminresumebuilder"
                className={isActive("/sat/admin/adminresumebuilder") ? "active" : ""}
              >
                Open Resume Builder
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/adminairesumeanalyzer"
                className={isActive("/sat/admin/adminairesumeanalyzer") ? "active" : ""}
              >
                Learn How Resume Analyzer Works
              </Link>
            </li>
   
            <li>
              <Link
                to="/sat/admin/adminairesumematcher"
                className={isActive("/sat/admin/adminairesumematcher") ? "active" : ""}
              >
                Learn How  AI Resume Matcher Works
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/admintemplatesettings"
                className={isActive("/sat/admin/admintemplatesettings") ? "active" : ""}
              >
                Change Template Settings
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/adminsavedjobs"
                className={isActive("/sat/admin/adminsavedjobs") ? "active" : ""}
              >
                View My Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/sat/admin/help-desk"
                className={isActive("/sat/admin/help-desk") ? "active" : ""}
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
                to="/sat/consultant/consultantprofile"
                className={isActive("/sat/consultant/consultantprofile") ? "active" : ""}
              >
                View or Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/sat/consultant/managesubmissionsheets"
                className={isActive("/sat/consultant/managesubmissionsheets") ? "active" : ""}
              >
                View or Add Submission Sheets
              </Link>
            </li>
            <li>
              <Link
                to="/sat/consultant/managesatreports"
                className={isActive("/sat/consultant/managesatreports") ? "active" : ""}
              >
                Generate SAT Reports
              </Link>
            </li>
            <li>
              <Link
                to="/sat/consultant/consultantresumebuilder"
                className={isActive("/sat/consultant/consultantresumebuilder") ? "active" : ""}
              >
                Use Resume Builder
              </Link>
            </li>
            <li>
              <Link
                to="/sat/consultant/consultantresumeanalyzer"
                className={isActive("/sat/consultant/consultantresumeanalyzer") ? "active" : ""}
              >
                Learn How Resume Analyzer Works
              </Link>
            </li>
            <li>
              <Link
                to="/sat/consultant/consultantairesumematcher"
                className={isActive("/sat/consultant/consultantairesumematcher") ? "active" : ""}
              >
                Learn How AI Resume Matcher Works
              </Link>
            </li>
            <li>
              <Link
                to="/sat/consultant/consultantemailtemplateguide"
                className={isActive("/sat/consultant/consultantemailtemplateguide") ? "active" : ""}
              >
                Change Template Settings
              </Link>
            </li>
            <li>
              <Link
                to="/sat/consultant/consultantsavedjobs"
                className={isActive("/sat/consultant/consultantsavedjobs") ? "active" : ""}
              >
                View My Saved Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/sat/consultant/help-desk"
                className={isActive("/sat/consultant/help-desk") ? "active" : ""}
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
          to="/sat/timesheet/manageConsultantssuperadmin"
          className={isActive("/sat/timesheet/manageConsultantssuperadmin") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Manage or Edit Consultants
        </Link>
      </li>
  <li>
        <Link
          to="/sat/timesheet/submissions-sheet"
          className={isActive("/sat/timesheet/submissions-sheet") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View or Add Submission Sheets
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/emails"
          className={isActive("/sat/superadmin/emails") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Manage E-mails
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/emaillogs"
          className={isActive("/sat/superadmin/emaillogs") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          E-mails Logs
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/schedulersettings"
          className={isActive("/sat/superadmin/schedulersettings") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View Scheduler Logs
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/userandbillingoverview"
          className={isActive("/sat/superadmin/userandbillingoverview") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View Billing Details
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/manageconsultantlicenses"
          className={isActive("/sat/superadmin/manageconsultantlicenses") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View My Licenses
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/manageorders"
          className={isActive("/sat/superadmin/manageorders") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View My Orders
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/resumeBuilderGuide"
          className={isActive("/sat/superadmin/resumeBuilderGuide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Use Resume Builder
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/resumeAnalyzerGuide"
          className={isActive("/sat/superadmin/resumeAnalyzerGuide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Learn How Resume Analyzer Works
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/airesumematcher"
          className={isActive("/sat/superadmin/airesumematcher") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Learn How AI Resume Matcher Works
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/savedResumes"
          className={isActive("/sat/superadmin/savedResumes") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Saved Resumes
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/emailtemplateguide"
          className={isActive("/sat/superadmin/emailtemplateguide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Change Template Settings
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/RestrictionLoginStatus"
          className={isActive("/sat/superadmin/RestrictionLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restriction Login Status
        </Link>
      </li>
  {/* <li>
        <Link
          to="/sat/superadmin/savedjobs"
          className={isActive("/sat/superadmin/savedjobs") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View My Saved Jobs
        </Link>
      </li> */}
  <li>
        <Link
          to="/sat/superadmin/RestrictModuleAccess"
          className={isActive("/sat/superadmin/RestrictModuleAccess") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restricting Module Access
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/AdminLoginStatus"
          className={isActive("/sat/superadmin/AdminLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Restriction Admin Login
        </Link>
      </li>
  <li>
        {/* <Link
          to="/sat/superadmin/EmployerLoginStatus"
          className={isActive("/sat/superadmin/EmployerLoginStatus") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Employer Login Status
        </Link> */}
      </li>
  <li>
        <Link
          to="/sat/superadmin/ConsultantStatusManagement"
          className={isActive("/sat/superadmin/ConsultantStatusManagement") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Consultant Status Management
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/AdminAccessManagement"
          className={isActive("/sat/superadmin/AdminAccessManagement") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Admin Access Management
        </Link>
      </li>
  <li>
        <Link
          to="/sat/superadmin/GenerateSATReport"
          className={isActive("/sat/superadmin/GenerateSATReport") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Generate SAT Report
        </Link>
      </li>
      <li>
        <Link
          to="/sat/superadmin/AdminProfile"
          className={isActive("/sat/superadmin/AdminProfile") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
Admin Profile
        </Link>
      </li>
      <li>
        <Link
          to="/sat/superadmin/AdminAccessControl"
          className={isActive("/sat/superadmin/AdminAccessControl") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
      Admin Access Control
        </Link>
      </li>
      <li>
        <Link
          to="/sat/superadmin/AssignLicensesToConsultant"
          className={isActive("/sat/superadmin/AssignLicensesToConsultant") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
 Assign Licenses To Consultant
        </Link>
      </li>
      <li>
        <Link
          to="/sat/superadmin/SATReportGuide"
          className={isActive("/sat/superadmin/SATReportGuide") ? "active" : ""}
          style={{ textDecoration: "none", color: "inherit" }}
        >
        SAT Report Guide
        </Link>
      </li>
  {/* <li>
        <Link
          to="/sat/superadmin/help-desk"
          className={isActive("/sat/superadmin/help-desk") ? "active" : ""}
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
                to="/sat/timesheet/consultant-data"
                style={{ textDecoration: "none", color: "inherit" }}
              >
               Create A Project
              </Link>
            </li> */}
            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link to="/sat/timesheet/troubleshooting" style={{ textDecoration: "none", color: "inherit" }}>
              Create Time Sheet
              </Link>
            </li> */}
            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/sat/timesheet/satreportgeneration"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SATReportGeneration
              </Link>
            </li> */}

            {/* <li style={{ padding: "10px", cursor: "pointer" }}>
          
              <Link
                to="/sat/timesheet/consultantprofileedit"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Consultant Profile Edit
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/sat/timesheet/schedulerlogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Scheduler Logs
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/viewconsultantdetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Consultant Details
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/sat/timesheet/emailtemplateguide"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Email Template Guide
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/profilesetup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Profile Setup
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/sat/timesheet/vendorclientmanagement"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Vendor Client Management
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/organizationinformation"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Organization Information
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/sat/timesheet/managesubmissionsheets"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Submission Sheets
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/vieworganizationdetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Submission Sheets
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/viewemailhistory"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Email History
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/sat/timesheet/manageschedulersettings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Scheduler Settings
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/sat/timesheet/viewschedulerlogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Scheduler Logs
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/managesatreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage SAT Reports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/sat/timesheet/billingandsatreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Billing And SATReports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
              
              <Link
                to="/sat/timesheet/managebillingandreports"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Billing And Reports
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
           
              <Link
                to="/sat/timesheet/userandbillingoverview"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                User Billing Overview
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/sat/timesheet/manageconsultantlicenses"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Consultant Licenses
              </Link>
            </li>

            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/manageconsultantlicenses"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Consultant Licenses
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/sat/timesheet/manageorders"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Manage Orders
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/resumebuilder"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Resume Builder
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/airesumematcher"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                AIResume Matcher
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/sat/timesheet/importorcreateresume"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Import CreateResume
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
            
              <Link
                to="/sat/timesheet/templatesettings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Template Settings
              </Link>
            </li>
            <li style={{ padding: "10px", cursor: "pointer" }}>
             
              <Link
                to="/sat/timesheet/savedjobs"
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

export default SAT;
