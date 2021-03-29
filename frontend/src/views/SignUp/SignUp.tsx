import React from 'react';
import { useHistory } from 'react-router-dom';

import { signUp } from '../../api/userData';
import { UserForm } from '../../containers/UserForm';
import { isUserFormData } from '../../utils/typeGuards';

export const SignUp: React.FC = () => {
    const history = useHistory();
    const handleSignUp = (values: Record<string, string>) => {
        if (isUserFormData(values)) {
            signUp(values, history);
        }
    };

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
