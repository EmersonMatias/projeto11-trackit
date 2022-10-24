import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MyContext from "../context/MyContext"



export default function HabitsHistory() {
    const { isCheck, todayHabitsData, loginSucess} = useContext(MyContext)
    const navigate = useNavigate()

    useEffect(() => {
        todayHabitsData.map((habit) => {
            if (habit.done === true) {
                isCheck.push(habit)
            }
        })

        if(!loginSucess){
            navigate('/')
        }

    }, [])

    return (
        <Container>
            <Header />

            <div className="historyContainer">
                <div className="historyTitle">
                    Histórico
                </div>
                <div className="historyMessage">
                    Em breve, você poderá ver o  histórico dos seus hábitos aqui!
                </div>
            </div>

            <Footer />
        </Container>

    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 8vh;
    background-color: #E5E5E5;
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Righteous&display=swap');
    font-family: 'Lexend Deca', sans-serif;
    overflow: hidden;

    .historyContainer{
        margin-top: 2vh;
        padding-left: 20px;
    }
    
    .historyTitle{
        font-size: 23px;
        color: #126BA5;
    }

    .historyMessage{
        font-size: 18px;
        color: #666666;
        margin-top: 2vh;
    }
`