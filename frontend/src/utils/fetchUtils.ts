import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../config';
import { DrinkType, FoodType, UserDataType } from '../types';

export const fetchUsersData = async (): Promise<UserDataType[]> => {
    try {
        const users = await axios.get(`${API_URL}/users`);
        const drinks = await axios.get(`${API_URL}/drink`);
        const food = await axios.get(`${API_URL}/food`);

        const mergedUsersData = users.data.map((user: { id: string; name: string }) => ({
            ...user,
            food: food.data.filter((f: FoodType) => f.userId === user.id),
            drink: drinks.data.filter((drink: DrinkType) => drink.userId === user.id),
        }));

        return mergedUsersData;
    } catch (error) {
        toast.error(error.message);
        throw error;
    }
};

export const fetchUserData = async (currentUserId: string): Promise<UserDataType> => {
    try {
        const user = await axios.get(`${API_URL}/users/${currentUserId}`);
        const drinks = await axios.get(`${API_URL}/users/${currentUserId}/drink`);
        const food = await axios.get(`${API_URL}/users/${currentUserId}/food`);

        return { ...user.data, drink: [...drinks.data], food: [...food.data] };
    } catch (error) {
        toast.error(error.message);
        throw error;
    }
};
