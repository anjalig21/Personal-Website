import React from 'react'
import '../CSS/skills.css';
import SkillBar from 'react-skillbars';
import {GoGear} from 'react-icons/go';
import {FaDatabase} from 'react-icons/fa';
import {AiOutlineAntDesign} from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi';

const Skills = () => {
    const skills = [
        {type: "Python", level: 95},
        {type: "HTML", level: 95},
        {type: "CSS", level: 90},
        {type: "Javascript", level: 90},
        {type: "SQL", level: 85},
        {type: "C", level: 85},
        {type: "C++", level: 80},
        {type: "Racket", level: 80}
    ];
    const colors = {
        "bar": "#3498db",
        "title": {
            "text": "#fff",
            "background": "#2980b9"
        }
    }
    return (
        <div className = "skills">
            <div className = "container">
                <div className = "skills__header">
                    <div className = "common">
                        <h1 className = "mainHeader">My Skills</h1>
                        <p className = "mainContent">- Technical & Design -</p>
                        <div className = "commonBorder"></div>
                    </div>
                    <div className = "Skill-bars">
                        <SkillBar skills={skills} colors={colors}/>
                    </div>
                    <div className = "col-2">
                        <div className = "row-2">
                            <div className = "skillsbox">
                                <GoGear className = "icons"/>
                                <div className = "skillsbox_header">
                                    Libraries & Frameworks 
                                </div>
                                <div className = "skillsbox_para">
                                    I am fluent with using TensorFlow, NumPy, Django, Node.js, React.js, and SQLite!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-2-2">
                        <div className = "row-2-2">
                            <div className = "skillsbox-2">
                                <FaDatabase className = "icons"/>
                                <div className = "skillsbox_header">
                                    Tools & Technologies
                                </div>
                                <div className = "skillsbox_para">
                                    I am proficient with using VS Code, Socket.io, Material-UI, GitHub, Git, and Netlify!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className = "row-2-3">
                            <div className = "skillsbox-3">
                                <AiOutlineAntDesign className = "icons"/>
                                <div className = "skillsbox_header">
                                    Design
                                </div>
                                <div className = "skillsbox_para">
                                    I am comfortable with using Photoshop, ProCreate, Apple Pages, and Microsoft Office!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className = "row-2-4">
                            <div className = "skillsbox-4">
                                <GiSkills className = "icons"/>
                                <div className = "skillsbox_header">
                                    Professional
                                </div>
                                <div className = "skillsbox_para">
                                    Other than my technical skills, I am a great public speaker, a fast learner and a great team-player!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
