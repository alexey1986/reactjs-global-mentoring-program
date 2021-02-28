import React from 'react';
import Search from 'components/search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Row>
                    <Col>
                        <a className={styles.logo} href="#">
                            <strong>netflix</strong>
                            roulette
                        </a>
                    </Col>
                    <Col className="text-right">
                        <button className={styles.addMoreBtn}>+ Add More</button>
                    </Col>
                </Row>
                <Search />
            </Container>
        </header>
    )
}

export default Header;