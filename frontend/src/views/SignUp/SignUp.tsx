import React from 'react';
import { useHistory } from 'react-router-dom';

import { signUp } from '../../api/userUtils';
import { UserForm } from '../../components/UserForm';

export const SignUp: React.FC = () => {
    const history = useHistory();
    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => signUp(e, history);

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
