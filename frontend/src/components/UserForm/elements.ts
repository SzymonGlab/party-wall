import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const FormContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
`;

export const FormWrapper = styled.div`
    background-color: #f5f5f5;
    border: 1px solid gray;
    border-radius: 5px;
    width: 600px;
    height: 400px;
    padding: 40px;
`;

export const SubmitButton = styled(Button)`
    margin-left: auto;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
`;
