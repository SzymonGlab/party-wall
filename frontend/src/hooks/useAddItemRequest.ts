import produce from 'immer';
import { useContext } from 'react';
import { toast } from 'react-toastify';

import { sendAddRequest } from '../api/productsData';
import { AuthContext, AuthContextType } from '../context/AuthProvider';
import { UserDataContext, UserDataContextType } from '../context/UserDataProvider';
import { DrinkType, FoodType, SustenanceType } from '../types';
import { isFood } from '../utils/typeGuards';

type useAddItemRequestType = () => {
    addItemRequest: (newProduct: SustenanceType) => void;
};

export const useAddItemRequest: useAddItemRequestType = () => {
    const { currentUser } = useContext(AuthContext) as AuthContextType;
    const { userData, setUserData } = useContext(UserDataContext) as UserDataContextType;

    const addItemRequest = async (newProductValues: FoodType | DrinkType) => {
        if (!currentUser || !userData || !setUserData) {
            return;
        }

        try {
            // Send request to API
            const newProduct = await sendAddRequest(newProductValues, currentUser.uid);

            // Update local state
            const newState = produce(userData, (draftState) => {
                if (isFood(newProduct)) {
                    draftState?.food.push(newProduct);
                } else {
                    draftState?.drink.push(newProduct);
                }
            });
            setUserData(newState);
        } catch (error) {
            toast.error(`ADDING ITEM: ${error.message}`);
        }
    };

    return { addItemRequest };
};
