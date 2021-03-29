import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';

import { Loader } from '../../components/Loader';
import { firebaseApp } from '../../config';

type CurrentUserType = firebase.User | null;

export type AuthContextType = {
    currentUser: CurrentUserType;
    pending: boolean;
    authenticated: boolean;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<CurrentUserType>(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged((user: CurrentUserType) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <Loader />;
    }

    return (
        <AuthContext.Provider value={{ currentUser, pending, authenticated: currentUser !== null }}>
            {children}
        </AuthContext.Provider>
    );
};
