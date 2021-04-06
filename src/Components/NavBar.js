import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;
const Logo = styled.div`
    display: flex;
`;
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 5px;
`;
const ImgLogo = styled.img`
    width: 50px;
`;
const LoginButton = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 10px;
    outline: none;
    &:hover {
        outline: none;
        background-color: #e4f3e8;
    }
    &:active {
        position: relative;
        top: 1px;
        left: 1px;
        outline: none;
        background-color: white;
    }
`;
export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>My Burger</H1>
        </Logo>
        <LoginButton>Sigh in</LoginButton>
    </NavBarStyled>
);