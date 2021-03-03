import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { UserFormProps } from '../../types';

import './userForm.css';

export const UserForm: React.FC<UserFormProps> = ({ title, onSubmit, onViewChange }) => (
    <div id="form-container">
        <div id="form-wrapper">
            <h4>{title}</h4>
            <Form onSubmit={onSubmit.action}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                    <Form.Text className="text-muted">Other users will see you username.</Form.Text>
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
