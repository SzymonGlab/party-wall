import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { UserFormProps } from '../../types';

import './userForm.css';

export const UserForm: React.FC<UserFormProps> = ({ title, onSubmit, onViewChange }) => (
    <div id="form-container">
        <div id="form-wrapper">
            <h4>{title}</h4>
            <Form onSubmit={onSubmit.action}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We`ll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div id="buttons-wrapper">
                    <Button variant="outline-info" size="sm" onClick={onViewChange.action}>
                        {onViewChange.text}
                    </Button>
                    <Button id="on-submit-button" variant="outline-primary" type="submit">
                        {onSubmit.text}
                    </Button>
                </div>
            </Form>
        </div>
    </div>
);
