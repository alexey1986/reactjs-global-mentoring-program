import React from 'react';
import { PropTypes } from 'prop-types';
import MovieInfo from 'components/info';
import Link from 'components/link';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

const MovieItem = (props) => {
    const { title, poster_path } = props.movie;
    const { serialWrapper, serialPoster } = styles;

    return (
        <Col md={4} className={serialWrapper}>
            <Link target="#">
                <img className={serialPoster} src={poster_path} alt={title} />
                <MovieInfo meta={props.movie} />
            </Link>
        </Col>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object
};

export default MovieItem;