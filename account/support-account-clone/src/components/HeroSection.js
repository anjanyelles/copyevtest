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
    { path: '/sat/admin/viewEmployer', label: 'Manage Employer' },
    { path: '/sat/admin/viewconsultantdetails', label: 'Manage Consultant Details' },
    { path: '/sat/admin/managesubmissionsheets', label: 'Manage Submission Sheets' },
    { path: '/sat/admin/templatesettings', label: 'Template Settings' },
  
    // SuperAdmin Routes
    { path: '/time/superadmin/organization', label: 'Manage Organization Information' },
    { path: '/time/superadmin/vendor', label: 'Manage Vendors and Clients' },
    { path: '/time/superadmin/schedulersettings', label: 'Scheduler Settings' },
    { path: '/time/superadmin/emails', label: 'Email Templates' },
    { path: '/time/superadmin/emaillogs', label: 'View Email Logs' },
    { path: '/time/superadmin/resumeAnalyzerGuide', label: 'Resume Analyzer Guide' },
    { path: '/time/superadmin/resumeMatcherGuide', label: 'Resume Matcher Guide' },
    { path: '/time/superadmin/savedResumes', label: 'Saved Resumes' },
    { path: '/time/superadmin/savedJobs', label: 'Saved Jobs' },
    { path: '/time/superadmin/restrictionConsultant', label: 'Consultant Restrictions' },
    { path: '/time/superadmin/RestrictionLoginStatus', label: 'Admin Login Restrictions' },
    { path: '/time/superadmin/RestrictionEmployerStatus', label: 'Employer Login Restrictions' },
  
    // Approver Manager Routes
    { path: '/time/approverManagers/profile', label: 'View or Edit Your Profile' },
    { path: '/time/approverManagers/timesheet', label: 'Manage TimeSheets' },
    { path: '/time/approverManagers/recalledtimesheets', label: 'Recalled TimeSheets' },
    { path: '/time/approverManagers/pendingtimesheets', label: 'Pending TimeSheets' },
  
    // Employee Routes
    { path: 'time/employee/timesheet', label: 'TimeSheet' },
    { path: 'time/employee/pendingtimesheets', label: 'View Pending TimeSheets' },
    { path: 'time/employee/approvedsheets', label: 'View Approved Sheets' },
    { path: 'time/employee/rejectedtimesheets', label: 'Rejected TimeSheets' },
    { path: 'time/employee/recalledtimesheets', label: 'Recalled TimeSheets' },
  
    // Consultant Routes
    { path: '/sat/consultant/resumebuilder', label: 'Use Resume Builder' },
    { path: '/sat/consultant/profilesetup', label: 'Setup Your Profile' },
    { path: '/sat/consultant/managesatreports', label: 'Manage SAT Reports' },
    { path: '/sat/consultant/emailtemplateguide', label: 'Email Template Guide' },
  
    // TimeSheet and Miscellaneous Routes
    { path: '/time/timesheet/profilesetup', label: 'Profile Setup' },
    { path: '/time/timesheet/satreportgeneration', label: 'SAT Report Generation' },
    { path: '/time/timesheet/manage-invoices', label: 'Manage Invoices' },
    { path: '/time/timesheet/viewconsultantdetails', label: 'View Consultant Details' },
    { path: '/time/timesheet/viewEmployer', label: 'View Employers' },
    { path: '/time/timesheet/troubleshooting', label: 'Troubleshooting' },
    { path: '/time/timesheet/vendorclientmanagement', label: 'Vendor and Client Management' },
    { path: '/time/timesheet/manageorders', label: 'Manage Orders' },
    { path: '/time/timesheet/airesumematcher', label: 'AI Resume Matcher' },
    { path: '/time/timesheet/billingandsatreports', label: 'Billing and SAT Reports' },
  
    // Account Help and Support Routes
    { path: '/sat/accounthelp/satreportgeneration', label: 'SAT Report Generation Help' },
    { path: '/sat/accounthelp/profileupdate', label: 'Update Profile Guide' },
    { path: '/sat/accounthelp/troubleshooting', label: 'Troubleshooting Guide' },
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
