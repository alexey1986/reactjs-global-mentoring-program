import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from 'service/index.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MovieItem from 'components/item';
import styles from './styles.module.css';

const MoviesList = () => {
    const movies = useSelector(state => state.fetchReducer.movies);
    const params = useSelector(state => state.fetchReducer.parameters);
    const dispatch = useDispatch();

    useEffect(() => {
        getMoviesList(dispatch, params);
    }, []);

    return (
        <div className={styles.moviesList}>
            <Container>
                <Row>
                    {
                        movies.map(item => (
                            <MovieItem key={item.id} movie={item} />
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MoviesList;
