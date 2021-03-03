import axios from 'axios';
import { toast } from 'react-toastify';

import { API_URL, firebaseApp } from '../config';
import { AccountActionType } from '../types';

export const signIn: AccountActionType = async (e, history) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
        await firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
    } catch (error) {
        toast.error(error.message);
    }
};

export const signUp: AccountActionType = async (e, history) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
        const resp = await firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
        axios.post(`${API_URL}/users`, { name: email.value, id: resp.user?.uid });
        history.push('/');
    } catch (error) {
        toast.error(error.message);
    }
};

export const signOut = (): Promise<void> => firebaseApp.auth().signOut();
