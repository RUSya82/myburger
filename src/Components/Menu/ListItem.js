import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    margin-right: 30px;
    padding: 15px;
    font-size: 30px;
    color: white;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 50%;
        background-color: black;
    }
    &:hover{
        cursor: pointer;
        box-shadow: inset 0 0 50px rgba(0, 0, 0, 1);
        &:after{
            opacity: 0;
        }
    }
`;
export const ListItem = ({itemList, setOpenItem}) => (
    <List>
        {itemList.map(item => (
            <Item
                key={item.id}
                img={item.img}
                onClick={()=>setOpenItem(item)}
            >
                <p>{item.name}</p>
                <p>{item.price.toLocaleString('ru-RU',
                    {style:'currency', currency:'RUB'})}</p>
            </Item>
        ))}
    </List>
)