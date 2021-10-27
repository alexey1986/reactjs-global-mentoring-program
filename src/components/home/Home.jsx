import React from 'react';
import Header from '@components/header';
import Genres from '@components/genres';
import Sort from '@components/sort';
import Counter from '@components/counter';
import MoviesList from '@components/list';
import Footer from '@components/footer';
import AddBtn from '@components/AddBtn';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';

const Home = () => {

    return (
        <>
            <Container>
                <Header isSearchable={true}>
                    <AddBtn />
                </Header>
            </Container>
            <div className={styles.content}>
                <Container>
                    <Row className={styles.filteringSorting}>
                        <Col md={9}>
                            <Genres />
                        </Col>
                        <Col md={3}>
                            <Sort />
                        </Col>
                    </Row>
                    <Counter />
                </Container>
                <MoviesList />
            </div>
            <Footer />
        </>
    )
}

export default Home;
