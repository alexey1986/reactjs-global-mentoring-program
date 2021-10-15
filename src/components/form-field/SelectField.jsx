
import React from "react";
import { PropTypes } from 'prop-types';
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

SelectFieldControl.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.array,
    handleChange: PropTypes.func,
    error: PropTypes.bool,
    errorTxt: PropTypes.string,
    options: PropTypes.array,
};

export default SelectFieldControl;
