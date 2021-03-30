import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Genres = ({genres}) => {
    return (
        <ul className={styles.genres}>
            {genres.map((item, index) => (
                <li key={`genre-${index}`}>
                    <a href="#">{item}</a>
                </li>
            ))}
        </ul>
    )
}

Genres.propTypes = {
    genres: PropTypes.array
};

export default Genres;