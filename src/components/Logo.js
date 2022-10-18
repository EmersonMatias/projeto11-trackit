import styled from "styled-components"
import logo from "../img/logo.png"

export default function Logo(){
    return(
        <Container>
            <img src={logo} alt="logo"></img>
        </Container>
            
     
    )
}

const Container = styled.figure`
    width: 25vh;
    height: 25vh;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    margin-bottom: 3vh;
    background-color: aliceblue;
`