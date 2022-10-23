import styled from "styled-components"
import { BsTrash } from "react-icons/bs";



export default function MyHabit({daysWeek, name,id}) {
    
  
    
    return (
        <Container>
            <div className="myHabitName">
                <p>{name}</p>
                <button>{BsTrash()}</button>
            </div>

            <div className="dayWeekHabitContainer">
                {daysWeek.map((obj) => (<div key={obj.id} className="dayWeekHabit">{obj.day}</div>))}
            </div>
        </Container>
    )
}

const Container = styled.div`
            width: 95%;
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
                background-color: pink;

                .dayWeekHabit{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color:"#CFCFCF";
                    width: 30px;
                    height: 30px;
                    border: 2px solid #D4D4D4;
                    border-radius: 5px;
                    color:  "#FFFFFF";
                    margin-right: 10px;
                }
             }
        

        

`

