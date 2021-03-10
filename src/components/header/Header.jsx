import React from 'react';
import parse from 'html-react-parser';
import Search from 'components/search';
import Link from 'components/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';

const Header = () => {
    const addMoreTxt = '+ Add More';
    const logoTxt = '<strong>netflix</strong>roulette';

    return (
        <header className={styles.header}>
            <Container>
                <Row>
                    <Col>
                        <Link className={styles.logo} target="/">
                            {parse(logoTxt)}
                        </Link>
                    </Col>
                    <Col className="text-right">
                        <Button variant="outline-secondary" type="button">
                            {addMoreTxt}
                        </Button>
                    </Col>
                </Row>
                <Search />
            </Container>
        </header>
    )
}

export default Header;