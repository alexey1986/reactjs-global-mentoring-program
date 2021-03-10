import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

const MovieInfo = (props) => {
    const { title, genres, release_date } = props.meta;
    const { serialMeta, serialTitle, serialGenre, serialYear } = styles;
    const year = new Date(release_date).getFullYear();
    const genre = genres.join(', ');

    return (
        <div className={serialMeta}>
            <span className={serialTitle}>{title}</span>
            <span className={serialGenre}>{genre}</span>
            <span className={serialYear}>{year}</span>
        </div>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object
};

export default MovieInfo;