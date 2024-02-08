import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router';

const ButtonAboutMe = ({ }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('To the Next Page');
        navigate('/Experience');
    }

    return (
        <>
            <Button type="primary"
                style={{
                    width: '200px',
                    height: '40px',
                    backgroundColor: '#1C7CB2'
                }}
                onClick={handleClick}
            >
                <p
                    style={{
                        fontSize: '14px',
                        color: '#ffff',
                        margin: '0'
                    }}
                >Next Pages</p>
            </Button>
        </>
    )
}

export default ButtonAboutMe