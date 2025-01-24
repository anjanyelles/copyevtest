import React from 'react';

const CreateAccount = () => {
  return (
    <div>
      <h1>Create a New Gatnix Account</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4F4F4F', marginBottom: '20px' }}>
        Follow these steps to create a new Gatnix account quickly and get started with our platform.
      </p>

      <h3 style={{ fontSize: '20px', fontWeight: '300', color: '#000000', marginTop: '20px', marginBottom: '10px' }}>
        Step 1: Registration Page
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4F4F4F' }}>
        - Click on the <strong>"Registration"</strong> button on the Gatnix homepage.<br />
        - This will redirect you to the <strong>Organization Registration</strong> page.
      </p>
      <img
        src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%2012.21.18%20PM-1.png"
        alt="Registration Page"
        style={{ maxWidth: '60%', height: 'auto', marginBottom: '20px' }}
      />

      <h3 style={{ fontSize: '20px', fontWeight: '300', color: '#000000', marginTop: '20px', marginBottom: '10px' }}>
        Step 2: Enter Organization Details
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4F4F4F' }}>
        - Enter your <strong>Organization Name</strong>.<br />
        - Provide your <strong>Email Address</strong>.<br />
        - Select the <strong>Country Code</strong> and enter your <strong>Mobile Number</strong>.<br />
        - Click the <strong>"Next"</strong> button to proceed.
      </p>
      <img
        src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/timesheet/Screenshot%202024-12-13%20at%2012.24.21%20PM.png"
        alt="Organization Details"
        style={{ maxWidth: '60%', height: 'auto', marginBottom: '20px' }}
      />

      <h3 style={{ fontSize: '20px', fontWeight: '300', color: '#000000', marginTop: '20px', marginBottom: '10px' }}>
        Step 3: Organization Address
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4F4F4F' }}>
        - On the next page, enter your <strong>Organization Address</strong>.<br />
        - Provide the <strong>City Name</strong> and <strong>Pin Code</strong> of your company.<br />
        - Check the box to agree to the <strong>Terms and Conditions</strong>.<br />
        - Click <strong>"Next"</strong> to continue.
      </p>
      <img
        src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%203.18.20%20PM.png"
        alt="Organization Address"
        style={{ maxWidth: '60%', height: 'auto', marginBottom: '20px' }}
      />

      <h3 style={{ fontSize: '20px', fontWeight: '300', color: '#000000', marginTop: '20px', marginBottom: '10px' }}>
        Step 4: Email Verification
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4F4F4F' }}>
        - You will be redirected to the <strong>Email Verification</strong> page.<br />
        - Enter the <strong>OTP (One-Time Password)</strong> sent to your email address.<br />
        - After email verification, you will be directed to the <strong>PAN Mobile Number Verification</strong> page.
      </p>
      <img
        src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%203.41.20%20PM.png"
        alt="Email Verification"
        style={{ maxWidth: '60%', height: 'auto', marginBottom: '20px' }}
      />

      <h3 style={{ fontSize: '20px', fontWeight: '300', color: '#000000', marginTop: '20px', marginBottom: '10px' }}>
        Log In to Super Admin
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4F4F4F' }}>
        - Enter your <strong>Email</strong> and <strong>Password</strong>.<br />
        - Click on <strong>"Sign In"</strong>; this will navigate you to the OTP page.<br />
        - Enter a valid OTP to gain access to your dashboard.
      </p>
      <img
        src="https://45323494.fs1.hubspotusercontent-na1.net/hubfs/45323494/Screenshot%202024-12-13%20at%203.48.38%20PM.png"
        alt="Super Admin Log In"
        style={{ maxWidth: '60%', height: 'auto', marginBottom: '20px' }}
      />
    </div>
  );
};

export default CreateAccount;
