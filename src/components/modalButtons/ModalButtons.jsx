import React from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { text } from '../../data.js';

const ModalButtons = ({ clickHandler, type }) => {
    const { resetTxt, submitTxt, saveTxt, confirmTxt } = text;

    return (
        <>
            {(() => {
                switch (type) {
                    case "add":
                        return (
                            <>
                                <Button variant="secondary" onClick={clickHandler}>
                                    {resetTxt}
                                </Button>
                                <Button variant="primary" onClick={clickHandler}>
                                    {submitTxt}
                                </Button>
                            </>
                        );
                    case "edit":
                        return (
                            <>
                                <Button variant="secondary" onClick={clickHandler}>
                                    {resetTxt}
                                </Button>
                                <Button variant="primary" onClick={clickHandler}>
                                    {saveTxt}
                                </Button>
                            </>
                        );
                    case "delete":
                        return <Button variant="primary" onClick={clickHandler}>{confirmTxt}</Button>
                    default: return "add";
                }
            }
            )()}
        </>
    )
}

ModalButtons.propTypes = {
    type: PropTypes.string,
    clickHandler: PropTypes.func
};

export default ModalButtons;