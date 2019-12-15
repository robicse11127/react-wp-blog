import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MediaAudioWidget = (props) => {
    return (
        <Row>
            <Col md={12}>
                <h4>{props.widget.instance.title}</h4>
            </Col>
            <Col md={12}>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src={props.widget.instance.mp3} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </Col>
        </Row>
    );
}
 
export default MediaAudioWidget;