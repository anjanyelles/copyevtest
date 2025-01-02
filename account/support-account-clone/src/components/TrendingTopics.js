import React from 'react';
import './TrendingTopics.css';
import {Link} from 'react-router-dom'

const TrendingTopics = () => {
  return (
    <section className="trending-topics">
      <h2 style={{ textAlign: 'center', padding: '20px', margin: '20px' }}>Trending Topics</h2>
      <div className="topics-grid">
        <div>
          <h3>Gatnix Solutions</h3>
          <ul>
            <li>Install Gatnix Suite</li>
            <li>Manage your subscriptions</li>
            <li>Billing and payment assistance</li>
          </ul>
        </div>
        <div>
          <h3>Gatnix Account & Stor age</h3>
          <ul>
           <Link to="/GatnixAccountHelproute/sign-in-help"> <li>Sign in to your Gatnix account</li></Link>
           <Link to="GatnixAccountHelproute/password-recovery"><li>Reset your Gatnix password</li></Link>
            <li>Learn how Gatnix Cloud storage works</li>
          </ul>
        </div>
        <div>
          <h3>Gatnix Activation</h3>
          <ul>
            {/* <li>Activate Gatnix Suite</li>
            <li>Register your Gatnix product</li>
            <li>Find your Gatnix product key</li> */}
               <li style={{  cursor: "pointer" }}>
                  <Link to="/accounthelp/create-approval-manager" style={{ textDecoration: "none", color: "inherit" }}>
                Create Approval Manager
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>
  
              <Link to="/accounthelp/understanding-billing" style={{ textDecoration: "none", color: "inherit" }}>
                Understanding Billing
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>
     
              <Link to="/accounthelp/manage-invoices" style={{ textDecoration: "none", color: "inherit" }}>
                Manage Invoices
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>
          
              <Link to="/accounthelp/consultant-data" style={{ textDecoration: "none", color: "inherit" }}>
                Consultant Data
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>
     
              <Link to="/accounthelp/troubleshooting" style={{ textDecoration: "none", color: "inherit" }}>
                Troubleshooting
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>
    
              <Link to="/accounthelp/satreportgeneration" style={{ textDecoration: "none", color: "inherit" }}>
                SAT Report Generation
              </Link>
            </li>
          </ul>
        </div>
              <div>
          <h3>Gatnix Solutions</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
         

        
            <li style={{  cursor: "pointer" }}>
       
              <Link to="/accounthelp/consultantprofileedit" style={{ textDecoration: "none", color: "inherit" }}>
                Consultant Profile Edit
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>
          
              <Link to="/accounthelp/schedulerlogs" style={{ textDecoration: "none", color: "inherit" }}>
                Scheduler Logs
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>

              <Link to="/accounthelp/viewconsultantdetails" style={{ textDecoration: "none", color: "inherit" }}>
                View Consultant Details
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>
    
              <Link to="/accounthelp/emailtemplateguide" style={{ textDecoration: "none", color: "inherit" }}>
                Email Template Guide
              </Link>
            </li>
            <li style={{  cursor: "pointer" }}>

              <Link to="/accounthelp/profilesetup" style={{ textDecoration: "none", color: "inherit" }}>
                Profile Setup
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default TrendingTopics;
