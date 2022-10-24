import { useContext} from "react"
import styled from "styled-components"
import MyContext from "../../context/MyContext"

export default function DayWeekButton({day,id,newHabitData, setNewHabitData}) {
    const {inputState} = useContext(MyContext)
    const daySelected = newHabitData.days.includes(id)

    function selectDay(){
        const idIsInclueded = newHabitData.days.includes(id)
        const indexID = newHabitData.days.indexOf(id)
        

        if(idIsInclueded){
            newHabitData.days.splice(indexID,1)
            setNewHabitData({...newHabitData, days: [...newHabitData.days]})

        } else{
            setNewHabitData({...newHabitData, days: [...newHabitData.days, id]})
        }
    }

    return (
        <Container daySelected={daySelected}>
            <button onClick={selectDay} disabled={inputState} data-identifier="week-day-btn">{day}</button>
        </Container>
    )
}

const Container = styled.div`
    display: inline-block;


    button{
        background-color: ${props => props.daySelected === false ? "#FFFFFF" : "#CFCFCF"};
        width: 30px;
        height: 30px;
        border: 2px solid #D4D4D4;
        border-radius: 5px;
        color: ${props => props.daySelected === false ? "#D4D4D4" : "#FFFFFF"};
        margin-right: 10px;
    }

`