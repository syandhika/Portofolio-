import React, { useEffect } from 'react';
import { Col, Flex, Image, Row } from 'antd';
import './navbar.css';
import IconMe from '../assets/icons/Icon-Me.png'
import IconLinkedln from '../assets/icons/Icon-Linkedln.jpeg';
import IconGithub from '../assets/icons/Logo-Github.png';

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
                        <Image src={IconMe} className='IconNav1' alt='Icon-Face' />
                    </Col>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'center'}}>
                        <div className='Border-Navbar'>
                            <a href='#' className='Text-Navbar'>Home</a>
                            <a href='/Experience' className='Text-Navbar'>Project</a>
                            <a href='#' className='Text-Navbar'>Contact</a>
                            <Image src={IconGithub} className='IconNavbar mt-10' alt='Icon-Github'/>
                            <Image src={IconLinkedln} className='IconNavbar mt-10' alt='Icon-Linkedln' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center'}}>
                        <h1 className='Text-Portofolio'>My Portofolio</h1>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Navbar;