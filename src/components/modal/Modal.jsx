import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { text } from '../../data.js';

const ModalDialog = (props) => {
    const { type, state, clickHandler, children } = props;
    const { addMovieTxt, editMovieTxt, deleteMovieTxt , resetTxt, submitTxt, saveTxt, confirmTxt } = text;
    let button;
    let title;

    if (type == 'add') {
        title = addMovieTxt;
        button = <>
            <Button variant="secondary" onClick={clickHandler}>
                {resetTxt}
            </Button>
            <Button variant="primary" onClick={clickHandler}>
                {submitTxt}
            </Button>
        </>
    }
    else if (type == 'edit') {
        title = editMovieTxt;
        button = <>
            <Button variant="secondary" onClick={clickHandler}>
                {resetTxt}
            </Button>
            <Button variant="primary" onClick={clickHandler}>
                {saveTxt}
            </Button>
        </>
    }
    else if (type == 'delete') {
        title = deleteMovieTxt;
        button = <Button variant="primary" onClick={clickHandler}>{confirmTxt}</Button>
    }

    return (
        <Modal centered show={state} onHide={clickHandler}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                {button}
            </Modal.Footer>
        </Modal>
    )
}

ModalDialog.propTypes = {
    state: PropTypes.bool,
    clickHandler: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ModalDialog;