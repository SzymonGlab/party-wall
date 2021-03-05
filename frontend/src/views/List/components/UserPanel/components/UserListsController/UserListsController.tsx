import React, { useContext } from 'react';
import { CurrentUserContext } from '../..';
import { Loader } from '../../../../../../components/Loader';
import { UserItemsList } from '../UserItemsList';

import './UserListsController.css';

export const UserListsController: React.FC = () => {
    const { userData } = useContext(CurrentUserContext);

    if (!userData) {
        return <Loader />;
    }

    const { food, drink } = userData;

    return (
        <div id="wrapper">
            <UserItemsList title="FOOD" items={food} />
            <UserItemsList title="DRINKS" items={drink} />
        </div>
    );
};
