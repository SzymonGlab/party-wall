import React from 'react';

import { UserDataType } from '../../types';
import { CustomListGroup } from './components/CustomListGroup';
import './ListItem.css';

export const ListItem: React.FC<{
    userData: UserDataType;
}> = ({ userData }) => {
    const { food, drink, name } = userData;

    return (
        <div id="list-element-wrapper">
            {(food.length > 0 || drink.length > 0) && (
                <>
                    <p id="list-username">{name}</p>
                    <div id="list-items-wrapper">
                        <CustomListGroup items={food} title="Food" />
                        <CustomListGroup items={drink} title="Drink" />
                    </div>
                </>
            )}
        </div>
    );
};
