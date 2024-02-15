import React from "react";
import { Carousel, Col, Row, Image } from "antd";
import '../component/Certificate.css'
import FrontEnd from '../assets/image/Certificate-Front-End-Development.jpeg'
import ReactBasics from '../assets/image/Certificate-ReactBasics.jpeg'
import HTML  from '../assets/image/Certificate-HTML&CSS.jpeg'
function Certificate() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div id="Certificate">
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <h1 className='Text-Certificate'>Certificate</h1>
          </Col>
        </Row >
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="Border-Top-Certificate" style={{ display: 'flex', justifyContent: 'center' }} >
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Carousel afterChange={onChange} className="custom-carousel">
              <div className="#">
                <div className="#">
                  <h3 className="Text-Name-Certificate">Coursera from Meta Facebook</h3>
                  <p className="Text-About-Certificate">Front-End Development</p>
                </div>
                <Image src={FrontEnd} className="Image-Project" />
                <div className="#">
                  <p className="Text-Technology">Learning about</p>
                  <p className="Text-About-Certificate">HTTP, UI Design, Javascript and Web Development</p>
                </div>
              </div>
              <div className="#">
                <div className="#">
                  <h3 className="Text-Name-Certificate">Coursera from Meta Facebook</h3>
                  <p className="Text-About-Certificate">React Basics</p>
                </div>
                <Image src={ReactBasics} className="Image-Project" />
                <div className="#">
                  <p className="Text-Technology">Learning About</p>
                  <p className="Text-About-Certificate">React.js, Route, State, Dynamic Events, Data flow and Props</p>
                </div>
              </div>
              <div className="#">
                <div className="#">
                  <h3 className="Text-Name-Certificate">Coursera from Meta Facebook</h3>
                  <p className="Text-About-Certificate">HTML & CSS</p>
                </div>
                <Image src={HTML} className="Image-Project" />
                <div className="#">
                  <p className="Text-Technology">Learning About</p>
                  <p className="Text-About-Certificate">Tags in HTML, Element in HTML, CSS Grids and Responsive</p>
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="Border-Bot-Certificate"></div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Certificate;