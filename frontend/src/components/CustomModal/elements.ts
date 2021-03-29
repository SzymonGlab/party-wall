import { Modal } from 'react-bootstrap';
import styled, { css } from 'styled-components';

export const StyledModal = styled(Modal)(
    ({ theme }) => css`
        background-color: ${theme.colors.primary}41;
    `,
);

export const StyledModalHeader = styled(Modal.Header)(
    ({ theme }) => css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-bottom: 1px solid ${theme.colors.white};
        span {
            color: ${theme.colors.white};
        }
    `,
);

export const StyledModalBody = styled(Modal.Body)(
    ({ theme }) => css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-bottom-left-radius: calc(0.3rem - 1px);
        border-bottom-right-radius: calc(0.3rem - 1px);
    `,
);
