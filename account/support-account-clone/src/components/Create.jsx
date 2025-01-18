import React, { useState } from 'react';
import './Create.css'; // Import the CSS file for styles

const Create = () => {
    // Sample data for the projects
    const projectsData = [
        {
            id: 1,
            employeeName: 'Karthik Karthik',
            email: 'tejavishwa0408@gmail.com',
            phone: '77024 43766',
            whatsapp: '77024 43766',
            client: 'Samsung',
            endClient: 'APPLE',
            approvalManager: 'VishwasD',
            payRate: 45,
            startDate: '2024-12-01',
            endDate: '2024-12-31',
        },
        {
            id: 2,
            employeeName: 'Karthik Karthik',
            email: 'tejavishwa0408@gmail.com',
            phone: '77024 43766',
            whatsapp: '77024 43766',
            client: 'Samsung',
            endClient: 'APPLE',
            approvalManager: 'VishwasD',
            payRate: 65,
            startDate: '2024-12-01',
            endDate: '2024-12-31',
        },
        {
            id: 3,
            employeeName: 'Karthik Karthik',
            email: 'tejavishwa0408@gmail.com',
            phone: '77024 43766',
            whatsapp: '77024 43766',
            client: 'Samsung',
            endClient: 'APPLE',
            approvalManager: 'VishwasD',
            payRate: 100,
            startDate: '2024-12-29',
            endDate: '2025-01-05',
        },
    ];

    // State to handle the current page (pagination)
    const [currentPage, setCurrentPage] = useState(1);

    // Function to handle the 'Previous' button click
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to handle the 'Next' button click
    const handleNext = () => {
        setCurrentPage(currentPage + 1); // Increment the current page
    };

    return (
        <div className="projects-container">
            {/* Main Heading */}
            <h2 className="main-heading">All Projects</h2>

            {/* Tabs for filtering projects (placeholder for future functionality) */}
            <div className="projects-tabs">
                {/* Add filtering buttons if needed */}
            </div>
            <div className="create-project-section">
                <h3>How to Create a Project</h3>
                <p>
                    Follow these steps to create a new project:
                    <ul>
                        <li>Fill in the required details in the form below.</li>
                        <li>Provide information such as employee name, client, pay rate, and project dates.</li>
                        <li>Click the "Submit" button to add the project to the system.</li>
                    </ul>
                </p>
            </div>

            {/* Table to display project data */}
            <div className="table-wrapper">
                <table className="projects-table">
                    {/* Table Header */}
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            <th>Phone Number</th>
                            <th>Whatsapp Number</th>
                            <th>Client</th>
                            <th>End Client</th>
                            <th>Approval Manager</th>
                            <th>Pay Rate</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {projectsData.map((project, index) => (
                            <tr key={project.id}>
                                <td>{index + 1}</td>
                                <td>{project.employeeName}</td>
                                <td>{project.email}</td>
                                <td>{project.phone}</td>
                                <td>{project.whatsapp}</td>
                                <td>{project.client}</td>
                                <td>{project.endClient}</td>
                                <td>{project.approvalManager}</td>
                                <td>{project.payRate}</td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                <td>
                                    <button className="action-button">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="pagination-button"
                    disabled={currentPage === 1} // Disable if on the first page
                >
                    Prev
                </button>
                {/* Display Current Page */}
                <span className="current-page">{currentPage}</span>
                {/* Next Button */}
                <button onClick={handleNext} className="pagination-button">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Create;
