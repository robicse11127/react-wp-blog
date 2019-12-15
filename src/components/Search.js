import React, { useState, useEffect } from 'react';
import { Row, Col, Jumbotron, Container, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Search = () => {
    let { keyword } = useParams();

    const [result, setResult] = useState([]);

    /**
     * Init Params State
     */
    const [params,setParams] = useState({
        subtype: 'post',
        search: keyword,
        per_page: 3,
        page: 1
    });

    const [meta, setMeta] = useState([]);

    /**
     * On Post Next Navigation
     */
    const next = () => {
        if( params.page < meta['x-wp-totalpages'] ) {
            setParams({
                subtype: 'post',
                search: keyword,
                per_page: params.per_page, 
                page: parseInt(params.page, 10) + 1
            })
        }
    }

    /**
     * On Post Prev Navigation
     */
    const prev = () => {
        if( params.page > 1 ) {
            setParams({
                subtype: 'post',
                search: keyword,
                per_page: params.per_page, 
                page: parseInt(params.page, 10) - 1
            })
        }
    }

    useEffect( ()  => {
        Axios.get(`http://localhost/wp-react/wp-json/wp/v2/search`, {
            params: params
        })
        .then( (res) => {
            setResult(res.data)
            setMeta(res.headers);
        })
    }, [keyword]);


    return (
        <React.Fragment>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2>Searching for "{keyword}"</h2>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col md={12}>
                        {
                            result.map( (item) => {
                                return(
                                    <Card className="mb-2" key={item.id}>
                                        <Card.Body>
                                            {item.title}
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mb-5 mt-3">
                    <Col md={12}>
                        <Button variant="outline-secondary" onClick={prev}>Prev</Button> &nbsp;
                        <Button variant="outline-secondary" onClick={next}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
 
export default Search;