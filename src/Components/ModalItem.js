import React from 'react';
import styled from 'styled-components';

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
    margin-bottom: 20px;
    background-image: url(${({img}) => img});
`;
const Description = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    font-size: 30px;
    font-family: Pacifico;
`;
const ButtonModal = styled.button`
    width: 250px;
    height: 65px;
    background-color: #299B01;
    font-size: 21px;
    color: #fff;
`;
const CheckboxField = styled.div`
    flex: 1 0 auto;
`;

export const ModalItem = ({openItem, setOpenItem}) => {
    function closeModal(e) {
        if(e.target.id === "overlay"){
            setOpenItem(null);
        }
    }
    if(!openItem){
        return null;
    }
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Description>
                    <h3>{openItem.name}</h3>
                    <span>{openItem.price.toLocaleString('ru-RU',
                        {style:'currency', currency:'RUB'})}</span>
                </Description>
                <CheckboxField/>
                <ButtonModal>
                    Добавить
                </ButtonModal>
            </Modal>
        </Overlay>
    );
}