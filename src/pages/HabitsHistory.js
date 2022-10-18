import styled from "styled-components"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function HabitsHistory(){
    return(
        <Container>
            <Header/>

            <Footer/>
        </Container>

    )

}

const Container = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-color: blueviolet;
`