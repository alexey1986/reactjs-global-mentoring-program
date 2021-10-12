
import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const SelectFieldControl = ({
    id,
    label,
    name,
    placeholder,
    value,
    handleChange,
    error,
    errorTxt,
    options
}) => {
    return (
        <Form.Group controlId={id}>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control 
                    name={name}
                    placeholder={placeholder}
                    defaultValue={value}
                    onChange={handleChange}
                    className={error ? 'is-invalid' : ''}
                    as="select"
                    multiple>
                    {options.map((item, index) => (
                        <option key={`genre-${index}`} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">{errorTxt}</Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    )
}

// NOTE: Add PropTypes here

export default SelectFieldControl;