import { Link } from "react-router-dom"
import styled from "styled-components"
import FooterMessageGeneric from "../components/FooterMessageGeneric"
import GenericButton from "../components/GenericButton"
import GenericInput from "../components/GenericInput"
import Logo from "../components/Logo"



export default function LoginPage() {
    return (
        <Container>
            <Logo />

            <form>
                <GenericInput text="email" type="email" />
                <GenericInput text="senha" type="password" />

                <GenericButton text="Entrar" />

            </form>

            <Link to="/cadastro">
                <FooterMessageGeneric text="Não tem uma conta? Cadastre-se!" />
            </Link>



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