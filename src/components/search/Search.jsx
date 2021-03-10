import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'

const Search = () => {
    const placeholderTxt = 'What do you want to watch?';
    const findMovieTxt = 'Find your movie';
    const searchTxt = 'Search';

    return (
        <Form>
            <Form.Label className={styles.formLabel}>
                {findMovieTxt}
            </Form.Label>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="search" placeholder={placeholderTxt} />
                    </Form.Group>
                </Col>
                <Col>
                    <Button type="submit">
                        {searchTxt}
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Search;