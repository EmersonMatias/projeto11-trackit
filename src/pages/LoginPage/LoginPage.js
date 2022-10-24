import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import FooterMessageGeneric from "../../components/FooterMessageGeneric"
import GenericButton from "../../components/GenericButton"
import GenericInput from "../../components/GenericInput"
import Logo from "../../components/Logo"
import MyContext from "../../context/MyContext"
import buttonTextLogin from "./buttonTextLogin"







export default function LoginPage() {
    const [userLoginData, setUserLoginData] = useState({ email: "", password: "" })
    const { URL_REQUISITON_DAFULT, setGeneralUserData, setInputState, inputState,setLoginSucess} = useContext(MyContext)
    const navigate = useNavigate()

    function userLogin(e) {
        e.preventDefault()

        setInputState(true)

        function sucessLogin(response){
            setGeneralUserData(response.data)
            setInputState(false)
            setLoginSucess(true)
            navigate('/hoje')
        }

        function errorLogin(error){
            alert(error.response.data.message)
            setInputState(false)
        }

        axios.post(`${URL_REQUISITON_DAFULT}/login`, userLoginData)
            .then((response) => (sucessLogin(response)))
            .catch((error) => (errorLogin(error)))
    }


    return (
        <Container>
            <Logo />

            <form onSubmit={userLogin}>
                <GenericInput text="email" type="email" onchange={(e) => (setUserLoginData({ ...userLoginData, email: e.target.value }))} dataIdentifier={"input-email"} />
                <GenericInput text="senha" type="password" onchange={(e) => (setUserLoginData({...userLoginData, password: e.target.value}))} dataIdentifier={"input-password"}/>

                <GenericButton text={buttonTextLogin(inputState)} dataIdentifier={"login-btn"}/>

            </form>

            <Link to="/cadastro">
                <FooterMessageGeneric text="Não tem uma conta? Cadastre-se!" dataIdentifier={"sign-up-action"}/>
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