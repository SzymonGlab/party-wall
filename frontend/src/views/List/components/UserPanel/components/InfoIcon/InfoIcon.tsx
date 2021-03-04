import React from 'react';
import ReactTooltip from 'react-tooltip';
import { omit } from 'lodash';
import { FaClipboardList } from 'react-icons/fa';

import { DrinkType, FoodType } from '../../../../../../types';
import './InfoIcon.css';

const Tooltip: React.FC<{ item: FoodType | DrinkType }> = ({ item }) => (
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
    <>
        <div id="icon" data-for={`${item.name}-${item.id}`} data-tip="">
            <FaClipboardList />
        </div>
        <ReactTooltip
            multiline
            id={`${item.name}-${item.id}`}
            effect="solid"
            place="left"
            backgroundColor="#00cfcf"
            textColor="#121212"
            getContent={() => <Tooltip item={item} />}
        />
    </>
);
