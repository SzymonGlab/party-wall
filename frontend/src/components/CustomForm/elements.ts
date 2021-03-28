import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const StyledFormLabel = styled(Form.Label)`
    &:first-letter {
        text-transform: capitalize;
    }
`;
