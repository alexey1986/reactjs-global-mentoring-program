import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sort = (props) => {
    return (
        <Form className="pull-right">
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                    Sort by
                </Form.Label>
                <Col sm={8}>
                    <Form.Control as="select" custom>
                        {props.options.map((item) => (
                            <option key={item}>
                                {item}
                            </option>
                        ))}
                    </Form.Control>
                </Col>
            </Form.Group>
        </Form>
    )
}

Sort.propTypes = {
    options: PropTypes.array
};

export default Sort;