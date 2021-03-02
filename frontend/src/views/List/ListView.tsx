import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import { API_URL } from '../../config';
import { Logo } from '../../components/Logo';
import { UserDataType } from '../../types';
import { AuthContext } from '../../components/AuthProvider';
import { UserPanel } from './components/UserPanel';
import { List } from './components/List';

import './ListView.css';

export const ListView: React.FC = () => {
    const [usersData, setUsersData] = useState<UserDataType[] | null>(null);
    const { currentUser } = useContext(AuthContext);

    // const currentUserData = usersData?.find((userData) => userData.uid === currentUser?.uid);

    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = await axios.get(`${API_URL}/users`);
                setUsersData(response.data);
            } catch (error) {
                toast.error(error.message);
            }
        };
        fetchList();
    }, []);

    // if (!usersData || !currentUserData) {
    //     return <p> LOADING ...</p>;
    // }

    return (
        <>
            <Logo />
            {usersData && currentUser && (
                <div id="list-view-wrapper">
                    <List usersData={usersData} />
                    <UserPanel userData={usersData[0]} />
                </div>
            )}
        </>
    );
};
