import React from 'react';
import { ButtonProps } from 'react-bootstrap';

import { Loader } from '../Loader';
import { StyledButton } from './elements';

export const CustomButton: React.FC<{ isLoading?: boolean; color: string } & ButtonProps> = ({
    isLoading = false,
    children,
    color,
    ...props
}) => {
    return (
        <StyledButton color={color} {...props}>
            {isLoading ? <Loader /> : children}
        </StyledButton>
    );
};
