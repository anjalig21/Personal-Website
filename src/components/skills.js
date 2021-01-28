import React from 'react'
import '../CSS/skills.css';
import SkillBar from 'react-skillbars';
import {GoGear} from 'react-icons/go';
import {GrTechnology} from 'react-icons/gr';

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
                                <GrTechnology className = "icons"/>
                                <div className = "skillsbox_header">
                                    Tools & Technologies
                                </div>
                                <div className = "skillsbox_para">
                                    I am fluent with using VS Code, Socket.io, Material-UI, GitHub, GitHub Pages, Git, and Netlify!
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
