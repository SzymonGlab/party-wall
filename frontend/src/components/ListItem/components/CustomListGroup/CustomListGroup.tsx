import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { omit } from 'lodash';

import { DrinkType, FoodType } from '../../../../types';
import './CustomListGroup.css';

export const CustomListGroup: React.FC<{ items: FoodType[] | DrinkType[]; title: string }> = ({ items, title }) => (
    <div id="custom-list-wrapper">
        {items.length > 0 && (
            <>
                <h5 id="custom-list-title">{title}:</h5>
                <ListGroup>
                    {(items as any[]).map((item) => (
                        <ListGroup.Item key={item.id}>
                            <p className="name-tag">{item.name}</p>
                            {Object.entries(omit(item, 'userId', 'id', 'price', 'quantity', 'name')).map(
                                ([key, value]) => (
                                    <p className="list-item-element" key={key}>
                                        <b>{key}:</b> {value}
                                    </p>
                                ),
                            )}
                            <p className="price-tag">${item.price}</p>
                            <p className="quantity-tag">x{item.quantity}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </>
        )}
    </div>
);