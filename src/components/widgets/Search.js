import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SearchWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <form class="form-inline">
                    <input placeholder="Enter Keywords" type="text" class="mr-sm-2 form-control" />
                    <button type="button" class="btn btn-outline-info">Search </button>
                </form>
            </Col>
        </Row>
    );
}
 
export default SearchWidget;