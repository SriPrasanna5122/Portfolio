import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaNodeJs, FaGitAlt, FaBootstrap, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMongodb, SiExpress, SiJenkins, SiKubernetes } from "react-icons/si";

const Skill = () => {
  const skills = [
    { name: 'Java', icon: <FaJava />, level: 90 },
    { name: 'HTML', icon: <FaHtml5 />, level: 98 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 95 },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 85 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Spring Boot', icon: <SiSpringboot />, level: 85 },
    { name: 'Hibernate', icon: <SiHibernate />, level: 85 },
    { name: 'MySQL', icon: <FaDatabase />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
    { name: 'Express.js', icon: <SiExpress />, level: 70 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'Bootstrap', icon: <FaBootstrap />, level: 95 },
    { name: 'Docker', icon: <FaDocker />, level: 60 },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div className="skill-bubble" key={skill.name}>
            <div className="icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
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
          text-align: center;
        }

        .skills-title {
          font-size: 36px;
          margin-bottom: 30px;
          color: var(--secondary-color);
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .skill-bubble {
          width: 120px;
          height: 120px;
          background: var(--primary-color);
          color: var(--secondary-color);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-bubble:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .icon {
          font-size: 36px;
        }

        .skill-name {
          font-size: 14px;
          margin-top: 8px;
        }

        .skill-percentage {
          position: absolute;
          bottom: 10px;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-bubble:hover .skill-percentage {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Skill;
