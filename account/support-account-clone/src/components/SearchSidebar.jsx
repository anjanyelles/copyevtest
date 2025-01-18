import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for route navigation
import './sidebarcomponent.css'

const SearchSidebar = ({ isSidebarVisible, openMenus, handleMenuClick, isActive }) => {
  const [searchQuery, setSearchQuery] = useState("");  // State to manage the search query
  const history = useNavigate();  // For programmatic route changes

  const menuItems = [
    {
      title: "Approver Managers",
      links: [
        { path: "/approverManagers/profile", label: "View or Edit Your Profile" },
        { path: "/approverManagers/addOrviewemployee", label: "Add or View Employee" },
        { path: "/approverManagers/addOrViewClient", label: "Add or View Client" },
        { path: "/approverManagers/project", label: "Create or Edit Project" },
        { path: "/approverManagers/timesheet", label: "View All TimeSheets" },
        { path: "/approverManagers/timesubmittedSheets", label: "View Submitted Sheets" },
        { path: "/approverManagers/approvedsheets", label: "Approve Time Sheets" },
        { path: "/approverManagers/pendingtimesheets", label: "View Pending Sheets" },
        { path: "/approverManagers/rejectedtimesheets", label: "View Rejected Sheets" },
        { path: "/approverManagers/recalledtimesheets", label: "View Recalled Sheets" },
      ]
    },
    {
      title: "Employee",  // New section for Employee menu
      links: [
        { path: "/employee/profile", label: "View or Edit Profile" },
        { path: "/employee/timesheet", label: "TimeSheet" },
        { path: "/employee/timesubmittedSheets", label: "View Submitted Sheets" },
        { path: "/employee/approvedsheets", label: "View Approved Sheets" },
        { path: "/employee/pendingtimesheets", label: "View Pending Sheets" },
        { path: "/employee/rejectedtimesheets", label: "View Rejected Sheets" },
        { path: "/employee/recalledtimesheets", label: "View Recalled Sheets" },
        { path: "/employee/help-desk", label: "Help Desk" },
      ],
    },

    {
      title: "Admin",  // Admin section
      links: [
        { path: "/admin/viewEmployer", label: "Manage Employer" },
        { path: "/admin/viewconsultantdetails", label: "Manage Consultant" },
        { path: "/admin/restrictEmployers", label: "View or Restrict Employers" },
        { path: "/admin/restrictConsultants", label: "View or Restrict Consultants" },
        { path: "/admin/managesubmissionsheets", label: "View or Add Submission Sheets" },
        { path: "/timesheet/managesatreports", label: "Generate SAT Reports" },
        { path: "/admin/resumebuilder", label: "Open Resume Builder" },
        { path: "/admin/airesumematcher", label: "Learn How Resume Analyzer Works" },
        { path: "/admin/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/admin/templatesettings", label: "Change Template Settings" },
        { path: "/admin/savedjobs", label: "View My Saved Jobs" },
        { path: "/admin/help-desk", label: "Access Help Desk" },
      ],
    },

    {
      title: "Consultant",  // Consultant section
      links: [
        { path: "/consultant/profilesetup", label: "View or Edit Profile" },
        { path: "/consultant/managesubmissionsheets", label: "View or Add Submission Sheets" },
        { path: "/consultant/managesatreports", label: "Generate SAT Reports" },
        { path: "/consultant/resumebuilder", label: "Use Resume Builder" },
        { path: "/consultant/managesatreports", label: "Learn How Resume Analyzer Works" },
        { path: "/consultant/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/consultant/emailtemplateguide", label: "Change Template Settings" },
        { path: "/admin/savedjobs", label: "View My Saved Jobs" },
        { path: "/consultant/help-desk", label: "Access Help Desk" },
      ],
    },

    

    {
      title: "Super Admin", // Super Admin section
      links: [
        { path: "/timesheet/manageConsultantssuperadmin", label: "Manage or Edit Consultants" },
        { path: "/timesheet/submissions-sheet", label: "View or Add Submission Sheets" },
        { path: "/superadmin/emails", label: "Manage E-mails" },
        { path: "/superadmin/emaillogs", label: "E-mails Logs" },
        { path: "/superadmin/schedulersettings", label: "View Scheduler Logs" },
        { path: "/superadmin/userandbillingoverview", label: "View Billing Details" },
        { path: "/superadmin/manageconsultantlicenses", label: "View My Licenses" },
        { path: "/superadmin/manageorders", label: "View My Orders" },
        { path: "/superadmin/resumeBuilderGuide", label: "Use Resume Builder" },
        { path: "/superadmin/resumeAnalyzerGuide", label: "Learn How Resume Analyzer Works" },
        { path: "/superadmin/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/superadmin/savedResumes", label: "Saved Resumes" },
        { path: "/superadmin/savedJobs", label: "Saved Job" },
        { path: "/superadmin/emailtemplateguide", label: "Change Template Settings" },
        { path: "/superadmin/RestrictionLoginStatus", label: "Restriction Login Status" },
        { path: "/superadmin/savedjobs", label: "View My Saved Jobs" },
        { path: "/superadmin/RestrictModuleAccess", label: "Restricting Module Access" },
        { path: "/superadmin/AdminLoginStatus", label: "Restriction Admin Login" },
        { path: "/superadmin/EmployerLoginStatus", label: "Employer Login Status" },
        { path: "/superadmin/ConsultantStatusManagement", label: "Consultant Status Management" },
        { path: "/superadmin/AdminAccessManagement", label: "Admin Access Management" },
        { path: "/superadmin/GenerateSATReport", label: "Generate SAT Report" },
        { path: "/superadmin/help-desk", label: "Access Help Desk" },
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

export default SearchSidebar;
