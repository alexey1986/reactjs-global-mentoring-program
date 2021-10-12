import React from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { text } from '../../data.js';

const ModalButtons = ({ handleAdd, handleEdit, handleDelete, type }) => {
    const { resetTxt, submitTxt, saveTxt, confirmTxt } = text;

    return (
        <>
        {/* NOTE: Don't use IIFE! You can render elements without it */}
            {(() => {
                switch (type) {
                    case "add":
                        return null;
                        // NOTE: Think about your TODO. Make things done

                        // TODO temporary remove buttons
                        return (
                            <>
                                <Button variant="secondary" type="reset">
                                    {resetTxt}
                                </Button>
                                <Button variant="primary" type="submit" onClick={handleAdd}>
                                    {submitTxt}
                                </Button>
                            </>
                        );
                    case "edit":
                        return null;
                        // TODO temporary remove buttons
                        return (
                            <>
                                <Button variant="secondary" type="reset">
                                    {resetTxt}
                                </Button>
                                <Button variant="primary" type="submit" onClick={handleEdit}>
                                    {saveTxt}
                                </Button>
                            </>
                        );
                    case "delete":
                        return <Button variant="primary" onClick={handleDelete}>{confirmTxt}</Button>
                    default: return "add";
                }
            }
            )()}
        </>
    )
}

// NOTE: Make PropTypes correct for this component
ModalButtons.propTypes = {
    type: PropTypes.string,
    clickHandler: PropTypes.func,
    handleDelete: PropTypes.func
};

export default ModalButtons;