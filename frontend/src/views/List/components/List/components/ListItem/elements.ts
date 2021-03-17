import styled from 'styled-components';

export const ListElementWrapper = styled.div`
    border-radius: 10px;
    border: 1px solid #00091a55;
    color: #121212 !important;
    margin: 15px 20px;
    padding: 20px;
    width: 100%;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.9);
    -webkit-box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.9);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.9);
`;

export const ListUsername = styled.p`
    border-bottom: 1px solid #00091a55;
    font-size: 1.7rem;
    padding-bottom: 5px;
`;

export const ListItemsWrapper = styled.div`
    padding-top: 5px;
    display: grid;
    grid-template-columns: 50% 50%;
`;
