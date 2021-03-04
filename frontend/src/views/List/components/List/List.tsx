import React, { ReactText } from 'react';
import ReactList from 'react-list';

import { ListItem } from '../../../../components/ListItem';
import { UserDataType } from '../../../../types';

export const List: React.FC<{ usersData: UserDataType[] }> = ({ usersData }) => {
    const renderItem = (index: number, key: ReactText) => <ListItem key={key} userData={usersData[index]} />;
    return (
        <div id="list">
            <ReactList itemRenderer={renderItem} length={usersData.length} />
        </div>
    );
};
