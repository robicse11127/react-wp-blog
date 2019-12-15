import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import renderHTML from 'react-render-html';
import ReactDisqusComments from 'react-disqus-comments';

const Single = () => {

    let { slug } = useParams();

    const [post, setPost] = useState([]);

    const disqusUrl = 'http://localhost:3000/'+slug;

    useEffect( () => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/posts`, {
            params: {
                slug: slug
            }
        })
        .then( (res) => {
            setPost(res.data);
        })
    },[slug]);

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
                                        <Link to={'/author/'+item.author+'/posts'}>{item.author_details.user_nicename}</Link>
                                        In: 
                                        {
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
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row>
                                <div className="featured-image" style={{backgroundImage: `url(${item.featured_image_src.full})`}}>
                                    
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

                            <Container>
                                <Row>
                                    <Col md={12}>
                                    <ReactDisqusComments
                                    shortname="react-blog-2"
                                    identifier={disqusUrl}
                                    title="React Blog"
                                    url={disqusUrl}
                                   />
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