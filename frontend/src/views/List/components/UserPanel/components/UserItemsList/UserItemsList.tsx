import React, { useContext } from 'react';
import produce, { Draft } from 'immer';

import { DrinkType, FoodType, SustenanceType, UserDataType } from '../../../../../../types';
import { sendDeleteRequest } from '../../../../../../utils/productUtils';
import { Loader } from '../../../../../../components/Loader';
import { CurrentUserContext } from '../..';
import { InfoIcon } from '../InfoIcon';

import { ActionWrapper, CollectionName, ListItem, RemoveButton, SingleListWrapper } from './elements';

export const UserItemsList: React.FC<{ items: FoodType[] | DrinkType[]; title: string; type: 'food' | 'drink' }> = ({
    items,
    title,
    type,
}) => {
    const { userData, setUserData } = useContext(CurrentUserContext);

    if (!userData || !setUserData) {
        return <Loader />;
    }
    const handleRemove = async (sustenance: SustenanceType) => {
        await sendDeleteRequest(sustenance, type);
        const newUserData = produce(userData, (draftState: Draft<UserDataType>) => {
            draftState[type] = (draftState[type] as any[]).filter((f: FoodType) => f.id !== sustenance.id);
        });
        setUserData(newUserData);
    };

    return (
        <SingleListWrapper>
            <CollectionName> {title}: </CollectionName>
            {items.length === 0 && <ListItem className="list-item"> Your list is empty :(</ListItem>}
            {(items as any[]).map((item: FoodType | DrinkType) => (
                <ListItem className="list-item" key={item.id}>
                    <p>{item.name}</p>
                    <ActionWrapper className="action-wrapper">
                        <InfoIcon item={item} />
                        <RemoveButton variant="danger" onClick={() => handleRemove(item)}>
                            x
                        </RemoveButton>
                    </ActionWrapper>
                </ListItem>
            ))}
        </SingleListWrapper>
    );
};
