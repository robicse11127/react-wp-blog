import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import renderHTML from 'react-render-html';

const Single = () => {

    let { slug } = useParams();

    const [post, setPost] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost/wp.dev/wp-json/wp/v2/posts`, {
            params: {
                slug: slug
            }
        })
        .then( (res) => {
            console.log(res);
            setPost(res.data);
        })
    },[]);

    return (
        <React.Fragment>
            {
                post.map( (item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <div className="featured-image">
                                <img src={item.featured_image_src} alt={item.title.rendered} />
                            </div>
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <Jumbotron className="mb-5">
                                            <h1>{item.title.rendered}</h1>
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
                                        </Jumbotron>
                                    </Col>
                                </Row>
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