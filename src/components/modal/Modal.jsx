import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { text } from '../../data.js';

const ModalDialog = ({ type, visible, handleClose, children }) => {
    const { addMovieTxt, editMovieTxt, deleteMovieTxt } = text;

    return (
        <Modal centered show={visible} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {type === 'add' && addMovieTxt}
                    {type === 'edit' && editMovieTxt}
                    {type === 'delete' && deleteMovieTxt}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

ModalDialog.propTypes = {
    type: PropTypes.string,
    visible: PropTypes.bool,
    handleClose: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ModalDialog;
