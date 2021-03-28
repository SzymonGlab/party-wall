import React from 'react';

import { useDeleteItemRequest } from '../../../../../../hooks/useDeleteItemRequest';
import { SustenanceType } from '../../../../../../types';
import { InfoIcon } from '../InfoIcon';
import { ActionWrapper, CollectionName, ListItem, RemoveButton, SingleListWrapper } from './elements';

export const UserItemsList: React.FC<{ items: SustenanceType[]; title: string }> = ({ items, title }) => {
    const { handleDeleteRequest } = useDeleteItemRequest();

    return (
        <SingleListWrapper>
            <CollectionName> {title}: </CollectionName>
            {items.length === 0 && <ListItem className="list-item"> Your list is empty :(</ListItem>}
            {items.map((item: SustenanceType) => (
                <ListItem className="list-item" key={item.id}>
                    <p>{item.name}</p>
                    <ActionWrapper className="action-wrapper">
                        <InfoIcon item={item} />
                        <RemoveButton variant="danger" onClick={() => handleDeleteRequest(item)}>
                            x
                        </RemoveButton>
                    </ActionWrapper>
                </ListItem>
            ))}
        </SingleListWrapper>
    );
};
