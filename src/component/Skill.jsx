import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase } from 'react-icons/fa';

const Skill = () => {
  const skills = [
    { name: 'Java', icon: <FaJava />, level: 75 },
    { name: 'HTML', icon: <FaHtml5 />, level: 70 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 75 },
    { name: 'JS', icon: <FaJsSquare />, level: 75 },
    { name: 'MySQL', icon: <FaDatabase />, level: 50 },
    { name: 'React', icon: <FaReact />, level: 60 },
    { name: 'Springboot', icon: <FaReact />, level: 50 }, // Example replacement
    { name: 'Hibernate', icon: <FaDatabase />, level: 50 },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div className="skill-bar" key={skill.name}>
            <div className="skill-name">
              {skill.icon} {skill.name}
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="skill-percentage">{skill.level}%</div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        :root {
          --primary-color: #000;
          --secondary-color: #fff;
          --background-color: #111;
          --text-color: #fff;
          --hover-color: #888;
        }

        body {
          background-color: var(--background-color);
          color: var(--text-color);
          font-family: 'Poppins', sans-serif;
        }

        .skills-section {
          padding: 50px;
          background-color: var(--background-color);
        }

        .skills-title {
          font-size: 36px;
          margin-bottom: 30px;
          text-align: center;
          color: var(--secondary-color);
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }

        .skill-bar {
          background: var(--primary-color);
          color: var(--secondary-color);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 120px;
          text-align: center;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-bar:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .skill-bar:hover .skill-percentage {
          opacity: 1;
        }

        .skill-name {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .skill-name svg {
          margin-right: 10px;
        }

        .progress-bar {
          background-color: #ccc;
          height: 10px;
          border-radius: 5px;
          margin-bottom: 10px;
        }

        .progress {
          background-color: #4caf50;
          height: 100%;
          border-radius: 5px;
        }

        .skill-percentage {
          position: absolute;
          bottom: 10px;
          font-size: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: var(--secondary-color);
        }
      `}</style>
    </div>
  );
};

export default Skill;
