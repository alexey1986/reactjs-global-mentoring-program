import React from 'react';
import { PropTypes } from 'prop-types';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

const MovieItem = (props) => {
    const { id, title, genres, poster_path, release_date } = props.movie;
    const year = new Date(release_date).getFullYear();
    const genre = genres.join(', ');

    return (
        <Col md={4} className={styles.serialWrapper}>
            <a href="#">
                <img className={styles.serialPoster} src={poster_path} alt={title} />
                <div className={styles.serialMeta}>
                    <span className={styles.serialTitle}>{title}</span>
                    <span className={styles.serialGenre}>{genre}</span>
                    <span className={styles.serialYear}>{year}</span>
                </div>
            </a>
        </Col>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object
};

export default MovieItem;