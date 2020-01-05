import React, { useContext, useEffect } from 'react';
import { PostsContext } from '../contexts/PostsContext';
import { GeneralContext } from '../contexts/GeneralContext';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import Masonry from 'react-masonry-component';

const Posts = () => {

    const masonryOptions = {
        transitionDuration: 0
    };
     
    const imagesLoadedOptions = { background: '.my-bg-image-el' }

    /**
     * Destructuring PostsContext
     */
    const {posts, params, meta, next, prev, undate_post_loved, gsapPostAnimation} = useContext(PostsContext);

    /**
     * Destructuring GeneralContext
     */
    const { siteInfo } = useContext(GeneralContext);

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


    if( posts === '' ) {
        return posts;
    }

    
    return (
        <React.Fragment>
            <Jumbotron>
                <Container>
                    <h1>{siteInfo.site_title}</h1>
                    <p>{siteInfo.site_tag_line}</p>
                </Container>
            </Jumbotron>

            <Container className="mt-5 mb-5">
                <Masonry
                    className={'row'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                {
                    /**
                     * Mapping through posts
                     */
                    posts.map( (item, index) => {
                        return(
                            <Col md={4} key={index} className="post">
                                <Card className="text-left">
                                    <Card.Img variant="top" src={item.featured_image_src.medium} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h4>
                                                <Link to={'/'+item.slug}>{item.title.rendered}</Link>
                                            </h4>
                                        </Card.Title>
                                        <Card.Text>
                                            In: {
                                                /**
                                                 * Mapping through post terms
                                                 */
                                                item.post_terms.map((term) => {
                                                    return(
                                                        <Link to={'/category/'+term.id+'/posts'} key={term.id} className="term-link">{term.name}, </Link>
                                                    )
                                                })
                                            }
                                            On: {item.published_on}
                                        </Card.Text>
                                        <Link to={'/'+item.slug}>
                                            <Button variant="outline-info">Read More</Button>
                                        </Link>
                                    </Card.Body> 
                                    <Card.Footer>
                                        By: <Link to={'/author/'+item.author+'/posts'} className="author-link">{item.author_details.user_nicename}</Link> &nbsp;
                                        <a href="" className="post-loved" data-post-id={item.id} data-love={item.metaboxes._post_loved ? item.metaboxes._post_loved : 0} onClick={ (e) => undate_post_loved(e) }><FaHeart style={{color: 'red'}} /></a> {item.metaboxes._post_loved ? item.metaboxes._post_loved : 0}
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })
                }
                </Masonry>
                <Row className="mt-3">
                    <Col md={12}>
                        <Button variant="outline-info" disabled={prevBtn ? '' : 'disabled'} onClick={prev}>Prev</Button> &nbsp;
                        <Button variant="outline-info" disabled={nextBtn ? '' : 'disabled'} onClick={next}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
 
export default Posts;