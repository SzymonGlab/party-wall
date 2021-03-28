import axios from 'axios';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import { API_URL } from '../config';
import { DrinkType, FoodType, SustenanceType } from '../types';

export const sendAddRequest = async (
    values: Partial<FoodType> | Partial<DrinkType>,
    sustenance: 'food' | 'drink',
    userId: string,
): Promise<SustenanceType> => {
    const newProduct = {
        id: uuidv4(),
        userId,
        ...values,
    } as SustenanceType;

    await axios.post<SustenanceType>(`${API_URL}/${sustenance}`, newProduct);

    return newProduct;
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
