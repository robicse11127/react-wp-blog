import React, { useContext } from 'react';
import { Row, Col, Jumbotron, Container, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { SearchContext } from '../contexts/SearchContext';

const Search = () => {

    let { keyword } = useParams();

    /**
     * Destructuring SearchContext
     */
    const { searchPosts, meta, params, prev, next } = useContext(SearchContext);

    if( searchPosts === '' ) {
        return searchPosts;
    }

    /**
     * Pagination Init
     */
    let prevBtn = true;
    let nextBtn = true;

    if( params.page === 1 ) {
        prevBtn = false;
    }
    if( params.page === meta['x-wp-totalpages'] ) {
        nextBtn = false;
    }

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
                            searchPosts.map( (item) => {
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
                        <Button variant="outline-secondary" disabled={prevBtn ? '' : 'disabled'} onClick={ () => prev(keyword)}>Prev</Button> &nbsp;
                        <Button variant="outline-secondary" disabled={nextBtn ? '' : 'disabled'} onClick={ () => next(keyword)}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
 
export default Search;