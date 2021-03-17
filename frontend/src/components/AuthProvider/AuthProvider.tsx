import React, { useEffect, useState } from 'react';

import { firebaseApp } from '../../config';
import { AuthContextProps, CurrentUserType } from '../../types';
import { Loader } from '../Loader';

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
