import Form from "./Generics/Form";
import styled from 'styled-components';

const Background = styled.div`
    position: absolute;
    background-color: #c0dab9;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    
`

export default function Login(){
    return(
        <Background>
            <ContentWrapper>
            </ContentWrapper>
            <Form />
        </Background>
    );
}
