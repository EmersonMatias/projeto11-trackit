import { useContext } from "react"
import styled from "styled-components"
import MyContext from "../context/MyContext"


export default function GenericInput({text, type, onchange, value}){
    const {inputState} = useContext(MyContext)
   
    return(
       <Container>
            <input placeholder={text} type={type} onChange={onchange} required disabled={inputState} value={value}/>
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
            padding-left: 10px;
        }
    }

`


