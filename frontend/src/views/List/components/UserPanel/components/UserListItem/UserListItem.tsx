import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import produce, { Draft } from 'immer';

import { DrinkType, FoodType, SustenanceType, UserDataType } from '../../../../../../types';
import { Loader } from '../../../../../../components/Loader';
import { isFood, sendDeleteRequest } from '../../../../../../utils/productUtils';
import { CurrentUserContext } from '../../UserPanel';

export const UserListItem: React.FC = () => {
    const { userData, setUserData } = useContext(CurrentUserContext);

    if (!userData || !setUserData) {
        return <Loader />;
    }

    const { food, drink, name } = userData;

    const handleRemove = async (sustenance: SustenanceType) => {
        let newUserData = userData;
        await sendDeleteRequest(sustenance);

        if (isFood(sustenance)) {
            newUserData = produce(userData, (draftState: Draft<UserDataType>) => {
                draftState.food = draftState.food.filter((f: FoodType) => f.id !== sustenance.id);
            });
        } else {
            newUserData = produce(userData, (draftState: Draft<UserDataType>) => {
                draftState.drink = draftState.drink.filter((d: DrinkType) => d.id !== sustenance.id);
            });
        }
        setUserData(newUserData);
    };

    return (
        <div>
            {food.map((foodItem) => (
                <div key={foodItem.id}>
                    <p>{foodItem.name}</p>
                    <Button onClick={() => handleRemove(foodItem)}>Remove</Button>
                </div>
            ))}
            {drink.map((drinkItem) => (
                <div key={drinkItem.id}>
                    <p>{drinkItem.name}</p>
                    <Button onClick={() => handleRemove(drinkItem)}>Remove</Button>
                </div>
            ))}
            <p>{name}</p>
        </div>
    );
};
