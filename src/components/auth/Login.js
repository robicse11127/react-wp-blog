import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userNicename: '',
            userEmail: '',
            isLoggedIn: false,
            isLoading: false,
            error: '',
            token: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const loginData = {
            username: this.state.username,
            password: this.state.password
        }

        Axios.post(`http://localhost/wp-react/wp-json/jwt-auth/v1/token`, loginData)
        .then( (res) => {
            console.log(res.data)
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
        .catch( (err) => {
            this.setState( { error: err.response.data, isLoading: false } )
        })
    }

    handleOnChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
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
                                <Card.Header><h4>Login</h4></Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group>
                                            <Form.Label>Username : </Form.Label>
                                            <input type="text" className="form-control" name="username" placeholder="Enter username" onChange={this.handleOnChange} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password : </Form.Label>
                                            <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.handleOnChange} />
                                        </Form.Group>
                                        <Button variant="info" type="submit">Login</Button>
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

export default Login;