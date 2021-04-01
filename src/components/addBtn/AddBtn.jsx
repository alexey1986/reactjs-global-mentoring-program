import React from 'react';
import Button from 'react-bootstrap/Button';
import { text } from '../../data.js';
import { useDispatch } from 'react-redux';
import { toggleCreationForm } from 'actions/actions';

const AddBtn = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Button variant="outline-secondary" type="button" onClick={() => dispatch(toggleCreationForm())}>
                {text.addMoreTxt}
            </Button>
        </>
    )
}

export default AddBtn;
