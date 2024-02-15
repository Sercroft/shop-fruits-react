import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0);
    border: 3px solid rgba(255, 255, 255, 0.18);
    color: black;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: column;
        height: 10%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const StoreName = styled.div`
    font-family: "Dancing Script", cursive;
    font-size: 60px;
    font-weight: 600;
    border: none;
    color: #070F2B;

    @media(max-width: 768px){
        font-size: 30px;
    }
`;

const StoreInfo = styled.div`
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: right;
    margin-right: 40px;

    @media(max-width: 768px){
        text-align: center;
        font-size: 14px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <StoreName>Shop fruits</StoreName>
            <StoreInfo>
                Dirección: Calle Imaginaria 123, Elden Ring, Colombia<br />
                Teléfono: 123-456-7890<br />
                Correo electrónico: info@tutienda.com
            </StoreInfo>
        </FooterContainer>
    );
}

export default Footer;
