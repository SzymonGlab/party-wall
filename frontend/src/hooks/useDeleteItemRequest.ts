import { useContext } from 'react';

import { sendDeleteRequest } from '../api/productsData';
import { UserDataContext, UserDataContextType } from '../context/UserDataProvider';
import { SustenanceType } from '../types';
import { isFood } from '../utils/typeGuards';

export const useDeleteItemRequest = (): { handleDeleteRequest: (sustenance: SustenanceType) => void } => {
    const { userData, setUserData } = useContext(UserDataContext) as UserDataContextType;
    const handleDeleteRequest = async (sustenance: SustenanceType) => {
        // Send API request
        await sendDeleteRequest(sustenance);

        // Update local state
        const type = isFood(sustenance) ? 'food' : 'drink';
        const newUserData = {
            ...userData,
            [type]: (userData[type] as { id: string }[]).filter((f) => f.id !== sustenance.id),
        };
        setUserData(newUserData);
    };

    return { handleDeleteRequest };
};
