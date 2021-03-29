type sellableType = { price: number; quantity: number };

export type Field = {
    label: string;
    id: string;
    placeholder?: string;
    type?: string;
};

export type RadioType = {
    name: string;
    value: 'drink' | 'food';
    fields: Field[];
};

export type DrinkType = { id: string; name: string; volume: number; userId: string } & sellableType;
export type FoodType = { id: string; name: string; weight: number; description: string; userId: string } & sellableType;
export type UserDataType = { id: string; name: string; drink: DrinkType[]; food: FoodType[] };
export type SustenanceType = FoodType | DrinkType;
