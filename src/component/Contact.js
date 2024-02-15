import React from 'react'
import '../component/Contact.css'
import { Col, Image, Row } from 'antd'
import IconCall from '../assets/icons/Icon-Whatsapp.png'
import IconEmail from '../assets/icons/Icon-Email2.png'
import IconInstagram from '../assets/icons/Icon-Instagram.jpg'
import IconLinkedln from '../assets/icons/Icon-Linkedln.jpeg'
import IconGIthub from '../assets/icons/Icon-Github.png'

function Contact() {

    const Contact = {
        TextContact: "Thank you for visiting the contact page! If you have any questions, feedback, or would like to talk further, please contact me via the form below."
    }

    return (
        <>
            <div id='Contact'>
                <Row>
                    <Col span={24}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <h1 className='Text-Contact'>Contact</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <div className='Border-Contact'>
                            <p className='text-ThankYou'> {Contact.TextContact}</p>
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
                        <div className='#'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} >
                            <Image src={IconCall} className='Icon-Whatsapp' alt='icon-call' />
                            <p className='text-Contact2'>083890795424</p>
                        </div>
                        <div className='#'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} >
                            <Image src={IconEmail} className='Icon-Email' alt='icon-call' />
                            <p className='text-Contact2'>mochammadsyandhika@gmail.com</p>
                        </div>
                        <div className='#'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} >
                            <Image src={IconInstagram} className='Icon-Instagram' alt='icon-call' />
                            <p className='text-Contact2'>@mchsyndhkaa</p>
                        </div>
                        <div className='#'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} >
                            <Image src={IconLinkedln} className='Icon-Linkedln' alt='icon-call' />
                            <p className='text-Contact2'>Mochammad Syandhika</p>
                        </div>
                        <div className='#'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} >
                            <Image src={IconGIthub} className='Icon-Github' alt='icon-call' />
                            <p className='text-Contact2'>syandhika</p>
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
                        <div className='Border-Bot-Contact'>
                            <p className='Text-Thank-You-Contact'>Thank you for taking the time to explore my portfolio. I love being able to share my projects and creativity through this page.</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default Contact

