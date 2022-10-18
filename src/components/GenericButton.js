import styled from "styled-components"

export default function GenericButton({text}){
    return(
        <Container>
            <button>{text}</button>
        </Container>
    )
}

const Container = styled.div`
    
    button{
        @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Righteous&display=swap');
         font-family: 'Lexend Deca', sans-serif;
        width: 303px;
        height: 45px;
        font-size: 21px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;
    }
`