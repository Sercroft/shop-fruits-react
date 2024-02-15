import React from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
    width: 266px;
    height: 380px;
    padding: 16px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 30px;
    border: 2px solid #000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);

        > div > p {
            opacity: 1;
        }
    }
`

const ImageContainer = styled.div`
    padding: 10px;
`

const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 128px;
    height: 128px;
    border-radius: 20px;
`

const TitleCard = styled.h1`
    display: flex;
    font-family: "Nunito Sans", sans-serif;
    color: #141D39;
    justify-content: center;
    align-items: center;
` 

const SubTitleCard = styled.h2`
    display: flex;
    font-family: "Nunito Sans", sans-serif;
    color: #141D39;
    justify-content: center;
    align-items: center;
`

const BodyCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    margin-top: -12px;
`
const InfoCard = styled.p`
     font-family: "Nunito Sans", sans-serif;
     font-size: 16px;
     text-align: center;
     opacity: 0;
     transition: opacity 0.3s ease-out;
`

const ContainerStockLabel = styled.div`
    position: relative;
    width: 290px;
    margin-left: -18px;
    margin-top: -10px;
    padding: 4px;
    background-color: ${({ hasStock }) => hasStock ? '#80558C' : '#632626'};
    color: ${({ hasStock }) => hasStock ? '#000000' : '#ffffff'};
    border-radius: 0px 0px 15px 15px;
    border: 2px solid #000;
    text-align: center;
    opacity: 1;
`
const StockText = styled.label`
    font-size: 18px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 900;
    color: #F5EFE6;
` 

const fruitColors = {
    "Red"       : "#F6C6EA",
    "Yellow"    : "#FDFFAB",
    "Orange"    : "#f29a52",
    "Green"     : "#D5F0C1",
    "Brown"     : "#b7906f",
};

const CardView = ({ fruit }) => {
    const { name, price, quantity_available, price_per_kg, origin, color_fruit, image } = fruit;
    const hasStock = quantity_available > 0;
    const fruitColor = fruitColors[color_fruit] || "#000";


    return(
      <ContainerCard backgroundColor={fruitColor}>

        <ImageContainer>
            <Image src={image} alt={name} loading="lazy"></Image>
        </ImageContainer>

        <TitleCard>{name}</TitleCard>
        <SubTitleCard>$ {price}</SubTitleCard>

        <BodyCard>
            <InfoCard>
                <strong>{quantity_available} units</strong> <br />
                Price for KG: <strong>$ {price_per_kg}</strong> <br />
                From: {origin}
            </InfoCard>
        </BodyCard>

        <ContainerStockLabel hasStock={hasStock}>
            {hasStock ? 
                <StockText>Available</StockText> 
            : 
                <StockText>Sold out</StockText> 
            }
        </ContainerStockLabel>
      </ContainerCard>
    );
};
  
export default CardView;