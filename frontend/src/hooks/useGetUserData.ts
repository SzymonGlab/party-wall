import { Dispatch, useContext, useEffect, useState } from 'react';

import { fetchUserData } from '../api/fetchUtils';
import { AuthContext } from '../components/AuthProvider';
import { UserDataType } from '../types';

export const useGetUserData = (): { userData: UserDataType | null; setUserData: Dispatch<UserDataType> } => {
    const { currentUser } = useContext(AuthContext);
    const [userData, setUserData] = useState<UserDataType | null>(null);

    useEffect(() => {
        const fetch = async () => {
            if (currentUser) {
                setUserData(await fetchUserData(currentUser?.uid));
            }
        };
        fetch();
    }, [currentUser]);

    return { userData, setUserData };
};
