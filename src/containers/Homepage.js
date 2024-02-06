import React from 'react'
import { Row, Col } from 'antd'
import Navbar from '../component/navbar'
import '../containers/Homepage.css'
import AboutMe from '../component/AboutMe'

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
          <Col span={24}>
            <AboutMe />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Homepage