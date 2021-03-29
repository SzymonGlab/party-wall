import React, { ReactText } from 'react';
import ReactList from 'react-list';

import { UserDataType } from '../../types';
import { ListWrapper } from '../../views/List/elements';
import { ListItem } from '../ListItem';

export const List: React.FC<{ usersData: UserDataType[] }> = ({ usersData }) => {
    const renderItem = (index: number, key: ReactText) => <ListItem key={key} userData={usersData[index]} />;
    return (
        <ListWrapper>
            <ReactList itemRenderer={renderItem} length={usersData.length} />
        </ListWrapper>
    );
};
