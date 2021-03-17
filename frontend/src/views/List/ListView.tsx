import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../components/AuthProvider';
import { UserDataType } from '../../types';
import { fetchUsersData } from '../../utils/fetchUtils';
import { List } from './components/List';
import { UserPanel } from './components/UserPanel';
import { ListViewWrapper } from './elements';

export const ListView: React.FC = () => {
    const { currentUser } = useContext(AuthContext);
    const [usersData, setUsersData] = useState<UserDataType[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await fetchUsersData();
            setUsersData(allUsers.filter((userData) => userData.id !== currentUser?.uid));
        };
        fetchData();
    }, []);

    return (
        usersData && (
            <ListViewWrapper>
                <UserPanel />
                <List usersData={usersData} />
            </ListViewWrapper>
        )
    );
};
