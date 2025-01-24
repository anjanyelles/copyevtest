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
        { path: "/sat/approverManagers/profile", label: "View or Edit Your Profile" },
        { path: "/sat/approverManagers/addOrviewemployee", label: "Add or View Employee" },
        { path: "/sat/approverManagers/addOrViewClient", label: "Add or View Client" },
        { path: "/sat/approverManagers/project", label: "Create or Edit Project" },
        { path: "/sat/approverManagers/timesheet", label: "View All TimeSheets" },
        { path: "/sat/approverManagers/timesubmittedSheets", label: "View Submitted Sheets" },
        { path: "/sat/approverManagers/approvedsheets", label: "Approve Time Sheets" },
        { path: "/sat/approverManagers/pendingtimesheets", label: "View Pending Sheets" },
        { path: "/sat/approverManagers/rejectedtimesheets", label: "View Rejected Sheets" },
        { path: "/sat/approverManagers/recalledtimesheets", label: "View Recalled Sheets" },
      ]
    },
    {
      title: "Employee",  // New section for Employee menu
      links: [
        { path: "/sat/employee/profile", label: "View or Edit Profile" },
        { path: "/sat/employee/timesheet", label: "TimeSheet" },
        { path: "/sat/employee/timesubmittedSheets", label: "View Submitted Sheets" },
        { path: "/sat/employee/approvedsheets", label: "View Approved Sheets" },
        { path: "/sat/employee/pendingtimesheets", label: "View Pending Sheets" },
        { path: "/sat/employee/rejectedtimesheets", label: "View Rejected Sheets" },
        { path: "/sat/employee/recalledtimesheets", label: "View Recalled Sheets" },
        { path: "/sat/employee/help-desk", label: "Help Desk" },
      ],
    },

    {
      title: "Admin",  // Admin section
      links: [
        { path: "/sat/admin/viewEmployer", label: "Manage Employer" },
        { path: "/sat/admin/viewconsultantdetails", label: "Manage Consultant" },
        { path: "/sat/admin/restrictEmployers", label: "View or Restrict Employers" },
        { path: "/sat/admin/restrictConsultants", label: "View or Restrict Consultants" },
        { path: "/sat/admin/managesubmissionsheets", label: "View or Add Submission Sheets" },
        { path: "/sat/timesheet/managesatreports", label: "Generate SAT Reports" },
        { path: "/sat/admin/resumebuilder", label: "Open Resume Builder" },
        { path: "/sat/admin/airesumematcher", label: "Learn How Resume Analyzer Works" },
        { path: "/sat/admin/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/sat/admin/templatesettings", label: "Change Template Settings" },
        { path: "/sat/admin/savedjobs", label: "View My Saved Jobs" },
        { path: "/sat/admin/help-desk", label: "Access Help Desk" },
      ],
    },

    {
      title: "Consultant",  // Consultant section
      links: [
        { path: "/sat/consultant/profilesetup", label: "View or Edit Profile" },
        { path: "/sat/consultant/managesubmissionsheets", label: "View or Add Submission Sheets" },
        { path: "/sat/consultant/managesatreports", label: "Generate SAT Reports" },
        { path: "/sat/consultant/resumebuilder", label: "Use Resume Builder" },
        { path: "/sat/consultant/managesatreports", label: "Learn How Resume Analyzer Works" },
        { path: "/sat/consultant/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/sat/consultant/emailtemplateguide", label: "Change Template Settings" },
        { path: "/sat/admin/savedjobs", label: "View My Saved Jobs" },
        { path: "/sat/consultant/help-desk", label: "Access Help Desk" },
      ],
    },

    

    {
      title: "Super Admin", // Super Admin section
      links: [
        { path: "/sat/timesheet/manageConsultantssuperadmin", label: "Manage or Edit Consultants" },
        { path: "/sat/timesheet/submissions-sheet", label: "View or Add Submission Sheets" },
        { path: "/sat/superadmin/emails", label: "Manage E-mails" },
        { path: "/sat/superadmin/emaillogs", label: "E-mails Logs" },
        { path: "/sat/superadmin/schedulersettings", label: "View Scheduler Logs" },
        { path: "/sat/superadmin/userandbillingoverview", label: "View Billing Details" },
        { path: "/sat/superadmin/manageconsultantlicenses", label: "View My Licenses" },
        { path: "/sat/superadmin/manageorders", label: "View My Orders" },
        { path: "/sat/superadmin/resumeBuilderGuide", label: "Use Resume Builder" },
        { path: "/sat/superadmin/resumeAnalyzerGuide", label: "Learn How Resume Analyzer Works" },
        { path: "/sat/superadmin/airesumematcher", label: "Learn How AI Resume Matcher Works" },
        { path: "/sat/superadmin/savedResumes", label: "Saved Resumes" },
        { path: "/sat/superadmin/savedJobs", label: "Saved Job" },
        { path: "/sat/superadmin/emailtemplateguide", label: "Change Template Settings" },
        { path: "/sat/superadmin/RestrictionLoginStatus", label: "Restriction Login Status" },
        { path: "/sat/superadmin/savedjobs", label: "View My Saved Jobs" },
        { path: "/sat/superadmin/RestrictModuleAccess", label: "Restricting Module Access" },
        { path: "/sat/superadmin/AdminLoginStatus", label: "Restriction Admin Login" },
        { path: "/sat/superadmin/EmployerLoginStatus", label: "Employer Login Status" },
        { path: "/sat/superadmin/ConsultantStatusManagement", label: "Consultant Status Management" },
        { path: "/sat/superadmin/AdminAccessManagement", label: "Admin Access Management" },
        { path: "/sat/superadmin/GenerateSATReport", label: "Generate SAT Report" },
        { path: "/sat/superadmin/help-desk", label: "Access Help Desk" },
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
