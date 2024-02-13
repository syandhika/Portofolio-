import React from 'react'
import { Row, Col } from 'antd'
import Navbar from '../component/navbar'
import '../containers/Homepage.css'
import AboutMe from '../component/AboutMe/AboutMe.js'
import WorkExperience from '../component/WorkExperience.js'

function Homepage() {
  
  return (
    <>
      <div className='Background-Homepage'>
        <Row>
          <Col span={24}>
            <Navbar />
          </Col>
        </Row>
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
          <Col span={24}><AboutMe /></Col>
        </Row>
        <Row>
            <Col span={24} >
              <WorkExperience />
            </Col>
        </Row>
      </div>
    </>
  )
}

export default Homepage;