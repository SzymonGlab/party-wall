import React, { Dispatch } from 'react';

import { Loader } from '../../components/Loader';
import { useGetUserData } from '../../hooks/useGetUserData';
import { UserDataType } from '../../types';

export type UserDataContextType = { userData: UserDataType; setUserData: Dispatch<UserDataType> };

export const UserDataContext = React.createContext<UserDataContextType | null>(null);

export const UserDataProvider: React.FC = ({ children }) => {
    const { userData, setUserData } = useGetUserData();

    if (!userData || !setUserData) {
        return <Loader />;
    }

    return <UserDataContext.Provider value={{ userData, setUserData }}>{children}</UserDataContext.Provider>;
};
