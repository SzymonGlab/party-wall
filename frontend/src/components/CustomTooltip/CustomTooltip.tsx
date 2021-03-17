import React from 'react';
import ReactTooltip from 'react-tooltip';

import { Icon } from './elements';

export const CustomTooltip: React.FC<{ id: string; content: React.ReactNode }> = ({ id, content, children }) => (
    <>
        <Icon data-for={id} data-tip="">
            {children}
        </Icon>
        <ReactTooltip
            multiline
            id={id}
            effect="solid"
            place="left"
            backgroundColor="#f5f5f5"
            textColor="#121212"
            getContent={() => content}
            className="reactTooltip"
        />
    </>
);
