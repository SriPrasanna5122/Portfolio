import React from 'react';
import ProfileImg from "./../assets/SRI PRASANNA D.png";
import "./../App.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <img src={ProfileImg} alt="Sunil Kumar A" className="profile-img" />
      <div className="about-content">
        <h1>Hey, I'm Sri Prasanna D!</h1>
        <p>
          I graduated with a Bachelor of Engineering in Computer Science and
          I'm a 22-year-old passionate front-end developer. My journey in coding started during college,
          where I discovered a love for building responsive and user-friendly web interfaces.
          I specialize in React, JavaScript, HTML, and CSS, and I have hands-on experience through
          projects like a chatbot and portfolio.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
