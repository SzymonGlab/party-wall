import React, { useState, useEffect, useContext } from 'react';

import { UserDataType } from '../../types';
import { fetchUsersData } from '../../utils/fetchUtils';
import { UserPanel } from './components/UserPanel';
import { List } from './components/List';

import './ListView.css';
import { AuthContext } from '../../components/AuthProvider';

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
            <div id="list-view-wrapper">
                <UserPanel />
                <List usersData={usersData} />
            </div>
        )
    );
};
