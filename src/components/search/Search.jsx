import React, { useRef, useCallback } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Col, Form, Button } from 'react-bootstrap';
import styles from './styles.module.css'
import { text } from '../../data.js';
import { setParamsAction } from 'actions/actions';
import { useDispatch } from 'react-redux';
import { DEFAULT_PARAMS } from 'src/settings';

const Search = () => {
    const { placeholderTxt, findMovieTxt, searchTxt } = text;    
    const input = useRef();    
    const history = useHistory();

    const dispatch = useDispatch();

    const { query } = useParams();

    const handleChange = useCallback(() => {
        !input.current.value.length && history.push('/');
    }, []);

    const resetFilters = () => dispatch(setParamsAction(DEFAULT_PARAMS))

    const submitHandle = (e) => {
        e.preventDefault();
        history.push(`/search/${input.current.value}`);
        resetFilters();
    }

    return (
        <Form onSubmit={submitHandle}>
            <Form.Label className={styles.formLabel}>
                {findMovieTxt}
            </Form.Label>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control ref={input} type="search" defaultValue={query} placeholder={placeholderTxt} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Button type="submit">{searchTxt}</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Search;
