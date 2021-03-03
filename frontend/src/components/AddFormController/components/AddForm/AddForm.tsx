import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const AddForm: React.FC<{
    title: string;
    fields: string[];
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ title, fields, onSubmit }) => (
    <div id="form-container">
        <div id="form-wrapper">
            <h4>{title}</h4>
            <Form onSubmit={(e) => onSubmit(e)}>
                {fields.map((field: string) => (
                    <div key={field}>
                        <Form.Group controlId={field.toLowerCase()}>
                            <Form.Label>{field}</Form.Label>
                            <Form.Control placeholder={field} />
                        </Form.Group>
                    </div>
                ))}
                <Button type="submit"> ADD </Button>
            </Form>
        </div>
    </div>
);
