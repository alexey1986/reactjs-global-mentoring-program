import React from "react";
import { PropTypes } from 'prop-types';
import { Form, InputGroup } from "react-bootstrap";
import { Field } from "formik";

const FormSelectFieldControl = ({
    controlId,
    label,
    name,
    type,
    children
}) => {
    return (
        <Field
            name={name}
            render={({ field, form }) => {
                const isValid = !form.errors[field.name];
                const isInvalid = form.touched[field.name] && !isValid;

                return (
                    <Form.Group controlId={controlId}>
                        <Form.Label>{label}</Form.Label>
                        <InputGroup>
                            <Form.Control
                                {...field}
                                type={type}
                                isValid={form.touched[field.name] && isValid}
                                isInvalid={isInvalid}
                                feedback={form.errors[field.name]}
                                multiple
                                as="select"
                            >
                                {children}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {form.errors[field.name]}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                );
            }}
        />
    );
};

FormSelectFieldControl.defaultProps = {
    type: "select",
    inputGroupPrepend: null
};

FormSelectFieldControl.propTypes = {
    controlId: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node
};

export default FormSelectFieldControl;
