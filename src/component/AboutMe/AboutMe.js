import React, { useTransition } from 'react'
import '../AboutMe/AboutMe.css';
import { Button, Col, Row, Image } from 'antd';
import ImageMe from '../../assets/image/ImageMe.jpeg';
import IconRPL from '../../assets/icons/IconRPL.png'
import IconCoursera from '../../assets/icons/IconCoursera.png'
import ButtonAboutMe from './Button';

function AboutMe() {
    // const { t : tr } = useTransition ();

    const textAboutme = {
        paragraf1: "As a dedicated Front End Developer, I master key skills like HTML, CSS, and JavaScript to create stunning user interfaces. With solid experience, I have successfully implemented responsive and aesthetic designs, focused on intuitive and efficient user experience. I always try to keep myself up to date with the latest developments in web technology, so as to deliver solutions that are innovative and in line with market demands. My good collaboration and communication skills enable me to work effectively in a team of developers and designers. I enjoy coming up with creative solutions to design challenges and responding quickly to changing project needs. With a focus on quality and detail, I am determined to provide an exceptional user experience, creating a frontend that is not only aesthetic, but also high-performance and compliant with industry standards.",
    }

    const relevantSkills = {
        Skill1: "Front-End : HTML, CSS, Javascript",
        Skill2: "React.js",
        Skill3: "Bootstrap",
        Skill4: "Ant Design",
        Skill5: "State Management : Redux",
        Skill6: "Version Control : Git",
        Skill7: "Integration API",
        Skill8: "UI & UX",
        Skill9: "System Analyst",
    }

    const educationSchool = {
        School: "SMK Wira Buana 2",
        Graduate: "Years of Graduation : 2022",
        Major: "Software Engineering"
    }

    const educationCourse = {
        Course: "Coursera from Meta Facebook",
        Graduate: "Year of Graduation : 2023",
        Learning1: "Front-End Developments",
        Learning2: 'HTML & CSS',
        Learning3: "React Basics",
    }

    return (
        <>
            <Row> {/* about me  */}
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <h1 className='Text-AboutMe'>About Me</h1>
                </Col>
            </Row >
            <Row>
                <Col span={24} style={{  padding: '30px 40px'}} >
                    <p className='Text-Name'>{textAboutme.paragraf1}</p>
                    <p className='Text-Name'>{textAboutme.paragraf2}</p>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='Border-AboutMe'>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={8} style={{ display: 'flex', justifyContent: 'end' }}>
                    <Image src={ImageMe} className='Image-Me' />
                </Col>
                <Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <h3 className='Text-RelevantSkills'>Relevant Skills</h3>
                        <ul>
                            <li className='Text-Skills' >{relevantSkills.Skill1}</li>
                            <li className='Text-Skills' >{relevantSkills.Skill2}</li>
                            <li className='Text-Skills' >{relevantSkills.Skill3}</li>
                            <li className='Text-Skills' >{relevantSkills.Skill4}</li>
                            <li className='Text-Skills' >{relevantSkills.Skill5}</li>
                            <li className='Text-Skills' >{relevantSkills.Skill6}</li>
                            <li className='Text-Skills' >{relevantSkills.Skill7}</li>
                            <li className='Text-Skills' >{relevantSkills.Skill8}</li>
                            <li className='Text-Skills' >{relevantSkills.Skill9}</li>
                        </ul>
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <h3 className='Text-Education'>Education</h3>
                        <div style={{ display: 'flex' }}>
                            <Image src={IconRPL} className='Icon-School' alt='icon-school' />
                            <div>
                                <h3 className='colorwhite'>Computer Informatics Engineering</h3>
                                <p className='colorwhite font16'>{educationSchool.School}</p>
                                <p className='colorblue font16'>{educationSchool.Graduate}</p>
                                <ul>
                                    <li className='colorwhite font16'>{educationSchool.Major}</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Image src={IconCoursera} className='Icon-Coursera' alt='icon-coursera' />
                            <div>
                                <h3 className='colorwhite'>Course Front-End Development</h3>
                                <p className='colorwhite font16'>{educationCourse.Course}</p>
                                <p className='colorblue font16'>{educationCourse.Graduate}</p>
                                <ul>
                                    <li className='colorwhite font16 mt5'>{educationCourse.Learning1}</li>
                                    <li className='colorwhite font16 mt5'>{educationCourse.Learning2}</li>
                                    <li className='colorwhite font16 mt5'>{educationCourse.Learning3}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='Border-Button'></div>
                </Col>

            </Row>
        </>
    )
}

export default AboutMe;

