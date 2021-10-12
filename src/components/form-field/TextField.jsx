
import React from "react";
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

// NOTE: Add PropTypes here

export default TextFieldControl;