import React from 'react';
import { Modal } from 'react-bootstrap';

type CustomModalType = {
    onCancel: () => void;
    isDisplayed: boolean;
    title: string;
};

export const CustomModal: React.FC<CustomModalType> = ({ title, isDisplayed, children, onCancel }) => (
    <Modal show={isDisplayed} onHide={onCancel}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
    </Modal>
);
