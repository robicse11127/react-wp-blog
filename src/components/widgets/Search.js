import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { SearchContext } from '../../contexts/SearchContext';

const SearchWidget = (props) => {
    let history = useHistory();

    /**
     * Init Search Keyword State
     */
    const [keyword, setKeyword] = useState('');
    
    /**
     * Destructuring SearchContext
     */
    const { handleSearch } = useContext( SearchContext );
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <Form inline onSubmit={ (e) => handleSearch(e, keyword)}>
                    <InputGroup className="mb-3">
                        <FormControl type="text" placeholder="Enter Keywords" className="mr-sm-2" value={keyword} onChange={ (e) => setKeyword(e.target.value) }  />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" type="submit">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Col>
        </Row>
    );
}
 
export default SearchWidget;