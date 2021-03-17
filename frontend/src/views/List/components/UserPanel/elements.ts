import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const UserPanelWrapper = styled.div`
    align-items: center;
    background-color: #00091a;
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
`;

export const UserPic = styled.div`
    background-image: url(../../../../resources/profile.png);
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
