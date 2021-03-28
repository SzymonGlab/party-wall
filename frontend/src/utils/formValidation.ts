import * as yup from 'yup';

export const userFormValidation = yup.object().shape({
    username: yup.string().min(4, '*Username must have at least 4 characters'),
    password: yup.string().min(6, '*Password must have at least 6 characters'),
});

export const addSustenanceValidation = yup.object().shape({
    name: yup.string().required().max(20, '*Name max lenght is 20'),
    description: yup.string().max(20, '*Description max length is 20'),
    weight: yup.number().typeError('*Weight must be a number').positive(),
    quantity: yup.number().typeError('*Quantity must be a number').required().positive(),
    price: yup.number().typeError('*Price must be a number').required().positive(),
    volume: yup.number().typeError('*Volume must be a number').positive().integer(),
});
