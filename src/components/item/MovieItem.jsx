import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { getMovie } from 'service/index.js';
import { toggleEditForm, toggleDeleteModal } from 'actions/actions';
import Dropdown from 'components/dropdown';
import MovieInfo from 'components/info';
import Link from 'components/link';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

const MovieItem = ({ movie }) => {
    const { title, poster_path } = movie;
    const { serialWrapper, serialPoster } = styles;

    const dispatch = useDispatch();
    
    const showModalEdit = (e) => {
        e.stopPropagation();
        dispatch(toggleEditForm(movie));
    }

    const showModalDelete = (e) => {
        e.stopPropagation();
        dispatch(toggleDeleteModal(movie.id));
    }

    return (
        <>
            <Col md={4} className={serialWrapper} onClick={() => getMovie(dispatch, movie.id)}>
                <Dropdown handleEdit={showModalEdit} handleDelete={showModalDelete} />
                <Link className={styles.itemLink} target="#">
                    <img className={serialPoster} src={poster_path} alt={title} />
                    <MovieInfo meta={movie} />
                </Link>
            </Col>
        </>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object
};

export default MovieItem;
