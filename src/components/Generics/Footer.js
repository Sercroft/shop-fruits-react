import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #dedede;
    color: black;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StoreName = styled.div`
    font-family: "Dancing Script", cursive;
    font-size: 60px;
    font-weight: 600;
    border: none;
    color: #070F2B;
`;

const StoreInfo = styled.div`
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: right;
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
