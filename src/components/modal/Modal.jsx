import React from 'react';
import { PropTypes } from 'prop-types';
import ModalButtons from 'components/modalButtons';
import Modal from 'react-bootstrap/Modal';
import { text } from '../../data.js';

const ModalDialog = (props) => {
    const { type, visible, clickHandler, children } = props;
    const { addMovieTxt, editMovieTxt, deleteMovieTxt } = text;

    return (
        <Modal centered show={visible} onHide={clickHandler}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {type == 'add' && addMovieTxt}
                    {type == 'edit' && editMovieTxt}
                    {type == 'delete' && deleteMovieTxt}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <ModalButtons clickHandler={clickHandler} type={type} />
            </Modal.Footer>
        </Modal>
    )
}

ModalDialog.propTypes = {
    visible: PropTypes.bool,
    clickHandler: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ModalDialog;