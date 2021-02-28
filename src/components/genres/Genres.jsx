import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Genres = (props) => {
    return (
        <ul className={styles.genres}>
            {props.genres.map((item) => (
                <li key={item}>
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