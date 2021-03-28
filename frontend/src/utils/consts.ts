import { Field, RadioType } from '../types';

export const UNITS: Record<string, string> = {
    price: '$',
    weight: 'grams',
    volume: 'ml',
};

const COMMON_SUSTENANCE_FIELDS = [
    {
        label: 'Name',
        id: 'name',
    },
    {
        label: 'Quantity',
        id: 'quantity',
    },
    {
        label: 'Price',
        id: 'price',
    },
];

const FOOD_FIELDS = [
    {
        label: 'Description',
        id: 'description',
    },
    {
        label: 'Weight',
        id: 'weight',
    },
];

const DRINK_FIELDS = [{ label: 'Volume', id: 'volume' }];

export const FOOD_FORM_RADIOS: RadioType[] = [
    {
        name: 'Food',
        value: 'food',
        fields: [...COMMON_SUSTENANCE_FIELDS, ...FOOD_FIELDS],
    },
    {
        name: 'Drink',
        value: 'drink',
        fields: [...COMMON_SUSTENANCE_FIELDS, ...DRINK_FIELDS],
    },
];

export const USER_FORM_FIELDS: Field[] = [
    { label: 'Username', id: 'username' },
    { label: 'Password', id: 'password', type: 'password' },
];
