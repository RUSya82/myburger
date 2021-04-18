import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout} from "../Style/ButtonCheckout";

const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
    width: 600px;
    height: 600px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 43px;
`;
const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${({img}) => img});
`;
const Description = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    font-size: 30px;
    font-family: Pacifico;
`;

const CheckboxField = styled.div`
    flex: 1 0 auto;
`;

const Content = styled.div`
    flex: 1 0  calc(100% - 200px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {
    const closeModal = (e) => {
        if(e.target.id === "overlay"){
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <Description>
                        <h3>{openItem.name}</h3>
                        <span>{openItem.price.toLocaleString('ru-RU',
                            {style:'currency', currency:'RUB'})}</span>
                    </Description>
                    <CheckboxField/>
                    <ButtonCheckout onClick={addToOrder}>
                        Добавить
                    </ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    );
}