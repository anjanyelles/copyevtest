import React, { useState } from "react";

function RestrictEmployers() {
    // Example data for employers
    const [employers, setEmployers] = useState([
        { id: 1, name: "Employer A", isRestricted: false },
        { id: 2, name: "Employer B", isRestricted: true },
        { id: 3, name: "Employer C", isRestricted: false },
    ]);

    // Toggle login status for a specific employer
    const handleToggle = (id) => {
        setEmployers((prevEmployers) =>
            prevEmployers.map((employer) =>
                employer.id === id
                    ? { ...employer, isRestricted: !employer.isRestricted }
                    : employer
            )
        );
    };

    return (
        <div>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "20px" }}>
                Employer Management
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Manage the access rights of employers in the system. Use the switches below to toggle their login status.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                How to Manage Employer Login Access
            </h3>
            <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                <li>Go to the <strong>Sidebar</strong> and click on the <strong>Employers</strong> option.</li>
                <li>On the <strong>Employers Page</strong>, you will see a list of all employers.</li>
                <li>To enable or disable login access, use the toggle switch next to each employer’s name.</li>
            </ol>

            {/* Employers Table */}
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Login Status</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employers.map((employer) => (
                        <tr key={employer.id}>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employer.id}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employer.name}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {employer.isRestricted ? "Restricted" : "Active"}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <label style={{ display: "inline-flex", alignItems: "center" }}>
                                    <input
                                        type="checkbox"
                                        checked={!employer.isRestricted}
                                        onChange={() => handleToggle(employer.id)}
                                        style={{ display: "none" }}
                                    />
                                    <span
                                        style={{
                                            width: "50px",
                                            height: "25px",
                                            backgroundColor: employer.isRestricted ? "#FF4D4D" : "#4CAF50",
                                            borderRadius: "25px",
                                            position: "relative",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s ease",
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: "absolute",
                                                top: "2px",
                                                left: employer.isRestricted ? "2px" : "26px",
                                                width: "21px",
                                                height: "21px",
                                                backgroundColor: "#fff",
                                                borderRadius: "50%",
                                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                                                transition: "left 0.3s ease",
                                            }}
                                        ></span>
                                    </span>
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RestrictEmployers;
