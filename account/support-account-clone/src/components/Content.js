import React from "react";

import "./Content.css";
import SlideContent from "./SlideContent";

const Content = ({ activeIndex, slides }) => {
  return (
    <div className="content">
      <h1>{slides[activeIndex].title}</h1>
      <div className="notes">
        {slides[activeIndex].notes.map((note, index) => (
          <p key={index}>{note}</p>
        ))}
      </div>
      <button className="signup-button">Sign up</button>
      <div className="video-section">
        <h3>Watch the video</h3>
        <SlideContent index={activeIndex} />
      </div>
    </div>
  );
};

export default Content;
