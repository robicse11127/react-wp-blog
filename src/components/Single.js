import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import renderHTML from 'react-render-html';
import ReactDisqusComments from 'react-disqus-comments';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';
import config from '../Config';

const Single = () => {

    let { slug } = useParams();
    const [isNotFound, setIsNotFound] = useState();
    const [isLoading, setIsLoading] = useState([true]);

    const [post, setPost] = useState([]);

    const disqusUrl = 'http://localhost:3000/'+slug;

    useEffect( () => {
        axios.get(`${config.api_url}/posts`, {
            params: {
                slug: slug
            }
        })
        .then( (res) => {
            setPost(res.data); 
            if( res.data.length > 0 ) {
                setIsNotFound(false)
                setIsLoading(false)
            }else {
                setIsNotFound(true)
            }
        })
    },[slug]);
    
    
    return (
        <React.Fragment>
            { console.log(isNotFound) }
            { isNotFound ? (<NotFound />) :  
                isLoading ? ( <Loading /> ) : 
                post.map( (item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <div className="page-header">
                                <Container>
                                    <Row>
                                        <Col md={12}>
                                            <h1>{item.title.rendered}</h1>
                                            <div className="meta-links">
                                                By: <Link to={'/author/'+item.author+'/posts'}>{item.author_details.user_nicename}</Link> &nbsp; 
                                                In: {
                                                    /**
                                                     * Mapping through post terms
                                                     */
                                                    item.post_terms.map((term) => {
                                                        return(
                                                            <Link to={'/category/'+term.id+'/posts'} key={term.id}>{term.name}, </Link>
                                                        )
                                                    })
                                                } &nbsp;
                                                On: {item.published_on}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <Container fluid>
                                <Row>
                                    <div className="featured-image" style={{backgroundImage: `url(${item.featured_image_src.full})`}}></div>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col md={{span: 10, offset: 1}}>
                                        <div className="page-content">
                                            {renderHTML(item.content.rendered)}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <div className="disqus-comments">
                                            <ReactDisqusComments
                                                shortname="react-blog-2"
                                                identifier={disqusUrl}
                                                title="React Blog"
                                                url={disqusUrl}
                                            />
                                        </div>
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