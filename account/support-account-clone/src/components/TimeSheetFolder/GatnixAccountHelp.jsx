import React, { useState } from "react";
import "./GatnixAccountHelp.css";
import Header from "../Header";

const GatnixAccountHelp = () => {
  const [activeTab, setActiveTab] = useState(null); // State to track active tab

  // Content for each tab (supports multiple elements)
  const contentMap = {
    overview: {
      title: "Gatnix Account Overview",
      description: (
        <>
          <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
            Welcome to Gatnix
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            Gatnix provides an all-in-one platform to streamline hiring, empower talent management, 
            and enhance communication through intelligent automation and real-time tracking.
          </p>
          
          <img src="https://res.cloudinary.com/dqdvdseyk/image/upload/v1732015726/rzehjanzhthqr6smjkmx.png" alt="Gatnix Overview" style={{ width: "60%", height: "auto", marginBottom: "20px" }} />
          
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Features
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            - Centralized job application tracking with categorization by status, company, or position.<br />
            - Employee management tools for profile tracking, performance monitoring, and task management.<br />
            - Automated follow-up services to save time and ensure timely communication.<br />
            - Real-time updates for clear insights into application progress.<br />
            - Email and SMS automation for enhanced communication and efficiency.<br />
          </p>
    
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Products
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            - <strong>Smart Application Tracker:</strong> Simplify hiring with seamless candidate management.<br />
            - <strong>Job Board:</strong> Discover and connect with top talent in a dynamic environment.<br />
            - <strong>AI Resume Matcher:</strong> Use AI-powered tools to match talent with opportunities.<br />
            - <strong>Timesheet Portal:</strong> Optimize productivity with intuitive time-tracking tools.<br />
          </p>
    
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Pricing Plans
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            Choose from individual or organization plans, starting with free trials.<br />
            <strong>Individual:</strong> Basic (Free/90 days) and Pro ($7/month).<br />
            <strong>Organization:</strong> Basic ($22/month) and Pro ($35/month).<br />
          </p>
    
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Customer Support
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            - Comprehensive knowledge base for quick answers.<br />
            - 24/7 live chat support for personalized assistance.<br />
            - Direct support available at <strong style={{ color: "#000000" }}>+1 (614) 421-7545</strong>.<br />
          </p>
        </>
      ),
    },
    
  
    "sign-in-help": {
      title: "How to Sign In to a Gatnix Account",
      description: (
        <>
        <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
          How to Sign In to a Gatnix Account
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
          Follow these simple steps to access your Gatnix account with ease:
        </p>
  
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 1: Visit the Gatnix Website
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          Open your preferred web browser and go to the official Gatnix website at{" "}
          <a href="https://www.gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
            www.gatnix.com
          </a>.
        </p>
  
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 2: Click on "Sign In"
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          On the homepage, locate the "Sign In" button at the top right corner of the screen and click on it.
        </p>
  
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 3: Enter Your Credentials
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          Enter your registered email address and password in the provided fields. Ensure your credentials are correct to avoid errors.
        </p>
  
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 4: Complete CAPTCHA Verification
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          If prompted, complete the CAPTCHA verification to confirm you are not a robot. This step enhances security for your account.
        </p>
  
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 5: Click "Sign In"
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          After entering your credentials, click the "Sign In" button to access your Gatnix account dashboard.
        </p>
  
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Troubleshooting Tips
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - <strong>Forgot your password?</strong> Click on the "Forgot Password" link on the sign-in page to reset it.<br />
          - <strong>Account locked?</strong> Contact Gatnix support at{" "}
          <a href="mailto:support@gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
            support@gatnix.com
          </a>{" "}
          for assistance.<br />
          - <strong>Browser issues?</strong> Clear your browser cache or try using a different browser.
        </p>
  
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Need Further Assistance?
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          For additional help, contact our 24/7 live support team via live chat on the Gatnix website, or call us at{" "}
          <strong style={{ color: "#000000" }}>+1 (614) 421-7545</strong>.
        </p>
      </>
      ),
    },
    "cant-sign-in": {
      title: "Can't Sign In",
      description: (
        <>
      <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
        Can't Sign In to Your Gatnix Account?
      </h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
        If you're having trouble signing in, follow these steps to resolve common issues and regain access to your account.
      </p>

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 1: Verify Your Credentials
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - Ensure that you are entering the correct email address and password associated with your account.<br />
        - Check for typing errors, such as accidental spaces, capitalization, or incorrect characters.<br />
        - If you recently changed your password, make sure you're using the updated one.
      </p>

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 2: Reset Your Password
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - If you forgot your password, click on the <strong>"Forgot Password"</strong> link on the sign-in page.<br />
        - Enter your registered email address to receive a password reset link.<br />
        - Follow the instructions in the email to set a new password and try signing in again.
      </p>

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 3: Check Your Internet Connection
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - Make sure your device is connected to a stable internet connection.<br />
        - If the connection is unstable, switch to another network or restart your router.
      </p>

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 4: Clear Your Browser Cache
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - If you're using a web browser, clearing the cache and cookies can often resolve sign-in issues.<br />
        - After clearing your cache, refresh the sign-in page and try again.
      </p>

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 5: Account Locked?
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - If your account is locked due to multiple failed login attempts, you may need to wait 15-30 minutes before trying again.<br />
        - Alternatively, contact Gatnix support to unlock your account.
      </p>

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 6: Contact Support
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - If you've tried the steps above and still can't sign in, reach out to Gatnix support for assistance.<br />
        - Email us at{" "}
        <a href="mailto:support@gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
          support@gatnix.com
        </a>{" "}
        or call us at <strong style={{ color: "#000000" }}>+1 (614) 421-7545</strong>.<br />
        - Our support team is available 24/7 to help resolve your issue.
      </p>
    </>

      ),
    },
    "what-is-account": {
      title: "What is a Gatnix Account",
      description: (
        <>
          <p>Understand what a Gatnix account is and how to use it.</p>
        </>
      ),
    },
    "create-account": {
      title: "Create a New Gatnix Account",
      description: (
        <>
       
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            Follow these steps to create a new Gatnix account quickly and get started with our platform.
          </p>
    
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Step 1: Registration Page
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            - Click on the <strong>"Registration"</strong> button on the Gatnix homepage.<br />
            - This will redirect you to the <strong>Organization Registration</strong> page.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%2012.21.18%20PM-1.png" alt="Registration Page" style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} />
    
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Step 2: Enter Organization Details
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            - Enter your <strong>Organization Name</strong>.<br />
            - Provide your <strong>Email Address</strong>.<br />
            - Select the <strong>Country Code</strong> and enter your <strong>Mobile Number</strong>.<br />
            - Click the <strong>"Next"</strong> button to proceed.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/timesheet/Screenshot%202024-12-13%20at%2012.24.21%20PM.png" alt="Organization Details" style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} />
    
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Step 3: Organization Address
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            - On the next page, enter your <strong>Organization Address</strong>.<br />
            - Provide the <strong>City Name</strong> and <strong>Pin Code</strong> of your company.<br />
            - Check the box to agree to the <strong>Terms and Conditions</strong>.<br />
            - Click <strong>"Next"</strong> to continue.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%203.18.20%20PM.png" alt="Organization Address" style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} />
    
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Step 4: Email Verification
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            - You will be redirected to the <strong>Email Verification</strong> page.<br />
            - Enter the <strong>OTP (One-Time Password)</strong> sent to your email address.<br />
            - After email verification, you will be directed to the <strong>PAN Mobile Number Verification</strong> page.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%203.41.20%20PM.png" alt="Email Verification" style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} />
    
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
            Log In to Super Admin
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            - Enter your <strong>Email</strong> and <strong>Password</strong>.<br />
            - Click on <strong>"Sign In"</strong>; this will navigate you to the OTP page.<br />
            - Enter a valid OTP to gain access to your dashboard.
          </p>
          <img src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%203.48.38%20PM.png" alt="Super Admin Log In" style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} />
        </>
    )
    
    },
    "password-recovery": {
      title: "Password Reset and Recovery",
      description: (
        <>
          <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
            Reset Your Password
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            Follow the steps below to reset your Gatnix account password securely.
          </p>
      
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
            Step 1: Enter Your Email
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            - Provide the email address associated with your Gatnix account.<br />
            - Click the "Send Reset Link" button to receive a password reset email.
          </p>
      
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
            Step 2: Check Your Inbox
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            - Open the email sent from Gatnix support.<br />
            - Click the password reset link provided in the email to proceed.
          </p>
      
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
            Step 3: Reset Your Password
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            - On the reset password page, enter your new password.<br />
            - Re-enter the password in the "Confirm Password" field to ensure they match.<br />
            - Click "Submit" to save your new password.
          </p>
      
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
            Tips for a Secure Password
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
            - Use a mix of uppercase, lowercase, numbers, and special characters.<br />
            - Avoid using easily guessable words like your name or birthdate.<br />
            - Choose a password that is at least 8 characters long.
          </p>
      
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
            Need Help?
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
            If you encounter any issues during the process, please contact us at{" "}
            <a href="mailto:support@gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
              support@gatnix.com
            </a>.
          </p>
        </>
      ),
      
    },
    "forgot-username": {
      title: "Forgot Username",
      description: (
        <>
          <p>Retrieve your forgotten Gatnix account username.</p>
        </>
      ),
    },
    "verification": {
      title: "Sign-In Verification",
      description: (
        <>
          <p>Set up and manage verification options for secure sign-in.</p>
        </>
      ),
    },
    "locked-accounts": {
      title: "Locked or Compromised Accounts",
      description: (
        <>
          <p>Recover access to locked or compromised accounts.</p>
        </>
      ),
    },
    "security-tools": {
      title: "Account Security Tools",
      description: (
        <>
          <p>Explore tools to keep your account secure.</p>
        </>
      ),
    },
    "update-profile": {
      title: "Update Your Profile",
      description: (
        <>
        <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
          How to Edit Your Profile Details
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
          Follow the steps below to edit your profile details and keep your information up to date.
        </p>
      
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 1: Login to Your Account
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - Ensure you are logged into your account with the correct email address and password.<br />
          - If you are unable to log in, follow the password reset steps provided on the login page.
        </p>
      
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 2: Navigate to Profile Settings
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - Once logged in, go to the profile section or settings.<br />
          - Look for options like "Edit Profile" or "Update Information."
        </p>
      
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 3: Edit Your Details
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - You can now update the following details:
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Education and work experience</li>
            <li>Preferred job settings and location</li>
          </ul>
          - Make sure all the information is correct and up to date.
        </p>
      
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 4: Save Your Changes
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - After updating your details, click the "Save" or "Update" button to save your changes.<br />
          - If you're unable to save your information, check for any required fields that might be missing or incorrect.
        </p>
      
        <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
          Step 5: Contact Support
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
          - If you encounter any issues while editing your profile, feel free to contact support.<br />
          - Email us at{" "}
          <a href="mailto:support@gatnix.com" style={{ color: "#1ABC9C", textDecoration: "none" }}>
            support@gatnix.com
          </a>{" "}
        
        </p>
      </>
      
      ),
    },
    "linked-accounts": {
      title: "Linked Accounts",
      description: (
        <>
          <p>Manage accounts linked to your Gatnix account.</p>
        </>
      ),
    },
    devices: {
      title: "Devices",
      description: (
        <>
          <p>View and manage devices connected to your account.</p>
        </>
      ),
    },
    "close-account": {
      title: "Close Your Account",
      description: (
        <>
          <p>Understand how to close your Gatnix account.</p>
        </>
      ),
    },
  };

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab)); // Toggle tabs
  };

  return (
    <>
      <Header />
      <div
        className="account-help-container"
        style={{
          borderTop: "1px solid gray",
          display: "flex",
          height: "100vh",
        }}
      >
        {/* Sidebar */}
        <div
          className="sidebar"
          style={{
            flex: "0 0 20%",
            borderRight: "2px solid lightgray",
            padding: "10px",
          }}
        >
          <h3>Gatnix Help Topics</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {Object.keys(contentMap).map((tabKey, index) => (
              <li
                key={tabKey}
                className={activeTab === tabKey ? "active" : ""}
                onClick={() => handleTabClick(tabKey)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderLeft: activeTab === tabKey ? "3px solid #0078D4" : "none",
                  backgroundColor: activeTab === tabKey ? "#f0f8ff" : "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    marginRight: "8px",
                    fontWeight: "bold",
                    color: "#0078D4",
                  }}
                >
                  {index + 1}.
                </span>
                <span
                  style={{
                    textDecoration: activeTab === tabKey ? "none" : "none",
                  }}
                >
                  {contentMap[tabKey].title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div
          className="content"
          style={{
            flex: "1",
            padding: "20px",
            textAlign: "left",
            overflowY: "auto",
          }}
        >
          {activeTab ? (
            <>
              <h1>{contentMap[activeTab].title}</h1>
              <div>{contentMap[activeTab].description}</div>
            </>
          ) : (
            <p>Please select a topic from the sidebar.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GatnixAccountHelp;
