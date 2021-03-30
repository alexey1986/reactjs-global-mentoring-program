import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MovieItem from 'components/item';
import styles from './styles.module.css';

const MoviesListControl = ({ movies, setMovie }) => {
    return (
        <div className={styles.moviesList}>
            <Container>
                <Row>
                    {
                        !movies.length ?
                        <p>Loading movies...</p> :
                        movies.map(item => (
                            <MovieItem key={item.id} movie={item} handleClick={setMovie}></MovieItem>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

MoviesListControl.propTypes = {
    movies: PropTypes.array
};

export default MoviesListControl;
