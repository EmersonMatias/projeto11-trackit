import styled from "styled-components"
import logoheader from "../img/logoheader.png"
import { useContext } from "react"
import MyContext from "../context/MyContext"

export default function Header() {
    const {generalUserData} = useContext(MyContext)
    
    return (
        <Container>
            <img className="logo" src={logoheader} alt="Header Logo"/>

            <img className="imagemperfil" src={generalUserData.image} alt="Imagem de Perfil" data-identifier="avatar"></img>
        </Container>
    )
}

const Container = styled.header`
    background-color: #126BA5;
    height: 8vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    top: 0;
    
;
    
    .logo{
        height: 45%;
        margin-left: 30px;
    }
        
    .imagemperfil{
        height: 7vh;
        width: 7vh;
        object-position: center;
        object-fit: cover;
        border-radius: 100%;
        margin-right: 30px;
    }  
`