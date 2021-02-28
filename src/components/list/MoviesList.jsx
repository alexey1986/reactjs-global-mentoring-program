import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MovieItem from 'components/item';
import styles from './styles.module.css';

const MoviesListControl = (props) => {
    return (
        <div className={styles.moviesList}>
            <Container>
                <Row>
                    {props.movies.map(item => (
                        <MovieItem key={item.id} movie={item}></MovieItem>
                    ))}
                </Row>
            </Container>
        </div>
    )
    
}

MoviesListControl.propTypes = {
    movies: PropTypes.array
};

export default MoviesListControl;
