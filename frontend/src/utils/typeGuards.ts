import { FoodType, SustenanceType } from '../types';

export const isFood = (sustenance: SustenanceType): sustenance is FoodType =>
    (sustenance as FoodType).description !== undefined;

export const isSustenance = (obj: Record<string, string | number>): obj is SustenanceType =>
    ['name', 'price', 'quantity'].filter((prop) => obj[prop] === undefined).length === 0;

export const isUserFormData = (obj: Record<string, string>): obj is { username: string; password: string } =>
    obj.username !== undefined && obj.password !== undefined;
