import React from 'react';

const SignInHelpSteps = () => {
  return (
    <div>
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

      {/* Add more steps here */}
    </div>
  );
};

export default SignInHelpSteps;
