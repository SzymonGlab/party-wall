import React from 'react';

import { SustenanceType } from '../../types';
import { ProductDescription } from '../ProductDescription';
import { ActionWrapper, CollectionName, ListItem, RemoveButton, SingleListWrapper, StyledTrash } from './elements';

export const UserItemsList: React.FC<{
    items: SustenanceType[];
    title: string;
    handleDeleteRequest: (sustenance: SustenanceType) => void;
}> = ({ items, title, handleDeleteRequest }) => (
    <SingleListWrapper>
        <CollectionName> {title}: </CollectionName>
        {items.length === 0 && <ListItem> Your list is empty :(</ListItem>}
        {items.map((item: SustenanceType) => (
            <ListItem className="list-item" key={item.id}>
                <p>{item.name}</p>
                <ActionWrapper>
                    <ProductDescription item={item} />
                    <RemoveButton transparent onClick={() => handleDeleteRequest(item)}>
                        <StyledTrash />
                    </RemoveButton>
                </ActionWrapper>
            </ListItem>
        ))}
    </SingleListWrapper>
);
