    import React from 'react';
    import styled from 'styled-components';
    import CardView from './Generics/Card';

    const Container = styled.div`
        margin: 80px 0px 120px 0px;
        display: grid;
        width: 100%;
        flex-direction: column;
        grid-template-columns: repeat(auto-fill, minmax(50vh, 1fr));
        grid-auto-rows: minmax(25vh, auto);
        gap: 30px;
        justify-content: center;
        align-items: center;    
        justify-items: center;

        @media (max-width: 900px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr;
            margin: 130px 0px 160px 0px;
        }
    `

    const Home = ({ filteredFruits }) => {

        return(
            <Container> 
                {filteredFruits.map((fruit, index) => (
                    <CardView key={index} fruit={fruit} />
                ))}
            </Container>
        );
    }

    export default Home;