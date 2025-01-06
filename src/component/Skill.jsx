import React from 'react';
import './../App.css'; // Make sure you link the correct CSS file

const Skill = () => {
  const skills = [

    { name: 'Java', level: 75 },
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 75 },
    { name: 'JS', level: 75 },
    { name: 'MySQL', level: 50 },
    { name: 'React', level: 60 },
    { name: 'Springboot', level: 50 },
    { name: 'Hibernate', level: 50 },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skill-indicators">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="skill-indicator"
            style={{ '--level': `${skill.level}%` }} // Percentage for easier understanding
          >
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
