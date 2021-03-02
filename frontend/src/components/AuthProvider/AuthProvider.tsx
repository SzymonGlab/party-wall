import React, { useState, useEffect } from 'react';

import { firebaseApp } from '../../config';
import { AuthContextProps, CurrentUserType } from '../../types';

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
        return <>Loading...</>;
    }

    return (
        <AuthContext.Provider value={{ currentUser, pending, authenticated: currentUser !== null }}>
            {children}
        </AuthContext.Provider>
    );
};
