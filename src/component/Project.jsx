import React from 'react';
import './../App.css';
import Hirehub from './../assets/Hirehub Project.jpg';
import Ecommerce from './../assets/Ecommerce Project.jpg';
import Leaf from './../assets/leafimage.jpeg';

function Projects(props) {
  return (
    <div className='project-details'>
      <img className='project-img' src={props.image} alt="Keeper App" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p className='technology'>{props.technology}</p>
      <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

const Project = () => {
  return (
    <div>
      <div>
        <h2 style={{ marginLeft: '20px' }}>Projects</h2>
        <div className='project-container'>
          <Projects
            image={Ecommerce}
            title="Ecommerce"
            description="Designed and implemented a scalable eCommerce platform with seamless product browsing, shopping cart management, and 
checkout functionalities. "
            technology="Technologies:  Java, Spring Boot, React"
            gitHubLink="https://github.com/codehubjfs/React_SpringBoot_Ecommerce_Project"
          />
          <Projects
            image={Hirehub}
            title="Hirehub"
            description=" Developed a platform connecting job seekers and employers, enabling dynamic job posting and application management."
            technology="Technologies: MERN Stack"
            gitHubLink="https://github.com/SriPrasanna5122/HireHub"
          />
          <Projects
            image={Leaf}
            title="leaf disease detection"
            description="Developed a graphical interface for uploading leaf image and obtaining disease detection results."
            technology="Technologies: TensorFlow , Keras"
            gitHubLink="https://github.com/SriPrasanna5122/LeafDetect-Pro"
          />
          
          
        </div>
      </div>
    </div>
  );
}

export default Project;
