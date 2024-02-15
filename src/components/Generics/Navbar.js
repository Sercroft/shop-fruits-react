import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Search from './InputSearch';
import data from '../../data/dummyData';


const NavbarContainer = styled.nav`
    width: 98%;
    position: fixed;
    top: 0;
    z-index: 999;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0);
    border: 3px solid rgba(255, 255, 255, 0.18);
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: column;
        width: 90%;
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

const Navbar = ({ setFilteredFruits}) => {
    const location = useLocation();

    return(
        <NavbarContainer>
            <Link to='/'>
                <HomeButton>
                    Shop Fruits
                </HomeButton>
            </Link>
            {location.pathname !== '/' ? (<Search fruits={data} setFilteredFruits={setFilteredFruits} />) : ('')}
        </NavbarContainer>
    );
}

export default Navbar;