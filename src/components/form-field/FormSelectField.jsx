import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Field } from "formik";

const FormSelectFieldControl = ({
    as,
    md,
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
                    <Form.Group as={as} md={md} controlId={controlId}>
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

// NOTE: Add PropTypes here

export default FormSelectFieldControl;