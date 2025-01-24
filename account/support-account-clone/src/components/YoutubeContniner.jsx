import React from 'react';
import '../components/TimeSheetFolder/continer.css';

function YoutubeContainer() {
    return (
        <div className="container">
            <div className="video-section">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/93vWcjvIMNU?si=m1IKdp9UvkJuUreC"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text-section">
                <h2>Enhance Job Tracking</h2>
                <p>
                    Empower your organization with a unified talent management platform. 
                    Track applications effortlessly, follow up seamlessly, and gain real-time updates. 
                    Level up performance tracking with Gatnix today!
                </p>
                <a  href='https://www.gatnix.com/home'>  Level up performance tracking with Gatnix today!</a>
            </div>
        </div>
    );
}

export default YoutubeContainer;
