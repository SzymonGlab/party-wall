import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
    ({ theme }) => css`
        color: ${theme.colors.white};
        margin: 20px;
        text-align: left;
        width: 100%;
    `,
);
