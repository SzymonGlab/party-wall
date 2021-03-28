import React from 'react';
import { useTheme } from 'styled-components';

import { USER_FORM_FIELDS } from '../../utils/consts';
import { userFormValidation } from '../../utils/formValidation';
import { CustomButton } from '../CustomButton';
import { CustomForm } from '../CustomForm';
import { ButtonsWrapper, FormContainer, FormWrapper } from './elements';

type UserFormProps = {
    title: string;
    onSubmit: {
        text: string;
        action: (values: Record<string, string>) => void;
    };
    onViewChange: {
        text: string;
        action: () => void;
    };
};

export const UserForm: React.FC<UserFormProps> = ({ title, onSubmit, onViewChange }) => {
    const theme = useTheme();

    return (
        <FormContainer>
            <FormWrapper>
                <h4>{title}</h4>
                <CustomForm onSubmit={onSubmit.action} fields={USER_FORM_FIELDS} validationSchema={userFormValidation}>
                    <ButtonsWrapper>
                        <CustomButton color={theme.colors.secondary} onClick={onViewChange.action}>
                            {onViewChange.text}
                        </CustomButton>
                        <CustomButton color={theme.colors.primary} type="submit">
                            {onSubmit.text}
                        </CustomButton>
                    </ButtonsWrapper>
                </CustomForm>
            </FormWrapper>
        </FormContainer>
    );
};
