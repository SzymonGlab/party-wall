import React from 'react';
import { Button } from 'react-bootstrap';
import { ListItem } from '../../../../components/ListItem';
import { UserDataType } from '../../../../types';
import { signOut } from '../../../../utils/userUtils';

import './UserPanel.css';

export const UserPanel: React.FC<{ userData: UserDataType }> = ({ userData }) => {
    return (
        <div id="user-panel-wrapper">
            <ListItem userData={userData} />
            <Button> Add item </Button>
            <Button variant="dark" onClick={signOut}>
                Sign out
            </Button>
        </div>
    );
};
