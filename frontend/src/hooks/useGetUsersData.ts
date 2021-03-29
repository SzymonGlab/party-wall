import { useContext, useEffect, useState } from 'react';

import { fetchUsersData } from '../api/userData';
import { AuthContext, AuthContextType } from '../context/AuthProvider';
import { UserDataType } from '../types';

export const useGetUsersData = (): { usersData: UserDataType[] | null } => {
    const { currentUser } = useContext(AuthContext) as AuthContextType;
    const [usersData, setUsersData] = useState<UserDataType[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await fetchUsersData();
            setUsersData(allUsers.filter((userData) => userData.id !== currentUser?.uid));
        };
        fetchData();
    }, []);

    return { usersData };
};
