import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ color?: string; transparent?: boolean }>(
    ({ color, theme, transparent }) => css`
        display: inline-block;
        background-color: ${theme.colors.primary};
        padding: 0.35em 1.2em;
        border: 0.1em solid ${theme.colors.primary}DD;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: ${theme.colors.white};
        text-align: center;
        transition: all 0.2s;

        &:hover {
            background-color: ${theme.colors.primary};
            border: 0.1em solid ${theme.colors.primary};
        }

        ${color &&
        `
            background-color: ${color}DD;
            border: 0.1em solid ${color}DD;
            
            &:hover {
                background-color:${color};
                border: 0.1em solid ${color};
            }

        `}

        ${transparent &&
        `
            background-color: #FFFFFF00;
            border: none;
            
            &:hover {
                background-color: #FFFFFF00;
                border: none;
                }

        `}
    `,
);
