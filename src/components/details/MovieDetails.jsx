import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '@components/header';
import SearchButton from '@components/searchBtn';
import Genres from '@components/genres';
import Sort from '@components/sort';
import Counter from '@components/counter';
import MoviesList from '@components/list';
import Loader from '@components/loader';
import Footer from '@components/footer';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from 'service/index.js';
import styles from './styles.module.css';

const MovieDetails = ({ location, match }) => {
    const getFullYear = date => new Date(date).getFullYear();
    const arrayToString = arr => arr.join(', ');
    
    const isLoading = useSelector(state => state.fetchReducer.isLoading);
    const selectedMovie = useSelector(state => state.fetchReducer.selectedMovie);

    const dispatch = useDispatch();

    useEffect(() => {
        getMovie(dispatch, match.params.id);
        window.scrollTo(0, 0);
    }, [ location.pathname ]);

    return (
        <>
            <Container>
                { selectedMovie &&
                    <div>
                        <Header>
                            <SearchButton />
                        </Header>

                        <Row className={styles.movieDetails}>
                            <Col sm={3}>
                                <img className="img-fluid" src={selectedMovie.poster_path} alt={selectedMovie.title} />
                            </Col>
                            <Col sm={9}>
                                <div className={styles.flexbox}>
                                    <h1>{selectedMovie.title}</h1>
                                    {selectedMovie.vote_count && <span className={styles.rating}>{selectedMovie.vote_count}</span>}
                                </div>
                                <p>{selectedMovie.tagline}</p>
                                <p>{selectedMovie.genres && arrayToString(selectedMovie.genres)}</p>
                                <p className={styles.flexbox}>
                                    <span className={styles.year}>{selectedMovie.release_date && getFullYear(selectedMovie.release_date)}</span>
                                    <span className={styles.runtime}>{selectedMovie.runtime ? `${selectedMovie.runtime} min` : null}</span>
                                </p>
                                <p>{selectedMovie.overview}</p>
                            </Col>
                        </Row>
                    </div>
                }
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

export default MovieDetails;
