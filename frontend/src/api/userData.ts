import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';

import { API_URL, firebaseApp } from '../config';
import { DrinkType, FoodType, UserDataType } from '../types';

type AccountActionType = (
    values: { username: string; password: string },
    history: RouteComponentProps['history'],
) => Promise<void>;

export const signIn: AccountActionType = async (values, history): Promise<void> => {
    try {
        await firebaseApp.auth().signInWithEmailAndPassword(`${values.username}@partywall.com`, values.password);
        history.push('/');
    } catch (error) {
        toast.error(`SIGN IN: ${error.message}`);
    }
};

export const signUp: AccountActionType = async (values, history): Promise<void> => {
    try {
        const resp = await firebaseApp
            .auth()
            .createUserWithEmailAndPassword(`${values.username}@partywall.com`, values.password);
        axios.post(`${API_URL}/users`, { name: values.username, id: resp.user?.uid });
        history.push('/');
    } catch (error) {
        toast.error(`SIGN UP: ${error.message}`);
    }
};

export const signOut = (): Promise<void> => firebaseApp.auth().signOut();

export const fetchUsersData = async (): Promise<UserDataType[]> => {
    try {
        const users = await axios.get<{ id: string; name: string }[]>(`${API_URL}/users`);
        const drinks = await axios.get<DrinkType[]>(`${API_URL}/drink`);
        const food = await axios.get<FoodType[]>(`${API_URL}/food`);

        const mergedUsersData = users.data.map((user) => ({
            ...user,
            food: food.data.filter((f: FoodType) => f.userId === user.id),
            drink: drinks.data.filter((drink: DrinkType) => drink.userId === user.id),
        }));

        return mergedUsersData;
    } catch (error) {
        toast.error(`FETCH USERS: ${error.message}`);
        return [];
    }
};

export const fetchUserData = async (currentUserId: string): Promise<UserDataType> => {
    try {
        const user = await axios.get<{ id: string; name: string }>(`${API_URL}/users/${currentUserId}`);
        const drinks = await axios.get<DrinkType[]>(`${API_URL}/users/${currentUserId}/drink`);
        const food = await axios.get<FoodType[]>(`${API_URL}/users/${currentUserId}/food`);

        return { ...user.data, drink: drinks.data, food: food.data };
    } catch (error) {
        toast.error(`FETCH USER DATA: ${error.message}`);
        throw error;
    }
};
