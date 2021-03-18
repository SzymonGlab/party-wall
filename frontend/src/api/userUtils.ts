import axios from 'axios';
import { toast } from 'react-toastify';

import { API_URL, firebaseApp } from '../config';
import { AccountActionType } from '../types';

export const signIn: AccountActionType = async (e, history): Promise<void> => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        username: { value: string };
        password: { value: string };
    };

    try {
        await firebaseApp
            .auth()
            .signInWithEmailAndPassword(`${target.username.value}@partywall.com`, target.password.value);
        history.push('/');
    } catch (error) {
        toast.error(`SIGN IN: ${error.message}`);
    }
};

export const signUp: AccountActionType = async (e, history): Promise<void> => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        username: { value: string };
        password: { value: string };
    };
    try {
        const resp = await firebaseApp
            .auth()
            .createUserWithEmailAndPassword(`${target.username.value}@partywall.com`, target.password.value);
        axios.post(`${API_URL}/users`, { name: target.username.value, id: resp.user?.uid });
        history.push('/');
    } catch (error) {
        toast.error(`SIGN UP: ${error.message}`);
    }
};

export const signOut = (): Promise<void> => firebaseApp.auth().signOut();
