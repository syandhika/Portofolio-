import React from "react";
import { Carousel, Col, Row, Image } from "antd";
import '../component/project.css'
import Project1 from '../assets/image/Project1.png'
import Project2 from '../assets/image/Project2.png'
import Project3 from '../assets/image/Project3.png'
function Project() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div id="Project">
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <h1 className='Text-Project'>Project</h1>
          </Col>
        </Row >
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="Border-Top-Project" style={{ display: 'flex', justifyContent: 'center' }} >
              {/* <h1 className='Text-Project'>Project</h1> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Carousel afterChange={onChange} className="custom-carousel">
              <div className="#">
                <div className="#">
                  <h3 className="Text-Detail-Project">Pemkab Sorong</h3>
                  <p className="Text-Web-Based">Web Based App for 'Mutasi Pegawai'</p>
                </div>
                <Image src={Project1} className="Image-Project" />
                <div className="#">
                  <p className="Text-Technology">Technology Stack</p>
                  <p className="Text-Web-Based">React, Redux, Ant Design, Axios</p>
                </div>
              </div>
              <div className="#">
                <div className="#">
                  <h3 className="Text-Detail-Project">Animart Marketplace</h3>
                  <p className="Text-Web-Based">Web Based App for animal feed marketplace</p>
                </div>
                <Image src={Project2} className="Image-Project" />
                <div className="#">
                  <p className="Text-Technology">Technology Stack</p>
                  <p className="Text-Web-Based">React, Redux, Bootstrap 5, Axios</p>
                </div>
              </div>
              <div className="#">
                <div className="#">
                  <h3 className="Text-Detail-Project">PT Darma Henwa</h3>
                  <p className="Text-Web-Based">Web Based App for warehouse division to monitor their spare part stocks</p>
                </div>
                <Image src={Project3} className="Image-Project" />
                <div className="#">
                  <p className="Text-Technology">Technology Stack</p>
                  <p className="Text-Web-Based">React, Redux, Bootstrap 5, Axios</p>
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="Border-Bot-Project"></div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Project;