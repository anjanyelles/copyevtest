import React, { useState } from "react";

function RestrictConsultants() {
    // Example data for consultants
    const [consultants, setConsultants] = useState([
        { id: 1, name: "Consultant A", isRestricted: false },
        { id: 2, name: "Consultant B", isRestricted: true },
        { id: 3, name: "Consultant C", isRestricted: false },
    ]);

    // Toggle access status for a specific consultant
    const handleToggle = (id) => {
        setConsultants((prevConsultants) =>
            prevConsultants.map((consultant) =>
                consultant.id === id
                    ? { ...consultant, isRestricted: !consultant.isRestricted }
                    : consultant
            )
        );
    };

    return (
        <div>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "20px" }}>
                Consultant Management
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                Manage the access rights of consultants in the system. Use the switches below to toggle their login status.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                How to Manage Consultant Login Access
            </h3>
            <ol style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                <li>Go to the <strong>Sidebar</strong> and click on the <strong>Consultants</strong> option.</li>
                <li>On the <strong>Consultants Page</strong>, you will see a list of all consultants.</li>
                <li>To enable or disable login access, use the toggle switch next to each consultant’s name.</li>
            </ol>

            {/* Consultants Table */}
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Access Status</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {consultants.map((consultant) => (
                        <tr key={consultant.id}>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{consultant.id}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{consultant.name}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {consultant.isRestricted ? "Restricted" : "Active"}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <label style={{ display: "inline-flex", alignItems: "center" }}>
                                    <input
                                        type="checkbox"
                                        checked={!consultant.isRestricted}
                                        onChange={() => handleToggle(consultant.id)}
                                        style={{ display: "none" }}
                                    />
                                    <span
                                        style={{
                                            width: "50px",
                                            height: "25px",
                                            backgroundColor: consultant.isRestricted ? "#FF4D4D" : "#4CAF50",
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
                                                left: consultant.isRestricted ? "2px" : "26px",
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

export default RestrictConsultants;
