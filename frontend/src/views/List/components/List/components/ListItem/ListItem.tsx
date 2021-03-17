import React from 'react';

import { UserDataType } from '../../../../../../types';
import { CustomListGroup } from '../CustomListGroup';
import { ListElementWrapper, ListUsername, ListItemsWrapper } from './elements';

export const ListItem: React.FC<{
    userData: UserDataType;
}> = ({ userData }) => {
    const { food, drink, name } = userData;

    return (
        <ListElementWrapper>
            <ListUsername>{name}</ListUsername>
            <ListItemsWrapper>
                <CustomListGroup items={food} title="Food" />
                <CustomListGroup items={drink} title="Drink" />
            </ListItemsWrapper>
        </ListElementWrapper>
    );
};
