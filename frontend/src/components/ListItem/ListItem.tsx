import React from 'react';
import { UserDataType } from '../../types';

export const ListItem: React.FC<{
    userData: UserDataType;
}> = ({ userData }) => {
    const { food, drinks, name } = userData;

    return (
        <div>
            <p>{food[0]?.name ?? 'XD'}</p>
            <p>{drinks[0]?.name ?? 'XD'}</p>
            <p>{name}</p>
        </div>
    );
};
