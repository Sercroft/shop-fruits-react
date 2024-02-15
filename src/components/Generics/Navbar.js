import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Search from './InputSearch';
import data from '../../data/dummyData';


const NavbarContainer = styled.nav`
    background-color: #dedede;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`;

const HomeButton = styled.button`
    font-family: "Dancing Script", cursive;
    font-size: 28px;
    font-weight: 600;
    background-color: transparent;
    border: none;
    color: #070F2B;
    cursor: pointer;

    &:hover {
        font-weight: 900;
    }
`

const ShopButton = styled.button`
    font-family: "Nunito Sans", sans-serif;
    background-color: transparent;
    border: none;
    color: #070F2B;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`;

const Navbar = ({ setFilteredFruits}) => {
    const location = useLocation();

    return(
        <NavbarContainer>
            <Link to='/'>
                <HomeButton>
                    Shop Fruits
                </HomeButton>
            </Link>
            {location.pathname === '/' ? ( 
                <ShopButton>Shop</ShopButton>
            ) : (
                <Search fruits={data} setFilteredFruits={setFilteredFruits} />
            )}
        </NavbarContainer>
    );
}

export default Navbar;