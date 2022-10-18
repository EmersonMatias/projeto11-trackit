import styled from "styled-components"

export default function GenericInput({text}){
    return(
       <Container>
            <input placeholder={text}/>
       </Container>
    )
}

const Container = styled.div`
    input{
      
        width: 303px;
        height: 45px;
        font-size: 20px;
        border-radius: 5px;
        border: solid 1px #D4D4D4;
        margin-bottom: 1vh;
        
        ::placeholder{
            @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Righteous&display=swap');
            font-family: 'Lexend Deca', sans-serif;
            
            color: #DBDBDB;
        }
    }

`


