// NOTE: Unused "useEffect". Delete it if you don't use it
import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Col, Form } from 'react-bootstrap';
import styles from './styles.module.css'

const Search = () => {
    // NOTE: These strings better to keep outside of component
    // Component don't have to create strings every time
    const placeholderTxt = 'What do you want to watch?';
    const findMovieTxt = 'Find your movie';
    const searchTxt = 'Search';

    const input = useRef();
    {/* NOTE: I believe it better to create another solution instead of "btn" variable using*/}
    let btn;

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const submitHandle = (e) => {
        e.preventDefault();
        setQuery(input.current.value);
        btn.click();
    }

    return (
        <Form onSubmit={submitHandle}>
            <Form.Label className={styles.formLabel}>
                {findMovieTxt}
            </Form.Label>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control ref={input} type="search" placeholder={placeholderTxt} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    {/* NOTE: Refs are not using like that. Read about refs and create another solution */}
                    <Link ref={node => (btn = node)} className="btn btn-primary" to={`/search/${query}`}>{searchTxt}</Link>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Search;