import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trash.svg';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${trashImage});
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 9;
`;
export const OrderListItem = () => {
    return (
        <OrderItemStyled>
            <span>JS Burger</span>
            <span>2</span>
            <span>750 Р</span>
            <TrashButton/>
        </OrderItemStyled>
    );
};