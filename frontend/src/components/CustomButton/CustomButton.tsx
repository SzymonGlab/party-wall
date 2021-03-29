import React from 'react';
import { ButtonProps } from 'react-bootstrap';

import { Loader } from '../Loader';
import { StyledButton } from './elements';

export const CustomButton: React.FC<{ isLoading?: boolean; color?: string; transparent?: boolean } & ButtonProps> = ({
    isLoading = false,
    transparent = false,
    children,
    color,
    ...props
}) => {
    return (
        <StyledButton color={color} transparent={transparent} {...props}>
            {isLoading ? <Loader /> : children}
        </StyledButton>
    );
};
