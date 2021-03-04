import axios from 'axios';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { API_URL } from '../config';
import { FoodType, SustenanceType } from '../types';

export const isFood = (sustenance: any): sustenance is FoodType => sustenance.description !== undefined;

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
        toast.error(error.message);
        throw error;
    }

    return newItem;
};

export const sendDeleteRequest = async (sustenance: SustenanceType): Promise<void> => {
    try {
        if (isFood(sustenance)) {
            await axios.delete(`${API_URL}/food/${sustenance.id}`);
        } else {
            await axios.delete(`${API_URL}/drink/${sustenance.id}`);
        }
    } catch (error) {
        toast.error(error.message);
        throw error;
    }
};
