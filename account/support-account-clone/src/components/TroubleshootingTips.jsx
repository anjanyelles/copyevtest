import React from 'react';

const TroubleshootingTips = () => {
  return (
    <div>
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
    </div>
  );
};

export default TroubleshootingTips;
