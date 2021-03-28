import styled, { css } from 'styled-components';

export const ListElementWrapper = styled.div(
    ({ theme }) => css`
        border-radius: 10px;
        border: 1px solid ${theme.colors.primary}55;
        color: ${theme.colors.black} !important;
        margin: 15px 20px;
        padding: 20px;
        width: 100%;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.9);
        -webkit-box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.9);
        -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.9);
    `,
);

export const ListUsername = styled.p(
    ({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.primary}55;
        font-size: 1.7rem;
        padding-bottom: 5px;
    `,
);

export const ListItemsWrapper = styled.div`
    padding-top: 5px;
    display: grid;
    grid-template-columns: 50% 50%;
`;
