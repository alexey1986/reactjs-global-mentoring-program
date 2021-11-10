import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { sortOptions, text } from '../../data.js';
import { setParamsAction } from '@actions/actions';

const Sort = () => {
    const { sortByTxt } = text;
    const sortBy = useSelector(state => state.fetchReducer.parameters.sortBy);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setParamsAction({ sortBy: e.target.value, sortOrder: 'desc' }));
    }

    return (
        <Form className="pull-right">
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                    {sortByTxt}
                </Form.Label>
                <Col sm={8}>
                    <Form.Control as="select" value={sortBy} custom onChange={handleChange}>
                        {sortOptions.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Form.Control>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default Sort;