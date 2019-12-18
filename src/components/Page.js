import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import renderHTML from 'react-render-html';

const Page = () => {

    let { slug } = useParams();

    const [page, setPage] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost/wp-react/wp-json/wp/v2/pages`, {
            params: {
                slug: slug
            }
        })
        .then( (res) => {
            setPage(res.data);
        })
    },[slug]);

    return (
        <React.Fragment>
            {
                page.map( (item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <Jumbotron>
                                <Container>
                                    <Row>
                                        <Col md={12}>
                                            <h1>{item.title.rendered}</h1>
                                        </Col>
                                    </Row>
                                </Container>
                            </Jumbotron>
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
                        </React.Fragment>
                    )
                })
            }
        </React.Fragment>
    );
}
 
export default Page;