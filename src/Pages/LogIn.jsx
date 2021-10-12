import React, { useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import axios from 'axios'
import { useHistory } from 'react-router'

function LogIn() {
    const [user, setUser] = useState({ "email": "", "password": "" })
    const history = useHistory()
    const updateField = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let headers = {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        };
        console.log(user);
        axios.post("https://book-api.hypetech.xyz/v1/auth/login", user, { headers: headers })
            .then(res => {

                console.log(res.data);

                // const user = jwt(res.data.accessToken)
                history.push('/protected');
                // const expiryDate = new Date(user.iat * 1000);

            })

    }
    return (
        <Container>
            <Row justify='center' align='center'>
                <Col>
                    <h3>Log In Page</h3>

                    <form onSubmit={submitHandler} >
                        <input onChange={updateField} name="email" value={user.email} type="email" />
                        <input onChange={updateField} name="password" value={user.password} type="password" />
                        <button type="submit">Register</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default LogIn

