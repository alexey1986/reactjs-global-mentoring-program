import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useComponentDidUpdate, useComponentDidUnmount } from 'src/hooks.js'
import styles from './styles.module.css';

const MovieDetails = ({ selectedMovie }) => {
    const { title, genres, release_date, poster_path, vote_count, tagline, overview, runtime } = selectedMovie;
    const duration = runtime ? `${runtime} min` : null;
    const getFullYear = date => new Date(date).getFullYear();
    const arrayToString = arr => arr.join(', ');

    useComponentDidUpdate(() => {
        document.title = `${title}`;
    })

    useComponentDidUnmount(() => {
        document.title = 'Movie Cloud';
    })

    return (
        <Row className={styles.movieDetails}>
            <Col sm={3}>
                <img className="img-fluid" src={poster_path} alt={title} />
            </Col>
            <Col sm={9}>
                <div className={styles.flexbox}>
                    <h1>{title}</h1>
                    {vote_count && <span className={styles.rating}>{vote_count}</span>}
                </div>
                <p>{tagline}</p>
                <p>{genres && arrayToString(genres)}</p>
                <p className={styles.flexbox}>
                    <span className={styles.year}>{release_date && getFullYear(release_date)}</span>
                    <span className={styles.runtime}>{duration}</span>
                </p>
                <p>{overview}</p>
            </Col>
        </Row>
    )
}

export default MovieDetails;
