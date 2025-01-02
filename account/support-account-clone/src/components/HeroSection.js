import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import Swal from 'sweetalert2'; // Import SweetAlert2

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Initialize Google Analytics
  const initGA = () => {
    if (window.gtag) {
      window.gtag('config', 'YOUR_GA_TRACKING_ID'); // Replace with your GA tracking ID
    }
  };

  // Track events in Google Analytics
  const trackEvent = (category, action, label) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };

  useEffect(() => {
    initGA(); // Initialize Google Analytics
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowPopup(true); // Show popup if first visit
    }
  }, []);

  const handlePopupSubmit = (email, phone) => {
    // Simple email and phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!email || !phone) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter both email and phone number.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      return;
    }

    if (!phoneRegex.test(phone)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid 10-digit phone number.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      return;
    }

    // Track event in Google Analytics
    trackEvent('User Interaction', 'Submit Contact Info', 'Email and Phone');

    // Mark as visited in localStorage to prevent showing popup again
    localStorage.setItem('hasVisited', 'true');

    // Send form data to Formspree
    sendFormData(email, phone);

    // SweetAlert success
    Swal.fire({
      title: 'Thank you!',
      text: 'Your information has been submitted successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  const sendFormData = (email, phone) => {
    const formData = {
      email,
      phone,
    };

    // Send form data to Formspree
    fetch('https://formspree.io/f/meoqwojo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form submitted successfully!');
        } else {
          console.error('Error submitting form:', response);
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  const showPopupForm = () => {
    Swal.fire({
      title: 'Welcome to Gatnix Support',
      html: `
        <input id="email" class="swal2-input" type="email" placeholder="Enter your email" required>
        <input id="phone" class="swal2-input" type="tel" placeholder="Enter your phone number" required>
      `,
      preConfirm: () => {
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        handlePopupSubmit(email, phone); // Pass values to submit function
      },
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Submit',
    });
  };

  // useEffect(() => {
  //   // If it's the user's first visit, show the popup
  //   if (!localStorage.getItem('hasVisited')) {
  //     showPopupForm(); // Trigger SweetAlert popup
  //   }
  // }, []); // Empty dependency array ensures this runs only on initial load

  return (
    <section className="hero">
      <h1>Hello, Anjan, welcome to Gatnix Support</h1>
      <div className="search-bar">
        <input type="text" placeholder="How can we help you?" />
        <button>&#10132;</button>
      </div>
    </section>
  );
};

export default HeroSection;
