import React from 'react'
import './About.css'
import photo from '../../assets/prof_pro.png'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si'
import { TbBinaryTree } from 'react-icons/tb'

const skillGroups = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', icon: <FaHtml5 />, color: '#E44D26' },
            { name: 'CSS', icon: <FaCss3Alt />, color: '#264DE4' },
            { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
            { name: 'React JS', icon: <FaReact />, color: '#61DAFB' },
            { name: 'Next JS', icon: <SiNextdotjs />, color: '#ffffff' },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'Node JS', icon: <FaNodeJs />, color: '#68A063' },
        ],
    },
    {
        title: 'Ongoing / Learning',
        skills: [
            { name: 'DSA', icon: <TbBinaryTree />, color: '#b415ff' },
            { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        ],
    },
]

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='title'>
                <h1>About Me</h1>
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <div className="card">
                        <img src={photo} alt='' />
                        <h2>Abhay Narkhede</h2>
                        <p>B.Tech Computer Science And Engineering</p>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a B.Tech Computer Science student learning frontend development with React and JavaScript.</p>
                        <p>I enjoy building real-world projects and strengthening my DSA fundamentals.</p>
                        <p>Currently looking for frontend internships where I can learn, build, and contribute.</p>
                    </div>
                    <div className="about-skills">
                        {skillGroups.map((group) => (
                            <div className="skill-group" key={group.title}>
                                <h2 className="group-title">{group.title}</h2>
                                <div className="skill-grid">
                                    {group.skills.map((skill) => (
                                        <div
                                            className="skill-card"
                                            key={skill.name}
                                            style={{ '--skill-color': skill.color }}
                                        >
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Under Development</h1>
                    <p>Display after owners permision. This part is temprory closed by Developer</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Under Development</h1>
                    <p>Display after owners permision. This part is temprory closed by Developer</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Under Development</h1>
                    <p>Display after owners permision. This part is temprory closed by Developer</p>
                </div>
            </div> */}
        </div>
    )
}

export default About

