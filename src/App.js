import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import HabitsTodayPage from "./pages/HabitsTodayPage/HabitsTodayPage"
import HabitsHistory from "./pages/HabitsHistory"
import MyContext from "./context/MyContext"
import { useState } from "react"

export default function App() {
    const [inputState, setInputState] = useState(false)
    const [generalUserData, setGeneralUserData] = useState({})
    const [loginSucess, setLoginSucess] = useState(false)
    const [myHabitsList, setMyHabitsList] = useState([])
    const [todayHabitsData, setTodayHabitsData] = useState([])
    const [newRequisition , setNewRequisition] = useState(true)
    const isCheck = []
    const URL_REQUISITON_DAFULT = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth"
    const config = { headers: { Authorization: `Bearer ${generalUserData.token}` } }
   

    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

                <MyContext.Provider value={{ inputState, setInputState, URL_REQUISITON_DAFULT, generalUserData, setGeneralUserData, config, myHabitsList, setMyHabitsList, todayHabitsData, setTodayHabitsData, newRequisition, setNewRequisition, isCheck, loginSucess, setLoginSucess}}>
                    <Routes>
                        <Route path='/' element={<LoginPage />} />

                        <Route path='/cadastro' element={<SignupPage />} />

                        <Route path='/habitos' element={<HabitsPage />} />

                        <Route path='/hoje' element={<HabitsTodayPage />} />

                        <Route path='/historico' element={<HabitsHistory />} />
                    </Routes>
                </MyContext.Provider>
            </BrowserRouter>


        </>
    )

}