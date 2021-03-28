import { useContext } from 'react';

import { sendDeleteRequest } from '../api/productUtils';
import { SustenanceType } from '../types';
import { isFood } from '../utils/typeGuards';
import { CurrentUserContext } from '../views/List/components/UserPanel';

export const useDeleteItemRequest = (): { handleDeleteRequest: (sustenance: SustenanceType) => void } => {
    const { userData, setUserData } = useContext(CurrentUserContext);
    const handleDeleteRequest = async (sustenance: SustenanceType) => {
        // Send API request
        await sendDeleteRequest(sustenance);

        if (userData && setUserData) {
            // Update local state
            const type = isFood(sustenance) ? 'food' : 'drink';
            const newUserData = {
                ...userData,
                [type]: (userData[type] as { id: string }[]).filter((f) => f.id !== sustenance.id),
            };
            setUserData(newUserData);
        }
    };

    return { handleDeleteRequest };
};
