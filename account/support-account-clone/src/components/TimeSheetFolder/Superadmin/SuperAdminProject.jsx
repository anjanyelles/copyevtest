import React from "react";

 const SuperAdminProject  =()=>{
return(
    <div>
        <h2 className="heading">
                View or Create Project
            </h2>
            <p className="description">
                This section provides a detailed explanation of managing Project's data, including adding a new Project, viewing the list of created project's, and editing an existing one.
            </p>
            <h3 className="subheading"> Project List</h3>
           
               

            <img
                className="placeholder-image image_gatnix_support"
                src=" https://res.cloudinary.com/danfpnuui/image/upload/v1737527634/Screenshot_2025-01-21_152910_h6745n.png"
                alt="Employee Table Screenshot"
            />

            {/* Add Employee */}
            <h3 className="subheading">Add Project</h3>
            {/* <img
                className="placeholder-image image_gatnix_support"
                src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014152/Employer_y0g7tp.png"
                alt="Employee Table Screenshot"
            /> */}
            <p className="description">
                Click on the "Add Project" button to open the above form. This form allows you to fill in details like Project Name, Pay Type, Employee Name, Employee Email, Mobile Number, and WhatsApp Number. After filling in the details, click the <strong>Save</strong> button to add the details  to the list.
            </p>

            {/* Edit Employee */}
            {/* <h3 className="subheading">Edit Employee</h3> */}
            <img
                className="placeholder-image image_gatnix_support"
                src="https://res.cloudinary.com/danfpnuui/image/upload/v1737527801/Screenshot_2025-01-21_152946_zmvdcz.png"
                alt="Employee Table Screenshot"
            />
            <p className="description">
                To edit an Project's details, click the "Edit" button in the corresponding row. This opens a form pre-filled with the existing details of the selected manager. After making the necessary changes, click <strong>Save</strong> to update the information.
            </p>

            {/* Save or Cancel */}
            <h3 className="subheading">Save or Cancel</h3>
            <p className="description">
                Once the form is filled, you can either click <strong>Save</strong> to submit the changes or <strong>Cancel</strong> to discard them and close the form.
            </p>

            <style jsx>{`
                .heading {
                    font-size: 24px;
                    font-weight: 300;
                    color: #000000;
                    margin-bottom: 10px;
                }

                .description {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #4f4f4f;
                    margin-bottom: 20px;
                }

                .subheading {
                    font-size: 20px;
                    font-weight: 300;
                    color: #000000;
                    margin-bottom: 10px;
                }

                .table-wrapper {
                    overflow-x: auto;
                }

                .employee-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }

                .employee-table th,
                .employee-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }

                .table-image,
                .form-image {
                    width: 100%;
                    height: auto;
                    margin-bottom: 20px;
                }

                /* Media Queries for Responsive Design */
                @media (max-width: 768px) {
                    .heading {
                        font-size: 20px;
                    }

                    .subheading {
                        font-size: 18px;
                    }

                    .description {
                        font-size: 14px;
                    }

                    .employee-table th,
                    .employee-table td {
                        font-size: 14px;
                        padding: 6px;
                    }

                    .table-image,
                    .form-image {
                        width: 100%;
                        height: auto;
                    }

                    .employee-table {
                        font-size: 14px;
                    }
                }

                @media (max-width: 480px) {
                    .heading {
                        font-size: 18px;
                    }

                    .subheading {
                        font-size: 16px;
                    }

                    .description {
                        font-size: 12px;
                    }

                    .employee-table th,
                    .employee-table td {
                        font-size: 12px;
                        padding: 4px;
                    }

                    .table-image,
                    .form-image {
                        width: 100%;
                        height: auto;
                    }

                    .employee-table {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
};
export default SuperAdminProject;

