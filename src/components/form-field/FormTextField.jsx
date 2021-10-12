import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Field } from "formik";

const FormTextFieldControl = ({
    controlId,
    label,
    name,
    type,
    placeholder
}) => {
    return (
        <Field name={name}>
            {({field, form }) => {
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
                                placeholder={placeholder}
                            />

                            <Form.Control.Feedback type="invalid">
                                {form.errors[field.name]}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                );
            }}
        </Field>
    );
};

FormTextFieldControl.defaultProps = {
    type: "text",
    inputGroupPrepend: null
};

// NOTE: Add PropTypes here

export default FormTextFieldControl;
