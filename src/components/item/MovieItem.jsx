import React, { useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleEditForm, toggleDeleteModal } from 'actions/actions';
import Dropdown from 'components/dropdown';
import MovieInfo from 'components/info';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';
import imageNotFound from 'assets/images/notfound.png'
import { text } from '../../data.js';

const MovieItem = (props) => {
    const { movie } = props;
    const { id, title, poster_path } = movie;
    const { serialWrapper, serialPoster } = styles;
    
    const destination = {
        pathname: `/search?movie=${id}`
    };

    const [defaultImage, setDefaultImage] = useState({
        src: poster_path,
        alt: title,
        errored: false
    });

    const dispatch = useDispatch();
    
    const showModalEdit = useCallback((e) => {
        e.stopPropagation();
        dispatch(toggleEditForm(movie));
    }, []);

    const showModalDelete = useCallback((e) => {
        e.stopPropagation();
        dispatch(toggleDeleteModal(movie.id));
    }, []);

    const handleSrcError = () => {
        if (!defaultImage.errored) {
            setDefaultImage({
                src: imageNotFound,
                alt: text.imageNotFound,
                errored: true,
            });
        }
    }

    return (
        <>
            <Col md={4} className={serialWrapper}>
                <Dropdown handleEdit={showModalEdit} handleDelete={showModalDelete} />
                <Link className={styles.itemLink} title={title} to={destination}>
                    <img className={serialPoster} src={defaultImage.src} alt={defaultImage.alt} onError={handleSrcError} />
                    <MovieInfo meta={movie} />
                </Link>
            </Col>
        </>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.shape({
        genres: PropTypes.array,
        id: PropTypes.number,
        overview: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        runtime: PropTypes.number,
        title: PropTypes.string
    })
};

export default MovieItem;
