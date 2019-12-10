import React, { useContext } from 'react'
import renderHTML from 'react-render-html';
import { PostsContext } from '../contexts/PostsContext';
import { GeneralContext } from '../contexts/GeneralContext';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posts = () => {
    /**
     * Destructuring PostsContext
     */
    const {posts, meta, next, prev} = useContext(PostsContext);

    /**
     * Destructuring GeneralContext
     */
    const { siteInfo } = useContext(GeneralContext);

    return (
        <React.Fragment>
            <Jumbotron>
                <Container>
                    <h1>{siteInfo.site_title}</h1>
                    <p>{siteInfo.site_tag_line}</p>
                </Container>
            </Jumbotron>

            <Container className="mt-5 mb-5">
                <Row>
                    {console.log(posts)}
                {
                    /**
                     * Mapping through posts
                     */
                    posts.map( (item, index) => {
                        return(
                            <Col md={4} key={index}>
                                <Card className="text-left">
                                    <Card.Img variant="top" src={item.featured_image_src} />
                                    <Card.Body>
                                        <Card.Title><a href={item.link}>{item.title.rendered}</a></Card.Title>
                                        <Card.Text>
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
                                        </Card.Text>
                                        {/* {renderHTML(item.excerpt.rendered)} */}
                                        <Link to={item.slug}>
                                            <Button variant="outline-primary">Read More</Button>
                                        </Link>
                                    </Card.Body> 
                                    <Card.Footer>
                                        <small className="text-muted">By:  <a href={item.author_details.user_url}>{item.author_details.user_nicename}</a></small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })
                }
                </Row>
                <Row className="mt-5">
                    <Col md={12}>
                        <Button variant="outline-secondary" onClick={prev}>Prev</Button> &nbsp;
                        <Button variant="outline-secondary" onClick={next}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
 
export default Posts;