import React from 'react';

import { useGetUsersData } from '../../hooks/useGetUsersData';
import { List } from './components/List';
import { UserPanel } from './components/UserPanel';
import { ListViewWrapper } from './elements';

export const ListView: React.FC = () => {
    const { usersData } = useGetUsersData();

    return (
        usersData && (
            <ListViewWrapper>
                <UserPanel />
                <List usersData={usersData} />
            </ListViewWrapper>
        )
    );
};
