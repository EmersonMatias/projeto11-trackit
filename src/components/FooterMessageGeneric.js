import styled from "styled-components"

export default function FooterMessageGeneric({text}){
    return(
        <Container>
            <p>{text}</p>
        </Container>
    )
}

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Righteous&display=swap');
    font-family: 'Lexend Deca', sans-serif;
    
    margin-top: 2vh;
    
    p{
        font-size: 20px;
        color: #52B6FF;
        text-decoration: underline;
    }

`