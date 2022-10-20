import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import FooterMessageGeneric from "../../components/FooterMessageGeneric"
import GenericButton from "../../components/GenericButton"
import GenericInput from "../../components/GenericInput"
import Logo from "../../components/Logo"
import buttonText from "./buttonText"
import MyContext from "../../context/MyContext"
import signUp from "./signUp"
import { useNavigate } from "react-router-dom"

export default function SignupPage() {
    const [dataSignUp, setDataSignUp] = useState({ email: "", name: "", image: "", password: "" })
    const { inputState, setInputState } = useContext(MyContext)
    const navigate = useNavigate()

    return (
        <Container>
            <Logo />

            <form onSubmit={(e) => signUp(e, setInputState, setDataSignUp, dataSignUp, navigate)}>
                <GenericInput
                    text="email"
                    type="email"
                    onchange={(e) => (setDataSignUp({ ...dataSignUp, email: e.target.value }))}
                    value={dataSignUp.email}
                />
                <GenericInput
                    text="senha"
                    type="password"
                    onchange={(e) => (setDataSignUp({ ...dataSignUp, password: e.target.value }))}
                    value={dataSignUp.password}
                />
                <GenericInput
                    text="nome"
                    type="text"
                    onchange={(e) => (setDataSignUp({ ...dataSignUp, name: e.target.value }))}
                    value={dataSignUp.name}
                />
                <GenericInput
                    text="foto"
                    type="url"
                    onchange={(e) => (setDataSignUp({ ...dataSignUp, image: e.target.value }))}
                    value={dataSignUp.image}
                />
                <GenericButton text={buttonText(inputState)} />
            </form>

            <Link to="/">
                <FooterMessageGeneric text="Já tem uma conta? Faça login!" />
            </Link>

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