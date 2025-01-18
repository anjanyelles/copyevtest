import React from 'react';


const SchedulerSettings = () => {
    return (
        <div className="scheduler-settings-container">
            <div className="content-section">
                <h2 className="main-heading">Scheduler  Management for Super Admin</h2>

                {/* Step 1 */}
                <h3 className="step-heading">Step 1: Open the Scheduler Settings Module</h3>
                <p className="description">
                    <strong>Log in to the Super Admin Dashboard:</strong> Use your credentials to access the dashboard.
                </p>
                <p className="description">
                    <strong>Access the Scheduler Settings Section:</strong> From the left-hand menu, locate and click on <strong>Scheduler Settings</strong>. The Scheduler Settings module will open, displaying the list of existing schedules.
                </p>


<img src='https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737013703/Screenshot_2025-01-16_at_1.18.15_PM_pyid9n.png' class="placeholder-image  image_gatnix_support"  />
                {/* Step 2 */}
                <h3 className="step-heading">Step 2: View Scheduler Details</h3>
                <p className="description">In the Scheduler Settings table, you will see the following columns:</p>
                <ul className="details-list">
                    <li><strong>S.NO:</strong> Serial number of the schedule.</li>
                    <li><strong>Name:</strong> The name of the schedule.</li>
                    <li><strong>Time (EST):</strong> The time set for the schedule.</li>
                    <li><strong>Date:</strong> The date associated with the schedule.</li>
                    <li><strong>Frequency (Days):</strong> The recurrence frequency in days.</li>
                    <li><strong>Interval (Minutes):</strong> The interval between cycles in minutes.</li>
                    <li><strong>Max-Cycles:</strong> The maximum number of cycles for the schedule.</li>
                    <li><strong>Email Limit:</strong> The limit for emails sent in this schedule.</li>
                    <li><strong>Status:</strong> The current status of the schedule (e.g., Submitted, Completed).</li>
                    <li><strong>Action:</strong> Options to edit or delete the schedule.</li>
                </ul>
                <p className="description">Review the details of the existing schedules directly from the table.</p>

                {/* Step 3 */}
                <h3 className="step-heading">Step 3: Add a New Schedule</h3>
                <p className="description">
                    <strong>Locate the Add Button:</strong> Find the <strong>+ Add</strong> button on the top-right corner of the module.
                </p>
                <p className="description">
                    <strong>Create a New Schedule:</strong> Click the <strong>+ Add</strong> button to open the new schedule creation form. Fill in the required fields, including <strong>Name</strong>, <strong>Time</strong>, <strong>Date</strong>, <strong>Frequency</strong>, and <strong>Email Limit</strong>.
                </p>

                <img src='https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737027421/Screenshot_2025-01-16_at_5.06.52_PM_pbixos.png' class="placeholder-image  image_gatnix_support"  />
                <p className="description">
                    <strong>Save the Schedule:</strong> Once all fields are complete, click the <strong>Save</strong> button to add the schedule.
                </p>

                {/* Step 4 */}
                <h3 className="step-heading">Step 4: Edit or Delete an Existing Schedule</h3>
                <p className="description">
                    <strong>Edit a Schedule:</strong> Locate the schedule you want to edit. Click the Edit (pencil) icon in the Action column. Update the necessary fields and save the changes.
                </p>
                <p className="description">
                    <strong>Delete a Schedule:</strong> To remove a schedule, click the Delete (trash bin) icon in the Action column. Confirm the deletion when prompted.
                </p>

                {/* Need Help Section */}
                <h3 className="help-heading">Need Help?</h3>
                <p>
        If you encounter any issues, please reach out to our Help Desk or
        contact us at <a href="mailto:support@gatnix.com">support@gatnix.com</a>.
      </p>

            </div>
        </div>
    );
};

export default SchedulerSettings;
