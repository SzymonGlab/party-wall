import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import { API_URL } from '../config';
import { DrinkType, FoodType, SustenanceType } from '../types';

export const isFood = (sustenance: FoodType | DrinkType): sustenance is FoodType =>
    (sustenance as FoodType).description !== undefined;

export const UNITS: Record<string, string> = {
    price: '$',
    weight: 'grams',
    volume: 'ml',
};

export const sendAddRequest = async (
    e: React.SyntheticEvent,
    sustenance: 'food' | 'drink',
    userId: string,
): Promise<SustenanceType | null> => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        name: { value: string };
        price: { value: number };
        quantity: { value: number };
        weight: { value: number };
        description: { value: string };
        volume: { value: number };
    };

    let newItem = {
        id: uuidv4(),
        name: target.name.value,
        price: target.price.value,
        quantity: target.quantity.value,
        userId,
    };
    if (sustenance === 'food') {
        newItem = {
            ...newItem,
            weight: target.weight.value,
            description: target.description.value,
        } as FoodType;
    } else {
        newItem = { ...newItem, volume: target.volume.value } as DrinkType;
    }

    try {
        await axios.post<SustenanceType>(`${API_URL}/${sustenance}`, newItem);
    } catch (error) {
        toast.error(`ADDING ITEM: ${error.message}`);
        return null;
    }

    return newItem as FoodType | DrinkType;
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
