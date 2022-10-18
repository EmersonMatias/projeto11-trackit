import styled from "styled-components"
import FooterMessageGeneric from "../components/FooterMessageGeneric"
import GenericButton from "../components/GenericButton"
import GenericInput from "../components/GenericInput"
import Logo from "../components/Logo"



export default function SignupPage() {
    return (
        <Container>
            <Logo></Logo>

            <GenericInput text="email"/>
            <GenericInput text="senha"/>
            <GenericInput text="nome"/>
            <GenericInput text="foto"/>
            
            <GenericButton text="Cadastrar"/>

            <FooterMessageGeneric text="Já tem uma conta? Faça login!"/>

        </Container>
    )
}


const Container = styled.div`
    background-color: #FFFFFF;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;



`