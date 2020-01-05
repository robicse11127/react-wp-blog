import React from 'react';
import config from '../../Config';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

class Signup extends React.Component {
    state = {  
        username: '',
        email: '',
        password: '',
        userNicename: '',
        userEmail: '',
        isLoading: false,
        isLoggedIn: false,
        error: ''
    }

    handleOnChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const registerData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        Axios.post(`${config.app_url}/users/register`, registerData, {
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then( (res) => {
            if( 200 === res.data.code ) {
                const loginData = {
                    username: this.state.username,
                    password: this.state.password
                }
                Axios.post(`${config.base_url}/wp-json/jwt-auth/v1/token`, loginData)
                .then( (res) => {
                    if( 'undefined' === res.data.token ) {
                        this.setState({error: res.data.message, isLoading: false});
                    }else {
        
                        localStorage.setItem( 'token', res.data.token );
                        localStorage.setItem( 'userName', res.data.user_nicename );
        
                        this.setState({
                            isLoading: false,
                            token: res.data.token,
                            userNicename: res.data.user_nicename,
                            userEmail: res.data.user_email,
                            isLoggedIn: true
                        })
                    }
                })
            }
        })
        .catch( (err) => {
            this.setState( { error: err.response.data, isLoading: false } )
        })
    }

    render() { 
        const localToken = localStorage.getItem('token');

        if( localToken ) {
            return(
                <Redirect to='/' />
            );
        }else {
            return (
                <Container>
                    <Row>
                        <Col md={{span: 4, offset: 4}}>
                            <Card className="mt-5">
                                <Card.Header><h4>Signup</h4></Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group>
                                            <Form.Label>Username : </Form.Label>
                                            <input type="text" className="form-control" name="username" placeholder="Enter username" onChange={this.handleOnChange} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email : </Form.Label>
                                            <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.handleOnChange} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password : </Form.Label>
                                            <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.handleOnChange} />
                                        </Form.Group>
                                        <Button variant="info" type="submit">Signup</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}
 
export default Signup;