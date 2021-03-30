import React, { useState, useEffect } from 'react';
import Header from 'components/header';
import Search from 'components/search';
import Genres from 'components/genres';
import Sort from 'components/sort';
import Counter from 'components/counter';
import MoviesList from 'components/list';
import MovieDetails from 'components/details';
import Footer from 'components/footer';
import ErrorBoundary from 'components/error';
import AddBtn from 'components/AddBtn';
import SearchButton from 'components/searchBtn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';
import { genres, options, movies } from '../../data.js';

const App = () => {
    const [moviesList, setMovieList] = useState([]);
    const [selectedMovie, setMovie] = useState(null);

    // fetch request imitation
    useEffect(() => {
        let timerFunc = setTimeout(() => {
        setMovieList([
            ...movies
        ]);
        }, 2000);

        return () => clearTimeout(timerFunc);
    }, [movies]);

    return (
        <ErrorBoundary>
            <Container>
                { selectedMovie ?
                    <>
                        <Header>
                            <SearchButton />
                        </Header>
                        <MovieDetails selectedMovie={selectedMovie} />
                    </>
                    :
                    <>
                        <Header>
                            <AddBtn />
                        </Header>
                        <Search />
                    </>
                }
            </Container>
            <div className={styles.content}>
                <Container>
                    <Row className={styles.filteringSorting}>
                        <Col md={9}>
                            <Genres genres={genres} />
                        </Col>
                        <Col md={3}>
                            <Sort options={options} />
                        </Col>
                    </Row>
                    <Counter count={moviesList.length} />
                </Container>
                <MoviesList movies={moviesList} setMovie={setMovie} />
            </div>
            <Footer />
        </ErrorBoundary>
    )
}

export default App;
