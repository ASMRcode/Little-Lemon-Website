// About.js
import React from 'react';
import './About.css'; // Import the CSS file for the About component

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-location">Sample Location</p>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui eget justo luctus congue.
          Fusce et facilisis nibh. Nulla facilisi. Nam ut neque eu erat vestibulum varius ut eget nisi.
        </p>
      </div>
      <div className="about-photos">
        <img src="https://media.istockphoto.com/id/868439316/photo/old-bald-man-disgusted-and-disappointed.jpg?s=1024x1024&w=is&k=20&c=2GwL1PnpUdtCYVbsglGKI8H5UnrCF_u1j1QRpckY0QA=" alt="Sample Photo 1" className="photo1" />
        <img src="https://media.gettyimages.com/id/1058724034/photo/senior-woman-gardening.jpg?s=2048x2048&w=gi&k=20&c=0mkz8eAEHtrm7tJ55sqyg8qBySHKc45DrLELCemrcV0=" alt="Sample Photo 2" className="photo2" />
      </div>
    </div>
  );
};

export default About;
