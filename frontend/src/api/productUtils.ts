import axios from 'axios';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import { API_URL } from '../config';
import { SustenanceType } from '../types';
import { isFood } from '../utils/typeGuards';

export const sendAddRequest = async (sustenance: SustenanceType, userId: string): Promise<SustenanceType> => {
    const newProduct = {
        ...sustenance,
        id: uuidv4(),
        userId,
    } as SustenanceType;

    const type = isFood(sustenance) ? 'food' : 'drink';

    await axios.post<SustenanceType>(`${API_URL}/${type}`, newProduct);

    return newProduct;
};

export const sendDeleteRequest = async (sustenance: SustenanceType): Promise<void> => {
    const type = isFood(sustenance) ? 'food' : 'drink';
    try {
        await axios.delete(`${API_URL}/${type}/${sustenance.id}`);
    } catch (error) {
        toast.error(`REMOVING ITEM: ${error.message}`);
    }
};
