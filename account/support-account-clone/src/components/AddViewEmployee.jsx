import React from 'react';

const AddOrViewEmployee = () => {
    return (
        <div>
            <h2 className="heading">
                View or Add Employee
            </h2>

            <p className="description">
                This section provides a detailed explanation of managing employee data, including adding a new employee, viewing the list of employees, and editing an existing one.
            </p>

            {/* Employee Table */}
            <h3 className="subheading">Employee List</h3>
            <div className="table-wrapper">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john.doe@example.com</td>
                            <td>1234567890</td>
                            <td><button>Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <img
                className="placeholder-image image_gatnix_support"
                src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014152/Employer_y0g7tp.png"
                alt="Employee Table Screenshot"
            />

            {/* Add Employee */}
            <h3 className="subheading">Add Employee</h3>
            {/* <img
                className="placeholder-image image_gatnix_support"
                src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014152/Employer_y0g7tp.png"
                alt="Employee Table Screenshot"
            /> */}
            <p className="description">
                Click on the "Add Employee" button to open the above form. This form allows you to fill in details like First Name, Last Name, Email, Password, Mobile Number, and WhatsApp Number. After filling in the details, click the <strong>Save</strong> button to add the employee to the list.
            </p>

            {/* Edit Employee */}
            <h3 className="subheading">Edit Employee</h3>
            <img
                className="placeholder-image image_gatnix_support"
                src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014152/Employer_-1_gntlro.png"
                alt="Employee Table Screenshot"
            />
            <p className="description">
                To edit an employee's details, click the "Edit" button in the corresponding row. This opens a form pre-filled with the existing details of the selected employee. After making the necessary changes, click <strong>Save</strong> to update the information.
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

export default AddOrViewEmployee;
