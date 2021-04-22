import React from 'react';
import Button from 'react-bootstrap/Button';
import { text } from '../../data.js';
import { useDispatch, useSelector } from 'react-redux';
import ModalDialog from 'components/modal';
import AddMovie from 'components/AddMovie';
import { toggleCreationForm } from 'actions/actions';

const AddBtn = () => {
    const creationFormModal = useSelector(state => state.modalReducer.creationFormModal);
    const dispatch = useDispatch();

    return (
        <>
            <Button variant="outline-secondary" type="button" onClick={() => dispatch(toggleCreationForm())}>
                {text.addMoreTxt}
            </Button>

            <ModalDialog type='add' visible={creationFormModal} handleClose={() => dispatch(toggleCreationForm())}>
                <AddMovie handleClose={() => dispatch(toggleCreationForm())} />
            </ModalDialog>
        </>
    )
}

export default AddBtn;
