import styled from "styled-components"
import { AiFillCheckSquare } from "react-icons/ai";
import { IconContext } from "react-icons"
import { useContext } from "react";
import axios from "axios";
import MyContext from "../../context/MyContext";




export default function TodayHabit({ name, currentSequence, highestSequence, done, id }) {
    const { config, newRequisition, setNewRequisition } = useContext(MyContext)

    function checkHabit() {

        function sucessCheck(response) {
            console.log(response)
            setNewRequisition(!newRequisition)
        }


        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
            .then((response) => (sucessCheck(response)))
            .catch((error) => (console.log(error)))
    }


    function uncheckHabit(response){
        function sucessUncheck (){
            console.log(response.data)
            setNewRequisition(!newRequisition)
        }

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
            .then((response) => (sucessUncheck(response)))
            .catch((error) => (console.log(error)))
    }


    return (
        <Container>
            <div className="leftSide">
                <div className="habitTitle" data-identifier="today-infos">
                    {name}
                    <p>
                        Sequência atual: {currentSequence} dias <br />
                        Seu recorde: {highestSequence} dias
                    </p>
                </div>
            </div>

            <IconContext.Provider value={{ color: `${done ? "#8FC549" : "#EBEBEB"}` }}>
                <div className="rightSide">
                    <button onClick={!done? checkHabit: uncheckHabit} data-identifier="done-habit-btn">{AiFillCheckSquare()}</button>
                </div>
            </IconContext.Provider>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    width: 90vw;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 10px ;
    margin-bottom: 2vh;

    .habitTitle{
        font-size: 20px;
        color: #666666;

        p{
            font-size: 13px;
            margin-top: 1vh;
        }
    }

    button{
        padding: 0;
        font-size: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: white;
        
      
    }

`