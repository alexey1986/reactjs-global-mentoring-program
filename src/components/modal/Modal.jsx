import React from 'react';
import { PropTypes } from 'prop-types';
import ModalButtons from 'components/modalButtons';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { text } from '../../data.js';

const ModalDialog = ({ type, visible, handleClose, handleDelete, children }) => {
    const { addMovieTxt, editMovieTxt, deleteMovieTxt } = text;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAdd = () => {
        console.log('handleAdd')
    }

    const handleEdit = () => {
        console.log('handleEdit')
    }

    const removeMovieFunc = () => {
        handleDelete();
        handleClose();
    }

    return (
        <Modal centered show={visible} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {type == 'add' && addMovieTxt}
                    {type == 'edit' && editMovieTxt}
                    {type == 'delete' && deleteMovieTxt}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {children}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <ModalButtons handleAdd={handleAdd} handleEdit={handleEdit} handleDelete={removeMovieFunc} type={type} />
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