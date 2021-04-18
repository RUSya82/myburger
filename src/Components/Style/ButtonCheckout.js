import styled from 'styled-components';


export const ButtonCheckout = styled.button`
    display: block;
    width: 250px;
    height: 65px;
    background-color: #299B01;
    font-size: 21px;
    color: #fff;
    font-size: inherit;
    font-family: inherit;
    border-color: transparent;
    cursor: pointer;
    margin: 0 auto;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover{
        border-color: #299B01;
        color: #299B01;
        background-color: #fff;
    }
`;