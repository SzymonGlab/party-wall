import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { signIn } from '../../api/userData';
import { UserForm } from '../../containers/UserForm';
import { AuthContext, AuthContextType } from '../../context/AuthProvider';
import { isUserFormData } from '../../utils/typeGuards';

export const LogIn: React.FC = () => {
    const { currentUser } = useContext(AuthContext) as AuthContextType;
    const history = useHistory();
    const handleSignIn = (values: Record<string, string>) => {
        if (isUserFormData(values)) {
            signIn(values, history);
        }
    };

    if (currentUser) {
        return <Redirect to="/" />;
    }

    const formProps = {
        title: 'Sign in',
        onViewChange: {
            action: () => history.push('/signup'),
            text: 'Create new account!',
        },
        onSubmit: {
            action: handleSignIn,
            text: 'Sign in',
        },
    };

    return <UserForm {...formProps} />;
};
