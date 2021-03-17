import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const CollectionName = styled.h5`
    border-bottom: 1px solid #f1f1f1f1;
    padding-bottom: 5px;
`;

export const ListItem = styled.div`
    align-items: center;
    border-radius: 10px;
    background-color: #001936;
    display: flex;
    height: 55px;
    margin-top: 7px;
    padding: 15px;
`;

export const RemoveButton = styled(Button)`
    margin-left: auto;
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
