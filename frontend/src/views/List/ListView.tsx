import React from 'react';

import { List } from '../../components/List';
import { UserPanel } from '../../containers/UserPanel';
import { UserDataProvider } from '../../context/UserDataProvider';
import { useGetUsersData } from '../../hooks/useGetUsersData';
import { ListViewWrapper } from './elements';

export const ListView: React.FC = () => {
    const { usersData } = useGetUsersData();

    return (
        usersData && (
            <ListViewWrapper>
                <UserDataProvider>
                    <UserPanel />
                </UserDataProvider>
                <List usersData={usersData} />
            </ListViewWrapper>
        )
    );
};
