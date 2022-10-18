import styled from "styled-components"
import FooterMessageGeneric from "../components/FooterMessageGeneric"
import GenericButton from "../components/GenericButton"
import GenericInput from "../components/GenericInput"
import Logo from "../components/Logo"



export default function LoginPage() {
    return (
        <Container>
            <Logo />

            <GenericInput text="email" />
            <GenericInput text="senha" />

            <GenericButton text="Entrar" />

            <FooterMessageGeneric text="Não tem uma conta? Cadastre-se!" />


        </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`