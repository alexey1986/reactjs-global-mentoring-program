
import React from "react";
import { PropTypes } from 'prop-types';
import { Form, InputGroup } from "react-bootstrap";

const TextFieldControl = ({
    id,
    label,
    name,
    type,
    placeholder,
    value,
    handleChange,
    error,
    errorTxt
}) => {
    return (
        <Form.Group controlId={id}>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    defaultValue={value}
                    onChange={handleChange}
                    className={error ? 'is-invalid' : ''}
                    />
                <Form.Control.Feedback type="invalid">{errorTxt}</Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    )
}

TextFieldControl.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    handleChange: PropTypes.func,
    error: PropTypes.bool,
    errorTxt: PropTypes.string,
};

export default TextFieldControl;
