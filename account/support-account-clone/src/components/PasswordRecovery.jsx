import React from 'react';

const PasswordRecovery = () => {
  return (
    <div>
      <h1>Password Recovery</h1>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
        Follow these steps to recover your password and regain access to your account.
      </p>

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 1: Go to the Password Recovery Page
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - On the login page, click on the <strong>"Forgot Password"</strong> link.<br />
        - This will redirect you to the <strong>Password Recovery</strong> page.
      </p>
      <img 
        src="https://example.com/path/to/your/forgot-password-image.png" 
        alt="Password Recovery Page" 
        style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} 
      />

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 2: Enter Your Registered Email
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - Enter the email address you used to register with your account.<br />
        - Click on the <strong>"Submit"</strong> button to receive a password recovery email.
      </p>
      <img 
        src="https://example.com/path/to/your/email-entry-image.png" 
        alt="Enter Email" 
        style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} 
      />

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 3: Check Your Email
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - Check your inbox for an email with a subject like <strong>"Password Recovery Instructions"</strong>.<br />
        - Open the email and click on the password recovery link provided.
      </p>
      <img 
        src="https://example.com/path/to/your/email-check-image.png" 
        alt="Check Your Email" 
        style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} 
      />

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 4: Reset Your Password
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - On the password reset page, enter your new password.<br />
        - Confirm your new password by entering it again.<br />
        - Click on <strong>"Reset Password"</strong> to complete the process.
      </p>
      <img 
        src="https://example.com/path/to/your/password-reset-image.png" 
        alt="Password Reset" 
        style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} 
      />

      <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
        Step 5: Log In with Your New Password
      </h3>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
        - After resetting your password, return to the login page.<br />
        - Enter your email address and the new password to log in to your account.
      </p>
      <img 
        src="https://example.com/path/to/your/login-image.png" 
        alt="Login with New Password" 
        style={{ maxWidth: "60%", height: "auto", marginBottom: "20px" }} 
      />
    </div>
  );
};

export default PasswordRecovery;
