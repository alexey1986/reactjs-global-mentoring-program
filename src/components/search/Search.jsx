import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesList } from 'service/index.js';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'

const Search = () => {
    const placeholderTxt = 'What do you want to watch?';
    const findMovieTxt = 'Find your movie';
    const searchTxt = 'Search';
    const input = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        const options = { search: input.current.value, searchBy: 'title', limit: '' };
        e.preventDefault();
        getMoviesList(dispatch, options);
    }

    const handleChange = (e) => {
        if (e.target.value.length == 0) {
            getMoviesList(dispatch);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label className={styles.formLabel}>
                {findMovieTxt}
            </Form.Label>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="search" placeholder={placeholderTxt} ref={input} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Button type="submit" type="submit">
                        {searchTxt}
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Search;