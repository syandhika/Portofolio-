import React, { useEffect } from 'react';
import { Col, Flex, Image, Row } from 'antd';
import { Link } from 'react-scroll';
import './navbar.css';
import IconName from '../assets/icons/Icon-Name.jpeg'

function Navbar() {

    return (
        <>
            <div className='Background-Home'>
                <Row
                    style={{
                        padding: '20px 0'
                    }}
                >
                    <Col span={12} className='DisplayCol'>
                        <Image src={IconName} className='IconNav1' alt='Icon-Face' />
                    </Col>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'end' }}>
                        <div className='Border-Navbar'>
                            <ul style={{ listStyle: 'none', padding: '0'}}>
                                <li><Link to="aboutMe" smooth={true} duration={500} className='Text-Navbar'>About Me</Link></li>
                            </ul>
                            <ul style={{ listStyle: 'none', padding: '0'}}>
                                <li><Link to="workExperience" smooth={true} duration={500} className='Text-Navbar'>Experience</Link></li>
                            </ul>
                            <ul style={{ listStyle: 'none', padding: '0'}}>
                                <li><Link to="Project" smooth={true} duration={500} className='Text-Navbar'>Project</Link></li>
                            </ul>
                            <ul style={{ listStyle: 'none', padding: '0'}}>
                                <li><Link to="aboutMe" smooth={true} duration={500} className='Text-Navbar'>Contact</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* <h1 className='Text-Portofolio'>My Portofolio</h1> */}
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Navbar;

