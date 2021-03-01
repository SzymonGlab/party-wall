import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { app } from '../base';

type AccountActionType = (e: any, history: RouteComponentProps['history']) => Promise<void>;

export const signIn: AccountActionType = async (e, history) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
    } catch (error) {
        toast.error(error.message);
    }
};

export const signUp: AccountActionType = async (e, history) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
    } catch (error) {
        toast.error(error.message);
    }
};

export const signOut = (): Promise<void> => app.auth().signOut();
