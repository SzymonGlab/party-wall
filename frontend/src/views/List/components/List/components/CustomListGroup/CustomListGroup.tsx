import { omit } from 'lodash';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { SustenanceType } from '../../../../../../types';
import { UNITS } from '../../../../../../utils/consts';
import {
    CustomListTitle,
    CustomListWrapper,
    ListItemElement,
    NameTag,
    NoItemsInfo,
    PriceTag,
    QunatityTag,
    StyledListGroupItem,
} from './elements';

export const CustomListGroup: React.FC<{ items: SustenanceType[]; title: string }> = ({ items, title }) => (
    <CustomListWrapper>
        {items.length > 0 ? (
            <>
                <CustomListTitle>{title}:</CustomListTitle>
                <ListGroup>
                    {items.map((item: SustenanceType) => (
                        <StyledListGroupItem key={item.id}>
                            <NameTag>{item.name}</NameTag>
                            {Object.entries(omit(item, 'userId', 'id', 'price', 'quantity', 'name')).map(
                                ([key, value]) => (
                                    <ListItemElement key={key}>
                                        <b>{key}:</b> {`${value} ${UNITS[key] || ''}`}
                                    </ListItemElement>
                                ),
                            )}
                            <PriceTag>
                                {UNITS['price']}
                                {item.price}
                            </PriceTag>
                            <QunatityTag>x{item.quantity}</QunatityTag>
                        </StyledListGroupItem>
                    ))}
                </ListGroup>
            </>
        ) : (
            <NoItemsInfo>{`This user doesn't sell any ${title}`}</NoItemsInfo>
        )}
    </CustomListWrapper>
);
