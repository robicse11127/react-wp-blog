import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import renderHTML from 'react-render-html';

const Single = () => {

    let { slug } = useParams();

    const [post, setPost] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/posts`, {
            params: {
                slug: slug
            }
        })
        .then( (res) => {
            setPost(res.data);
        })
    },[]);

    return (
        <React.Fragment>
            {
                post.map( (item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <h1>{item.title.rendered}</h1>
                                        <a href={item.author_details.user_url}>{item.author_details.user_nicename}</a>
                                        In: 
                                        {
                                            /**
                                             * Mapping through post terms
                                             */
                                            item.post_terms.map((term) => {
                                                return(
                                                    <a href={term.url} key={term.id}>{term.name}, </a>
                                                )
                                            })
                                        }
                                        On: {item.published_on}
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row>
                                <div className="featured-image" style={{backgroundImage: `url(${item.featured_image_src})`}}>
                                    
                                </div>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col md={{span: 8, offset: 2}}>
                                        {renderHTML(item.content.rendered)}
                                    </Col>
                                </Row>
                            </Container>
                        </React.Fragment>
                    )
                })
            }
        </React.Fragment>
    );
}
 
export default Single;