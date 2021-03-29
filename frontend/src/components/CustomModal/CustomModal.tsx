import React from 'react';

import { StyledModal, StyledModalBody, StyledModalHeader } from './elements';

type CustomModalType = {
    onCancel: () => void;
    isDisplayed: boolean;
    title: string;
};

export const CustomModal: React.FC<CustomModalType> = ({ title, isDisplayed, children, onCancel }) => (
    <StyledModal show={isDisplayed} onHide={onCancel}>
        <StyledModalHeader closeButton>
            <StyledModal.Title>{title}</StyledModal.Title>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
    </StyledModal>
);
