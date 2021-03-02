import React from 'react';
import { ListItem } from '../../../../components/ListItem';
import { UserDataType } from '../../../../types';

export const List: React.FC<{ usersData: UserDataType[] }> = ({ usersData }) => {
    return (
        <div id="list">
            {usersData.map((userData: UserDataType) => (
                <ListItem key={userData.id} userData={userData} />
            ))}
        </div>
    );
};
