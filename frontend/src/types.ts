import firebase from 'firebase/app';
import { RouteComponentProps } from 'react-router-dom';

export type CurrentUserType = firebase.User | null;

export type AuthContextProps = {
    currentUser: CurrentUserType;
    pending: boolean;
    authenticated: boolean;
};

export type FormType = {
    text: string;
    action: (e: React.SyntheticEvent) => void;
};

export type UserFormProps = {
    title: string;
    onSubmit: FormType;
    onViewChange: FormType;
};

export type AccountActionType = (e: any, history: RouteComponentProps['history']) => Promise<void>;

export type drinkType = { name: string; volume: number };
export type foodType = { name: string; weight: number; description: string };
export type UserDataType = { id: number; name: string; drinks: drinkType[]; food: foodType[]; uid: string };
