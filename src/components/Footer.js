import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { WidgetsContext } from '../contexts/WidgetsContext';

import RecentPostsWidget from './widgets/RecentPosts';
import SearchWidget from './widgets/Search';
import RecentCommnetsWidget from './widgets/RecentComments';
import NavMenuWidget from './widgets/NavMenu';
import MediaImageWidget from './widgets/MediaImage';
import MediaAudioWidget from './widgets/MediaAudio';
import CalendarWidget from './widgets/Calendar';
import PagesWidget from './widgets/Pages';
import TextWidget from './widgets/Text';
import CategoryWidget from './widgets/Category';

const Footer = () => {

    const { widgets } = useContext(WidgetsContext);

    if(widgets == '') {
        return widgets;
    }

    return (
        <React.Fragment>
            <div className="footer-widget-area">
                <Container>
                    <Row>
                        <Col md={4}>
                        {
                            widgets['sidebar-1'].map( (widget) => {
                                if( widget.type == 'recent-posts' ) {
                                    return(
                                        <RecentPostsWidget widget={widget} />
                                    )
                                }else if( widget.type == 'search' ) {
                                    return(
                                        <SearchWidget widget={widget}/>
                                    )
                                }else if(widget.type == 'recent-comments') {
                                    return(
                                        <RecentCommnetsWidget widget={widget} />
                                    )
                                }else if(widget.type == 'nav_menu') {
                                    return(
                                        <NavMenuWidget widget={widget} />
                                    )
                                }else if(widget.type == 'media_image') {
                                    return(
                                        <MediaImageWidget widget={widget} />
                                    )
                                }else if(widget.type == 'media_audio') {
                                    return(
                                        <MediaAudioWidget widget={widget} />
                                    )
                                }else if(widget.type == 'calendar') {
                                    return(
                                        <CalendarWidget widget={widget} />
                                    );
                                }else if(widget.type == 'pages') {
                                    return(
                                        <PagesWidget widget={widget} />
                                    );
                                }
                                else if(widget.type == 'text') {
                                    return(
                                        <TextWidget widget={widget} />
                                    );
                                }
                                else if(widget.type == 'categories') {
                                    return(
                                        <CategoryWidget widget={widget} />
                                    );
                                }
                            })
                        }
                        </Col>
                        <Col md={4}>
                        {
                            widgets['sidebar-2'].map( (widget) => {
                                return(
                                    <Row>
                                        <Col>
                                            <h4>{widget.instance.title}</h4>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                        </Col>
                        <Col md={4}>
                        {
                            widgets['sidebar-3'].map( (widget) => {
                                return(
                                    <Row>
                                        <Col>
                                            <h4>{widget.instance.title}</h4>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React Blog</Navbar.Brand>
                        <Nav className="mr-auto">
                    </Nav>
                    <div>
                        <p className="copyright-text">2020. All Rights Reserved &copy; Rabiul</p>
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
 
export default Footer