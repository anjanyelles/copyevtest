import React from 'react';
import './Footer1.css'; // Add CSS for styling

const Footer1 = () => {
  const baseURL = 'https://www.gatnix.com'; // Base URL for all internal links
  
  return (
    <footer className="footer">
      <div className="footer-section">
        <img
          src="https://www.gatnix.com/assets/images/gatnix-logo-svg.svg"
          alt="gatnix"
          className="gatnix"
          style={{ height: 'auto' }}
        />
        <ul className="social-media-icons" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/gatnix" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/95730476/admin/dashboard" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gatnix/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>Products</h4>
          <li><a href={`${baseURL}/sat/individual`}>Smart Application Tracker</a></li>
          <li><a href={`${baseURL}/profile`}>Job Board</a></li>
          <li><a href={`${baseURL}/resume/ai-resume-builder`}>Automatic AI Resume Matcher</a></li>
          <li><a href={`${baseURL}/recruitment-portal`}>Recruitment Portal</a></li>
          <li><a href="https://timesheet.gatnix.com/" target="_blank">Timesheet Portal</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>Company</h4>
          <li><a href={`${baseURL}/about`}>About Company</a></li>
          <li><a href={`${baseURL}/profile`}>For Recruiters</a></li>
          <li><a href="https://blog.gatnix.com/blog" target="_blank">Blog & News</a></li>
          <li><a href={`${baseURL}/careers`}>Careers & Job Board</a></li>
          <li><a href={`${baseURL}/contact`}>Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>Learn</h4>
          <li><a href={`${baseURL}/learn/terms-of-service`}>Terms & Conditions</a></li>
          <li><a href={`${baseURL}/learn/privacy-policy`}>Privacy & Service</a></li>
          <li><a href={`${baseURL}/learn/refund-policy`}>Refund Policy</a></li>
          <li><a href="https://gatnix.atlassian.net/servicedesk/customer/portal/3" target="_blank">Help Center</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>For Individuals</h4>
          <li><a href={`${baseURL}/sat/individual`}>SAT-Individuals</a></li>
          <li><a href={`${baseURL}/resume/ai-resume-builder`}>AI Resume Builder</a></li>
          <li><a href={`${baseURL}/resume/ai-resume-matcher`}>AI Resume Matcher</a></li>
          <li><a href={`${baseURL}/resume/resume-analyzer`}>Resume Analyzer</a></li>
          <li><a href={`${baseURL}/timesheets`}>Timesheets</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>For Employers</h4>
          <li><a href={`${baseURL}/sat/employer`}>SAT-Employers</a></li>
          <li><a href={`${baseURL}/ats-recruiters`}>ATS-Recruiters</a></li>
          <li><a href={`${baseURL}/resume/resume-analyzer`}>Resume Analyzer</a></li>
          <li><a href={`${baseURL}/recruitment-solutions`}>Recruitment Solutions</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright © <a href="https://www.gatnix.com/home" target="_blank">Gatnix</a> 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
