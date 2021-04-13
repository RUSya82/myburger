import React from 'react';
import styled from 'styled-components';
import {ListItem} from "./ListItem";
import dbMenu from "./DBMenu";


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;
const MenuBanner = styled.div`
    background-image: url('/menu/banner.png');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 210px;
`;

export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <MenuBanner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
);