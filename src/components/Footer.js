import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/MyContext";

export default function Footer() {
    const {isCheck, todayHabitsData} = useContext(MyContext)
    let porcentage = (100*isCheck.length)/todayHabitsData.length

    return (
        <Container>
            <LinkStyled to="/habitos">
                <p data-identifier="habit-page-action">Hábitos</p>
            </LinkStyled>

            <div>
                <LinkStyled to="/hoje">
                    <CircularProgressbar
                        value={porcentage}
                        text={`Hoje`}
                        width={50}
                        heigth={"50px"}
                        strokeWidth={8}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: "25px",
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </LinkStyled>
            </div>

            <LinkStyled to="/historico">
                <p data-identifier="historic-page-action">Histórico</p>
            </LinkStyled>
        </Container>
    )
}

const Container = styled.footer`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Righteous&display=swap');
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    background-color: #FFFFFF;
    width: 100vw;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;

    p{
        font-size: 18px;
        color: #52B6FF;
        font-weight: 400;
    }

    div{
        width: 90px;
        height: 90px;
        position: relative;
        bottom: 30px;
        
    }
`

const LinkStyled = styled(Link)`
    text-decoration: none;
`

