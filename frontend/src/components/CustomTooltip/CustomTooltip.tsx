import React from 'react';
import ReactTooltip from 'react-tooltip';

export const CustomTooltip: React.FC<{ id: string; content: React.ReactNode }> = ({ id, content, children }) => (
    <>
        <div id="icon" data-for={id} data-tip="">
            {children}
        </div>
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
