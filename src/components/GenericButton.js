import { useContext } from "react"
import styled from "styled-components"
import MyContext from "../context/MyContext"



export default function GenericButton({text}){
    const {inputState} = useContext(MyContext)
    
    return(
        <Container inputState={inputState}>
            <button disabled={inputState}>{text}</button>
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
        cursor: pointer;
        opacity: ${props => props.inputState === true ? 0.7 : 1};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2vh;
    }
`