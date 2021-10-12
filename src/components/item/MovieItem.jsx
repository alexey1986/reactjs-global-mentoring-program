import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleEditForm, toggleDeleteModal } from 'actions/actions';
import Dropdown from 'components/dropdown';
import MovieInfo from 'components/info';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

const MovieItem = (props) => {
    const { movie } = props;
    const { id, title, poster_path } = movie;
    const { serialWrapper, serialPoster } = styles;
    
    const destination = {
        pathname: `/film/${id}`
    };

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
            <Col md={4} className={serialWrapper}>
                <Dropdown handleEdit={showModalEdit} handleDelete={showModalDelete} />
                <Link className={styles.itemLink} title={title} to={destination}>
                    {/* NOTE: Add a default image for empty images from server.
                    For example, image with words "No Image Found" or something else */}
                    <img className={serialPoster} src={poster_path} alt={title} />
                    <MovieInfo meta={movie} />
                </Link>
            </Col>
        </>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object // NOTE: Specify the object
};

export default MovieItem;
