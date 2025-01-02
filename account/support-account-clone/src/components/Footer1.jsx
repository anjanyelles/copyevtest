import React from 'react';
import './Footer1.css'; // Add CSS for styling

const Footer1 = () => {
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
            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F95730476%2Fadmin%2Fdashboard" target="_blank" rel="noopener noreferrer">
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
          <li>Smart Application Tracker</li>
          <li>Job Board</li>
          <li>Automatic AI Resume Matcher</li>
          <li>Recruitment Portal</li>
          <li>Timesheet Portal</li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>Company</h4>
          <li>About Company</li>
          <li>For Recruiters</li>
          <li>Blog & News</li>
          <li>Careers & Job Board</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>Learn</h4>
          <li>Terms & Conditions</li>
          <li>Privacy & Service</li>
          <li>Refund Policy</li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>For Individuals</h4>
          <li>SAT-Individuals</li>
          <li>AI Resume Builder</li>
          <li>AI Resume Matcher</li>
          <li>Resume Analyzer</li>
          <li>Timesheets</li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h4>For Employers</h4>
          <li>SAT-Employers</li>
          <li>ATS-Recruiters</li>
          <li>Resume Analyzer</li>
          <li>Recruitment Solutions</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">Copyright © Gatnix 2024</div>
      </div>
    </footer>
  );
};

export default Footer1;
