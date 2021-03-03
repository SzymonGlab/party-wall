import axios from 'axios';
import { toast } from 'react-toastify';

import { API_URL, firebaseApp } from '../config';
import { AccountActionType } from '../types';

export const signIn: AccountActionType = async (e, history) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    try {
        await firebaseApp.auth().signInWithEmailAndPassword(`${username.value}@partywall.com`, password.value);
        history.push('/');
    } catch (error) {
        toast.error(error.message);
    }
};

export const signUp: AccountActionType = async (e, history) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    try {
        const resp = await firebaseApp
            .auth()
            .createUserWithEmailAndPassword(`${username.value}@partywall.com`, password.value);
        axios.post(`${API_URL}/users`, { name: username.value, id: resp.user?.uid });
        history.push('/');
    } catch (error) {
        toast.error(error.message);
    }
};

export const signOut = (): Promise<void> => firebaseApp.auth().signOut();
