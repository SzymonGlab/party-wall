import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';

import { firebaseApp } from '../../config';
import { Loader } from '../Loader';

type CurrentUserType = firebase.User | null;

type AuthContextProps = {
    currentUser: CurrentUserType;
    pending: boolean;
    authenticated: boolean;
};

export const AuthContext = React.createContext<Partial<AuthContextProps>>({});

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
