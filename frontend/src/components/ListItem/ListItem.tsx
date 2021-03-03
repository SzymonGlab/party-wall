import React from 'react';

import { UserDataType } from '../../types';

export const ListItem: React.FC<{
    userData: UserDataType;
}> = ({ userData }) => {
    const { food, drink, name } = userData;

    return (
        <div>
            {food.map((foodItem) => (
                <div key={foodItem.id}>
                    <p>{foodItem.name}</p>
                </div>
            ))}
            {drink.map((drinkItem) => (
                <div key={drinkItem.id}>
                    <p>{drinkItem.name}</p>
                </div>
            ))}
            <p>{name}</p>
        </div>
    );
};
