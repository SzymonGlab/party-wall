import React from 'react';
import ReactTooltip from 'react-tooltip';
import { useTheme } from 'styled-components';

import { Icon } from './elements';

export const CustomTooltip: React.FC<{ id: string; content: React.ReactNode }> = ({ id, content, children }) => {
    const { colors } = useTheme();
    return (
        <>
            <Icon data-for={id} data-tip="">
                {children}
            </Icon>
            <ReactTooltip
                multiline
                id={id}
                effect="solid"
                place="left"
                backgroundColor={`${colors.secondary}DD`}
                textColor={colors.black}
                getContent={() => content}
                className="reactTooltip"
            />
        </>
    );
};
