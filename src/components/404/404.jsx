import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { text } from '../../data.js';
import styles from './styles.module.css';

const NotFoundPage = () => {
    return (
        <div className={styles.pageNotFound}>
            <Container >
                <h1 className={styles.pageNotFoundText}>{text.pageNotFound}</h1>
                <h2 className={styles.errorCodeText}>{text.errorCode404}</h2>
                <Link className="btn btn-primary" to="/">{text.backToHome}</Link>
            </Container>
        </div>
    )
}

export default NotFoundPage;
