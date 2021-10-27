import React from "react";
import { PropTypes } from 'prop-types';
import { Col, Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { text } from "../../data.js";

const Search = ({ submitHandler, changeHandler, defaultValue }) => {
    const { placeholderTxt, findMovieTxt, searchTxt } = text;

    return (
        <Form onSubmit={submitHandler}>
            <Form.Label htmlFor="searchField" className={styles.formLabel}>
                {findMovieTxt}
            </Form.Label>
            <Form.Row>
                <Col>
                    <Form.Group controlId="searchField">
                        <Form.Control
                            name="searchMovie"
                            type="search"
                            defaultValue={defaultValue}
                            placeholder={placeholderTxt}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Button type="submit" >{searchTxt}</Button>
                </Col>
            </Form.Row>
        </Form>
    );
};

Search.propTypes = {
    submitHandler: PropTypes.func,
    changeHandler: PropTypes.func,
    defaultValue: PropTypes.string
};

export default Search;
