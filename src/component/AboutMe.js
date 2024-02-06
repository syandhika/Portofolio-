import React from 'react'
import '../component/AboutMe.css'
import { Col, Row } from 'antd'

function AboutMe() {
    return (
        <>
            <Row>
                <Col span={24}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '50px'
                    }}
                >
                    <h1 className='Text-Bot-Nav'>TAKE A LOOK AT SOME OF MY WORK BELOW</h1>
                </Col>

                {/* about me  */}

                <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <h2 className='Text-AboutMe'>About Me</h2>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center'}}>
                    <div className='Border-AboutMe'>
                        <p className='Text-Name'>Halo! I am Mochammad Syandhika, a Front-End Developer with a high dedication to creating great user experiences and attractive designs. I believe that good design is not only about beautiful visuals, but also about functionality that meets user needs.</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default AboutMe;