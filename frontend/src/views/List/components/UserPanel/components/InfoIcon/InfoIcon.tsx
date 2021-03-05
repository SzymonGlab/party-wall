import React from 'react';
import { omit } from 'lodash';
import { FaClipboardList } from 'react-icons/fa';

import { DrinkType, FoodType } from '../../../../../../types';
import './InfoIcon.css';
import { CustomTooltip } from '../../../../../../components/CustomTooltip';

const ItemInfo: React.FC<{ item: FoodType | DrinkType }> = ({ item }) => (
    <div id="tooltip-wrapper">
        <p id="tooltip-header"> Information </p>
        <div>
            {Object.entries(omit(item, 'id', 'userId', 'name')).map(([key, value]) => (
                <div key={key} id="tooltip-content">
                    <p>
                        <b>{key}:</b>
                    </p>
                    <p>{value}</p>
                </div>
            ))}
        </div>
    </div>
);

export const InfoIcon: React.FC<{ item: FoodType | DrinkType }> = ({ item }) => (
    <CustomTooltip id={`${item.name}-${item.id}`} content={<ItemInfo item={item} />}>
        <FaClipboardList />
    </CustomTooltip>
);
