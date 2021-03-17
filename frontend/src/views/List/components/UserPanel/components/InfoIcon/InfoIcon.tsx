import { omit } from 'lodash';
import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

import { CustomTooltip } from '../../../../../../components/CustomTooltip';
import { DrinkType, FoodType } from '../../../../../../types';
import { TooltipContent, TooltipHeader, TooltipWrapper } from './elements';

const ItemInfo: React.FC<{ item: FoodType | DrinkType }> = ({ item }) => (
    <TooltipWrapper>
        <TooltipHeader> Information </TooltipHeader>
        <div>
            {Object.entries(omit(item, 'id', 'userId', 'name')).map(([key, value]) => (
                <TooltipContent key={key}>
                    <p>
                        <b>{key}:</b>
                    </p>
                    <p>{value}</p>
                </TooltipContent>
            ))}
        </div>
    </TooltipWrapper>
);

export const InfoIcon: React.FC<{ item: FoodType | DrinkType }> = ({ item }) => (
    <CustomTooltip id={`${item.name}-${item.id}`} content={<ItemInfo item={item} />}>
        <FaClipboardList />
    </CustomTooltip>
);
