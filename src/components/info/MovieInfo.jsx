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
    movie: PropTypes.object // NOTE: Specify what kind of object it would be
    // NOTE: Add additional types. I see you use something else
    // Actually, looks like you need to use "meta" instead of "movie"
    // Or use "movie" instead of "meta" in the component
};

export default MovieInfo;