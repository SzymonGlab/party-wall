import React, { useContext } from 'react';

import { UserItemsList } from '../../components/UserItemsList';
import { UserDataContext, UserDataContextType } from '../../context/UserDataProvider';
import { useDeleteItemRequest } from '../../hooks/useDeleteItemRequest';
import { Wrapper } from './elements';

export const UserListsController: React.FC = () => {
    const { userData } = useContext(UserDataContext) as UserDataContextType;
    const { handleDeleteRequest } = useDeleteItemRequest();
    const { food, drink } = userData;

    return (
        <Wrapper>
            <UserItemsList title="FOOD" items={food} handleDeleteRequest={handleDeleteRequest} />
            <UserItemsList title="DRINKS" items={drink} handleDeleteRequest={handleDeleteRequest} />
        </Wrapper>
    );
};
