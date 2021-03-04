import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import produce, { Draft } from 'immer';

import { DrinkType, FoodType, SustenanceType, UserDataType } from '../../../../../../types';
import { isFood, sendDeleteRequest } from '../../../../../../utils/productUtils';
import { Loader } from '../../../../../../components/Loader';
import { CurrentUserContext } from '../..';
import { InfoIcon } from '../InfoIcon';

import './UserItemsList.css';

export const UserItemsList: React.FC<{ items: FoodType[] | DrinkType[]; title: string }> = ({ items, title }) => {
    const { userData, setUserData } = useContext(CurrentUserContext);

    if (!userData || !setUserData) {
        return <Loader />;
    }
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
        <div id="single-list-wrapper">
            <h5 id="collection-name"> {title}: </h5>
            {items.length === 0 && <div className="list-item"> Your list is empty :(</div>}
            {(items as any[]).map((item: FoodType | DrinkType) => (
                <div className="list-item" key={item.id}>
                    <p>{item.name}</p>
                    <div className="action-wrapper">
                        <InfoIcon item={item} />
                        <Button variant="danger" id="remove-button" onClick={() => handleRemove(item)}>
                            x
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
