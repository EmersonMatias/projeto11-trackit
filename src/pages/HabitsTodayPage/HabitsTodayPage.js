import axios from "axios"
import dayjs from "dayjs"
import updateLocale from 'dayjs/plugin/updateLocale'
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MyContext from "../../context/MyContext"
import TodayHabit from "./TodayHabit"

export default function HabitsTodayPage() {
    const { config, todayHabitsData, setTodayHabitsData, newRequisition, isCheck, loginSucess } = useContext(MyContext)
    const navigate = useNavigate()

    function porcentageCompleted() {

        todayHabitsData.map((habit) => {
            if (habit.done === true) {
                isCheck.push(habit)
            }
        })
    
        if (isCheck.length === 0) {
            return "Nenhum hábito concluido ainda"
        } else {
            let porcentage = (100 * isCheck.length) / todayHabitsData.length

            return `${porcentage.toFixed(0)}% dos hábitos concluidos`
        }
    }

    dayjs.extend(updateLocale)

    dayjs.updateLocale('en', {
        weekdays: [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ]
    })
    let now = dayjs().format('dddd, DD/MM')

    useEffect(() => {axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
    .then((response) => (setTodayHabitsData(response.data)))
    .catch((error) => (error))

    if(!loginSucess){
        navigate('/')
    }
}, [newRequisition])


    return (
        <Container>
            <Header />

            <TodayDate isCheck={isCheck}>
                <div className="date" data-identifier="today-infos">
                    {now}
                </div>

                <div className="habitsDayCompleted" data-identifier="today-infos">
                    {porcentageCompleted()}
                </div>
            </TodayDate>

            <TodayHabitsList>
                {todayHabitsData.map((habit) => (<TodayHabit key={habit.id} name={habit.name} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} done={habit.done} id={habit.id} />))}

            </TodayHabitsList>


            <Footer />
        </Container>
    )

}

const Container = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Righteous&display=swap');
    font-family: 'Lexend Deca', sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;

`

const TodayDate = styled.div`
    width: 100vw;
    height: 10vh;
    margin-top: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;

    .date{
        color: #126BA5;
        font-size: 23px;
    }

    .habitsDayCompleted{
        color: ${props => props.isCheck.length === 0 ? "#BABABA" : "#8FC549"};
        font-size: 18px;
        margin-top: 5px;
    }
`

const TodayHabitsList = styled.div`
    width: 100vw;
    height: 74vh;
    overflow: scroll;
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
`
