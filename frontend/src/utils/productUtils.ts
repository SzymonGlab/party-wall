import axios from 'axios';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { API_URL } from '../config';
import { FoodType, SustenanceType } from '../types';

export const isFood = (sustenance: any): sustenance is FoodType => sustenance.description !== undefined;

export const UNITS: Record<string, string> = {
    price: '$',
    weight: 'grams',
    volume: 'ml',
};

export const sendAddRequest = async (e: any, sustenance: 'food' | 'drink', userId: string): Promise<any> => {
    e.preventDefault();
    let newItem: Record<string, any> = {
        id: uuidv4(),
        name: e.target.elements.name.value,
        price: e.target.elements.price.value,
        quantity: e.target.elements.quantity.value,
        userId,
    };
    if (sustenance === 'food') {
        newItem = {
            ...newItem,
            weight: e.target.elements.weight.value,
            description: e.target.elements.description.value,
        };
    } else {
        newItem = { ...newItem, volume: e.target.elements.volume.value };
    }

    try {
        await axios.post(`${API_URL}/${sustenance}`, newItem);
    } catch (error) {
        toast.error(`ADDING ITEM: ${error.message}`);
    }

    return newItem;
};

export const sendDeleteRequest = async (
    sustenance: SustenanceType,
    sustenanceOption: 'food' | 'drink',
): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${sustenanceOption}/${sustenance.id}`);
    } catch (error) {
        toast.error(`REMOVING ITEM: ${error.message}`);
    }
};
