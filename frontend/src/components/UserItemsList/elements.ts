import { FaTrash } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import { CustomButton } from '../CustomButton';

export const CollectionName = styled.h5(
    ({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.white};
        padding-bottom: 5px;
    `,
);

export const ListItem = styled.div(
    ({ theme }) => css`
        align-items: center;
        border-radius: 10px;
        background-color: ${theme.colors.elements};
        display: flex;
        height: 55px;
        margin-top: 7px;
        padding: 15px;
    `,
);

export const StyledTrash = styled(FaTrash)`
    transition: fill 0.2s ease-out;
    -webkit-transition: fill 0.2s ease-out;
    -moz-transition: fill 0.2 esease-out;
    -o-transition: fill 0.2s ease-out;

    &:hover {
        fill: red;
    }
`;

export const RemoveButton = styled(CustomButton)`
    margin: 0;
    padding: 5px 10px;
`;

export const NameWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 20px;
`;

export const SingleListWrapper = styled.div`
    margin-bottom: 20px;
`;

export const ActionWrapper = styled.div`
    display: flex;
    margin-left: auto;
`;
