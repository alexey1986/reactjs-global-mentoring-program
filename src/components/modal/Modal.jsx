import React from 'react';
import { PropTypes } from 'prop-types';
import ModalButtons from 'components/modalButtons';
import Modal from 'react-bootstrap/Modal';
import { text } from '../../data.js';

const ModalDialog = ({ type, visible, handleClose, handleDelete, children }) => {
    const { addMovieTxt, editMovieTxt, deleteMovieTxt } = text;

    const removeMovieFunc = () => {
        handleDelete();
        handleClose();
    }

    return (
        <Modal centered show={visible} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {/* NOTE: Use only "===" when you write JS code.
                    It can help you to find errors or bugs reasons and makes code clean */}
                    {type == 'add' && addMovieTxt}
                    {type == 'edit' && editMovieTxt}
                    {type == 'delete' && deleteMovieTxt}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <ModalButtons handleDelete={removeMovieFunc} type={type} />
            </Modal.Footer>
        </Modal>
    )
}

ModalDialog.propTypes = {
    visible: PropTypes.bool,
    handleClose: PropTypes.func,
    handleDelete: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ModalDialog;