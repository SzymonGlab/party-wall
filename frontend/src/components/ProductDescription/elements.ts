import styled from 'styled-components';

export const Icon = styled.div`
    margin-right: 8px;
    display: flex;
    align-items: center;
`;

export const TooltipWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TooltipContent = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr;
    font-size: 0.9rem;
    grid-gap: 5px;
`;

export const TooltipHeader = styled.p`
    font-size: 1rem;
`;
