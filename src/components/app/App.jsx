import React from 'react';
import Header from 'components/header';
import Genres from 'components/genres';
import Sort from 'components/sort';
import Counter from 'components/counter';
import MoviesList from 'components/list';
import Footer from 'components/footer';
import ErrorBoundary from 'components/error';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';
import { genres, options, movies } from '../../data.js';

const App = () => {
    return (
        <ErrorBoundary>
            <Header />
            <Container>
                <Row className={styles.filteringSorting}>
                    <Col md={9}>
                        <Genres genres={genres} />
                    </Col>
                    <Col md={3}>
                        <Sort options={options} />
                    </Col>
                </Row>
                <Counter count={movies.length} />
            </Container>
            <MoviesList movies={movies} />
            <Footer />
        </ErrorBoundary>
    )
}

export default App;
