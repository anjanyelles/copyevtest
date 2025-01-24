import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for route navigation
import './sidebarcomponent.css'

const SearchSidebarTime = ({ isSidebarVisible, openMenus, handleMenuClick, isActive }) => {
  const [searchQuery, setSearchQuery] = useState("");  // State to manage the search query
  const history = useNavigate();  // For programmatic route changes

  const menuItems = [
    {
      title: "Approver Managers",
      links: [
        { path: "/time/approverManagers/profile", label: "View or Edit Your Profile" },
        { path: "/time/approverManagers/addOrviewemployee", label: "Add or View Employee" },
        { path: "/time/approverManagers/addOrViewClient", label: "Add or View Client" },
        { path: "/time/approverManagers/project", label: "Create or Edit Project" },
        { path: "/time/approverManagers/timesheet", label: "View All TimeSheets" },
        { path: "/time/approverManagers/timesubmittedSheets", label: "View Submitted Sheets" },
        { path: "/time/approverManagers/approvedsheets", label: "Approve Time Sheets" },
        { path: "/time/approverManagers/pendingtimesheets", label: "View Pending Sheets" },
        { path: "/time/approverManagers/rejectedtimesheets", label: "View Rejected Sheets" },
        { path: "/time/approverManagers/recalledtimesheets", label: "View Recalled Sheets" },
      ]
    },
    {
      title: "Employee",  // New section for Employee menu
      links: [
        { path: "/time/employee/profile", label: "View or Edit Profile" },
        { path: "/time/employee/timesheet", label: "TimeSheet" },
        { path: "/time/employee/timesubmittedSheets", label: "View Submitted Sheets" },
        { path: "/time/employee/approvedsheets", label: "View Approved Sheets" },
        { path: "/time/employee/pendingtimesheets", label: "View Pending Sheets" },
        { path: "/time/employee/rejectedtimesheets", label: "View Rejected Sheets" },
        { path: "/time/employee/recalledtimesheets", label: "View Recalled Sheets" },
        { path: "/time/employee/help-desk", label: "Help Desk" },
      ],
    },

    {
      title: "Admin",  // Admin section
      links: [
        { path: "/time/admin/viewEmployer", label: "Manage Employer" },
        { path: "/time/admin/viewconsultantdetails", label: "Manage Consultant" },
        { path: "/time/admin/restrictEmployers", label: "View or Restrict Employers" },
        { path: "/time/admin/restrictConsultants", label: "View or Restrict Consultants" },
        { path: "/time/admin/managesubmissionsheets", label: "View or Add Submission Sheets" },
        { path: "/time/timesheet/managesatreports", label: "Generate SAT Reports" },
        { path: "/time/admin/resumebuilder", label: "Open Resume Builder" },
        { path: "/time/admin/airesumematcher", label: "Learn How Resume Analyzer Works" },
        { path: "/time/admin/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/time/admin/templatesettings", label: "Change Template Settings" },
        { path: "/time/admin/savedjobs", label: "View My Saved Jobs" },
        { path: "/time/admin/help-desk", label: "Access Help Desk" },
      ],
    },

    {
      title: "Consultant",  // Consultant section
      links: [
        { path: "/time/consultant/profilesetup", label: "View or Edit Profile" },
        { path: "/time/consultant/managesubmissionsheets", label: "View or Add Submission Sheets" },
        { path: "/time/consultant/managesatreports", label: "Generate SAT Reports" },
        { path: "/time/consultant/resumebuilder", label: "Use Resume Builder" },
        { path: "/time/consultant/managesatreports", label: "Learn How Resume Analyzer Works" },
        { path: "/time/consultant/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/time/consultant/emailtemplateguide", label: "Change Template Settings" },
        { path: "/time/admin/savedjobs", label: "View My Saved Jobs" },
        { path: "/time/consultant/help-desk", label: "Access Help Desk" },
      ],
    },

    

    {
      title: "Super Admin", // Super Admin section
      links: [
        { path: "/time/timesheet/manageConsultantssuperadmin", label: "Manage or Edit Consultants" },
        { path: "/time/timesheet/submissions-sheet", label: "View or Add Submission Sheets" },
        { path: "/time/superadmin/emails", label: "Manage E-mails" },
        { path: "/time/superadmin/emaillogs", label: "E-mails Logs" },
        { path: "/time/superadmin/schedulersettings", label: "View Scheduler Logs" },
        { path: "/time/superadmin/userandbillingoverview", label: "View Billing Details" },
        { path: "/time/superadmin/manageconsultantlicenses", label: "View My Licenses" },
        { path: "/time/superadmin/manageorders", label: "View My Orders" },
        { path: "/time/superadmin/resumeBuilderGuide", label: "Use Resume Builder" },
        { path: "/time/superadmin/resumeAnalyzerGuide", label: "Learn How Resume Analyzer Works" },
        { path: "/time/superadmin/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/time/superadmin/savedResumes", label: "Saved Resumes" },
        { path: "/time/superadmin/savedJobs", label: "Saved Job" },
        { path: "/time/superadmin/emailtemplateguide", label: "Change Template Settings" },
        { path: "/time/superadmin/RestrictionLoginStatus", label: "Restriction Login Status" },
        { path: "/time/superadmin/savedjobs", label: "View My Saved Jobs" },
        { path: "/time/superadmin/RestrictModuleAccess", label: "Restricting Module Access" },
        { path: "/time/superadmin/AdminLoginStatus", label: "Restriction Admin Login" },
        { path: "/time/superadmin/EmployerLoginStatus", label: "Employer Login Status" },
        { path: "/time/superadmin/ConsultantStatusManagement", label: "Consultant Status Management" },
        { path: "/time/superadmin/AdminAccessManagement", label: "Admin Access Management" },
        { path: "/time/superadmin/GenerateSATReport", label: "Generate SAT Report" },
        { path: "/time/superadmin/help-desk", label: "Access Help Desk" },
      ],
    },
  
    // Add more menu sections if needed
  ];

  // Filter the links based on the search query
  const filteredLinks = menuItems
    .flatMap(item => item.links)
    .filter(link =>
      link.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleLinkClick = (path) => {
    history(path);  // Navigate to the selected path
  };

  return (
    <div className='search-continer'>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px 35px 10px 15px", // Add padding for the icon space
          marginBottom: "15px",  // Add some space at the bottom
          // borderRadius: "25px", // Rounded corners
          border: "1px solid #ccc", // Light border
          width: "80%", // Full width
          fontSize: "16px", // Slightly larger font for readability
          outline: "none", // Remove default outline
          transition: "all 0.3s ease", // Smooth transition for focus state
        }}
        onFocus={(e) => e.target.style.borderColor = "black"} // Blue border on focus
        onBlur={(e) => e.target.style.borderColor = "#ccc"} // Reset border color on blur
      />
      


      {/* Only display links if searchQuery is not empty or if there are filtered results */}
      {searchQuery && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link) => (
              <li key={link.path}>
                <div
                  onClick={() => handleLinkClick(link.path)}  // Navigate when clicked
                  style={{
                    padding: "5px 0",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{link.label}</span>
                </div>
              </li>
            ))
          ) : (
            <li>
              <span>No results found</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchSidebarTime;
