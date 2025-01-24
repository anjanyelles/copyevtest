import React from 'react';

const AddOrViewClient = () => {
    return (
        <div>
            <h2 className="heading">
                View or Add Client
            </h2>

            <p className="description">
                This section allows you to manage client data. You can view the list of clients, add a new client, or edit an existing one.
            </p>

            {/* Client Table */}
            <h3 className="subheading">Client List</h3>
            <div className="table-wrapper">
            <img
                className="placeholder-image image_gatnix_support"
                src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014152/Employer_y0g7tp.png"
                alt="Employee Table Screenshot"
            />
                <table className="client-table">
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Client Name</th>
                            <th>Client Email</th>
                            <th>Phone No</th>
                            <th>End Client</th>
                            <th>End Client Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vivo</td>
                            <td>hikik19428@matmayer.com</td>
                            <td>5</td>
                            <td>Iqoo</td>
                            <td>vishwateja2324@gmail.com</td>
                            <td><button>Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button className="add-client-button">Add Client</button>

            {/* Add Client Form */}
            <h3 className="subheading">Add Client</h3>
            <img
                className="placeholder-image image_gatnix_support"
                src="https://res.cloudinary.com/dvcdrb9s4/image/upload/v1737014152/Employer_-1_gntlro.png"
                alt="Employee Table Screenshot"
            />
            <p className="description">
                Click the "Add Client" button to open the above form. Fill in the following details:
            </p>
            <ul className="details-list">
                <li>Client Name</li>
                <li>Email</li>
                <li>Mobile Number</li>
                <li>WhatsApp Number (option to use the same as Mobile Number)</li>
                <li>Additional Email</li>
                <li>Client Account Name</li>
                <li>End Client Name (option to use the same as Client Name)</li>
                <li>End Client Email</li>
                <li>Client Address</li>
            </ul>

            <p className="description">
                Once all details are entered, you can either click <strong>Save</strong> to submit the form or <strong>Cancel</strong> to discard the changes.
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
                    margin-bottom: 20px;
                }

                .client-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .client-table th,
                .client-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }

                .add-client-button {
                    padding: 10px 20px;
                    background: #007bff;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    margin-bottom: 20px;
                }

                .table-image,
                .form-image {
                    width: 100%;
                    height: auto;
                    margin-bottom: 20px;
                }

                .details-list {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #4f4f4f;
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

                    .client-table th,
                    .client-table td {
                        font-size: 14px;
                        padding: 6px;
                    }

                    .add-client-button {
                        padding: 8px 16px;
                    }

                    .table-image,
                    .form-image {
                        width: 100%;
                        height: auto;
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

                    .client-table th,
                    .client-table td {
                        font-size: 12px;
                        padding: 4px;
                    }

                    .add-client-button {
                        padding: 6px 12px;
                    }

                    .table-image,
                    .form-image {
                        width: 100%;
                        height: auto;
                    }
                }
            `}</style>
        </div>
    );
};

export default AddOrViewClient;
