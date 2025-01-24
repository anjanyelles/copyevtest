import React from 'react';

const TimeSheetSettings = () => {
  return (
    <div>
      <h2 className="heading">
        TimeSheet Settings
      </h2>
      <p className="description">
        1. Click on Time Sheets Settings
      </p>

      <h5>Remainder Notifications</h5>
      <p>
        You can see the Remainder Notifications i.e., Email, Text Message, and WhatsApp.
      </p>
      <ul>
        <li>Email: Enable or disable email notifications for reminders related to time sheets.</li>
        <li>Text Messages: Enable or disable SMS notifications for time sheet reminders.</li>
        <li>WhatsApp: Enable or disable WhatsApp notifications for time sheet reminders.</li>
      </ul>

      <h5>Alert Notifications</h5>
      <p>
        In the Alert Notifications section, you can configure the alert settings for different actions or statuses:
      </p>
      <ul>
        <li>Email: Enable or disable email alerts for important time sheet actions or status updates.</li>
        <li>Text Messages: Enable or disable SMS alerts for key events related to time sheets.</li>
        <li>WhatsApp: Enable or disable WhatsApp alerts for time sheet-related actions.</li>
      </ul>

      <h5>Recall Settings</h5>
      <p>
        In the Recall Settings section, select who has the authority to request a recall of time sheets:
      </p>
      <ul>
        <li>Any One: Allow any user to request a recall of time sheets.</li>
        <li>Only Super Admin: Restrict the recall request option to only Super Admin users.</li>
        <li>Only Approval Manager: Restrict the recall request option to only Approval Managers.</li>
      </ul>


      <img
                className="placeholder-image image_gatnix_support"
                src=" https://res.cloudinary.com/danfpnuui/image/upload/v1737529599/Screenshot_2025-01-21_153340_sizqeg.png"
                alt="Employee Table Screenshot"
            />
    </div>
  );
}

export default TimeSheetSettings;
