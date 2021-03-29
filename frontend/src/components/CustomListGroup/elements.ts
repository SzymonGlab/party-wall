import { ListGroupItem } from 'react-bootstrap';
import styled from 'styled-components';

export const ListItemElement = styled.p`
    padding-top: 2px;
`;

export const StyledListGroupItem = styled(ListGroupItem)`
    min-height: 160px !important ;
`;

export const PriceTag = styled.div`
    bottom: 10px;
    font-size: 3.5rem;
    position: absolute;
    right: 15px;
    opacity: 50%;
`;

export const QunatityTag = styled.div`
    bottom: 10px;
    font-size: 1.5rem;
    position: absolute;
    left: 20px;
`;

export const NameTag = styled.p`
    font-size: 1.5rem;
    text-transform: capitalize;
`;

export const CustomListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    opacity: 95%;
`;

export const CustomListTitle = styled.h5`
    padding: 0 1.25rem;
`;

export const NoItemsInfo = styled.div`
    font-size: 1.3rem;
`;
