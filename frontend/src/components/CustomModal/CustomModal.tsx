import React from 'react';
import { Modal } from 'react-bootstrap';

type CustomModalType = {
    onCancel: () => void;
    isDisplayed: boolean;
};

export const CustomModal: React.FC<CustomModalType> = ({ isDisplayed, children, onCancel }) => (
    <Modal id="modal-wrapper" show={isDisplayed} onHide={onCancel}>
        <Modal.Header closeButton>
            <Modal.Title>Add new item</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
    </Modal>
);
