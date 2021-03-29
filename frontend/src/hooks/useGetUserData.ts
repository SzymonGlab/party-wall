import { Dispatch, useContext, useEffect, useState } from 'react';

import { fetchUserData } from '../api/userData';
import { AuthContext, AuthContextType } from '../context/AuthProvider';
import { UserDataType } from '../types';

export const useGetUserData = (): { userData: UserDataType | null; setUserData: Dispatch<UserDataType> } => {
    const { currentUser } = useContext(AuthContext) as AuthContextType;
    const [userData, setUserData] = useState<UserDataType | null>(null);

    useEffect(() => {
        const fetch = async () => {
            setUserData(await fetchUserData(currentUser!.uid));
        };
        fetch();
    }, [currentUser]);

    return { userData, setUserData };
};
