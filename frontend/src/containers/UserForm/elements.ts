import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
`;

export const FormWrapper = styled.div(
    ({ theme }) => css`
        background-color: ${theme.colors.gray};
        border: 1px solid gray;
        border-radius: 5px;
        width: 600px;
        height: 400px;
        padding: 40px;
    `,
);

export const ButtonsWrapper = styled.div`
    display: flex;
`;
