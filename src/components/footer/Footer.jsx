import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className="text-center">
                <strong>netflix</strong>roulette
            </Container>
        </footer>
    )
}

export default Footer;