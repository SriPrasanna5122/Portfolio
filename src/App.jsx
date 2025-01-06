import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar.jsx';
import AboutMe from './component/AboutMe.jsx';
import Skill from './component/Skill.jsx';
import Project from './component/Project.jsx';
import Contact from './component/Contact.jsx';
function App() {
    function Location(currentSection){
        if(currentSection === 'home'){
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }
        else{
            document.getElementById(currentSection).scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
       <div>
         <Navbar currentLocation={Location}/>
         <section id='about'> <AboutMe /></section>
         <section id='skill'> <Skill /></section>
         <section id='project'><Project /></section>
         <section id='contact'><Contact /></section>
       </div>
        
    );
}

export default App;
