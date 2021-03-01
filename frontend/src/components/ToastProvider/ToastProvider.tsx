import React from 'react';
import { ToastContainer } from 'react-toastify';

export const ToastProvider: React.FC = () => (
    <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
);
