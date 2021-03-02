import React, { useCallback, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { AuthContext } from '../../components/AuthProvider';
import { UserForm } from '../../components/UserForm';
import { signIn } from '../../utils/userUtils';

export const LogIn: React.FC = () => {
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    const handleSignIn = useCallback((e) => signIn(e, history), [history]);

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
