import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { UserFormProps } from '../../types';
import { ButtonsWrapper, FormContainer, FormWrapper, SubmitButton } from './elements';

export const UserForm: React.FC<UserFormProps> = ({ title, onSubmit, onViewChange }) => (
    <FormContainer>
        <FormWrapper>
            <h4>{title}</h4>
            <Form onSubmit={onSubmit.action}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                    <Form.Text className="text-muted">Other users will see you username.</Form.Text>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <ButtonsWrapper>
                    <Button variant="outline-info" size="sm" onClick={onViewChange.action}>
                        {onViewChange.text}
                    </Button>
                    <SubmitButton variant="outline-primary" type="submit">
                        {onSubmit.text}
                    </SubmitButton>
                </ButtonsWrapper>
            </Form>
        </FormWrapper>
    </FormContainer>
);
