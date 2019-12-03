import React, { useContext } from 'react'
import renderHTML from 'react-render-html';
import { PostsContext } from '../contexts/PostsContext';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap';

const Posts = () => {

    const {posts, meta, next, prev} = useContext(PostsContext);

    return (
        <React.Fragment>
            <Jumbotron>
                <Container>
                    <h1>React Blog</h1>
                    <p>A test projcet made with React JS using WordPress Rest API</p>
                </Container>
            </Jumbotron>

            <Container className="mt-5 mb-5">
                <Row>
                {
                    posts.map( (item, index) => {
                        return(
                            <Col md={4} key={index}>
                                <Card className="text-left">
                                    <Card.Img variant="top" src={item.featured_image_src} />
                                    <Card.Body>
                                        <Card.Title><a href={item.link}>{item.title.rendered}</a></Card.Title>
                                        {renderHTML(item.content.rendered)}
                                        <Card.Text>
                                            
                                            In: {
                                                item.post_terms.map((term) => {
                                                    return(
                                                        <a href={term.url} key={term.id}>{term.name}, </a>
                                                    )
                                                })
                                            }
                                            On: {item.published_on}
                                        </Card.Text>
                                        <Button variant="outline-primary" href={item.link}>Read More</Button>
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