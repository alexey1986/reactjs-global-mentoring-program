import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'

const Search = () => {
    return (
        <Form>
            <Form.Label className={styles.formLabel}>Find your movie</Form.Label>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="search" placeholder="What do you want to watch?" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button type="submit">
                        Search
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Search;