import React from 'react';
import parse from 'html-react-parser';
import Link from 'components/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

const Header = (props) => {
    const logoTxt = '<strong>netflix</strong>roulette';

    return (
        <header className={styles.header}>
            <Row>
                <Col>
                    <Link className={styles.logo} target="/">
                        {parse(logoTxt)}
                    </Link>
                </Col>
                <Col className="text-right">
                    {props.children}
                </Col>
            </Row> 
        </header>
    )
}

export default Header;