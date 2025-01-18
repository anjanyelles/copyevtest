import React from 'react';
import './QuickLinks.css';

const QuickLinks = () => {
  const links = [
    { icon: '🚀', name: 'Gatnix Solutions', url: 'https://www.gatnix.com' },
    { icon: '👤', name: 'SAT-INDIVIDUALS', url: 'https://www.gatnix.com/sat/individual' },
    { icon: '🏢', name: 'SAT-EMPLOYERS', url: 'https://www.gatnix.com/sat/employer' },
    { icon: '📋', name: 'SAT-RECRUITERS', url: 'https://www.gatnix.com/sat/recruiter' },
    { icon: '🛠️', name: 'AI Resume Builder', url: 'https://www.gatnix.com/resume/ai-resume-builder' },
    { icon: '📊', name: 'Resume Analyzer', url: 'https://www.gatnix.com/resume/resume-analyzer' },
    { icon: '🔍', name: 'AI Resume Matcher', url: 'https://www.gatnix.com/resume/resume-matcher' },
    { icon: '⏱️', name: 'Timesheets', url: 'https://timesheet.gatnix.com' },
    { icon: '💼', name: 'Employee Management', url: 'https://www.gatnix.com/employee-management' },
  ];

  return (
    <div className="quick-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="quick-link"
        >
          <div className="icon">{link.icon}</div>
          <div style={{ textAlign: 'center' }}>{link.name}</div>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
