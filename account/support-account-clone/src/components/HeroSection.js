import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Swal from 'sweetalert2';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  
  // Predefined list of routes and their labels
  const routes = [
    // Admin Routes
    { path: '/admin/viewEmployer', label: 'Manage Employer' },
    { path: '/admin/viewconsultantdetails', label: 'Manage Consultant Details' },
    { path: '/admin/managesubmissionsheets', label: 'Manage Submission Sheets' },
    { path: '/admin/templatesettings', label: 'Template Settings' },
  
    // SuperAdmin Routes
    { path: '/superadmin/organization', label: 'Manage Organization Information' },
    { path: '/superadmin/vendor', label: 'Manage Vendors and Clients' },
    { path: '/superadmin/schedulersettings', label: 'Scheduler Settings' },
    { path: '/superadmin/emails', label: 'Email Templates' },
    { path: '/superadmin/emaillogs', label: 'View Email Logs' },
    { path: '/superadmin/resumeAnalyzerGuide', label: 'Resume Analyzer Guide' },
    { path: '/superadmin/resumeMatcherGuide', label: 'Resume Matcher Guide' },
    { path: '/superadmin/savedResumes', label: 'Saved Resumes' },
    { path: '/superadmin/savedJobs', label: 'Saved Jobs' },
    { path: '/superadmin/restrictionConsultant', label: 'Consultant Restrictions' },
    { path: '/superadmin/RestrictionLoginStatus', label: 'Admin Login Restrictions' },
    { path: '/superadmin/RestrictionEmployerStatus', label: 'Employer Login Restrictions' },
  
    // Approver Manager Routes
    { path: '/approverManagers/profile', label: 'View or Edit Your Profile' },
    { path: '/approverManagers/timesheet', label: 'Manage TimeSheets' },
    { path: '/approverManagers/recalledtimesheets', label: 'Recalled TimeSheets' },
    { path: '/approverManagers/pendingtimesheets', label: 'Pending TimeSheets' },
  
    // Employee Routes
    { path: '/employee/timesheet', label: 'TimeSheet' },
    { path: '/employee/pendingtimesheets', label: 'View Pending TimeSheets' },
    { path: '/employee/approvedsheets', label: 'View Approved Sheets' },
    { path: '/employee/rejectedtimesheets', label: 'Rejected TimeSheets' },
    { path: '/employee/recalledtimesheets', label: 'Recalled TimeSheets' },
  
    // Consultant Routes
    { path: '/consultant/resumebuilder', label: 'Use Resume Builder' },
    { path: '/consultant/profilesetup', label: 'Setup Your Profile' },
    { path: '/consultant/managesatreports', label: 'Manage SAT Reports' },
    { path: '/consultant/emailtemplateguide', label: 'Email Template Guide' },
  
    // TimeSheet and Miscellaneous Routes
    { path: '/timesheet/profilesetup', label: 'Profile Setup' },
    { path: '/timesheet/satreportgeneration', label: 'SAT Report Generation' },
    { path: '/timesheet/manage-invoices', label: 'Manage Invoices' },
    { path: '/timesheet/viewconsultantdetails', label: 'View Consultant Details' },
    { path: '/timesheet/viewEmployer', label: 'View Employers' },
    { path: '/timesheet/troubleshooting', label: 'Troubleshooting' },
    { path: '/timesheet/vendorclientmanagement', label: 'Vendor and Client Management' },
    { path: '/timesheet/manageorders', label: 'Manage Orders' },
    { path: '/timesheet/airesumematcher', label: 'AI Resume Matcher' },
    { path: '/timesheet/billingandsatreports', label: 'Billing and SAT Reports' },
  
    // Account Help and Support Routes
    { path: '/accounthelp/satreportgeneration', label: 'SAT Report Generation Help' },
    { path: '/accounthelp/profileupdate', label: 'Update Profile Guide' },
    { path: '/accounthelp/troubleshooting', label: 'Troubleshooting Guide' },
  ];
  

  // Update filtered routes based on search term
  useEffect(() => {
    if (searchTerm) {
      const matches = routes.filter(route =>
        route.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRoutes(matches);
    } else {
      setFilteredRoutes([]);
    }
  }, [searchTerm]);

  return (
    <section className="hero">
      <h1> Welcome to Gatnix Support</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="How can we help you?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>&#10132;</button>
      </div>

      {/* Display matching routes */}
      <div className='search-results_search'>
      {filteredRoutes.length > 0 && (
        <div className="search-results">
          <ul>
            {filteredRoutes.map((route, index) => (
              <li key={index}  className='liststyle'>
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>

      {/* Show no results message */}
      {searchTerm && filteredRoutes.length === 0 && (
        <p className="no-results">No matching topics found.</p>
      )}
    </section>
  );
};

export default HeroSection;
