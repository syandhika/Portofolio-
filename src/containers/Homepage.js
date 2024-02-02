import React from 'react'
import { Row, Col } from 'antd'
import Navbar from '../component/navbar'

function Homepage() {
  return (
    <>
      <div style={{ background: "#000000" }}>
        <Row
          style={{
            justifyContent: "center"
          }}
        >
          <Col>
            <Navbar />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Homepage