import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { UNITS } from '../../../../utils/productUtils';

import './AddForm.css';

export const AddForm: React.FC<{
    fields: string[];
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ fields, onSubmit }) => (
    <Form onSubmit={(e) => onSubmit(e)} id="add-form-wrapper">
        {fields.map((field: string) => (
            <div key={field}>
                <Form.Group controlId={field.toLowerCase()}>
                    <Form.Label>
                        {field} {UNITS[field.toLowerCase()] ? `(${UNITS[field.toLowerCase()]})` : ''}
                    </Form.Label>
                    <Form.Control placeholder={`${field} ...`} />
                </Form.Group>
            </div>
        ))}
        <Button id="add-item-button" variant="primary" type="submit">
            ADD
        </Button>
    </Form>
);
