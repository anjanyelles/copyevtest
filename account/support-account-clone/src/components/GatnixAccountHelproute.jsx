import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import SignInHelpSteps from './SignInHelpSteps';
import TroubleshootingTips from './TroubleshootingTips';
import NeedFurtherAssistance from './NeedFurtherAssistance';
import WhatisAccount from './WhatisAccount';

import CreateAccount from './CreateAccount';
import PasswordRecovery from './PasswordRecovery';
import ForgotUsername from './ForgotUsername';
import Verification from './Verification';
import LockedAccounts from './LockedAccounts';
import SecurityTools from './SecurityTools';
import UpdateProfile from './UpdateProfile';
import LinkedAccounts from './LinkedAccounts';
import CloseAccount from './CloseAccount';

import Header from './Header'; // Assuming you have a Header component

const GatnixAccountHelproute = () => {
  const location = useLocation(); // To get the current route

  let content = null;
  if (location.pathname === "/GatnixAccountHelproute/sign-in-help") {
    content = <SignInHelpSteps />;
  } else if (location.pathname === "/GatnixAccountHelproute/troubleshooting") {
    content = <TroubleshootingTips />;
  } else if (location.pathname === "/GatnixAccountHelproute/need-assistance") {
    content = <NeedFurtherAssistance />;
  }

  else if (location.pathname === "/GatnixAccountHelproute/what-is-account") {
    content = <WhatisAccount />;
  } else if (location.pathname === "/GatnixAccountHelproute/create-account") {
    content = <CreateAccount />;
  }
  else if (location.pathname === "/GatnixAccountHelproute/password-recovery") {
    content = <PasswordRecovery />;
  } else if (location.pathname === "/GatnixAccountHelproute/forgot-username") {
    content = <ForgotUsername />;
  }


  else if (location.pathname === "/GatnixAccountHelproute/verification") {
    content = <Verification />;
  }
  else if (location.pathname === "/GatnixAccountHelproute/locked-accounts") {
    content = <LockedAccounts />;
  } else if (location.pathname === "/GatnixAccountHelproute/security-tools") {
    content = <SecurityTools />;
  }

  else if (location.pathname === "/GatnixAccountHelproute/update-profile") {
    content = <UpdateProfile />;
  }
  else if (location.pathname === "/GatnixAccountHelproute/linked-accounts") {
    content = <LinkedAccounts />;
  } else if (location.pathname === "/GatnixAccountHelproute/close-account") {
    content = <CloseAccount />;
  }

  return (
    <>
      <Header />
      <div className="account-help-container" style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
  {/* Sidebar */}
<div className="sidebar" style={{ flex: "0 0 20%", padding: "10px", background: "#f4f4f4" }}>

<ul style={{ listStyleType: "none", padding: 0 }}>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/sign-in-help" style={{ textDecoration: "none", color: "inherit" }}>
      1. Sign In Help
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/troubleshooting" style={{ textDecoration: "none", color: "inherit" }}>
      2. Troubleshooting
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/need-assistance" style={{ textDecoration: "none", color: "inherit" }}>
      3. Need Further Assistance
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/what-is-account" style={{ textDecoration: "none", color: "inherit" }}>
      4. What is an Account?
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/create-account" style={{ textDecoration: "none", color: "inherit" }}>
      5. Create Account
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/password-recovery" style={{ textDecoration: "none", color: "inherit" }}>
      6. Password Recovery
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/forgot-username" style={{ textDecoration: "none", color: "inherit" }}>
      7. Forgot Username
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/verification" style={{ textDecoration: "none", color: "inherit" }}>
      8. Verification
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/locked-accounts" style={{ textDecoration: "none", color: "inherit" }}>
      9. Locked Accounts
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/security-tools" style={{ textDecoration: "none", color: "inherit" }}>
      10. Security Tools
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/update-profile" style={{ textDecoration: "none", color: "inherit" }}>
      11. Update Profile
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/linked-accounts" style={{ textDecoration: "none", color: "inherit" }}>
      12. Linked Accounts
    </Link>
  </li>
  <li style={{ padding: "10px", cursor: "pointer" }}>
    <Link to="/GatnixAccountHelproute/close-account" style={{ textDecoration: "none", color: "inherit" }}>
      13. Close Account
    </Link>
  </li>
</ul>

</div>


        {/* Content Area */}
        <div className="content-area" style={{ flex: "1", padding: "20px", backgroundColor: "white", height:'90vh', overflowY:'scroll' }}>
          {content}
        </div>
      </div>
    </>
  );
};

export default GatnixAccountHelproute;
