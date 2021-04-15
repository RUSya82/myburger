import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from "./ButtonCheckout";
import {OrderListItem} from "./OrderListItem";

const OrderStyled = styled.div`
    position: fixed;
    height: calc(100% - 80px);
    top: 80px;
    left: 0;
    background-color: #fff;
    min-width: 380px;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
    padding: 20px;
    display: flex;
    flex-direction: column;
`;
const OrderTitle = styled.h2`
    text-align: center;
`;
const OrderContent = styled.div`
    flex-grow: 1;
`;
const OrderList = styled.ul`

`;
const Total = styled.div`
    display: flex;
    & span:first-child{
        flex-grow: 1;
    }
`;

export const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>
                ВАШ ЗАКАЗ
            </OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem/>
                    <OrderListItem/>
                    <OrderListItem/>
                </OrderList>
            </OrderContent>
            <Total>
                <span>Итого:</span>
                <span>5</span>
                <span>850 Р</span>
            </Total>
            <ButtonCheckout>
                Оформить
            </ButtonCheckout>
        </OrderStyled>
    );
};