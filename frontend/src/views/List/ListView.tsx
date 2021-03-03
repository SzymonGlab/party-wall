import React, { useState, useEffect } from 'react';

import { Logo } from '../../components/Logo';
import { UserDataType } from '../../types';
import { fetchUsersData } from '../../utils/fetchUtils';
import { UserPanel } from './components/UserPanel';
import { List } from './components/List';

import './ListView.css';

export const ListView: React.FC = () => {
    const [usersData, setUsersData] = useState<UserDataType[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setUsersData(await fetchUsersData());
        };
        fetchData();
    }, []);

    return (
        <>
            <Logo />
            {usersData && (
                <div id="list-view-wrapper">
                    <List usersData={usersData} />
                    <UserPanel />
                </div>
            )}
        </>
    );
};
