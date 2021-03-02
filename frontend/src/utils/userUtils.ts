import { toast } from 'react-toastify';

import { firebaseApp } from '../config';
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
        await firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
    } catch (error) {
        toast.error(error.message);
    }
};

export const signOut = (): Promise<void> => firebaseApp.auth().signOut();
