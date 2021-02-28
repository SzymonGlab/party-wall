import firebase from 'firebase/app';
import React, { useState, useEffect } from 'react';

import { app } from '../../base';

type ContextProps = {
    currentUser: firebase.User | null;
    pending: boolean;
    authenticated: boolean;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user: any) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <>Loading...</>;
    }

    return (
        <AuthContext.Provider value={{ currentUser, pending, authenticated: currentUser !== null }}>
            {children}
        </AuthContext.Provider>
    );
};
