import React, { useState } from 'react';
import ProfileImg from "./../assets/SRI PRASANNA D.png";
import "./../App.css";

const AboutMe = () => {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <div 
      className="about-container" 
      onMouseEnter={() => setShowExperience(true)} 
      onMouseLeave={() => setShowExperience(false)}
    >
      <img src={ProfileImg} alt="Sri Prasanna D" className="profile-img" />
      <div className={`about-content ${showExperience ? 'fade-out' : 'fade-in'}`}>
        <h1>Hey, I'm Sri Prasanna D!</h1>
        <p>
          I graduated with a Bachelor of Engineering in Computer Science and I'm a 22-year-old passionate full stack developer. 
          My journey in coding started during college, where I discovered a love for building responsive and user-friendly web interfaces. 
          I specialize in React, JavaScript, HTML, and CSS, and I have hands-on experience through real time projects like a E-commerce and job portal etc..,
        </p>
      </div>

      <div className={`experience-content ${showExperience ? 'fade-in' : 'fade-out'}`}>
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Expleo Solutions</h3>
          <p><strong>Java Full Stack Intern</strong> (Jan 2024 - Jun 2024)</p>
          <p>Worked on real-time projects, gaining expertise in Java, Spring Boot, Hibernate, React, HTML, CSS, Bootstrap, and JavaScript.</p>
          <p>Developed and optimized a full-stack eCommerce application, improving user engagement by 20% through a seamless UI and backend integration.</p>
          <p>Gained experience in managing databases efficiently and implementing secure backend services.</p>
        </div>
        <div className="experience-item">
          <h3>Exposys Data Labs</h3>
          <p><strong>Web development Intern</strong> (2022)</p>
          <p>Worked on web development projects, including a website for their organization, enhancing hands-on experience with dynamic and responsive UI components.</p>
          <p>Strengthened core web fundamentals, including HTML, CSS, and JavaScript, by implementing real-world solutions during the internship.</p>
        </div>
      </div>
      
      <style jsx>{`
        :root {
          --primary-color: #000;
          --secondary-color: #fff;
          --background-color: #111;
          --text-color: #fff;
          --hover-color: #444;
        }

        .about-container {
          padding: 50px;
          text-align: center;
          background-color: var(--background-color);
          color: var(--text-color);
          position: relative;
          overflow: hidden;
          transition: background-color 0.5s ease;
        }

        .profile-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 20px;
          border: 3px solid var(--secondary-color);
        }

        .about-content, .experience-content {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-out {
          opacity: 0;
          transform: translateY(-20px);
        }

        .experience-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          background: rgba(0, 0, 0, 0.8);
          padding: 20px;
          border-radius: 10px;
          color: var(--secondary-color);
          box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
        }

        .experience-item {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
