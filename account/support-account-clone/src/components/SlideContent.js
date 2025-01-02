import React from "react";

const SlideContent = ({ index }) => {
  const videos = [
    "https://via.placeholder.com/300x200?text=Slide+1",
    "https://via.placeholder.com/300x200?text=Slide+2",
    "https://via.placeholder.com/300x200?text=Slide+3",
  ];

  return (
    <div className="slide-content">
      <img src={videos[index]} alt={`Slide ${index + 1}`} />
    </div>
  );
};

export default SlideContent;
