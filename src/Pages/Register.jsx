import React, { useState } from 'react'
import { Col, Container, Row } from 'react-grid-system';
import axios from 'axios';
import jwt from 'jwt-decode';

function Register() {
    const [newUser, setnewUser] = useState({ "name": "", "email": "", "password": "" })

    const upadateField = (e) => {
        setnewUser({ ...newUser, [e.target.name]: e.target.value })
    }


    const onSubmit = (e) => {
        e.preventDefault()
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        };
        axios.post("https://book-api.hypetech.xyz/v1/auth/register", newUser, { headers: headers })
            .then(res => {
                console.log(res.data);
                const user = jwt(res.data.accessToken)
                console.log(user);
                const expiryDate = new Date(user.iat * 1000);
                console.log(expiryDate);
            })
        console.log(newUser);
    }


    return (
        <Container>
            <Row justify='center' align='center'>
                <Col>
                    <h3>Register Page</h3>

                    <form onSubmit={onSubmit} >
                        <input onChange={upadateField} name="name" value={newUser.name} type="text" />
                        <input onChange={upadateField} name="email" value={newUser.email} type="email" />
                        <input onChange={upadateField} name="password" value={newUser.password} type="password" />
                        <button type="submit">Register</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;
