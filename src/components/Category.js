import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';
import config from '../Config';

import CategoryPageHeader from '../partials/CategoryPageHeader';

const Category = () => {

    let {id} = useParams();

    const [categoryPosts, setCategoryPosts] = useState([]);
    const [params, setParams] = useState({
        categories: id,
        per_page: 3,
        page: 1
    });

    /**
     * Init Meta State
     */
    const [meta, setMeta] = useState([]);

    /**
     * On Post Next Navigation
     */
    const next = () => {
        if( params.page < meta['x-wp-totalpages'] ) {
            setParams({
                categories: id, 
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
                categories: id, 
                per_page: params.per_page, 
                page: parseInt(params.page, 10) - 1
            })
        }
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

    useEffect( () => {
        axios.get(`${config.app_url}/posts`, {
            params: params
        })
        .then( (res) => {
            setCategoryPosts(res.data);
            setMeta(res.headers);
        })
    },[params])

    return (
        <React.Fragment>
            <Jumbotron>
                <Container>
                   <CategoryPageHeader id={id} />
                </Container>
            </Jumbotron>

            <Container className="mt-5 mb-5">
                <Row>
                {
                    /**
                     * Mapping through posts
                     */
                    categoryPosts.map( (item, index) => {
                        return(
                            <Col md={4} key={index}>
                                <Card className="text-left">
                                    <Card.Img variant="top" src={item.featured_image_src.medium} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Link to={'/'+item.slug}>
                                                {item.title.rendered}
                                            </Link>
                                        </Card.Title>
                                        <Card.Text>
                                            In: {
                                                /**
                                                 * Mapping through post terms
                                                 */
                                                item.post_terms.map((term) => {
                                                    return(
                                                        <Link to={'/category/'+term.id+'/posts'} key={term.id}>{term.name}, </Link>
                                                    )
                                                })
                                            }
                                            On: {item.published_on}
                                        </Card.Text>
                                        <Link to={'/'+item.slug}>
                                            <Button variant="outline-primary">Read More</Button>
                                        </Link>
                                    </Card.Body> 
                                    <Card.Footer>
                                        <small className="text-muted">By:<Link to={'/author/'+item.author+'/posts'}> {item.author_details.user_nicename}</Link>
                                        </small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })
                }
                </Row>
                <Row className="mt-5">
                    <Col md={12}>
                        <Button variant="outline-secondary" disabled={prevBtn ? '' : 'disabled'} onClick={prev}>Prev</Button> &nbsp;
                        <Button variant="outline-secondary" disabled={nextBtn ? '' : 'disabled'} onClick={next}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
 
export default Category;