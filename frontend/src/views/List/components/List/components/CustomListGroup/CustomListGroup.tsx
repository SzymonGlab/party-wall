import { omit } from 'lodash';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { UNITS } from '../../../../../../api/productUtils';
import { DrinkType, FoodType } from '../../../../../../types';
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

export const CustomListGroup: React.FC<{ items: FoodType[] | DrinkType[]; title: string }> = ({ items, title }) => (
    <CustomListWrapper>
        {items.length > 0 ? (
            <>
                <CustomListTitle>{title}:</CustomListTitle>
                <ListGroup>
                    {items.map((item: DrinkType | FoodType) => (
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
