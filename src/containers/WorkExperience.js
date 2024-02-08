import React from 'react'
import { Row, Col, Button } from 'antd'
import './WorkExperience.css'
import { useNavigate } from 'react-router-dom'

const WorkExperience = ({ }) => {

    const navigate = useNavigate();

    const handlePreviousPage = () => {
        console.log('To the Next Page');
        navigate('/');
    }

    const handleNextPage = () => {
        console.log('To the Next Page');
        navigate('/Project');
    }

    

    const TaskExperience = {
        TextExperience: "During my tenure as a Junior Frontend Developer at Thinkmatch, I have been actively involved in various projects, contributing to the enhancement of user interfaces and overall user experience.",
        TextExperience2: "Here is an overview of my responsibilities and achievements:",
        Task1: "Implemented responsive design principles to ensure optimal user experience across a variety of devices and screen sizes",
        Task2: "Collaborated with the design team to translate mockups into pixel-perfect, visually appealing user interfaces.",
        Task3: "Proficiently utilized React.js to build interactive and dynamic user interfaces, providing a seamless and engaging experience for users.",
        Task4: "Worked closely with cross-functional teams, including backend developers and designers, to ensure seamless integration of frontend and backend components.",
        Task5: "Actively participated in team meetings, providing insights and collaborating on solutions to technical challenges.",
        Task6: "Stayed abreast of the latest trends and updates in React.js and frontend development, incorporating best practices and improvements into ongoing projects.",
    }

    return (
        <div className='Background-Experience'>
            <Row>
                <Col span={24} style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <h1 className='Work-Experience'>Work Experience</h1>
                </Col>
            </Row>
            <Row>
                <Col span={24}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div className='Border-Experience'>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ padding: '40px 30px' }}>
                        <h2 className='colorwhite'>Front-End Development</h2>
                        <h4 className='colorwhite'>Thinkmatch (https://thinkmatch.id)</h4>
                        <p className='colorblue font16'> Februari 2023 until now</p>
                        <p className='colorwhite font16'>{TaskExperience.TextExperience}</p>
                        <p className='colorwhite font16'>{TaskExperience.TextExperience2}</p>
                        <ul>
                            <li className='Text-Experience'>{TaskExperience.Task1}</li>
                            <li className='Text-Experience'>{TaskExperience.Task2}</li>
                            <li className='Text-Experience'>{TaskExperience.Task3}</li>
                            <li className='Text-Experience'>{TaskExperience.Task4}</li>
                            <li className='Text-Experience'>{TaskExperience.Task4}</li>
                            <li className='Text-Experience'>{TaskExperience.Task5}</li>
                            <li className='Text-Experience'>{TaskExperience.Task6}</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div className='Border-Bot-Experience'>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'end', 
                        right: '230px'
                    }}
                >
                    <Button type="primary"
                        style={{
                            width: '200px',
                            height: '40px',
                            backgroundColor: '#1C7CB2',
                            marginRight: '20px'
                        }}
                        onClick={handlePreviousPage}
                    >
                        <p
                            style={{
                                fontSize: '14px',
                                color: '#ffff',
                                margin: '0'
                            }}
                        >Previous Page</p>
                    </Button>
                    <Button type="primary"
                        style={{
                            width: '200px',
                            height: '40px',
                            backgroundColor: '#1C7CB2',
                        }}
                        onClick={handleNextPage}
                    >
                        <p
                            style={{
                                fontSize: '14px',
                                color: '#ffff',
                                margin: '0'
                            }}
                        >Next Pages</p>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default WorkExperience
