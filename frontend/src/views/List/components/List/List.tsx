import React, { ReactText } from 'react';
import ReactList from 'react-list';

import { UserDataType } from '../../../../types';
import { ListWrapper } from '../../elements';
import { ListItem } from './components/ListItem';

export const List: React.FC<{ usersData: UserDataType[] }> = ({ usersData }) => {
    const renderItem = (index: number, key: ReactText) => <ListItem key={key} userData={usersData[index]} />;
    return (
        <ListWrapper>
            <ReactList itemRenderer={renderItem} length={usersData.length} />
        </ListWrapper>
    );
};
