import React from 'react';

import { UserDataType } from '../../../../../../types';
import { CustomListGroup } from '../CustomListGroup';
import './ListItem.css';

export const ListItem: React.FC<{
    userData: UserDataType;
}> = ({ userData }) => {
    const { food, drink, name } = userData;

    return (
        <div id="list-element-wrapper">
            <p id="list-username">{name}</p>
            <div id="list-items-wrapper">
                <CustomListGroup items={food} title="Food" />
                <CustomListGroup items={drink} title="Drink" />
            </div>
        </div>
    );
};
