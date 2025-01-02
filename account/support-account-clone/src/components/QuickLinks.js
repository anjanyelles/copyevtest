import React from 'react';
import './QuickLinks.css';

const QuickLinks = () => {
    const links = [
        { icon: '🚀', name: 'Gatnix Solutions' },
        { icon: '👤', name: 'SAT-INDIVIDUALS' },
        { icon: '🏢', name: 'SAT-EMPLOYERS' },
        { icon: '📋', name: 'SAT-RECRUITERS' },
        { icon: '🛠️', name: 'AI Resume Builder' },
        { icon: '📊', name: 'Resume Analyzer' },
        { icon: '🔍', name: 'AI Resume Matcher' },
        { icon: '⏱️', name: 'Timesheets' },
        { icon: '💼', name: 'Employee Management' },
      ];
      

  return (
    <div className="quick-links">
      {links.map((link, index) => (
        <div key={index} className="quick-link">
          <div className="icon">{link.icon}</div>
          <div  style={{textAlign:'center'}}>{link.name}</div>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
