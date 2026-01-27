import React from 'react'
import './About.css'
import photo from '../../assets/prof_pro.png'

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
                        <p> I’m a B.Tech Computer Science student learning frontend development with React and JavaScript.</p>
                        <p> I enjoy building real-world projects and strengthening my DSA fundamentals.</p>
                        <p> Currently looking for frontend internships where I can learn, build, and contribute.</p>
                        
                    </div>
                    {/* <div className="about-skills">
                       <div className='about-skill'> <p className='skill'>HTML</p> <hr style={{width:"90%"}} /><p className='per' >90%</p></div>
                       <div className='about-skill'> <p className='skill'>CSS</p> <hr style={{width:"85%"}} /><p className='per' >85%</p></div>
                       <div className='about-skill'> <p className='skill'>JavaScript</p> <hr style={{width:"65%"}} /><p className='per' >65%</p></div>
                       <div className='about-skill'> <p className='skill'>React JS</p> <hr style={{width:"70%"}} /><p className='per' >70%</p></div>
                       <div className='about-skill'> <p className='skill'>Next JS</p> <hr style={{width:"20%"}} /><p className='per' >20%</p></div>
                       <div className='about-skill'> <p className='skill'>Express</p> <hr style={{width:"40%"}} /><p className='per' >40%</p></div>
                       <div className='about-skill'> <p className='skill'>MongoDB</p> <hr style={{width:"20%"}} /><p className='per' >20%</p></div>
                       <div className='about-skill'> <p className='skill'>Pythone</p> <hr style={{width:"40%"}} /><p className='per' >40%</p></div>
                       <div className='about-skill'> <p className='skill'>Java</p> <hr style={{width:"30%"}} /><p className='per' >30%</p></div>
                    </div>
                    <div className='caption'>Hover on Skill smoothly don't move cursour or mouse</div> */}
                    <div className="about-skills">
                        <div className="group"><h2>Frontend</h2>
                            <div className='about-skill'> <p className='skill'>HTML</p> </div>
                            <div className='about-skill'> <p className='skill'>CSS</p> </div>
                            <div className='about-skill'> <p className='skill'>JavaScript</p> </div>
                            <div className='about-skill'> <p className='skill'>React JS</p> </div>
                            <div className='about-skill'> <p className='skill'>Next JS</p> </div>
                        </div>
                        <div className="group"><h2>Backend</h2>
                            <div className='about-skill'> <p className='skill'>Express</p> </div>
                            <div className='about-skill'> <p className='skill'>MongoDB</p> </div>
                            <div className='about-skill'> <p className='skill'>Node</p> </div>
                        </div>
                        <div className="group"><h2>Ongoing/Learning</h2>
                            <div className='about-skill'> <p className='skill'>DSA</p> </div>
                            <div className='about-skill'> <p className='skill'>C++</p> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
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
            </div>
        </div>
        
    )
}

export default About
