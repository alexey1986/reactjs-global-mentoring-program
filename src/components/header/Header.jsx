import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PropTypes } from 'prop-types';
import parse from 'html-react-parser';
import Search from '@components/search';
import Link from '@components/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

const Header = ({ isSearchable, children }) => {
    const logoTxt = '<strong>netflix</strong>roulette';
    const history = useHistory();
    const { query } = useParams();

    const handleChange = useCallback((e) => {
        !e.target.value.length && history.push("/");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${e.target.elements.searchMovie.value}`);
    };

    return (
        <header className={styles.header}>
            <Row>
                <Col>
                    <Link className={styles.logo} target="/">
                        {parse(logoTxt)}
                    </Link>
                </Col>
                <Col className="text-right">
                    {children}
                </Col>
            </Row>
            {isSearchable &&
                <Search
                    changeHandler={handleChange}
                    submitHandler={handleSubmit}
                    defaultValue={query} />}
        </header>
    )
}

Header.propTypes = {
    isSearchable: PropTypes.bool,
    children: PropTypes.node
};

export default Header;