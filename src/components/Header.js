import styled from "styled-components"
import logoheader from "../img/logoheader.png"
import imgperfil from "../img/imagem.jpg"

export default function Header() {
    return (
        <Container>
            <img className="logo" src={logoheader} alt="Header Logo"/>

            <img className="imagemperfil" src={imgperfil} alt="Imagem de Perfil"></img>
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