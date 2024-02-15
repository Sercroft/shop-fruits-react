import Form from "./Generics/Form";
import styled from 'styled-components';

const Background = styled.div`
    position: absolute;
    background-color: #535C91;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Login(){
    return(
        <Background>
            <Form />
        </Background>
    );
}