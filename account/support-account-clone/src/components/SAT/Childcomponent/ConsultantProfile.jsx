import React from 'react';

const ConsultantProfile = () => {
    return (
        <div>
        <div>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#000000", marginBottom: "10px" }}>
                Set Up Your Profile
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F", marginBottom: "20px" }}>
                After registering, follow these steps to complete your profile setup:
            </p>

            {/* Image */}
            <img 
                src="  https://res.cloudinary.com/danfpnuui/image/upload/v1737544707/Profile_-1_wgnvvk.png"  // Replace with your image URL
                alt="SAT Report Generation"
          className="image_gatnix_support"
            />

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                1. Navigate to Your Profile
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                Select the Profile Icon at the top of the page. From the dropdown menu, click on <strong>My Profile</strong>.
            </p>

            <img 
                src="  https://res.cloudinary.com/danfpnuui/image/upload/v1737545270/Profile_-2_kq75oj.png"  // Replace with your image URL
                alt="SAT Report Generation"
          className="image_gatnix_support"
            />
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                2. Edit Your Profile
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                On your profile page, select the <strong>Edit</strong> button. Update your First Name, Last Name, Phone Number, Experience, and Job Role. Be sure to click <strong>Save</strong> once you’re finished.
            </p>
            
          <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                3. Share Your Profile
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                In the Share your profile Section, click the <strong>Edit</strong> button. Add the comments  and  then <strong>Save</strong> to confirm your changes you can share your profile.
            </p>
            <img 
                src="https://res.cloudinary.com/danfpnuui/image/upload/v1737545501/Profile_-6_tmmsnj.png "  // Replace with your image URL
                alt="SAT Report Generation"
          className="image_gatnix_support"
            />
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                4. Add Your Work Experience
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                Click the <strong>Edit</strong> button  and  add Work Experience . After updating your details, click <strong>Save</strong>.
            </p>
            <img 
                src=" https://res.cloudinary.com/danfpnuui/image/upload/v1737545481/Profile_-5_vq8l2n.png "  // Replace with your image URL
                alt="SAT Report Generation"
          className="image_gatnix_support"
            />
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                5. Add Your Skills
            </h3>
            
            <img 
                src=" https://res.cloudinary.com/danfpnuui/image/upload/v1737545464/Profile_-4_mrungn.png"  // Replace with your image URL
                alt="SAT Report Generation"
          className="image_gatnix_support"
            />
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                To add new skills, click the <strong>Add Skill</strong> button. Enter the skill name, rating, and version, then click <strong>Save</strong>.
            </p>

            <img 
                src="https://res.cloudinary.com/danfpnuui/image/upload/v1737545444/Profile_-3_fksefp.png"  // Replace with your image URL
                alt="SAT Report Generation"
          className="image_gatnix_support"
            />
            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                6. Add Your Job Details
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                Enter your job title, company name, state, city, start date (dd-mm-yyyy), end date (dd-mm-yyyy), and a brief description of your role and responsibilities.
            </p>

            <h3 style={{ fontSize: "20px", fontWeight: "300", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
                Things to Remember
            </h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.6", color: "#4F4F4F" }}>
                <li>Ensure all updated information is accurate and up-to-date.</li>
                <li>Click <strong>Save</strong> after editing each section to ensure your changes are stored.</li>
            </ul>
        </div>     
        </div>
    );
};

export default ConsultantProfile;