import styled from "styled-components"
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import axios from "axios";

export default function MyHabit({ daysWeek, name, id, days }) {
    const { config, newRequisition, setNewRequisition } = useContext(MyContext)

    function deleteHabit() {
        function sucessDelete() {
            setNewRequisition(!newRequisition)
        }

        if (window.confirm("Tem certeza que deseja apagar esse hábito?")) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
                .then(() => (sucessDelete()))
                .catch((error) => (alert(error)))
        }
    }

    return (
        <Container>
            <div className="myHabitName">
                <p data-identifier="habit-name">{name}</p>
                <button onClick={deleteHabit} data-identifier="delete-habit-btn">{BsTrash()}</button>
            </div>

            <div className="dayWeekHabitContainer">
                {daysWeek.map((obj) => (<div key={obj.id} className={days.includes(obj.id) ? "dayWeekHabit" : "dayWeekHabit2"}>{obj.day}</div>))}
            </div>
        </Container>
    )
}

const Container = styled.div`
            width: 90%;
            background-color: #FFFFFF;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;

            .myHabitName{
                font-size: 20px;
                color: #666666;
                display: flex;
                justify-content: space-between;
                padding-right: 10px;

                button{
                    border: none;
                    background-color: #FFFFFF;
                    font-size: 20px;
                }
            }

            .dayWeekHabitContainer{
                display: flex;
            

                .dayWeekHabit{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color:#CFCFCF;
                    width: 30px;
                    height: 30px;
                    border: 2px solid #D4D4D4;
                    border-radius: 5px;
                    color:  "#FFFFFF";
                    margin-right: 10px;
                }

                .dayWeekHabit2{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color:white;
                    width: 30px;
                    height: 30px;
                    border: 2px solid #D4D4D4;
                    border-radius: 5px;
                    color:  "#FFFFFF";
                    margin-right: 10px;
                }
             }     
`

