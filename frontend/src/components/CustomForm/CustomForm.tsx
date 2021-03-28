import { useFormik } from 'formik';
import React from 'react';

import { Field } from '../../types';
import { UNITS } from '../../utils/consts';
import { generateInitialValues } from '../../utils/utils';
import { FormWrapper, StyledFormLabel } from './elements';

const getLabel = (field: string): string => (UNITS[field] ? `${field} (${UNITS[field]})` : `${field}`);

export const CustomForm: React.FC<{
    fields: Field[];
    validationSchema: any;
    onSubmit: (values: Record<string, string>) => void;
}> = ({ fields, onSubmit, validationSchema, children }) => {
    const { handleChange, handleBlur, values, touched, errors, handleSubmit } = useFormik({
        validateOnChange: false,
        validateOnBlur: false,
        initialValues: generateInitialValues(fields),
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);
            onSubmit(values);
            setSubmitting(false);
        },

        validationSchema,
    });

    return (
        <FormWrapper onSubmit={handleSubmit}>
            {fields.map(({ id, label, type, placeholder }) => (
                <div key={id}>
                    <FormWrapper.Group controlId={id}>
                        <StyledFormLabel>{getLabel(label)}</StyledFormLabel>
                        <FormWrapper.Control
                            name={id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[id]}
                            placeholder={placeholder ?? `${label} ...`}
                            isInvalid={touched[id] && !!errors[id]}
                            type={type}
                        />
                        <FormWrapper.Control.Feedback type="invalid">{errors[id]}</FormWrapper.Control.Feedback>
                    </FormWrapper.Group>
                </div>
            ))}
            {children}
        </FormWrapper>
    );
};
