import React, { useState } from 'react'
import { Container, Col, Row } from 'react-grid-system'
import LogIn from '../components/LogIn'
import Register from '../components/Register'

function Auth() {


    const toggleClass = () => {
        const form = document.getElementById('loginForm');
        form.classList.remove('rotateRight')
        if (!form.classList.contains('rotate')) {
            form.classList.add('rotate')
        } else {
            form.classList.replace('rotate', 'rotateRight')
        }


        console.log('sa');
    }


    return (
        <Container fluid className="auth__page">
            <Row nogutter align='center' justify='center' className="auth__page__row">
                <Col lg={3} className="form__container">
                    <Register toggleClass={toggleClass} />
                    <LogIn toggleClass={toggleClass} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth
