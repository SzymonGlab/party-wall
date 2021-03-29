import { Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import img from '../../assets/profile.png';
import { CustomModal } from '../../components/CustomModal';

export const UserPanelWrapper = styled.div(
    ({ theme }) => css`
        align-items: center;
        background-color: ${theme.colors.primary};
        color: white;
        display: flex;
        flex-direction: column;
        height: 100vh;
        min-width: 370px;
        overflow: auto;
        position: sticky;
        padding: 30px;
        top: 0;
        width: 25%;
        z-index: 100;
    `,
);

export const UserPic = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    height: 150px;
    margin-top: 20px;
    width: 150px;
`;

export const Username = styled.p`
    padding-top: 10px;
    text-transform: uppercase;
`;

export const AddItemButton = styled(Button)`
    margin-left: auto;
`;

export const SignOutButton = styled(Button)`
    margin-top: auto;
`;

export const StyledModal = styled(CustomModal)(
    ({ theme }) => `
    background-color: ${theme.colors.primary} !important;
`,
);
