import React, { useState } from "react";
import "./ManageSubscription.css";
import Header from "./Header";

const ManageSubscription = () => {
  const [activeTab, setActiveTab] = useState(null); // State to track active tab

  // Content for each tab (supports multiple elements)
  const contentMap = {
    manage: {
      title: "Manage your subscription",
      description: (
        <>
          <p>
            You can view or modify your <strong>Microsoft 365 subscription</strong> details here.
          </p>
          <ul>
            <li>Check your subscription status</li>
            <li>Update billing information</li>
            <li>View payment history</li>
          </ul>
        </>
      ),
    },
    "sat-individuals": {
      title: "SAT-INDIVIDUALS",
      description: (
        <>
          <h3>Solutions for Individuals</h3>
          <p>
            Explore tools to help you prepare for SAT exams, manage personal goals, and grow your
            skills.
          </p>
        </>
      ),
    },
    "sat-employers": {
      title: "SAT-EMPLOYERS",
      description: (
        <>
          <h3>Solutions for Employers</h3>
          <p>
            Enable employees to access SAT preparation tools, track their progress, and improve
            organizational results.
          </p>
        </>
      ),
    },
    "ats-recruiters": {
      title: "ATS-RECRUITERS",
      description: (
        <>
          <h3>Solutions for Recruiters</h3>
          <p>
            Streamline recruitment processes with advanced applicant tracking system (ATS) tools.
          </p>
          <ul>
            <li>Analyze and manage resumes</li>
            <li>Match candidates with job roles</li>
          </ul>
        </>
      ),
    },
    "resume-analyzer": {
      title: "RESUME ANALYZER",
      description: (
        <>
          <h3>Resume Analysis</h3>
          <p>
            Analyze resumes to identify key strengths, weaknesses, and opportunities for
            improvement.
          </p>
        </>
      ),
    },
    "ai-resume-builder": {
      title: "AI RESUME BUILDER",
      description: (
        <>
          <h3>Build Your Resume with AI</h3>
          <p>
            Use AI tools to create optimized resumes tailored to your career goals.
          </p>
        </>
      ),
    },
    "ai-resume-matcher": {
      title: "AI RESUME MATCHER",
      description: (
        <>
          <h3>AI Resume Matching</h3>
          <p>
            Match your resume with suitable job openings to maximize your career potential.
          </p>
        </>
      ),
    },
    timesheets: {
      title: "TIMESHEETS",
      description: (
        <>
          <h3>Manage Timesheets</h3>
          <p>Track your work hours and productivity seamlessly with integrated timesheet tools.</p>
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
      <div className="subscription-container" >
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Manage Content</h3>
          <ul>
            {Object.keys(contentMap).map((tabKey) => (
              <li
                key={tabKey}
                className={activeTab === tabKey ? "active" : ""}
                onClick={() => handleTabClick(tabKey)}
              >
                {contentMap[tabKey].title}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="content">
          {activeTab ? (
            <>
              <h1>{contentMap[activeTab].title}</h1>
              <div>{contentMap[activeTab].description}</div>
            </>
          ) : (
            <p>Please select an option from the sidebar.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageSubscription;
