import firebase from 'firebase/app';
import { RouteComponentProps } from 'react-router-dom';

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
export type RadioType = {
    name: string;
    value: 'drink' | 'food';
    fields: string[];
};
export type CurrentUserType = firebase.User | null;
export type AccountActionType = (e: any, history: RouteComponentProps['history']) => Promise<void>;
export type DrinkType = { id: number; name: string; volume: number; userId: string };
export type FoodType = { id: number; name: string; weight: number; description: string; userId: string };
export type UserDataType = { id: string; name: string; drink: DrinkType[]; food: FoodType[] };
export type SustenanceType = FoodType | DrinkType;
