import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sort = ({options}) => {
    const sortByTxt = 'Sort by';

    return (
        <Form className="pull-right">
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                    {sortByTxt}
                </Form.Label>
                <Col sm={8}>
                    <Form.Control as="select" custom>
                        {options.map((item) => (
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