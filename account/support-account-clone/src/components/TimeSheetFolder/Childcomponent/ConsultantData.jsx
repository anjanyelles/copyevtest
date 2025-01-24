import React from 'react';

function ConsultantData(props) {
    return (
        <div>
              <>
    <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
      Consultant Data: Import and Download
    </h2>
    <img 
                    src="https://via.placeholder.com/800x400" // Replace with your image URL
                    alt="Create Approval Manager"
                    style={{ width: "60%", height: "auto", marginBottom: "20px" }}
                />
    <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
      <strong>Steps:</strong>
      <ol>
        <li>Navigate to the Consultant Tab to view and manage consultants.</li>
        <li>Import new consultant data into the system.</li>
        <li>Export data in Excel, CSV, or PDF format by clicking on the download options.</li>
      </ol>
    </p>
  </>
        </div>
    );
}

export default ConsultantData;