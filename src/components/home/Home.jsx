import React from 'react';
import { useSelector } from 'react-redux';
import Header from 'components/header';
import Search from 'components/search';
import Genres from 'components/genres';
import Sort from 'components/sort';
import Counter from 'components/counter';
import MoviesList from 'components/list';
import Loader from 'components/loader';
import Footer from 'components/footer';
import AddBtn from 'components/AddBtn';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';

const Home = () => {
    const isLoading = useSelector(state => state.fetchReducer.isLoading);

    return (
        <>
            <Container>
                <Header>
                    <AddBtn />
                </Header>
                <Search />
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

            { isLoading && <Loader />}
        </>
    )
}

export default Home;
