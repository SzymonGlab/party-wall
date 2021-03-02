import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { UserForm } from '../../components/UserForm';
import { signUp } from '../../utils/userUtils';

export const SignUp: React.FC = () => {
    const history = useHistory();
    const handleSignUp = useCallback((e) => signUp(e, history), [history]);

    const formProps = {
        title: 'Sign up',
        onViewChange: {
            action: () => history.push('/login'),
            text: 'Already have an account?',
        },
        onSubmit: {
            action: handleSignUp,
            text: 'Sign up',
        },
    };

    return <UserForm {...formProps} />;
};
