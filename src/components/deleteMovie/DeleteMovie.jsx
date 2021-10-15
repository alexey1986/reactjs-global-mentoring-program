import React from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { text } from '../../data.js';

const DeleteMovie = ({handleClose, handleDelete}) => {
    const { sureTxt, confirmTxt } = text;

    const removeMovieFunc = () => {
        handleDelete();
        handleClose();
    }

    return (
        <>
            <p>{sureTxt}</p>
            <Button variant="primary" onClick={removeMovieFunc}>{confirmTxt}</Button>
        </>
    )
};

DeleteMovie.propTypes = {
    handleClose: PropTypes.func,
    handleDelete: PropTypes.func
};

export default DeleteMovie;
