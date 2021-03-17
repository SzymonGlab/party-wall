import React, { useContext } from 'react';

import { Loader } from '../../../../../../components/Loader';
import { CurrentUserContext } from '../..';
import { UserItemsList } from '../UserItemsList';
import { Wrapper } from './elements';

export const UserListsController: React.FC = () => {
    const { userData } = useContext(CurrentUserContext);

    if (!userData) {
        return <Loader />;
    }

    const { food, drink } = userData;

    return (
        <Wrapper>
            <UserItemsList title="FOOD" items={food} type="food" />
            <UserItemsList title="DRINKS" items={drink} type="drink" />
        </Wrapper>
    );
};
