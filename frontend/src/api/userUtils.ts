import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';

import { API_URL, firebaseApp } from '../config';

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
